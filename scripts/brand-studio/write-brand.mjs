/**
 * Brand Studio — shared validation + brand.ts writer.
 * Used only by the localhost Vite plugin during `astro dev`.
 */
import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const BRAND_PATH = path.join(ROOT, 'src/data/brand.ts');

const MAX_KEYWORDS = 30;
const SEO_KEYS = [
	'homeTitle',
	'homeDescription',
	'featuresTitle',
	'featuresDescription',
	'storeTitle',
	'storeDescription',
	'statusTitle',
	'statusDescription',
	'previewTitle',
	'previewDescription',
	'setupTitle',
	'setupDescription',
	'supportTitle',
	'supportDescription',
	'faqTitle',
	'faqDescription',
	'reviewsTitle',
	'reviewsDescription',
	'blogTitle',
	'blogDescription',
];
const COPY_KEYS = [
	'tagline',
	'summary',
	'heroLede',
	'blogLabel',
	'ctaBuy',
	'ctaBuyShort',
	'featuresIntro',
	'storeIntro',
	'statusIntro',
	'previewIntro',
	'setupIntro',
	'supportIntro',
	'faqIntro',
	'reviewsIntro',
	'chipEsp',
	'chipAim',
	'chipRadar',
	'chipUpdates',
	'navPreview',
	'navFeatures',
	'navStore',
	'navStatus',
	'navReviews',
];
const PATCHABLE_FIELDS = new Set([...SEO_KEYS, ...COPY_KEYS, 'name', 'shortName']);
const INLINE_EDITS_PATH = path.join(ROOT, 'src/data/inline-edits.json');
const SITEMAP_TEXT_KEYS = [
	'contentLastmod',
	'blogImageTitle',
	'blogImageCaption',
	'reviewsImageTitle',
	'reviewsImageCaption',
];

const DEFAULT_SITEMAP_IMAGES = [
	{
		src: '/images/tarkov-esp-player-tags.webp',
		title: '{primaryKeyword} ESP',
		caption: 'See players with {primaryKeyword}',
	},
	{
		src: '/images/tarkov-wallhack-skeleton.webp',
		title: '{primaryKeyword} wallhack',
		caption: 'See through walls with {primaryKeyword}',
	},
	{
		src: '/images/tarkov-aimbot-sniper.webp',
		title: '{primaryKeyword} aimbot',
		caption: 'Aimbot in {primaryKeyword}',
	},
	{
		src: '/images/tarkov-aimbot-skeleton.webp',
		title: '{primaryKeyword} aimbot view',
		caption: 'Aimbot bone view in {primaryKeyword}',
	},
	{
		src: '/images/tarkov-esp-radar.webp',
		title: '{primaryKeyword} radar',
		caption: 'Radar map in {primaryKeyword}',
	},
	{
		src: '/images/tarkov-cheats-combat.webp',
		title: '{primaryKeyword} in a fight',
		caption: 'Fight view with {primaryKeyword}',
	},
];

const sitemapDefaults = {
	contentLastmod: new Date().toISOString().slice(0, 10),
	blogImageTitle: '{brand} blog',
	blogImageCaption: 'Tips and updates for {primaryKeyword}',
	reviewsImageTitle: '{brand} reviews',
	reviewsImageCaption: 'What buyers say about {primaryKeyword}',
	images: DEFAULT_SITEMAP_IMAGES,
};

const themeDefaults = {
	accent: '#c026d3',
	bg: '#08090a',
	soft: '#e879f9',
	deep: '#86198f',
	hover: '#d946ef',
	panel: '#0f1011',
};

/** @param {unknown} value */
function hexColor(value, fallback = themeDefaults.accent) {
	if (typeof value !== 'string') return fallback;
	const t = value.trim();
	const m = t.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
	if (!m) return fallback;
	let h = m[1].toLowerCase();
	if (h.length === 3) h = h.split('').map((c) => c + c).join('');
	return `#${h}`;
}

/** Optional hex — returns null when missing/invalid so caller can auto-derive. */
function hexColorOptional(value) {
	if (typeof value !== 'string' || !value.trim()) return null;
	const t = value.trim();
	const m = t.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
	if (!m) return null;
	let h = m[1].toLowerCase();
	if (h.length === 3) h = h.split('').map((c) => c + c).join('');
	return `#${h}`;
}

function clamp01(n) {
	return Math.min(1, Math.max(0, n));
}

function hexToRgb(hex) {
	const h = hexColor(hex, '#000000');
	return {
		r: parseInt(h.slice(1, 3), 16),
		g: parseInt(h.slice(3, 5), 16),
		b: parseInt(h.slice(5, 7), 16),
	};
}

function rgbToHex(r, g, b) {
	const to = (n) =>
		Math.round(clamp01(n / 255) * 255)
			.toString(16)
			.padStart(2, '0');
	return `#${to(r)}${to(g)}${to(b)}`;
}

function hexToHsl(hex) {
	const { r, g, b } = hexToRgb(hex);
	const R = r / 255;
	const G = g / 255;
	const B = b / 255;
	const max = Math.max(R, G, B);
	const min = Math.min(R, G, B);
	const l = (max + min) / 2;
	if (max === min) return { h: 0, s: 0, l };
	const d = max - min;
	const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	let h = 0;
	if (max === R) h = ((G - B) / d + (G < B ? 6 : 0)) / 6;
	else if (max === G) h = ((B - R) / d + 2) / 6;
	else h = ((R - G) / d + 4) / 6;
	return { h, s, l };
}

function hslToHex(h, s, l) {
	const H = ((h % 1) + 1) % 1;
	const S = clamp01(s);
	const L = clamp01(l);
	if (S === 0) {
		const v = L * 255;
		return rgbToHex(v, v, v);
	}
	const hue2rgb = (p, q, t) => {
		let T = t;
		if (T < 0) T += 1;
		if (T > 1) T -= 1;
		if (T < 1 / 6) return p + (q - p) * 6 * T;
		if (T < 1 / 2) return q;
		if (T < 2 / 3) return p + (q - p) * (2 / 3 - T) * 6;
		return p;
	};
	const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
	const p = 2 * L - q;
	return rgbToHex(
		hue2rgb(p, q, H + 1 / 3) * 255,
		hue2rgb(p, q, H) * 255,
		hue2rgb(p, q, H - 1 / 3) * 255,
	);
}

function mixHex(a, b, t) {
	const A = hexToRgb(a);
	const B = hexToRgb(b);
	const u = clamp01(t);
	return rgbToHex(A.r + (B.r - A.r) * u, A.g + (B.g - A.g) * u, A.b + (B.b - A.b) * u);
}

function autoTones(accent, bg) {
	const a = hexToHsl(accent);
	return {
		soft: hslToHex(a.h, clamp01(Math.min(1, a.s * 0.85)), clamp01(Math.min(0.82, Math.max(0.55, a.l + 0.22)))),
		deep: hslToHex(a.h, clamp01(Math.min(1, a.s * 1.05)), clamp01(Math.max(0.22, Math.min(0.45, a.l - 0.18)))),
		hover: hslToHex(a.h, clamp01(Math.min(1, a.s * 0.95)), clamp01(Math.min(0.72, Math.max(0.45, a.l + 0.1)))),
		panel: mixHex(bg, '#ffffff', 0.035),
	};
}

function resolveTheme(b) {
	const accent = hexColor(b.themeAccent ?? b.accentColor ?? b.theme?.accent, themeDefaults.accent);
	const bg = hexColor(b.themeBg ?? b.bgColor ?? b.theme?.bg, themeDefaults.bg);
	const auto = autoTones(accent, bg);
	const themeObj = b.theme && typeof b.theme === 'object' ? b.theme : {};
	return {
		accent,
		bg,
		soft: hexColorOptional(b.themeSoft ?? themeObj.soft) || auto.soft,
		deep: hexColorOptional(b.themeDeep ?? themeObj.deep) || auto.deep,
		hover: hexColorOptional(b.themeHover ?? themeObj.hover) || auto.hover,
		panel: hexColorOptional(b.themePanel ?? themeObj.panel) || auto.panel,
	};
}

/** @param {string} value */
export function escapeTsSingle(value) {
	return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/** @param {unknown} value @param {number} max */
function str(value, max = 200) {
	if (typeof value !== 'string') return null;
	const t = value.trim();
	if (!t || t.length > max) return null;
	if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(t)) return null;
	return t;
}

/** Soft string — empty allowed → fallback */
function soft(value, fallback, max = 220) {
	if (value == null || value === '') return fallback;
	return str(value, max) ?? fallback;
}

/**
 * Persist user text permanently: keep their words.
 * Truncates with a warning instead of silently reverting to defaults.
 * @param {unknown} value
 * @param {string} fallback
 * @param {number} max
 * @param {string} field
 * @param {string[]} warnings
 */
function persistText(value, fallback, max, field, warnings) {
	if (value == null || value === '') return fallback;
	if (typeof value !== 'string') {
		warnings.push(`${field}: ignored non-text value`);
		return fallback;
	}
	let t = value.trim();
	if (!t) return fallback;
	if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(t)) {
		warnings.push(`${field}: removed control characters`);
		t = t.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
	}
	if (!t) return fallback;
	if (t.length > max) {
		warnings.push(`${field}: truncated to ${max} characters (was ${t.length})`);
		t = t.slice(0, max).trim();
	}
	return t;
}

function url(value) {
	const t = str(value, 500);
	if (!t) return null;
	try {
		const u = new URL(t);
		if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
		return u.href.replace(/\/$/, '');
	} catch {
		return null;
	}
}

function email(value) {
	const t = str(value, 120);
	if (!t || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return null;
	return t;
}

function price(value) {
	const n = typeof value === 'number' ? value : Number(value);
	if (!Number.isFinite(n) || n < 1 || n > 99999 || !Number.isInteger(n)) return null;
	return n;
}

function assetPath(value) {
	const t = str(value, 300);
	if (!t || !t.startsWith('/images/') || t.includes('..') || t.includes('\\')) return null;
	return t;
}

function lines(value, maxItems, maxLen) {
	let list = value;
	if (typeof list === 'string') {
		list = list
			.split(/\n|,/)
			.map((s) => s.trim())
			.filter(Boolean);
	}
	if (!Array.isArray(list) || list.length < 1 || list.length > maxItems) return null;
	const out = [];
	for (const item of list) {
		const k = str(item, maxLen);
		if (!k) return null;
		out.push(k);
	}
	return out;
}

/**
 * @param {unknown} body
 * @returns {{ ok: true, data: Record<string, unknown> } | { ok: false, error: string }}
 */
export function validateBrandPayload(body) {
	if (!body || typeof body !== 'object' || Array.isArray(body)) {
		return { ok: false, error: 'Invalid JSON body' };
	}
	/** @type {Record<string, unknown>} */
	const b = body;
	/** @type {string[]} */
	const warnings = [];

	const name = str(b.name, 80);
	const shortName = str(b.shortName ?? b.name, 80);
	const siteUrl = url(b.url);
	const supportEmail = email(b.supportEmail);
	const checkoutUrl = url(b.checkoutUrl);
	const game = str(b.game, 80);
	const antiCheat = str(b.antiCheat, 80);
	const primary = str(b.primaryKeyword ?? b.primary, 80);
	const locale = soft(b.locale, 'en', 12);
	const market = soft(b.market, 'Worldwide', 80);
	const currency = soft(b.currency, 'USD', 8);
	const monthly = price(b.monthlyPrice ?? b.monthly);
	const lifetime = price(b.lifetimePrice ?? b.lifetime);
	const monthlyLabel = soft(b.monthlyLabel, 'Monthly', 40);
	const lifetimeLabel = soft(b.lifetimeLabel, 'Lifetime', 40);
	const logo = assetPath(b.logo ?? '/images/tarkov-cheats-logo.webp');
	const logoRaster = assetPath(b.logoRaster ?? '/images/tarkov-cheats-logo.png');
	const defaultOgImage = assetPath(b.defaultOgImage ?? '/images/warzone-cheats-hero-1200w.webp');
	const heroImage = assetPath(b.heroImage ?? '/images/warzone-cheats-hero-1536w.webp');
	const logoAlt = soft(b.logoAlt, `${name || 'Brand'} logo`, 120);
	const logoW = price(b.logoRasterWidth ?? 512) ?? 512;
	const logoH = price(b.logoRasterHeight ?? 512) ?? 512;

	const keywords = lines(b.keywords, MAX_KEYWORDS, 80);
	if (!keywords) return { ok: false, error: `Provide 1–${MAX_KEYWORDS} keywords` };
	if (primary && !keywords.includes(primary)) keywords.unshift(primary);
	if (keywords.length > MAX_KEYWORDS) {
		warnings.push(`keywords: kept first ${MAX_KEYWORDS} only`);
		keywords.length = MAX_KEYWORDS;
	}

	const platforms = lines(b.platforms, 8, 60);
	if (!platforms) return { ok: false, error: 'Provide 1–8 platforms' };

	if (!name) return { ok: false, error: 'Brand name required' };
	if (!shortName) return { ok: false, error: 'Short name required' };
	if (!siteUrl) return { ok: false, error: 'Valid https URL required' };
	if (!supportEmail) return { ok: false, error: 'Valid support email required' };
	if (!checkoutUrl) return { ok: false, error: 'Valid checkout URL required' };
	if (!game) return { ok: false, error: 'Game required' };
	if (!antiCheat) return { ok: false, error: 'Anti-cheat required' };
	if (!primary) return { ok: false, error: 'Primary keyword required' };
	if (monthly == null) return { ok: false, error: 'Monthly price must be a whole number' };
	if (lifetime == null) return { ok: false, error: 'Lifetime price must be a whole number' };
	if (!logo || !logoRaster || !defaultOgImage || !heroImage) {
		return { ok: false, error: 'Image paths must start with /images/' };
	}

	try {
		const host = new URL(siteUrl).hostname.replace(/^www\./, '');
		const emailHost = String(supportEmail).split('@')[1] || '';
		if (emailHost && host && emailHost !== host && !emailHost.endsWith('.' + host)) {
			warnings.push(`support email domain (${emailHost}) differs from site host (${host})`);
		}
		const pk = primary.toLowerCase();
		const g = game.toLowerCase();
		if (pk && g && !pk.includes(g.split(/\s+/)[0]) && !g.includes(pk.split(/\s+/)[0])) {
			warnings.push('primary keyword and game name look mismatched — check SEO targeting');
		}
	} catch {
		/* ignore */
	}

	const g = game.toLowerCase();
	const seoDefaults = {
		homeTitle: '{brand} | Undetected {primaryKeyword}',
		homeDescription:
			'{primaryKeyword} for Windows PC — ESP, aimbot, and radar with {antiCheat} maintenance. Compare plans and buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, aimbot, radar, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription:
			'Quick preview of {brand} — ESP, aimbot, radar, and updates after {game} patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Real buyer reviews for {brand} — ESP, soft aim, radar, and patch updates on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
	};
	/** @type {Record<string, string>} */
	const seo = {};
	for (const key of SEO_KEYS) {
		// Match live seoDescription clamp (160) for descriptions; titles hard-cap 70 for SERP safety
		const max = key.endsWith('Title') ? 70 : 160;
		seo[key] = persistText(b[key] ?? b.seo?.[key], seoDefaults[key], max, key, warnings);
	}

	const copyDefaults = {
		tagline: 'Undetected {primaryKeyword} -- ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Hacks and cheats available -- 0% detection.',
		blogLabel: '{game} Intel',
		ctaBuy: 'Buy now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro: 'A quick look at {brand} -- ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from {brand} buyers -- ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	};
	/** @type {Record<string, string>} */
	const copy = {};
	for (const key of COPY_KEYS) {
		const max = key === 'summary' || key.endsWith('Intro') ? 320 : 160;
		copy[key] = persistText(b[key] ?? b.copy?.[key], copyDefaults[key], max, key, warnings);
	}

	const bumpLastmod = Boolean(b.bumpLastmodOnSave ?? b.sitemap?.bumpLastmodOnSave);
	const today = new Date().toISOString().slice(0, 10);
	let contentLastmod = soft(
		b.contentLastmod ?? b.sitemap?.contentLastmod,
		sitemapDefaults.contentLastmod,
		12,
	);
	if (bumpLastmod || !/^\d{4}-\d{2}-\d{2}$/.test(contentLastmod)) {
		contentLastmod = today;
	}

	/** @type {{ src: string, title: string, caption: string }[]} */
	let sitemapImages = [];
	const rawImages = b.sitemapImages ?? b.sitemap?.images;
	if (Array.isArray(rawImages) && rawImages.length) {
		for (const item of rawImages) {
			if (!item || typeof item !== 'object') continue;
			const src = assetPath(item.src);
			const title = soft(item.title, '', 160);
			const caption = soft(item.caption, '', 220);
			if (src && title && caption) sitemapImages.push({ src, title, caption });
		}
	}
	// Flat form fields: sitemapImage1Src / Title / Caption …
	if (!sitemapImages.length) {
		for (let i = 1; i <= 12; i++) {
			const src = assetPath(b[`sitemapImage${i}Src`]);
			const title = soft(b[`sitemapImage${i}Title`], '', 160);
			const caption = soft(b[`sitemapImage${i}Caption`], '', 220);
			if (src && title && caption) sitemapImages.push({ src, title, caption });
		}
	}
	if (!sitemapImages.length) sitemapImages = DEFAULT_SITEMAP_IMAGES.map((x) => ({ ...x }));

	const sitemap = {
		contentLastmod,
		blogImageTitle: soft(
			b.blogImageTitle ?? b.sitemap?.blogImageTitle,
			sitemapDefaults.blogImageTitle,
			160,
		),
		blogImageCaption: soft(
			b.blogImageCaption ?? b.sitemap?.blogImageCaption,
			sitemapDefaults.blogImageCaption,
			220,
		),
		reviewsImageTitle: soft(
			b.reviewsImageTitle ?? b.sitemap?.reviewsImageTitle,
			sitemapDefaults.reviewsImageTitle,
			160,
		),
		reviewsImageCaption: soft(
			b.reviewsImageCaption ?? b.sitemap?.reviewsImageCaption,
			sitemapDefaults.reviewsImageCaption,
			220,
		),
		images: sitemapImages,
	};

	const theme = resolveTheme(b);

	void g;

	return {
		ok: true,
		warnings,
		data: {
			name,
			shortName,
			url: siteUrl,
			locale,
			market,
			supportEmail,
			checkoutUrl,
			game,
			antiCheat,
			logo,
			logoRaster,
			logoRasterWidth: logoW,
			logoRasterHeight: logoH,
			logoAlt,
			defaultOgImage,
			heroImage,
			monthly,
			lifetime,
			monthlyLabel,
			lifetimeLabel,
			currency,
			platforms,
			primary,
			keywords: keywords.slice(0, MAX_KEYWORDS),
			seo,
			copy,
			sitemap,
			theme,
		},
	};
}

/** @param {Record<string, unknown>} data */
export function renderBrandTs(data) {
	const e = escapeTsSingle;
	const kw = data.keywords.map((k) => `\t\t\t'${e(k)}'`).join(',\n');
	const platforms = data.platforms.map((p) => `'${e(p)}'`).join(', ');

	const seoDefaults = {
		homeTitle: '{brand} | Undetected {primaryKeyword}',
		homeDescription:
			'{primaryKeyword} for Windows PC — ESP, aimbot, and radar with {antiCheat} maintenance. Compare plans and buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, aimbot, radar, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription:
			'Quick preview of {brand} — ESP, aimbot, radar, and updates after {game} patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Real buyer reviews for {brand} — ESP, soft aim, radar, and patch updates on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
	};
	const copyDefaults = {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Hacks and cheats available — 0% detection.',
		blogLabel: '{game} Intel',
		ctaBuy: 'Buy now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	};

	const seo = { ...seoDefaults, ...(data.seo && typeof data.seo === 'object' ? data.seo : {}) };
	const copy = { ...copyDefaults, ...(data.copy && typeof data.copy === 'object' ? data.copy : {}) };
	const sitemapIn =
		data.sitemap && typeof data.sitemap === 'object' ? data.sitemap : {};
	const sitemap = {
		contentLastmod: sitemapIn.contentLastmod || sitemapDefaults.contentLastmod,
		blogImageTitle: sitemapIn.blogImageTitle || sitemapDefaults.blogImageTitle,
		blogImageCaption: sitemapIn.blogImageCaption || sitemapDefaults.blogImageCaption,
		reviewsImageTitle: sitemapIn.reviewsImageTitle || sitemapDefaults.reviewsImageTitle,
		reviewsImageCaption: sitemapIn.reviewsImageCaption || sitemapDefaults.reviewsImageCaption,
		images: Array.isArray(sitemapIn.images) && sitemapIn.images.length
			? sitemapIn.images
			: DEFAULT_SITEMAP_IMAGES.map((x) => ({ ...x })),
	};
	const themeIn = data.theme && typeof data.theme === 'object' ? data.theme : {};
	const theme = resolveTheme({
		themeAccent: themeIn.accent,
		themeBg: themeIn.bg,
		themeSoft: themeIn.soft,
		themeDeep: themeIn.deep,
		themeHover: themeIn.hover,
		themePanel: themeIn.panel,
		theme: themeIn,
	});

	for (const key of SEO_KEYS) {
		if (!seo[key] || typeof seo[key] !== 'string') seo[key] = seoDefaults[key];
	}
	for (const key of COPY_KEYS) {
		if (!copy[key] || typeof copy[key] !== 'string') copy[key] = copyDefaults[key];
	}

	const imagesBlock = sitemap.images
		.map(
			(img) => `\t\t\t{
\t\t\t\tsrc: '${e(img.src)}',
\t\t\t\ttitle: '${e(img.title)}',
\t\t\t\tcaption: '${e(img.caption)}',
\t\t\t}`,
		)
		.join(',\n');

	const out = `/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during \`astro dev\`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: '${e(data.name)}',
	/** Short product label if needed */
	shortName: '${e(data.shortName)}',
	/** Canonical origin — no trailing slash */
	url: '${e(data.url)}',
	locale: '${e(data.locale)}',
	market: '${e(data.market)}',
	supportEmail: '${e(data.supportEmail)}',
	checkoutUrl: '${e(data.checkoutUrl)}',

	/** Game this template instance targets */
	game: '${e(data.game)}',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: '${e(data.antiCheat)}',

	logo: '${e(data.logo)}',
	logoRaster: '${e(data.logoRaster)}',
	logoRasterWidth: ${data.logoRasterWidth},
	logoRasterHeight: ${data.logoRasterHeight},
	logoAlt: '${e(data.logoAlt)}',
	defaultOgImage: '${e(data.defaultOgImage)}',
	heroImage: '${e(data.heroImage)}',

	plans: [
		{ id: 'monthly', label: '${e(data.monthlyLabel)}', price: ${data.monthly}, duration: 'P30D' },
		{ id: 'lifetime', label: '${e(data.lifetimeLabel)}', price: ${data.lifetime}, duration: 'P99Y' },
	] as const,
	currency: '${e(data.currency)}',
	platforms: [${platforms}] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '${e(theme.accent)}',
		bg: '${e(theme.bg)}',
		soft: '${e(theme.soft)}',
		deep: '${e(theme.deep)}',
		hover: '${e(theme.hover)}',
		panel: '${e(theme.panel)}',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Mix cheats + hacks phrasing. Keep ~24–28 terms (cap 30).
	 */
	keywords: {
		primary: '${e(data.primary)}',
		list: [
${kw},
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: '${e(seo.homeTitle)}',
		homeDescription: '${e(seo.homeDescription)}',
		featuresTitle: '${e(seo.featuresTitle)}',
		featuresDescription: '${e(seo.featuresDescription)}',
		storeTitle: '${e(seo.storeTitle)}',
		storeDescription: '${e(seo.storeDescription)}',
		statusTitle: '${e(seo.statusTitle)}',
		statusDescription: '${e(seo.statusDescription)}',
		previewTitle: '${e(seo.previewTitle)}',
		previewDescription: '${e(seo.previewDescription)}',
		setupTitle: '${e(seo.setupTitle)}',
		setupDescription: '${e(seo.setupDescription)}',
		supportTitle: '${e(seo.supportTitle)}',
		supportDescription: '${e(seo.supportDescription)}',
		faqTitle: '${e(seo.faqTitle)}',
		faqDescription: '${e(seo.faqDescription)}',
		reviewsTitle: '${e(seo.reviewsTitle)}',
		reviewsDescription: '${e(seo.reviewsDescription)}',
		blogTitle: '${e(seo.blogTitle)}',
		blogDescription: '${e(seo.blogDescription)}',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: '${e(copy.tagline)}',
		summary: '${e(copy.summary)}',
		heroLede: '${e(copy.heroLede)}',
		blogLabel: '${e(copy.blogLabel)}',
		ctaBuy: '${e(copy.ctaBuy)}',
		ctaBuyShort: '${e(copy.ctaBuyShort)}',
		featuresIntro: '${e(copy.featuresIntro)}',
		storeIntro: '${e(copy.storeIntro)}',
		statusIntro: '${e(copy.statusIntro)}',
		previewIntro: '${e(copy.previewIntro)}',
		setupIntro: '${e(copy.setupIntro)}',
		supportIntro: '${e(copy.supportIntro)}',
		faqIntro: '${e(copy.faqIntro)}',
		reviewsIntro: '${e(copy.reviewsIntro)}',
		chipEsp: '${e(copy.chipEsp)}',
		chipAim: '${e(copy.chipAim)}',
		chipRadar: '${e(copy.chipRadar)}',
		chipUpdates: '${e(copy.chipUpdates)}',
		navPreview: '${e(copy.navPreview)}',
		navFeatures: '${e(copy.navFeatures)}',
		navStore: '${e(copy.navStore)}',
		navStatus: '${e(copy.navStatus)}',
		navReviews: '${e(copy.navReviews)}',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from \`url\` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '${e(sitemap.contentLastmod)}',
		blogImageTitle: '${e(sitemap.blogImageTitle)}',
		blogImageCaption: '${e(sitemap.blogImageCaption)}',
		reviewsImageTitle: '${e(sitemap.reviewsImageTitle)}',
		reviewsImageCaption: '${e(sitemap.reviewsImageCaption)}',
		images: [
${imagesBlock},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: \`{Game} {Topic} | {Brand}\` */
export function seoTitle(topic: string): string {
	const title = \`\${brand.game} \${topic} | \${brand.name}\`;
	return title.length <= 60 ? title : \`\${topic} | \${brand.name}\`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : \`\${text.slice(0, 157).trim()}…\`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
`;

	if (
		!out.includes('\n\tseo: {') ||
		!out.includes('\n\tcopy: {') ||
		!out.includes('\n\tsitemap: {') ||
		!out.includes('\n\ttheme: {') ||
		!out.includes('export function seoDescription') ||
		!out.includes('export function homeSeo')
	) {
		throw new Error('Brand Studio refused to write brand.ts without seo/copy/sitemap/theme/helpers');
	}
	return out;
}

export function writeBrandAndSync(data) {
	const contents = renderBrandTs(data);
	if (
		!contents.includes('\ttheme: {') ||
		!contents.includes('\tsitemap: {') ||
		!contents.includes('\tseo: {') ||
		!contents.includes('\tcopy: {') ||
		!contents.includes('function seoDescription') ||
		!contents.includes('function homeSeo')
	) {
		throw new Error('Refusing to write brand.ts: missing seo/copy/sitemap/theme/helpers block');
	}
	const tmp = `${BRAND_PATH}.${randomBytes(8).toString('hex')}.tmp`;
	writeFileSync(tmp, contents, 'utf8');
	renameSync(tmp, BRAND_PATH);

	const verify = readFileSync(BRAND_PATH, 'utf8');
	if (
		!verify.includes('\tseo: {') ||
		!verify.includes('\tcopy: {') ||
		!verify.includes('\tsitemap: {') ||
		!verify.includes('\ttheme: {')
	) {
		throw new Error('brand.ts write verification failed — seo/copy/sitemap/theme missing on disk');
	}

	const sync = spawnSync(process.execPath, [path.join(ROOT, 'scripts/sync-brand.mjs')], {
		cwd: ROOT,
		encoding: 'utf8',
		timeout: 15000,
	});
	if (sync.status !== 0) {
		throw new Error((sync.stderr || sync.stdout || 'sync-brand failed').trim());
	}

	return {
		brandPath: 'src/data/brand.ts',
		sync: `${(sync.stdout || '').trim()} · robots Sitemap + Astro site synced from domain · XML refreshes on next /sitemap.xml load`,
		permanent: true,
	};
}

function gulagBlock(src, name) {
	const m = src.match(new RegExp(`${name}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`));
	return m ? m[1] : '';
}

function fieldFrom(block, key) {
	const m = block.match(new RegExp(`${key}:\\s*'((?:\\\\'|[^'])*)'`));
	return m ? m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : '';
}

function topField(src, key) {
	const m = src.match(new RegExp(`(?:^|\\n)\\t${key}:\\s*'((?:\\\\'|[^'])*)'`));
	return m ? m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : '';
}

export function readBrandForStudio() {
	const src = readFileSync(BRAND_PATH, 'utf8');
	const str = (key) => topField(src, key);
	const num = (key) => {
		const m = src.match(new RegExp(`${key}:\\s*(\\d+)`));
		return m ? Number(m[1]) : 0;
	};
	const listMatch = src.match(/list:\s*\[([\s\S]*?)\]\s*as const/);
	const keywords = listMatch
		? [...listMatch[1].matchAll(/'((?:\\'|[^'])*)'/g)].map((m) => m[1].replace(/\\'/g, "'"))
		: [];
	const seoBlock = gulagBlock(src, 'seo');
	const copyBlock = gulagBlock(src, 'copy');
	const sitemapBlock = gulagBlock(src, 'sitemap');
	const themeBlock = gulagBlock(src, 'theme');
	/** @type {Record<string, string>} */
	const seo = {};
	for (const key of SEO_KEYS) seo[key] = fieldFrom(seoBlock, key);
	/** @type {Record<string, string>} */
	const copy = {};
	for (const key of COPY_KEYS) copy[key] = fieldFrom(copyBlock, key);

	/** @type {{ src: string, title: string, caption: string }[]} */
	const sitemapImages = [];
	const imgRe =
		/\{\s*src:\s*'((?:\\'|[^'])*)'\s*,\s*title:\s*'((?:\\'|[^'])*)'\s*,\s*caption:\s*'((?:\\'|[^'])*)'\s*,?\s*\}/g;
	let im;
	while ((im = imgRe.exec(sitemapBlock))) {
		sitemapImages.push({
			src: im[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
			title: im[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
			caption: im[3].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
		});
	}
	if (!sitemapImages.length) {
		for (const row of DEFAULT_SITEMAP_IMAGES) sitemapImages.push({ ...row });
	}

	const flatImages = {};
	sitemapImages.forEach((img, idx) => {
		const n = idx + 1;
		flatImages[`sitemapImage${n}Src`] = img.src;
		flatImages[`sitemapImage${n}Title`] = img.title;
		flatImages[`sitemapImage${n}Caption`] = img.caption;
	});

	return {
		name: str('name'),
		shortName: str('shortName'),
		url: str('url'),
		locale: str('locale') || 'en',
		market: str('market') || 'Worldwide',
		supportEmail: str('supportEmail'),
		checkoutUrl: str('checkoutUrl'),
		game: str('game'),
		antiCheat: str('antiCheat'),
		logo: str('logo'),
		logoRaster: str('logoRaster'),
		logoRasterWidth: num('logoRasterWidth') || 512,
		logoRasterHeight: num('logoRasterHeight') || 512,
		logoAlt: str('logoAlt'),
		defaultOgImage: str('defaultOgImage'),
		heroImage: str('heroImage'),
		monthlyPrice: (() => {
			const m = src.match(/id:\s*'monthly'[\s\S]*?price:\s*(\d+)/);
			return m ? Number(m[1]) : 0;
		})(),
		lifetimePrice: (() => {
			const m = src.match(/id:\s*'lifetime'[\s\S]*?price:\s*(\d+)/);
			return m ? Number(m[1]) : 0;
		})(),
		monthlyLabel: (() => {
			const m = src.match(/id:\s*'monthly',\s*label:\s*'((?:\\'|[^'])*)'/);
			return m ? m[1].replace(/\\'/g, "'") : 'Monthly';
		})(),
		lifetimeLabel: (() => {
			const m = src.match(/id:\s*'lifetime',\s*label:\s*'((?:\\'|[^'])*)'/);
			return m ? m[1].replace(/\\'/g, "'") : 'Lifetime';
		})(),
		currency: str('currency') || 'USD',
		platforms: (() => {
			const m = src.match(/platforms:\s*\[([\s\S]*?)\]\s*as const/);
			return m
				? [...m[1].matchAll(/'((?:\\'|[^'])*)'/g)].map((x) => x[1].replace(/\\'/g, "'"))
				: ['Windows PC', 'Controllers'];
		})(),
		primaryKeyword: (() => {
			const m = src.match(/primary:\s*'((?:\\'|[^'])*)'/);
			return m ? m[1].replace(/\\'/g, "'") : '';
		})(),
		keywords,
		...seo,
		...copy,
		contentLastmod: fieldFrom(sitemapBlock, 'contentLastmod') || sitemapDefaults.contentLastmod,
		blogImageTitle: fieldFrom(sitemapBlock, 'blogImageTitle') || sitemapDefaults.blogImageTitle,
		blogImageCaption: fieldFrom(sitemapBlock, 'blogImageCaption') || sitemapDefaults.blogImageCaption,
		reviewsImageTitle: fieldFrom(sitemapBlock, 'reviewsImageTitle') || sitemapDefaults.reviewsImageTitle,
		reviewsImageCaption:
			fieldFrom(sitemapBlock, 'reviewsImageCaption') || sitemapDefaults.reviewsImageCaption,
		sitemapImages,
		...flatImages,
		themeAccent: fieldFrom(themeBlock, 'accent') || themeDefaults.accent,
		themeBg: fieldFrom(themeBlock, 'bg') || themeDefaults.bg,
		themeSoft: fieldFrom(themeBlock, 'soft') || '',
		themeDeep: fieldFrom(themeBlock, 'deep') || '',
		themeHover: fieldFrom(themeBlock, 'hover') || '',
		themePanel: fieldFrom(themeBlock, 'panel') || '',
		tokenRequired: Boolean(process.env.BRAND_STUDIO_TOKEN),
	};
}

/**
 * Patch a single brand field from localhost inline editor.
 * @param {string} field
 * @param {string} value
 */
export function patchBrandField(field, value) {
	const key = String(field || '').trim();
	if (!PATCHABLE_FIELDS.has(key)) {
		return { ok: false, error: `Field not editable: ${key}` };
	}
	const text = soft(
		value,
		'',
		key.endsWith('Description')
			? 160
			: key.endsWith('Title')
				? 70
				: key === 'summary' || key.endsWith('Intro')
					? 320
					: 160,
	);
	if (!text) return { ok: false, error: 'Text cannot be empty' };

	const current = readBrandForStudio();
	const merged = {
		...current,
		[key]: text,
		bumpLastmodOnSave: false,
		themeAccent: current.themeAccent,
		themeBg: current.themeBg,
		themeSoft: current.themeSoft,
		themeDeep: current.themeDeep,
		themeHover: current.themeHover,
		themePanel: current.themePanel,
	};
	const checked = validateBrandPayload(merged);
	if (!checked.ok) return checked;
	const result = writeBrandAndSync(checked.data);
	return { ok: true, field: key, ...result, brand: readBrandForStudio() };
}

export function readInlineEdits() {
	try {
		const raw = readFileSync(INLINE_EDITS_PATH, 'utf8');
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}

/**
 * Persist a freeform inline text override (non-brand fields).
 * @param {string} pagePath
 * @param {string} editKey
 * @param {string} text
 */
export function saveInlineEdit(pagePath, editKey, text) {
	const pathKey = String(pagePath || '/').trim() || '/';
	const key = String(editKey || '').trim();
	const value = soft(text, '', 500);
	if (!key || key.length > 200) return { ok: false, error: 'Invalid edit key' };
	if (!value) return { ok: false, error: 'Text cannot be empty' };
	if (!pathKey.startsWith('/') || pathKey.includes('..')) {
		return { ok: false, error: 'Invalid page path' };
	}

	const all = readInlineEdits();
	const page = all[pathKey] && typeof all[pathKey] === 'object' ? { ...all[pathKey] } : {};
	page[key] = value;
	all[pathKey] = page;

	const tmp = `${INLINE_EDITS_PATH}.${randomBytes(6).toString('hex')}.tmp`;
	writeFileSync(tmp, `${JSON.stringify(all, null, 2)}\n`, 'utf8');
	renameSync(tmp, INLINE_EDITS_PATH);
	return { ok: true, path: pathKey, key, value };
}

export {
	ROOT,
	BRAND_PATH,
	SEO_KEYS,
	COPY_KEYS,
	SITEMAP_TEXT_KEYS,
	DEFAULT_SITEMAP_IMAGES,
	themeDefaults,
	PATCHABLE_FIELDS,
};
