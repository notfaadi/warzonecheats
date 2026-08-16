import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Warzone Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Warzone cheats for Windows PC — ESP, soft aim, radar, and Ricochet updates. Compare plans and buy.',
		h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Warzone Cheats is the undetected warzone cheats package for Windows PC — built for Warzone on Windows PC. Warzone esp wallhack, 2D radar, and warzone aimbot with Ricochet maintenance after every major patch.',
		imageAlt: "Warzone Cheats homepage hero — ESP and aimbot for Warzone",
		galleryTitle: 'Warzone Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Warzone cheats in 2026',
				'Warzone rewards map awareness. Warzone Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, Resurgence, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.warzone} and ${EXT.ricochet}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Ricochet maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/warzone-cheats/">Warzone cheats pillar</a>, <a href="/warzone-esp/">ESP guide</a>, <a href="/warzone-aimbot/">Aimbot controls</a>, and <a href="/warzone-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Warzone Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for BR matches and Resurgence — covering both “warzone cheats” and “warzone cheats” search intent.',
				'Browse the <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>, <a href="/warzone-esp/">wallhack</a>, and <a href="/warzone-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Activision service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'warzone-esp': {
		title: 'Warzone ESP 2026 | Player Boxes & Wallhack',
		description:
			'Warzone ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected warzone cheats for Warzone.',
		h1: 'Warzone ESP — Player Boxes & Wallhack',
		intro:
			'Warzone esp visibility tools for raid and Resurgence. Read enemy squads, squads, bots, loot, and distance before you commit — toggleable warzone esp wallhack overlays bundled in our warzone cheats package.',
		imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
		galleryTitle: 'Warzone ESP overlay visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Warzone wallhack guide',
		ctaSecondaryHref: '/warzone-esp/',
		sections: [
			section(
				'What Warzone ESP solves in raids',
				'Warzone maps punish incomplete information. Warzone Cheats ESP wallhack helps you spot enemy squads early, spot players before they push your angle, and mark high-value loot worth the detour.',
				'On raid, Resurgence, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Warzone’s live seasons and map updates are published by Activision (${EXT.warzone}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, gulag cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports BR matches and Resurgence lobbies alike.',
				'Compare category detail on the <a href="/warzone-esp/">wallhack page</a> and pair visibility with the <a href="/warzone-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and gulag awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Ricochet maintenance',
				'Warzone Cheats ESP wallhack is maintained for Warzone with rebuilds after Ricochet patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.ricochet} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Ricochet bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/warzone-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/warzone-cheats/">Warzone cheats pillar</a> and <a href="/warzone-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'warzone-aimbot': {
		title: 'Warzone Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Warzone aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our warzone cheats package.',
		h1: 'Warzone Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Warzone firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Warzone Aimbot combat previews',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/warzone-esp/',
		sections: [
			section(
				'Aimbot tuned for Warzone combat pace',
				'Warzone mixes long-range AR fights with close-quarters SMG pushes. Warzone Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.warzone}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and buildings clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/warzone-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/warzone-esp/">ESP wallhack</a> and <a href="/warzone-radar-hack/">2D radar</a> in the same Warzone Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Ricochet maintenance for undetected Aimbot',
				'Warzone Cheats rebuilds Aimbot behavior when Ricochet or major Warzone patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.ricochet}, then follow our <a href="/updates/">Ricochet maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Warzone Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full warzone cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Warzone Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Warzone Cheats package for Warzone on Windows PC — with Ricochet maintenance after major patches.',
		imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Warzone Cheats feature gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and gulag awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports BR matches and Resurgence. Deep-dive the <a href="/warzone-esp/">ESP page</a> and <a href="/warzone-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.warzone} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-raid the gulag, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Warzone sessions. See <a href="/warzone-radar-hack/">radar</a> and <a href="/warzone-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/warzone-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Ricochet maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Ricochet maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@warzonecheats.co.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/warzone-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Warzone Cheats Pricing | $35/mo or $150 Life',
		description:
			'Warzone cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Warzone Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Warzone Cheats — ESP wallhack, radar hack, and Aimbot for Warzone on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Warzone Cheats package visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Warzone Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Ricochet maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Warzone Cheats package — ideal if you play Warzone regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Ricochet or major Warzone patches.',
				`Season calendars and client updates come from ${EXT.warzone}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/warzone-cheats/">Warzone cheats</a>, <a href="/warzone-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Warzone Cheats Setup | Windows PC Guide',
		description:
			'Set up warzone cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Ricochet updates before your first queue.',
		h1: 'Warzone Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Warzone Cheats for Warzone on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Ricochet maintenance status before queueing.',
		imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Warzone Cheats setup visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Warzone Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Ricochet maintenance build before launching Warzone.',
				`Also glance at ${EXT.status} if Activision services look unstable on patch day — a platform outage is not a license fault.`,
				'Warzone Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for squads, bots, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Ricochet module live on <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>, and <a href="/warzone-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/warzone-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Warzone or Ricochet patches',
				'When Activision ships a major Warzone update or Ricochet patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.ricochet}. Our practical workflow is documented on the <a href="/updates/">Ricochet bypass page</a> and <a href="/warzone-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Warzone Cheats Updates | Ricochet Maintenance Log',
		description:
			'Warzone cheats update log: Ricochet rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Warzone Cheats Updates — Maintenance Log',
		intro:
			'Track Ricochet maintenance and Warzone patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Warzone Cheats live status after Ricochet and game patches",
		galleryTitle: 'Warzone patch and maintenance visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/warzone-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Warzone and Ricochet receive frequent patches. Warzone Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Activision platform health and this page for Warzone Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and Resurgence.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Ricochet compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Ricochet bypass guide</a> and <a href="/warzone-cheats/">undetected Warzone cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.warzone}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Ricochet update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Warzone Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Warzone cheats FAQ: ESP boxes, soft aim, Ricochet maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Warzone Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Warzone Cheats — ESP wallhack, radar hack, Aimbot, Ricochet maintenance, checkout, and Warzone compatibility on Windows PC.',
		imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Warzone Cheats FAQ visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Warzone Cheats?',
				'Warzone Cheats is an undetected cheat package for Warzone on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Ricochet maintenance updates.',
				'Packages cover raid and Resurgence. Explore <a href="/features/">Features</a> for the full control list and <a href="/warzone-esp/">ESP</a> / <a href="/warzone-aimbot/">Aimbot</a> for module detail.',
				`Warzone itself is published by Activision (${EXT.warzone}). Cheats are third-party tools and may violate Activision's rules — use is at your own risk.`,
			),
			section(
				'Are Warzone Cheats undetected in 2026?',
				'Warzone Cheats is maintained with rebuilds after Ricochet and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/warzone-cheats/">undetected Warzone cheats</a> and the <a href="/updates/">Ricochet guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@warzonecheats.co or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Warzone Cheats Support | Help & Contact',
		description:
			'Contact warzone cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Warzone Cheats Support — Contact Us',
		intro:
			'Get help with Warzone Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Ricochet maintenance for Warzone on Windows PC.',
		imageAlt: "Warzone Cheats support page for license and setup help",
		galleryTitle: 'Warzone Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Ricochet maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Warzone Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Activision bans.',
				`Account and game policy questions belong with Activision. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Ricochet bypass notes live on the dedicated <a href="/updates/">Ricochet page</a>.',
				'Email: support@warzonecheats.co',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Warzone Cheats 2026 | Ricochet Maintenance',
		description:
			'Undetected warzone cheats with Ricochet maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Warzone Cheats — Ricochet Maintenance',
		intro:
			'How Warzone Cheats stays maintained for Warzone after Ricochet patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Warzone Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Warzone Cheats visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Ricochet bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Warzone Cheats',
				'Undetected Warzone Cheats means the package is actively maintained against Ricochet and major Warzone patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Ricochet security updates.',
				`Anti-cheat technology is documented by ${EXT.ricochet}; Warzone client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Ricochet maintenance workflow',
				'When Ricochet or Warzone updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Ricochet bypass Warzone guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/warzone-cheats/">Warzone cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Warzone Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Warzone wallhack ESP with player boxes and loot markers for Windows PC. Undetected warzone cheats — learn overlays and buy.',
		h1: 'Warzone Wallhack — ESP Boxes & Visibility',
		intro:
			'Warzone wallhack ESP for Warzone — see players, loot, bosses, and containers through toggleable wallhack overlays built for BR matches and Resurgence.',
		imageAlt: "Warzone wallhack visibility through walls in a raid",
		galleryTitle: 'Warzone wallhack ESP gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Warzone ESP page',
		ctaSecondaryHref: '/warzone-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Warzone wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Warzone Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and gulag holds.',
				'For the broader ESP keyword page see <a href="/warzone-esp/">Warzone ESP</a>; for combat assist see <a href="/warzone-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, Resurgence, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.warzone}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/warzone-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Ricochet patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/warzone-cheats/">undetected Warzone cheats</a> and <a href="/updates/">Ricochet bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/warzone-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Warzone Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Warzone radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our warzone cheats package.',
		h1: 'Warzone Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Warzone — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Warzone 2D radar overlay showing nearby threats",
		galleryTitle: 'Warzone radar hack visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/warzone-esp/',
		sections: [
			section(
				'Why radar hack matters in Warzone',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Warzone Cheats radar complements <a href="/warzone-esp/">ESP wallhack</a> markers during squad pushes and gulag camp fights.',
				`Mode rules and seasonal changes come from ${EXT.warzone}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight gulag holds. Directional cues highlight flanks during building clears and flank pushes across raid and Resurgence.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/warzone-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/warzone-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Ricochet maintenance rebuilds with the full Warzone Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Warzone patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/warzone-cheats/">undetected status</a>.',
			),
		],
	},
	'ricochet': {
		title: 'Ricochet Bypass Warzone | Warzone Cheats Maintenance',
		description:
			'How warzone cheats rebuild after Ricochet patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Ricochet Bypass — Warzone Cheats Maintenance',
		intro:
			'Understand Ricochet maintenance for Warzone Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Warzone security updates.',
		imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
		galleryTitle: 'Ricochet maintenance visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Ricochet overview',
				`Ricochet is Activision's anti-cheat for Warzone on PC (see ${EXT.ricochet}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Warzone Cheats monitors Ricochet patch notes and Warzone seasonal updates from ${EXT.warzone} to schedule module reviews.`,
				'“Ricochet bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Ricochet patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Activision service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/warzone-cheats/">undetected Warzone cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Ricochet bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Warzone Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best warzone cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected warzone cheats with Ricochet maintenance — compare and buy.',
		h1: 'Warzone Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Warzone Cheats package for Warzone — undetected ESP wallhack, radar hack, and Aimbot with Ricochet maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Warzone Cheats product overview for Warzone",
		galleryTitle: 'Warzone Cheats 2026 gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why warzone cheats buyers choose Warzone Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Ricochet updates. Warzone Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.warzone}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and Resurgence loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/warzone-cheats/">Warzone cheats pillar</a>, <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>, <a href="/warzone-esp/">wallhack</a>, <a href="/warzone-radar-hack/">radar</a>, <a href="/warzone-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/warzone-cheats/">Warzone cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/warzone-cheats/">Warzone cheats</a> checklist, <a href="/blog/warzone-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@warzonecheats.co via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Warzone Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Warzone cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Ricochet maintenance. Compare warzone cheats options and buy the full package.',
		h1: 'Warzone Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Warzone cheats for raid and Resurgence combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Ricochet patches. This is the pillar guide for warzone cheats in 2026.',
		imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'Warzone cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/warzone-cheats/',
		sections: [
			section(
				'What Warzone cheats include in 2026',
				'Players searching for Warzone cheats usually want visibility and combat tools without stacking separate downloads. Warzone Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called warzone cheats.',
				'Coverage spans raid and Resurgence with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.warzone}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Warzone cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/warzone-cheats/">warzone cheats 2026</a> and <a href="/warzone-cheats/">Warzone cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/warzone-esp/">Warzone ESP</a>, <a href="/warzone-aimbot/">Warzone Aimbot</a>, <a href="/warzone-esp/">wallhack</a>, <a href="/warzone-radar-hack/">radar hack</a>, and <a href="/warzone-aimbot/">soft aim</a>.',
				'Blog guides expand Ricochet keyword: <a href="/blog/warzone-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/warzone-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-warzone-cheats-ricochet/">undetected Ricochet notes</a>.',
			),
			section(
				'Warzone cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Warzone Cheats maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/warzone-cheats/">mod menu</a>, <a href="/warzone-aimbot/">aimbot</a>, <a href="/warzone-esp/">ESP</a>.',
			),
			section(
				'Undetected Warzone cheats with Ricochet maintenance',
				'Undetected Warzone cheats require rebuilds after Ricochet and major Warzone patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.ricochet} for anti-cheat background and our <a href="/updates/">Ricochet bypass guide</a> for the practical workflow. Pair with <a href="/warzone-cheats/">undetected Warzone cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Warzone Hack Download 2026 | Instant Access',
		description:
			'Warzone cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Warzone Hack Download — Instant License Delivery',
		intro:
			'How Warzone cheat download works for Warzone — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Warzone Cheats download and install delivery flow",
		galleryTitle: 'Warzone cheat download visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Warzone cheat download delivery works',
				'After checkout confirms payment, Warzone Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Activision services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Warzone cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for BR matches and Resurgence.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Warzone or Ricochet patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/warzone-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Warzone Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Warzone mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected warzone cheats package.',
		h1: 'Warzone Mod Menu — In-Client Control Panel',
		intro:
			'Warzone mod menu controls for Warzone — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Warzone session on Windows PC.',
		imageAlt: "Warzone Cheats in-game menu controls",
		galleryTitle: 'Warzone mod menu gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Warzone mod menu controls',
				'A Warzone mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Warzone Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Warzone.',
				'Control deep-dives: <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>, <a href="/warzone-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for BR matches and Resurgence',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and gulag holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.warzone} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/warzone-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Ricochet patches',
				'Warzone mod menu behavior is rebuilt when Ricochet or major Warzone updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Ricochet bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Warzone Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Warzone soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our warzone cheats with ESP boxes.',
		h1: 'Warzone Soft Aim — Smooth Aimbot Controls',
		intro:
			'Warzone soft aim settings for Warzone — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Warzone soft aim FOV and smoothness settings",
		galleryTitle: 'Warzone soft aim gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/warzone-aimbot/',
		sections: [
			section(
				'What Warzone soft aim means',
				'Warzone soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Warzone Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/warzone-aimbot/">Warzone Aimbot</a>. Alternate wording: <a href="/warzone-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.warzone} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/warzone-esp/">ESP wallhack</a> and <a href="/warzone-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Ricochet maintenance',
				'Aimbot modules rebuild after Ricochet patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Warzone Cheats 2026 | Buyer Guide',
		description:
			'Best warzone cheats for 2026: ESP boxes, soft aim, and Ricochet maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Warzone Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Warzone cheats for Warzone in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Ricochet rebuilds and instant delivery.',
		imageAlt: "Warzone Cheats overview for Warzone on PC",
		galleryTitle: 'Best Warzone cheats gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Warzone cheats in 2026',
				'The Warzone cheats combine active Ricochet maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Warzone Cheats covers raid and Resurgence with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Warzone cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Warzone patches.',
				'Review <a href="/features/">Features</a>, <a href="/warzone-cheats/">undetected status</a>, and <a href="/warzone-cheats/">Warzone cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/warzone-esp/">ESP</a>, <a href="/warzone-aimbot/">Aimbot</a>, <a href="/warzone-cheats/">hacks</a>.',
			),
			section(
				'Buying the Warzone cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Activision terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Warzone Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Warzone aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our warzone cheats package.',
		h1: 'Warzone Aimbot Hack — Soft Aim Assist',
		intro:
			'Warzone aimbot hack tools for Warzone — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Warzone aimbot hack controls and bone priority",
		galleryTitle: 'Warzone aimbot hack gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/warzone-aimbot/',
		sections: [
			section(
				'Warzone aimbot hack vs visibility tools',
				'A Warzone aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Warzone Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Warzone combat pace across BR matches and Resurgence.',
				'Prefer softer tracking language? See <a href="/warzone-aimbot/">soft aim</a>. Full settings: <a href="/warzone-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid the gulag.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.warzone} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Ricochet updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Ricochet bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/warzone-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Warzone ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Warzone ESP hack with player boxes and loot markers for Windows PC. Undetected warzone cheats with — see overlays and buy.',
		h1: 'Warzone ESP Hack — Player Boxes Guide',
		intro:
			'Warzone ESP hack overlays for Warzone — player outlines, boss threat cues, loot and container markers with distance readouts across raid and Resurgence.',
		imageAlt: "Warzone ESP hack boxes and loot markers",
		galleryTitle: 'Warzone ESP hack gallery',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/warzone-esp/',
		sections: [
			section(
				'What a Warzone ESP hack shows',
				'A Warzone ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/warzone-esp/">Warzone ESP</a>. Wallhack wording: <a href="/warzone-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports BR matches and Resurgence.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Ricochet maintenance',
				'ESP hack modules rebuild after Ricochet and Warzone patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/warzone-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/warzone-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Warzone Unlock All 2026 | What It Really Means',
		description:
			'Warzone unlock all explained vs real warzone cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Warzone Unlock All — What Players Search For',
		intro:
			'Warzone unlock all is a common search term for Warzone — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Warzone Cheats actually provides on Windows PC.',
		imageAlt: "Warzone Cheats license features overview",
		galleryTitle: 'Warzone unlock all guide visuals',
		ctaPrimary: 'Buy Warzone Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Warzone unlock all usually means',
				'Warzone unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Warzone Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.warzone}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/warzone-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/warzone-cheats/">Warzone cheats</a> and <a href="/warzone-cheats/">Warzone cheats</a>.',
			),
			section(
				'Buying Warzone Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Warzone on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Ricochet patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Warzone Cheats',
		description:
			'Privacy policy for Warzone Cheats. How we handle support emails, order data, and checkout for warzone cheats licenses on warzonecheats.co.',
		h1: 'Privacy Policy',
		intro: 'How Warzone Cheats handles information when you browse warzonecheats.co or contact support about a Warzone license.',
		imageAlt: "Warzone Cheats privacy policy page",
		galleryTitle: 'Warzone Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Warzone Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@warzonecheats.co with your request details.',
				'Policy updates publish on this page. Continued use of warzonecheats.co after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Warzone Cheats',
		description:
			'Refund policy for Warzone Cheats. Digital delivery terms and eligibility for warzone cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Warzone Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Warzone.',
		imageAlt: "Warzone Cheats refund policy page",
		galleryTitle: 'Warzone Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Warzone Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@warzonecheats.co with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Warzone Cheats Rules',
		description:
			'Terms of use for warzonecheats.co and Warzone Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of warzonecheats.co and Warzone Cheats licenses for Warzone on Windows PC.',
		imageAlt: "Warzone Cheats terms of use page",
		galleryTitle: 'Warzone Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Warzone Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Warzone on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Warzone may violate Activision terms and result in account penalties. Warzone Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/warzone-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@warzonecheats.co for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
