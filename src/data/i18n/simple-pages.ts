import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See players, loadouts, and loot through walls with distance readouts.',
					'Use filters so the overlay stays clear in Verdansk, Rebirth, and Resurgence chaos.',
				],
				list: ['Player boxes & distance', 'Loot ESP and vehicle markers', 'Squad and bot filters'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'Aim help you can tune to feel natural.',
					'Set FOV, smoothness, and bone priority per weapon before you drop.',
				],
				list: ['Smooth aim strength', 'FOV and bone priority', 'Tune aim and ESP filters', 'Hotkeys mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'A simple 2D radar for threats outside your view.',
					'Spot flanks near the gulag without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in BR & Resurgence'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big {game} or {antiCheat} patches.',
					'Check Status before you play after a patch day.',
				],
				list: ['Patch notes on Status', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, loot ESP, smooth aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, loot ESP, smooth aim, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Cheats overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 17 Aug 2026 the package is online for Call of Duty Warzone on Windows PC. We post a new note here when a game or Ricochet patch needs a rebuild.',
					'If Status is green, you can drop. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Warzone Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-match look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for Call of Duty Warzone on Windows PC — built for BR matches and Resurgence.',
				],
				list: [
					'ESP / wallhack with loot ESP',
					'Smooth aim & aimbot profiles',
					'2D radar for flanks',
					'Ricochet rebuilds after patches',
				],
			},
			{
				h2: 'Built for Warzone matches',
				paragraphs: [
					'Read squads before you push, mark loadouts worth the risk, and stay aware near the gulag. Tune soft aim per weapon class for Verdansk, Rebirth, and long-range maps.',
				],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-aimbot/">Aimbot controls</a>',
					'<a href="/warzone-radar-hack/">Radar overlay</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'warzone-esp': page({
		title: 'Warzone ESP | {brand}',
		description:
			'Warzone ESP and wallhack for Call of Duty Warzone on Windows PC — player boxes, distance, loot filters, and clear overlays in matches.',
		h1: 'ESP',
		intro: 'See players and loot through walls during Warzone matches. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Cheats overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Boxes, distance, and filters for players, loadouts, and loot.'],
				list: ['Player ESP', 'Loot markers', 'Squad and bot filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear buildings, Rebirth, and Resurgence without flooding the screen.'],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and radar in one plan.'],
				list: [
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'warzone-aimbot': page({
		title: 'Warzone Aimbot | {brand}',
		description:
			'Warzone aimbot and soft aim for Call of Duty Warzone on Windows PC — FOV, smoothness, and bone priority you can tune per weapon.',
		h1: 'Aimbot',
		intro: 'Soft aim and aim assist you can tune for Warzone. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Cheats overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, smoothness, and bone priority before you drop.'],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and radar in one license.'],
				list: [
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Warzone Radar | {brand}',
		description:
			'Warzone 2D radar for Call of Duty Warzone on Windows PC — flank cues near the gulag without filling the whole screen.',
		h1: 'Radar',
		intro: 'A simple 2D radar for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Warzone Cheats overview',
		ctaSecondaryHref: '/warzone-cheats/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Nearby enemy cues with adjustable range for BR and Resurgence.'],
				list: ['Flank awareness', 'Gulag approaches', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use radar for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Run only that loader', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
