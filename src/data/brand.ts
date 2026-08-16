/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Warzone Cheats',
	/** Short product label if needed */
	shortName: 'Warzone',
	/** Canonical origin — no trailing slash */
	url: 'https://warzonecheats.co',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warzonecheats.co',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov',

	/** Game this template instance targets */
	game: 'Warzone',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Ricochet',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Warzone Cheats logo',
	defaultOgImage: '/images/tarkov-cheats-hero-1024w.webp',
	heroImage: '/images/tarkov-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'warzone cheats',
		list: [
			'warzone cheats',
			'warzone hacks',
			'warzone esp',
			'warzone aimbot',
			'warzone wallhack',
			'undetected warzone cheats',
			'best warzone cheats',
			'call of duty warzone cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /warzone-cheats/ owns the head term. */
		homeTitle: 'Warzone Cheats | Official Windows PC Site',
		homeDescription:
			'Official Warzone Cheats site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, loadout tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a match on Windows PC today.',
		/** Money page meta — primary target for "warzone cheats". */
		previewTitle: 'Warzone Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected warzone cheats for Call of Duty Warzone on Windows PC. ESP, soft aim, radar, and Ricochet patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can drop faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Call of Duty Warzone — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Call of Duty Warzone on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — BR tips, ESP, aimbot, loadouts, and {antiCheat} update coverage for Windows PC players who drop.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Call of Duty Warzone on Windows PC.',
		blogLabel: 'Warzone Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you drop.',
		previewIntro:
			'{brand} for Call of Duty Warzone — ESP wallhack, soft aim, 2D radar, and Ricochet rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-17',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'ESP overlay in Call of Duty Warzone',
				caption: 'Player ESP boxes and distance readouts during a BR match',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'Wallhack visibility for Warzone fights',
				caption: 'Enemy outlines through walls and cover',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'Soft aim assist for Warzone',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/tarkov-cheats-aimbot-view.webp',
				title: 'Aimbot view in Warzone Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/tarkov-cheats-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near the zone',
			},
			{
				src: '/images/tarkov-cheats-raid.webp',
				title: 'Warzone Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
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

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
