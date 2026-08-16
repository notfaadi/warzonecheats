import { siteConfig } from '../site';
import { tarkovImages } from '../tarkov';
import { blogSitemapImageMeta } from '../brand-sitemap';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from '../i18n/locales';
import { resolvePageContextFromPath } from '../i18n/routing';
import type { BlogImageKey, BlogPostDefinition, BlogTranslation, ResolvedBlogPost } from './types';
import { blogPosts as rawBlogPosts } from './posts.generated';

const imageMap: Record<BlogImageKey, string> = {
	hero: tarkovImages.espWallhack,
	espWallhack: tarkovImages.espWallhack,
	aimbotCombat: tarkovImages.aimbotCombat,
	aimbotSkeleton: tarkovImages.aimbotSkeleton,
	squadFight: tarkovImages.aimbotCombat,
	headerArt: tarkovImages.playerEsp,
	cheatsPackage: tarkovImages.espWallhack,
	playerEsp: tarkovImages.playerEsp,
	rebootFight: tarkovImages.aimbotCombat,
	battleRoyaleCombat: tarkovImages.cheatsCombat,
	battleRoyaleIslandMap: tarkovImages.espWallhack,
};

const FALLBACK_BLOG_IMAGE = tarkovImages.espWallhack;

function expandTranslations(
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation },
): Record<LocaleCode, BlogTranslation> {
	const en = translations.en;
	const full = {} as Record<LocaleCode, BlogTranslation>;
	for (const code of localeCodes) {
		full[code] = translations[code] ?? { ...en };
	}
	return full;
}

export const blogPosts: BlogPostDefinition[] = rawBlogPosts.map((post) => ({
	...post,
	translations: expandTranslations(post.translations as Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation }),
}));

export function getBlogImageSrc(key: BlogImageKey): string {
	const src = imageMap[key] ?? FALLBACK_BLOG_IMAGE;
	if (!src || src.includes('undefined')) {
		throw new Error(`[blog] Invalid image path for key "${key}"`);
	}
	return src;
}

export function getBlogBasePath(locale: LocaleCode): string {
	return locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
}

export function isBlogPath(pathname: string): boolean {
	const context = resolvePageContextFromPath(pathname);
	return Boolean(context.isBlogIndex || context.blogSlug);
}

export function findPostBySlug(slug: string, locale?: LocaleCode): BlogPostDefinition | undefined {
	return blogPosts.find((post) => {
		if (locale) {
			return post.translations[locale]?.slug === slug;
		}
		return localeCodes.some((code) => post.translations[code]?.slug === slug);
	});
}

/** Target URL for the same blog index or post — always English until translations exist. */
export function getBlogLocaleSwitchHref(pathname: string, _targetLocale: LocaleCode): string {
	const context = resolvePageContextFromPath(pathname);

	if (context.blogSlug) {
		const post = findPostBySlug(context.blogSlug, context.locale) ?? findPostBySlug(context.blogSlug);
		if (post) {
			return getBlogPostPath(defaultLocale, post.translations[defaultLocale].slug);
		}
	}

	return getBlogBasePath(defaultLocale);
}

export function getBlogPostPath(locale: LocaleCode, slug: string): string {
	const base = getBlogBasePath(locale);
	return `${base}${slug}/`;
}

export function absoluteBlogUrl(locale: LocaleCode, slug?: string): string {
	const path = slug ? getBlogPostPath(locale, slug) : getBlogBasePath(locale);
	return new URL(path, siteConfig.url).href;
}

export function resolvePost(post: BlogPostDefinition, locale: LocaleCode): ResolvedBlogPost {
	const translation = post.translations[locale];
	return {
		...post,
		locale,
		translation,
		imageSrc: getBlogImageSrc(post.imageKey),
		canonicalPath: getBlogPostPath(locale, translation.slug),
	};
}

export function getAllPostsForLocale(locale: LocaleCode): ResolvedBlogPost[] {
	return blogPosts
		.map((post) => resolvePost(post, locale))
		.sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getFeaturedPosts(locale: LocaleCode, limit = 3): ResolvedBlogPost[] {
	const all = getAllPostsForLocale(locale);
	const featured = all.filter((p) => p.featured);
	return (featured.length >= limit ? featured : all).slice(0, limit);
}

export function getPostBySlug(locale: LocaleCode, slug: string): ResolvedBlogPost | undefined {
	const post = blogPosts.find((p) => p.translations[locale]?.slug === slug);
	return post ? resolvePost(post, locale) : undefined;
}

/** Hreflang alternates for a blog post — English-only until real translations exist. */
export function getBlogPostHreflangAlternates(
	post: BlogPostDefinition,
	_currentLocale: LocaleCode = defaultLocale,
) {
	const href = absoluteBlogUrl(defaultLocale, post.translations[defaultLocale].slug);
	return [
		{ hreflang: locales.find((l) => l.code === defaultLocale)!.hreflang, href },
		{ hreflang: 'x-default' as const, href },
	];
}

/** Hreflang alternates for a blog index — English-only until real translations exist. */
export function getBlogIndexHreflangAlternates(_currentLocale: LocaleCode = defaultLocale) {
	const href = absoluteBlogUrl(defaultLocale);
	return [
		{ hreflang: locales.find((l) => l.code === defaultLocale)!.hreflang, href },
		{ hreflang: 'x-default' as const, href },
	];
}

/**
 * Localized blog routes are not translated — do not build/index them.
 * Use EN `/blog/` only. Locale paths 301 to EN via [lang]/blog pages.
 */
export function getAllBlogStaticPaths(): { params: { lang?: string; slug: string }; props: { locale: LocaleCode } }[] {
	return blogPosts.map((post) => ({
		params: { slug: post.translations[defaultLocale].slug },
		props: { locale: defaultLocale },
	}));
}

/** Blog sitemap entries for one locale (index + all posts). Non-EN returns empty. */
export function getBlogSitemapEntriesForLocale(locale: LocaleCode) {
	if (locale !== defaultLocale) return [];

	const indexLastmod = blogPosts.reduce(
		(max, post) => (post.updated > max ? post.updated : max),
		blogPosts[0]?.updated ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: getBlogBasePath(locale),
			lastmod: indexLastmod,
			priority: 0.92,
			changefreq: 'daily',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					...blogSitemapImageMeta(),
				},
			],
		},
	];

	for (const post of blogPosts) {
		const t = post.translations[locale];
		const imageSrc = getBlogImageSrc(post.imageKey);
		const isProductPost = /Warzone Cheats|Aimbot|ESP|Undetected|Comparisons/i.test(post.category);
		entries.push({
			path: getBlogPostPath(locale, t.slug),
			lastmod: post.updated,
			priority: isProductPost ? 0.95 : 0.88,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(imageSrc, siteConfig.url).href,
					title: t.title,
					caption: t.imageAlt,
				},
			],
		});
	}

	return entries;
}

/** English blog routes in the primary sitemap (localized posts live in per-locale sitemaps). */
export function getBlogSitemapEntries() {
	return getBlogSitemapEntriesForLocale(defaultLocale);
}
