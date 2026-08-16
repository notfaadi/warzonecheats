import { customerReviews, siteConfig } from './site';
import { reviewsSitemapImageMeta } from './brand-sitemap';
import { absoluteImageUrl, crawlPhotoMeta, defaultCrawlImageSrc } from './page-images';

export const reviewsBasePath = '/reviews/';

export function getReviewPath(slug: string): string {
	return `${reviewsBasePath}${slug}/`;
}

export function absoluteReviewUrl(slug?: string): string {
	return new URL(slug ? getReviewPath(slug) : reviewsBasePath, siteConfig.url).href;
}

export function getReviewCrawlImage(slug: string, handle: string, caption: string) {
	return crawlPhotoMeta(slug, `Warzone Cheats review by @${handle}`, caption);
}

/** English review routes for sitemap-en.xml — /reviews/ index + one URL per review. */
export function getReviewSitemapEntries() {
	const indexLastmod = customerReviews.reduce(
		(max, review) => (review.date > max ? review.date : max),
		customerReviews[0]?.date ?? new Date().toISOString().slice(0, 10),
	);

	const indexMeta = reviewsSitemapImageMeta();
	const indexImage = {
		url: absoluteImageUrl(defaultCrawlImageSrc),
		title: indexMeta.title,
		caption: indexMeta.caption,
	};

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: reviewsBasePath,
			lastmod: indexLastmod,
			priority: 0.85,
			changefreq: 'weekly',
			images: [indexImage],
		},
	];

	for (const review of customerReviews) {
		const photo = getReviewCrawlImage(review.slug, review.handle, review.seoDescription);
		entries.push({
			path: getReviewPath(review.slug),
			lastmod: review.date,
			priority: 0.75,
			changefreq: 'monthly',
			images: [
				{
					url: photo.url,
					title: photo.title,
					caption: photo.caption,
				},
			],
		});
	}

	return entries;
}
