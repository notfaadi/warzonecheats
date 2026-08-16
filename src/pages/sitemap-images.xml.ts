import type { APIRoute } from 'astro';
import { absolutePageUrl, imageSitemapEntries, pageSitemapEntries } from '../data/page-sitemap';
import { englishPaths } from '../data/i18n/routing';
import { assertCrawlableAssetUrl, escapeXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Prefer distinct host pages so Features / Store / Status appear in the image sitemap
 * and Google never sees duplicate <loc> rows (a common crawl warning).
 */
const PREFERRED_HOSTS = [
	englishPaths.home,
	englishPaths.features,
	englishPaths.pricing,
	englishPaths.updates,
	englishPaths['warzone-esp'],
	englishPaths['warzone-aimbot'],
	englishPaths.hacks,
	englishPaths.undetected,
] as const;

/**
 * Dedicated image sitemap: one unique page <loc> per unique image asset.
 */
export const GET: APIRoute = () => {
	const lastmod = pageSitemapEntries[0]?.lastmod ?? new Date().toISOString().slice(0, 10);

	const firstHostByImage = new Map<string, string>();
	for (const page of pageSitemapEntries) {
		for (const image of page.images) {
			assertCrawlableAssetUrl(image.url, page.path);
			if (!firstHostByImage.has(image.url)) {
				firstHostByImage.set(image.url, absolutePageUrl(page.path));
			}
		}
	}

	const usedHosts = new Set<string>();
	const uniqueImages = new Map<string, (typeof imageSitemapEntries)[number]>();
	for (const image of imageSitemapEntries) {
		assertCrawlableAssetUrl(image.url, 'sitemap-images');
		if (!uniqueImages.has(image.url)) uniqueImages.set(image.url, image);
	}

	const urls = [...uniqueImages.values()]
		.map((image, index) => {
			const preferred = PREFERRED_HOSTS[index];
			const preferredAbs = preferred ? absolutePageUrl(preferred) : undefined;
			let host =
				(preferredAbs && !usedHosts.has(preferredAbs) ? preferredAbs : undefined) ??
				firstHostByImage.get(image.url) ??
				absolutePageUrl('/');

			if (usedHosts.has(host)) {
				const fallback = PREFERRED_HOSTS.map((path) => absolutePageUrl(path)).find(
					(candidate) => !usedHosts.has(candidate),
				);
				if (!fallback) {
					throw new Error(
						`[sitemap-images] No unique host page left for image ${image.url}. Add more PREFERRED_HOSTS or fewer brand.sitemap.images.`,
					);
				}
				host = fallback;
			}
			usedHosts.add(host);

			return `  <url>
    <loc>${escapeXml(host)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>
  </url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

	return new Response(xml, { headers: sitemapResponseHeaders });
};
