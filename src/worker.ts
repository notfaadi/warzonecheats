/**
 * Cloudflare Worker — host canonicalization and path 301s before static assets.
 * Canonical site: https://warzonecheats.co (matches brand.url)
 *
 * Locale cannibal + Tarkov legacy 301s live here (Workers _redirects cap is 100).
 *
 * Requires DNS: CNAME `www` → `warzonecheats.co` (proxied) AND
 * Workers custom domain `www.warzonecheats.co` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'warzonecheats.co';

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set([
	'tarkovcheats.org',
	'www.tarkovcheats.org',
	'besttarkovcheats.com',
	'www.besttarkovcheats.com',
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

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const target = canonicalUrl(request);
		if (target) {
			const destPath = pathRedirect(target.pathname);
			if (destPath) target.pathname = destPath;
			return Response.redirect(target.toString(), 301);
		}

		const destPath = pathRedirect(url.pathname);
		if (destPath) {
			return Response.redirect(new URL(destPath + url.search, url.origin).toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
