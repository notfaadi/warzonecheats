import { siteConfig } from './site';
import { tarkovImages } from './tarkov';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	tarkovImages.espWallhack,
	tarkovImages.aimbotCombat,
	tarkovImages.aimbotSkeleton,
	tarkovImages.playerEsp,
	tarkovImages.cheatsCombat,
	'/images/tarkov-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: siteConfig.heroImage,
	'warzone-esp': tarkovImages.playerEsp,
	'warzone-aimbot': tarkovImages.aimbotCombat,
	features: tarkovImages.aimbotSkeleton,
	pricing: tarkovImages.cheatsCombat,
	setup: tarkovImages.playerEsp,
	updates: siteConfig.heroImage,
	faq: tarkovImages.aimbotSkeleton,
	support: tarkovImages.cheatsCombat,
	undetected: tarkovImages.espWallhack,
	wallhack: tarkovImages.espWallhack,
	radar: tarkovImages.playerEsp,
	ricochet: tarkovImages.aimbotCombat,
	'cheats-2026': siteConfig.heroImage,
	hacks: tarkovImages.cheatsCombat,
	'cheat-download': tarkovImages.cheatsCombat,
	'mod-menu': tarkovImages.playerEsp,
	'soft-aim': tarkovImages.aimbotSkeleton,
	'best-cheats': siteConfig.heroImage,
	'aimbot-hack': tarkovImages.aimbotSkeleton,
	'esp-hack': tarkovImages.espWallhack,
	'unlock-all': tarkovImages.playerEsp,
	privacy: tarkovImages.aimbotCombat,
	refund: tarkovImages.cheatsCombat,
	terms: tarkovImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
