import { siteConfig } from './site';

/** Screenshots used across product pages — simple warzone cheats keyword alts. */
export const tarkovImages = {
	hero: '/images/warzone-cheats-hero-full.png',
	espWallhack: '/images/tarkov-cheats-wallhack.webp',
	aimbotCombat: '/images/tarkov-cheats-aimbot.webp',
	aimbotSkeleton: '/images/tarkov-cheats-aimbot-view.webp',
	playerEsp: '/images/tarkov-cheats-radar.webp',
	cheatsCombat: '/images/tarkov-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/tarkov-cheats-raid.webp',
	loadoutBuilder: '/images/tarkov-cheats-radar.webp',
	squadFight: '/images/tarkov-cheats-aimbot-view.webp',
	cheatsPackage: '/images/tarkov-cheats-radar.webp',
	headerArt: '/images/tarkov-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/tarkov-cheats-raid.webp',
	gulagFight: '/images/tarkov-cheats-aimbot.webp',
	rebootFight: '/images/tarkov-cheats-aimbot.webp',
	resurgenceCombat: '/images/tarkov-cheats-wallhack.webp',
	resurgenceMode: '/images/tarkov-cheats-esp.webp',
	battleRoyaleIsland: '/images/tarkov-cheats-esp.webp',
	raidMap: '/images/tarkov-cheats-esp.webp',
	product: [
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'ESP player boxes in a Warzone match' },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Wallhack outlines for Warzone players' },
		{ src: '/images/tarkov-cheats-aimbot.webp', alt: 'Soft aim assist overlay for Warzone' },
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'Loot and contract ESP markers' },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/tarkov-cheats-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Wallhack view through cover' },
		{ src: '/images/tarkov-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'Loadout and loot ESP pins' },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Squad and player wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/tarkov-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
