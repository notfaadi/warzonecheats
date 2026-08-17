/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1200w') ||
		name.endsWith('-1280w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-1920w') ||
		name.endsWith('-2560w') ||
		name.endsWith('-480w')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/**
 * Homepage / banner hero — native WebP ladder (no upscale).
 * Master art is 1536×1024, same as Squad Hacks. Fake 1920/2560
 * enlargements looked softer than the 1536 source.
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/warzone-cheats-hero-640w.webp', width: 640 },
	{ src: '/images/warzone-cheats-hero-1024w.webp', width: 1024 },
	{ src: '/images/warzone-cheats-hero-1536w.webp', width: 1536 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — largest native WebP. Keep in sync with brand.heroImage. */
export const heroSrc = '/images/warzone-cheats-hero-1536w.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload — same compressed WebP. */
export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/webp';

/** Exact native dimensions (no zoom crop). */
export const heroWidth = 1536;
export const heroHeight = 1024;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
