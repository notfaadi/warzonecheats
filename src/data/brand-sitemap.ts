/**
 * Sitemap labels + lastmod bump — driven by brand.sitemap with safe defaults.
 * XML endpoints stay generated; this only supplies brand-aware strings / dates.
 */
import { brand, fillBrandTokens } from './brand';
import type { PageId } from './i18n/routing';

export type BrandSitemapImage = {
	src: string;
	title: string;
	caption: string;
};

const defaultImages: BrandSitemapImage[] = [
	{
		src: '/images/tarkov-cheats-esp.webp',
		title: 'warzone cheats esp',
		caption: 'warzone cheats esp wallhack',
	},
	{
		src: '/images/tarkov-cheats-wallhack.webp',
		title: 'warzone cheats wallhack',
		caption: 'warzone cheats wallhack esp',
	},
	{
		src: '/images/tarkov-cheats-aimbot.webp',
		title: 'warzone cheats aimbot',
		caption: 'warzone cheats aimbot soft aim',
	},
	{
		src: '/images/tarkov-cheats-aimbot-view.webp',
		title: 'warzone cheats aimbot',
		caption: 'warzone cheats aimbot view',
	},
	{
		src: '/images/tarkov-cheats-radar.webp',
		title: 'warzone cheats radar',
		caption: 'warzone cheats radar hack',
	},
	{
		src: '/images/tarkov-cheats-raid.webp',
		title: 'warzone cheats',
		caption: 'warzone cheats in BR',
	},
];

/** Per-page image title/caption templates for the English urlset. */
const pageImageTemplates: Record<PageId, { title: string; caption: string }> = {
	home: { title: '{brand} hero — ESP and aimbot in Warzone', caption: 'Homepage preview of {primaryKeyword} on Windows PC' },
	'warzone-esp': { title: '{primaryKeyword} ESP overlay', caption: 'Player ESP boxes and distance with {primaryKeyword}' },
	'warzone-aimbot': { title: '{primaryKeyword} aimbot view', caption: 'Aimbot and soft aim controls in {primaryKeyword}' },
	features: { title: '{primaryKeyword} features', caption: 'ESP, soft aim, and radar included with {primaryKeyword}' },
	pricing: { title: '{primaryKeyword} store plans', caption: 'Monthly and lifetime {primaryKeyword} plans' },
	setup: { title: '{primaryKeyword} setup', caption: 'Install {primaryKeyword} on Windows PC after checkout' },
	updates: { title: '{primaryKeyword} live status', caption: 'Check {primaryKeyword} after a game or Ricochet patch' },
	faq: { title: '{primaryKeyword} FAQ', caption: 'Common questions about {primaryKeyword}' },
	support: { title: '{primaryKeyword} support', caption: 'Help with your {primaryKeyword} license' },
	undetected: { title: 'Undetected {primaryKeyword}', caption: 'Status notes for {primaryKeyword} after patches' },
	wallhack: { title: '{primaryKeyword} wallhack', caption: 'Through-wall visibility with {primaryKeyword}' },
	radar: { title: '{primaryKeyword} radar', caption: '2D radar map cues in {primaryKeyword}' },
	ricochet: { title: '{antiCheat} and {primaryKeyword}', caption: '{primaryKeyword} rebuilds after a Ricochet update' },
	'cheats-2026': { title: '{primaryKeyword} overview', caption: '{primaryKeyword} for Warzone on PC' },
	hacks: { title: '{primaryKeyword}', caption: '{primaryKeyword} ESP, aimbot, and radar package' },
	'cheat-download': { title: '{primaryKeyword} download', caption: 'Get {primaryKeyword} after you buy' },
	'mod-menu': { title: '{primaryKeyword} menu', caption: 'In-game menu for {primaryKeyword}' },
	'soft-aim': { title: '{primaryKeyword} soft aim', caption: 'Soft aim settings in {primaryKeyword}' },
	'best-cheats': { title: 'Best {primaryKeyword}', caption: 'Why players pick {primaryKeyword}' },
	'aimbot-hack': { title: '{primaryKeyword} aimbot', caption: 'Aimbot tools in {primaryKeyword}' },
	'esp-hack': { title: '{primaryKeyword} ESP', caption: 'ESP tools in {primaryKeyword}' },
	'unlock-all': { title: '{primaryKeyword} unlock guide', caption: 'Unlock tips with {primaryKeyword}' },
	privacy: { title: '{brand} privacy', caption: 'Privacy info for {primaryKeyword}' },
	refund: { title: '{brand} refunds', caption: 'Refund info for {primaryKeyword}' },
	terms: { title: '{brand} terms', caption: 'Terms for {primaryKeyword}' },
};

const sitemapDefaults = {
	contentLastmod: '2026-08-10',
	blogImageTitle: '{brand} blog',
	blogImageCaption: 'Tips and updates for {primaryKeyword}',
	reviewsImageTitle: '{brand} reviews',
	reviewsImageCaption: 'What buyers say about {primaryKeyword}',
	images: defaultImages,
} as const;

type SitemapShape = {
	contentLastmod: string;
	blogImageTitle: string;
	blogImageCaption: string;
	reviewsImageTitle: string;
	reviewsImageCaption: string;
	images: BrandSitemapImage[];
};

const raw = brand as typeof brand & { sitemap?: Partial<SitemapShape> };

function normalizeImages(input: unknown): BrandSitemapImage[] {
	if (!Array.isArray(input) || input.length < 1) return defaultImages.map((i) => ({ ...i }));
	const out: BrandSitemapImage[] = [];
	const seen = new Set<string>();
	for (const item of input) {
		if (!item || typeof item !== 'object') continue;
		const row = item as Record<string, unknown>;
		const src = typeof row.src === 'string' ? row.src.trim() : '';
		const title = typeof row.title === 'string' ? row.title.trim() : '';
		const caption = typeof row.caption === 'string' ? row.caption.trim() : '';
		if (!src.startsWith('/images/') || !title || !caption) continue;
		if (seen.has(src)) continue;
		seen.add(src);
		out.push({ src, title, caption });
	}
	return out.length ? out : defaultImages.map((i) => ({ ...i }));
}

export const brandSitemap: SitemapShape = {
	contentLastmod: raw.sitemap?.contentLastmod?.trim() || sitemapDefaults.contentLastmod,
	blogImageTitle: raw.sitemap?.blogImageTitle?.trim() || sitemapDefaults.blogImageTitle,
	blogImageCaption: raw.sitemap?.blogImageCaption?.trim() || sitemapDefaults.blogImageCaption,
	reviewsImageTitle: raw.sitemap?.reviewsImageTitle?.trim() || sitemapDefaults.reviewsImageTitle,
	reviewsImageCaption: raw.sitemap?.reviewsImageCaption?.trim() || sitemapDefaults.reviewsImageCaption,
	images: normalizeImages(raw.sitemap?.images),
};

/**
 * Use the real page lastmod only.
 * Do not inflate every URL with brand.sitemap.contentLastmod (looks like fake freshness).
 */
export function sitemapLastmod(pageLastmod: string): string {
	return pageLastmod;
}

export function resolvedSitemapImages(): BrandSitemapImage[] {
	return brandSitemap.images.map((entry) => ({
		src: entry.src,
		title: fillBrandTokens(entry.title),
		caption: fillBrandTokens(entry.caption),
	}));
}

export function pageSitemapImageLabels(pageId: PageId): { title: string; caption: string } {
	const tpl = pageImageTemplates[pageId];
	return {
		title: fillBrandTokens(tpl.title),
		caption: fillBrandTokens(tpl.caption),
	};
}

export function blogSitemapImageMeta() {
	return {
		title: fillBrandTokens(brandSitemap.blogImageTitle),
		caption: fillBrandTokens(brandSitemap.blogImageCaption),
	};
}

export function reviewsSitemapImageMeta() {
	return {
		title: fillBrandTokens(brandSitemap.reviewsImageTitle),
		caption: fillBrandTokens(brandSitemap.reviewsImageCaption),
	};
}

export { sitemapDefaults, pageImageTemplates };
