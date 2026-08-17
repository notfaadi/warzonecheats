import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://warzonecheats.co';
const APEX_HOST = 'warzonecheats.co';
const WWW_HOST = 'www.warzonecheats.co';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
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

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	// Legacy Tarkov URLs → Warzone landings
	'/tarkov-cheats': '/warzone-cheats/',
	'/tarkov-cheats/': '/warzone-cheats/',
	'/escape-from-tarkov-cheats': '/warzone-cheats/',
	'/escape-from-tarkov-cheats/': '/warzone-cheats/',
	'/tarkov-esp': '/warzone-esp/',
	'/tarkov-esp/': '/warzone-esp/',
	'/tarkov-aimbot': '/warzone-aimbot/',
	'/tarkov-aimbot/': '/warzone-aimbot/',
	'/tarkov-esp-hack': '/warzone-esp/',
	'/tarkov-esp-hack/': '/warzone-esp/',
	'/tarkov-aimbot-hack': '/warzone-aimbot/',
	'/tarkov-aimbot-hack/': '/warzone-aimbot/',
	'/best-tarkov-cheats': '/warzone-cheats/',
	'/best-tarkov-cheats/': '/warzone-cheats/',
	'/tarkov-cheats-2026': '/warzone-cheats/',
	'/tarkov-cheats-2026/': '/warzone-cheats/',
	'/undetected-tarkov-cheats': '/warzone-cheats/',
	'/undetected-tarkov-cheats/': '/warzone-cheats/',
	'/tarkov-mod-menu': '/warzone-cheats/',
	'/tarkov-mod-menu/': '/warzone-cheats/',
	'/tarkov-unlock-all': '/warzone-cheats/',
	'/tarkov-unlock-all/': '/warzone-cheats/',
	'/tarkov-soft-aim': '/warzone-aimbot/',
	'/tarkov-soft-aim/': '/warzone-aimbot/',
	'/tarkov-wallhack': '/warzone-esp/',
	'/tarkov-wallhack/': '/warzone-esp/',
	'/tarkov-radar-hack': '/warzone-radar-hack/',
	'/tarkov-radar-hack/': '/warzone-radar-hack/',
	'/tarkov-cheat-download': '/setup/',
	'/tarkov-cheat-download/': '/setup/',
	'/battleye-bypass': '/updates/',
	'/battleye-bypass/': '/updates/',
	// Cannibalization → canonical landings (money URL = /warzone-cheats/)
	'/warzone-esp-hack': '/warzone-esp/',
	'/warzone-esp-hack/': '/warzone-esp/',
	'/warzone-aimbot-hack': '/warzone-aimbot/',
	'/warzone-aimbot-hack/': '/warzone-aimbot/',
	'/best-warzone-cheats': '/warzone-cheats/',
	'/best-warzone-cheats/': '/warzone-cheats/',
	'/warzone-cheats-2026': '/warzone-cheats/',
	'/warzone-cheats-2026/': '/warzone-cheats/',
	'/undetected-warzone-cheats': '/warzone-cheats/',
	'/undetected-warzone-cheats/': '/warzone-cheats/',
	'/warzone-mod-menu': '/warzone-cheats/',
	'/warzone-mod-menu/': '/warzone-cheats/',
	'/warzone-unlock-all': '/warzone-cheats/',
	'/warzone-unlock-all/': '/warzone-cheats/',
	'/warzone-soft-aim': '/warzone-aimbot/',
	'/warzone-soft-aim/': '/warzone-aimbot/',
	'/warzone-wallhack': '/warzone-esp/',
	'/warzone-wallhack/': '/warzone-esp/',
	'/warzone-cheat-download': '/setup/',
	'/warzone-cheat-download/': '/setup/',
	'/ricochet-bypass': '/updates/',
	'/ricochet-bypass/': '/updates/',
	'/warzone-hacks': '/warzone-cheats/',
	'/warzone-hacks/': '/warzone-cheats/',
	'/fortnite-aimbot': '/warzone-aimbot/',
	'/fortnite-aimbot/': '/warzone-aimbot/',
	'/fortnite-esp': '/warzone-esp/',
	'/fortnite-esp/': '/warzone-esp/',
	'/fortnite-hacks': '/warzone-cheats/',
	'/fortnite-hacks/': '/warzone-cheats/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
	'/eac-bypass-fortnite': '/updates/',
	'/eac-bypass-fortnite/': '/updates/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/warzone-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/warzone-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/warzone-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/warzone-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/warzone-weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/warzone-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/warzone-Resurgence-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/warzone-Resurgence-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/warzone-tournament-meta-guide/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/warzone-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/warzone-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/warzone-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/warzone-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/warzone-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/warzone-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/warzone-warmup-maps-ranked/',
	'/reviews/warzone-esp-zero-build-review-buildsr4k': '/reviews/warzone-esp-Resurgence-review-buildsr4k/',
	'/reviews/warzone-esp-zero-build-review-buildsr4k/': '/reviews/warzone-esp-Resurgence-review-buildsr4k/',
	'/reviews/warzone-radar-hack-review-vanlifefn': '/reviews/warzone-radar-hack-review-vanlifeeft/',
	'/reviews/warzone-radar-hack-review-vanlifefn/': '/reviews/warzone-radar-hack-review-vanlifeeft/',
	'/reviews/warzone-radar-hack-review-vanlifewz': '/reviews/warzone-radar-hack-review-vanlifeeft/',
	'/reviews/warzone-radar-hack-review-vanlifewz/': '/reviews/warzone-radar-hack-review-vanlifeeft/',
	'/reviews/warzone-controller-soft-aim-review-ctrl-player99': '/reviews/warzone-soft-aim-review-ctrl-player99/',
	'/reviews/warzone-controller-soft-aim-review-ctrl-player99/': '/reviews/warzone-soft-aim-review-ctrl-player99/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
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

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const hostHeader = (context.request.headers.get('host') || url.hostname).split(':')[0];
	const host = hostHeader.toLowerCase().replace(/\.$/, '');
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
