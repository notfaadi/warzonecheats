/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://warzonecheats.co (matches brand.url)
 *
 * Requires DNS: CNAME `www` → `warzonecheats.co` (proxied) AND
 * Workers custom domain `www.warzonecheats.co` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
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
		const target = canonicalUrl(request);
		if (target) {
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
