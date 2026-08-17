/**
 * Cloudflare Worker — host canonicalization and path 301s before static assets.
 * Canonical site: https://warzonecheats.co (matches brand.url)
 *
 * Locale cannibal + Tarkov legacy 301s live here (Workers _redirects cap is 100).
 *
 * www MUST be a Workers custom domain (see wrangler.toml [[routes]]).
 * Apex-only binding never sees https://www.warzonecheats.co — Seobility then
 * flags “uses both www and non-www” (or www 503 / NXDOMAIN).
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';
import { applySecurityHeaders } from './lib/security-headers.js';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'warzonecheats.co';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;
const WWW_HOST = `www.${CANONICAL_HOST}`;

/** Any of these hosts 301 → https://warzonecheats.co (path + query preserved). */
const REDIRECT_HOSTS = new Set([
	WWW_HOST,
	'tarkovcheats.org',
	'www.tarkovcheats.org',
	'besttarkovcheats.com',
	'www.besttarkovcheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

/** Exact sources only — slash variants are added below. */
const PATH_REDIRECTS_EXACT: Record<string, string> = {
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap-0.xml': '/sitemap.xml',
	'/tarkov-cheats': '/warzone-cheats/',
	'/escape-from-tarkov-cheats': '/warzone-cheats/',
	'/tarkov-esp': '/warzone-esp/',
	'/tarkov-aimbot': '/warzone-aimbot/',
	'/tarkov-esp-hack': '/warzone-esp/',
	'/tarkov-aimbot-hack': '/warzone-aimbot/',
	'/best-tarkov-cheats': '/warzone-cheats/',
	'/tarkov-cheats-2026': '/warzone-cheats/',
	'/undetected-tarkov-cheats': '/warzone-cheats/',
	'/tarkov-mod-menu': '/warzone-cheats/',
	'/tarkov-unlock-all': '/warzone-cheats/',
	'/tarkov-soft-aim': '/warzone-aimbot/',
	'/tarkov-wallhack': '/warzone-esp/',
	'/tarkov-radar-hack': '/warzone-radar-hack/',
	'/tarkov-cheat-download': '/setup/',
	'/battleye-bypass': '/updates/',
	'/warzone-esp-hack': '/warzone-esp/',
	'/warzone-aimbot-hack': '/warzone-aimbot/',
	'/best-warzone-cheats': '/warzone-cheats/',
	'/warzone-cheats-2026': '/warzone-cheats/',
	'/undetected-warzone-cheats': '/warzone-cheats/',
	'/warzone-mod-menu': '/warzone-cheats/',
	'/warzone-unlock-all': '/warzone-cheats/',
	'/warzone-soft-aim': '/warzone-aimbot/',
	'/warzone-wallhack': '/warzone-esp/',
	'/warzone-cheat-download': '/setup/',
	'/ricochet-bypass': '/updates/',
	'/warzone-hacks': '/warzone-cheats/',
	'/fortnite-aimbot': '/warzone-aimbot/',
	'/fortnite-esp': '/warzone-esp/',
	'/fortnite-hacks': '/warzone-cheats/',
	'/eac-bypass': '/updates/',
	'/eac-bypass-fortnite': '/updates/',
	'/reviews/tarkov-radar-hack-review-vanlifefn': '/reviews/warzone-radar-hack-review-vanlifewz/',
	'/reviews/tarkov-radar-hack-review-vanlifeeft': '/reviews/warzone-radar-hack-review-vanlifewz/',
	'/reviews/warzone-radar-hack-review-vanlifeeft': '/reviews/warzone-radar-hack-review-vanlifewz/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99':
		'/reviews/warzone-soft-aim-review-ctrl-player99/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/warzone-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/warzone-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/warzone-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/warzone-Resurgence-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/warzone-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/warzone-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/warzone-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/warzone-warmup-maps-ranked/',
	'/reviews/warzone-esp-zero-build-review-buildsr4k': '/reviews/warzone-esp-Resurgence-review-buildsr4k/',
};

const PATH_REDIRECTS: Record<string, string> = (() => {
	const out: Record<string, string> = {};
	for (const [from, to] of Object.entries(PATH_REDIRECTS_EXACT)) {
		out[from] = to;
		out[from.endsWith('/') ? from.slice(0, -1) : `${from}/`] = to;
	}
	return out;
})();

function normalizeHost(raw: string): string {
	return raw.split(':')[0].toLowerCase().replace(/\.$/, '');
}

function requestHosts(request: Request): string[] {
	const url = new URL(request.url);
	const header = request.headers.get('host') || '';
	return [...new Set([normalizeHost(url.hostname), normalizeHost(header)].filter(Boolean))];
}

function clientProtocol(request: Request): string {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function pathRedirect(pathname: string): string | null {
	const exact = PATH_REDIRECTS[pathname] ?? (CANNIBAL_REDIRECTS as Record<string, string>)[pathname];
	if (exact) return exact;

	const bare = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
	if (
		bare.startsWith('/tarkov-') ||
		bare === '/battleye-bypass' ||
		bare === '/best-tarkov-cheats' ||
		bare === '/undetected-tarkov-cheats' ||
		bare === '/escape-from-tarkov-cheats'
	) {
		return '/warzone-cheats/';
	}

	return null;
}

function needsHostRedirect(hosts: string[]): boolean {
	return hosts.some((host) => host === WWW_HOST || REDIRECT_HOSTS.has(host));
}

function needsHttpsRedirect(hosts: string[], proto: string): boolean {
	if (proto !== 'http') return false;
	return hosts.some((host) => host === CANONICAL_HOST || host === WWW_HOST || REDIRECT_HOSTS.has(host));
}

/** Always https://warzonecheats.co + path + query (never leave www or http in Location). */
function canonicalLocation(pathname: string, search: string): string {
	const destPath = pathRedirect(pathname) ?? pathname;
	return new URL(destPath + search, CANONICAL_ORIGIN).toString();
}

function redirect301(location: string): Response {
	const headers = new Headers({ Location: location });
	applySecurityHeaders(headers);
	headers.set('Cache-Control', 'public, max-age=3600');
	headers.set('CDN-Cache-Control', 'public, max-age=3600');
	headers.set('Cloudflare-CDN-Cache-Control', 'public, max-age=3600');
	return new Response(null, { status: 301, headers });
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const hosts = requestHosts(request);
		const proto = clientProtocol(request);

		if (needsHostRedirect(hosts) || needsHttpsRedirect(hosts, proto)) {
			return redirect301(canonicalLocation(url.pathname, url.search));
		}

		const destPath = pathRedirect(url.pathname);
		if (destPath) {
			return redirect301(new URL(destPath + url.search, CANONICAL_ORIGIN).toString());
		}

		return env.ASSETS.fetch(request);
	},
};
