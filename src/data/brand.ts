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
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fwarzone',

	/** Game this template instance targets */
	game: 'Warzone',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Ricochet',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Warzone Cheats logo',
	defaultOgImage: '/images/warzone-cheats-hero-1200w.webp',
	heroImage: '/images/warzone-cheats-hero-1920w.webp',

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
	 * Keep ~24–28 real search queries (Brand Studio cap 30). Skip fake claims and slogans.
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
			'undetected warzone hacks',
			'best warzone cheats',
			'best warzone hacks',
			'call of duty warzone cheats',
			'call of duty warzone hacks',
			'warzone cheats pc',
			'warzone hacks pc',
			'warzone cheats 2026',
			'warzone hacks 2026',
			'warzone radar hack',
			'warzone soft aim',
			'warzone cheat download',
			'warzone loot esp',
			'smooth aim assist',
			'warzone mod menu',
			'warzone unlock all',
			'warzone ricochet bypass',
			'warzone dma cheats',
			'buy warzone cheats',
			'warzone esp hack',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Warzone Cheats | ESP, Soft Aim & Radar',
		homeDescription:
			'Official Warzone Cheats site for Windows PC. ESP, loot ESP, smooth aim, and radar in one license. Check Status after Ricochet patches before you buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC. ESP, loot ESP, smooth aim, and radar you can tune. See Features, then check Status after {antiCheat}.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, loot ESP, smooth aim, and radar on both. Instant digital delivery after checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a match on Windows PC today.',
		previewTitle: 'Warzone Cheats | Undetected ESP & Smooth Aim',
		previewDescription:
			'Buy undetected warzone cheats on Windows PC. ESP, loot ESP, smooth aim, and radar in one license. Instant delivery, with Ricochet patch updates.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install {brand} on Windows PC after checkout. Run the loader from your delivery email, paste your license, then launch. Follow each step in order.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing. Check Status after a patch.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Call of Duty Warzone — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Call of Duty Warzone on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — BR tips, ESP, aimbot, loadouts, and {antiCheat} update coverage for Windows PC players who drop.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {game} cheats — ESP, loot ESP, smooth aim, and radar for PC',
		summary:
			'{brand} is undetected {game} cheats for Windows PC. Includes ESP, loot ESP, smooth aim, and radar, with {antiCheat} rebuilds after patches.',
		heroLede: 'Undetected ESP, loot ESP, smooth aim, and radar for Call of Duty Warzone on Windows PC.',
		blogLabel: 'Warzone Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'ESP, loot ESP, smooth aim, and radar in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you drop.',
		previewIntro:
			'{brand} for Call of Duty Warzone. ESP, loot ESP, smooth aim, and 2D radar, with Ricochet rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Run the loader from your delivery email.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID. Check Status after a patch.',
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
		blogImageCaption: 'Tips and updates for {game} cheats and hacks',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {game} cheats and hacks',
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
