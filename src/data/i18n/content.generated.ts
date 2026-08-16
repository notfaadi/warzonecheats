import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'warzone-esp' | 'warzone-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'ricochet' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected warzone cheats 2026",
					subtitle: "Warzone cheats with warzone esp, radar hack and warzone aimbot for Windows PC — Ricochet maintenance included.",
					subtitleShort: "Warzone esp, radar & aimbot for PC",
					buyNow: "Buy Warzone Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Warzone Cheats — undetected warzone cheats live for Warzone on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Ricochet maintenance supported",
					antiCheatShort: "Ricochet supported",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected warzone cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Warzone Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Warzone Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Warzone cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "Warzone cheats for Windows PC — ESP, soft aim, radar, and Ricochet updates. Compare plans and buy.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Warzone Cheats is the undetected warzone cheats package for Windows PC — built for Warzone on Windows PC. Warzone esp wallhack, 2D radar, and warzone aimbot with Ricochet maintenance after every major patch.",
					imageAlt: "Warzone Cheats homepage hero — ESP and aimbot for Warzone",
					galleryTitle: "Warzone Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Warzone cheats in 2026",
							paragraphs: [
								"Warzone rewards map awareness. Warzone Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, Resurgence, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a> and <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Ricochet maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/warzone-cheats/\">Warzone cheats pillar</a>, <a href=\"/warzone-esp/\">ESP guide</a>, <a href=\"/warzone-aimbot/\">Aimbot controls</a>, and <a href=\"/warzone-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Warzone Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for BR matches and Resurgence — covering both “warzone cheats” and “warzone cheats” search intent.",
								"Browse the <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>, <a href=\"/warzone-esp/\">wallhack</a>, and <a href=\"/warzone-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> for Activision service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				"warzone-esp": {
					title: "Warzone ESP 2026 | Player Boxes & Wallhack",
					description: "Warzone ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected warzone cheats for Warzone.",
					h1: "Warzone ESP — Player Boxes & Wallhack",
					intro: "Warzone esp visibility tools for raid and Resurgence. Read enemy squads, squads, bots, loot, and distance before you commit — toggleable warzone esp wallhack overlays bundled in our warzone cheats package.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP overlay visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Warzone wallhack guide",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "What Warzone ESP solves in raids",
							paragraphs: [
								"Warzone maps punish incomplete information. Warzone Cheats ESP wallhack helps you spot enemy squads early, spot players before they push your angle, and mark high-value loot worth the detour.",
								"On raid, Resurgence, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Warzone’s live seasons and map updates are published by Activision (<a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, gulag cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports BR matches and Resurgence lobbies alike.",
								"Compare category detail on the <a href=\"/warzone-esp/\">wallhack page</a> and pair visibility with the <a href=\"/warzone-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and gulag awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Ricochet maintenance",
							paragraphs: [
								"Warzone Cheats ESP wallhack is maintained for Warzone with rebuilds after Ricochet patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Ricochet bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/warzone-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/warzone-cheats/\">Warzone cheats pillar</a> and <a href=\"/warzone-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot 2026 | Soft Aim for Windows PC",
					description: "Warzone aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our warzone cheats package.",
					h1: "Warzone Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Warzone firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot combat previews",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Warzone combat pace",
							paragraphs: [
								"Warzone mixes long-range AR fights with close-quarters SMG pushes. Warzone Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and buildings clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/warzone-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/warzone-esp/\">ESP wallhack</a> and <a href=\"/warzone-radar-hack/\">2D radar</a> in the same Warzone Cheats license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "Ricochet maintenance for undetected Aimbot",
							paragraphs: [
								"Warzone Cheats rebuilds Aimbot behavior when Ricochet or major Warzone patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> and anti-cheat context on <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a>, then follow our <a href=\"/updates/\">Ricochet maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot.webp",
				},
				features: {
					title: "Warzone Cheats Features | ESP, Soft Aim & Radar",
					description: "Full warzone cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Warzone Cheats Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the Warzone Cheats package for Warzone on Windows PC — with Ricochet maintenance after major patches.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Warzone Cheats feature gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and gulag awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports BR matches and Resurgence. Deep-dive the <a href=\"/warzone-esp/\">ESP page</a> and <a href=\"/warzone-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid the gulag, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Warzone sessions. See <a href=\"/warzone-radar-hack/\">radar</a> and <a href=\"/warzone-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/warzone-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Ricochet maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Ricochet maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@warzonecheats.co.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/warzone-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "Warzone Cheats Pricing | $35/mo or $150 Life",
					description: "Warzone cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Warzone Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Warzone Cheats — ESP wallhack, radar hack, and Aimbot for Warzone on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Warzone Cheats package visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Warzone Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Ricochet maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Warzone Cheats package — ideal if you play Warzone regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Ricochet or major Warzone patches.",
								"Season calendars and client updates come from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/warzone-cheats/\">Warzone cheats</a>, <a href=\"/warzone-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				setup: {
					title: "Warzone Cheats Setup | Windows PC Guide",
					description: "Set up warzone cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Ricochet updates before your first queue.",
					h1: "Warzone Cheats Setup — Windows PC Guide",
					intro: "Install and configure Warzone Cheats for Warzone on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Ricochet maintenance status before queueing.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Warzone Cheats setup visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Warzone Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Ricochet maintenance build before launching Warzone.",
								"Also glance at <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> if Activision services look unstable on patch day — a platform outage is not a license fault.",
								"Warzone Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for squads, bots, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Ricochet module live on <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>, and <a href=\"/warzone-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/warzone-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Warzone or Ricochet patches",
							paragraphs: [
								"When Activision ships a major Warzone update or Ricochet patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a>. Our practical workflow is documented on the <a href=\"/updates/\">Ricochet bypass page</a> and <a href=\"/warzone-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				updates: {
					title: "Warzone Cheats Updates | Ricochet Maintenance Log",
					description: "Warzone cheats update log: Ricochet rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Warzone Cheats Updates — Maintenance Log",
					intro: "Track Ricochet maintenance and Warzone patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Warzone patch and maintenance visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Warzone and Ricochet receive frequent patches. Warzone Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> for Activision platform health and this page for Warzone Cheats build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raid and Resurgence.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Ricochet compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Ricochet bypass guide</a> and <a href=\"/warzone-cheats/\">undetected Warzone cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Ricochet update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				faq: {
					title: "Warzone Cheats FAQ | ESP, Soft Aim & Radar Answers",
					description: "Warzone cheats FAQ: ESP boxes, soft aim, Ricochet maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Warzone Cheats FAQ — Common Questions",
					intro: "Answers about undetected Warzone Cheats — ESP wallhack, radar hack, Aimbot, Ricochet maintenance, checkout, and Warzone compatibility on Windows PC.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Warzone Cheats FAQ visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Warzone Cheats?",
							paragraphs: [
								"Warzone Cheats is an undetected cheat package for Warzone on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Ricochet maintenance updates.",
								"Packages cover raid and Resurgence. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/warzone-esp/\">ESP</a> / <a href=\"/warzone-aimbot/\">Aimbot</a> for module detail.",
								"Warzone itself is published by Activision (<a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>). Cheats are third-party tools and may violate Activision's rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Warzone Cheats undetected in 2026?",
							paragraphs: [
								"Warzone Cheats is maintained with rebuilds after Ricochet and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/warzone-cheats/\">undetected Warzone cheats</a> and the <a href=\"/updates/\">Ricochet guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@warzonecheats.co or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				support: {
					title: "Warzone Cheats Support | Help & Contact",
					description: "Contact warzone cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Warzone Cheats Support — Contact Us",
					intro: "Get help with Warzone Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Ricochet maintenance for Warzone on Windows PC.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Warzone Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Ricochet maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Warzone Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Activision bans.",
								"Account and game policy questions belong with Activision. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Ricochet bypass notes live on the dedicated <a href=\"/updates/\">Ricochet page</a>.",
								"Email: support@warzonecheats.co",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				undetected: {
					title: "Undetected Warzone Cheats 2026 | Ricochet Maintenance",
					description: "Undetected warzone cheats with Ricochet maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Warzone Cheats — Ricochet Maintenance",
					intro: "How Warzone Cheats stays maintained for Warzone after Ricochet patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Warzone Cheats visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Ricochet bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Warzone Cheats",
							paragraphs: [
								"Undetected Warzone Cheats means the package is actively maintained against Ricochet and major Warzone patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Ricochet security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a>; Warzone client updates ship through <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Ricochet maintenance workflow",
							paragraphs: [
								"When Ricochet or Warzone updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Ricochet bypass Warzone guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/warzone-cheats/\">Warzone cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Warzone Wallhack 2026 | ESP Boxes & Visibility",
					description: "Warzone wallhack ESP with player boxes and loot markers for Windows PC. Undetected warzone cheats — learn overlays and buy.",
					h1: "Warzone Wallhack — ESP Boxes & Visibility",
					intro: "Warzone wallhack ESP for Warzone — see players, loot, bosses, and containers through toggleable wallhack overlays built for BR matches and Resurgence.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone wallhack ESP gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Warzone ESP page",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Warzone wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Warzone Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and gulag holds.",
								"For the broader ESP keyword page see <a href=\"/warzone-esp/\">Warzone ESP</a>; for combat assist see <a href=\"/warzone-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, Resurgence, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/warzone-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Ricochet patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/warzone-cheats/\">undetected Warzone cheats</a> and <a href=\"/updates/\">Ricochet bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/warzone-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-wallhack.webp",
				},
				radar: {
					title: "Warzone Radar Hack 2026 | 2D Threat Overlay",
					description: "Warzone radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our warzone cheats package.",
					h1: "Warzone Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Warzone — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Warzone radar hack visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Warzone",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Warzone Cheats radar complements <a href=\"/warzone-esp/\">ESP wallhack</a> markers during squad pushes and gulag camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight gulag holds. Directional cues highlight flanks during building clears and flank pushes across raid and Resurgence.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/warzone-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/warzone-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Ricochet maintenance rebuilds with the full Warzone Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Warzone patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/warzone-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				ricochet: {
					title: "Ricochet Bypass Warzone | Warzone Cheats Maintenance",
					description: "How warzone cheats rebuild after Ricochet patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Ricochet Bypass — Warzone Cheats Maintenance",
					intro: "Understand Ricochet maintenance for Warzone Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Warzone security updates.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet maintenance visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet overview",
							paragraphs: [
								"Ricochet is Activision's anti-cheat for Warzone on PC (see <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Warzone Cheats monitors Ricochet patch notes and Warzone seasonal updates from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a> to schedule module reviews.",
								"“Ricochet bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Ricochet patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Activision service health on <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/warzone-cheats/\">undetected Warzone cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Ricochet bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best warzone cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected warzone cheats with Ricochet maintenance — compare and buy.",
					h1: "Warzone Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Warzone Cheats package for Warzone — undetected ESP wallhack, radar hack, and Aimbot with Ricochet maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026 gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why warzone cheats buyers choose Warzone Cheats in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Ricochet updates. Warzone Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and Resurgence loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/warzone-cheats/\">Warzone cheats pillar</a>, <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>, <a href=\"/warzone-esp/\">wallhack</a>, <a href=\"/warzone-radar-hack/\">radar</a>, <a href=\"/warzone-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/warzone-cheats/\">Warzone cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/warzone-cheats/\">Warzone cheats</a> checklist, <a href=\"/blog/warzone-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@warzonecheats.co via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				hacks: {
					title: "Warzone Cheats 2026 | Undetected ESP Aimbot Guide",
					description: "Warzone cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Ricochet maintenance. Compare warzone cheats options and buy the full",
					h1: "Warzone Cheats — Undetected ESP, Aimbot & Wallhack",
					intro: "Warzone cheats for raid and Resurgence combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Ricochet patches. This is the pillar guide for warzone cheats in 2026.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "What Warzone cheats include in 2026",
							paragraphs: [
								"Players searching for Warzone cheats usually want visibility and combat tools without stacking separate downloads. Warzone Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called warzone cheats.",
								"Coverage spans raid and Resurgence with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this Warzone cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/warzone-cheats/\">warzone cheats 2026</a> and <a href=\"/warzone-cheats/\">Warzone cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/warzone-esp/\">Warzone ESP</a>, <a href=\"/warzone-aimbot/\">Warzone Aimbot</a>, <a href=\"/warzone-esp/\">wallhack</a>, <a href=\"/warzone-radar-hack/\">radar hack</a>, and <a href=\"/warzone-aimbot/\">soft aim</a>.",
								"Blog guides expand Ricochet keyword: <a href=\"/blog/warzone-cheats-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/warzone-cheats-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-warzone-cheats-ricochet/\">undetected Ricochet notes</a>.",
							],
						},
						{
							h2: "Warzone cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Warzone Cheats maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/warzone-cheats/\">mod menu</a>, <a href=\"/warzone-aimbot/\">aimbot</a>, <a href=\"/warzone-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Warzone cheats with Ricochet maintenance",
							paragraphs: [
								"Undetected Warzone cheats require rebuilds after Ricochet and major Warzone patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.callofduty.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Ricochet</a> for anti-cheat background and our <a href=\"/updates/\">Ricochet bypass guide</a> for the practical workflow. Pair with <a href=\"/warzone-cheats/\">undetected Warzone cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				"cheat-download": {
					title: "Warzone Hack Download 2026 | Instant Access",
					description: "Warzone cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Warzone Hack Download — Instant License Delivery",
					intro: "How Warzone cheat download works for Warzone — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone cheat download visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Warzone cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Warzone Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Activision services are down, check <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Warzone cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for BR matches and Resurgence.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Warzone or Ricochet patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/warzone-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				"mod-menu": {
					title: "Warzone Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Warzone mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected warzone cheats package.",
					h1: "Warzone Mod Menu — In-Client Control Panel",
					intro: "Warzone mod menu controls for Warzone — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Warzone session on Windows PC.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone mod menu gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Warzone mod menu controls",
							paragraphs: [
								"A Warzone mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Warzone Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Warzone.",
								"Control deep-dives: <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>, <a href=\"/warzone-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for BR matches and Resurgence",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and gulag holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.warzone} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/warzone-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Ricochet patches",
							paragraphs: [
								"Warzone mod menu behavior is rebuilt when Ricochet or major Warzone updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Ricochet bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				"soft-aim": {
					title: "Warzone Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Warzone soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our warzone cheats with ESP boxes.",
					h1: "Warzone Soft Aim — Smooth Aimbot Controls",
					intro: "Warzone soft aim settings for Warzone — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone soft aim gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "What Warzone soft aim means",
							paragraphs: [
								"Warzone soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Warzone Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/warzone-aimbot/\">Warzone Aimbot</a>. Alternate wording: <a href=\"/warzone-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/warzone-esp/\">ESP wallhack</a> and <a href=\"/warzone-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Ricochet maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Ricochet patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Warzone Cheats 2026 | Buyer Guide",
					description: "Best warzone cheats for 2026: ESP boxes, soft aim, and Ricochet maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Warzone Cheats — 2026 Buyer Guide",
					intro: "Compare the Warzone cheats for Warzone in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Ricochet rebuilds and instant delivery.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Best Warzone cheats gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Warzone cheats in 2026",
							paragraphs: [
								"The Warzone cheats combine active Ricochet maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Warzone Cheats covers raid and Resurgence with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://support.activision.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Warzone cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Warzone patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/warzone-cheats/\">undetected status</a>, and <a href=\"/warzone-cheats/\">Warzone cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/warzone-esp/\">ESP</a>, <a href=\"/warzone-aimbot/\">Aimbot</a>, <a href=\"/warzone-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Warzone cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Activision terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hack 2026 | Soft Aim Assist",
					description: "Warzone aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our warzone cheats package.",
					h1: "Warzone Aimbot Hack — Soft Aim Assist",
					intro: "Warzone aimbot hack tools for Warzone — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone aimbot hack gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone aimbot hack vs visibility tools",
							paragraphs: [
								"A Warzone aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Warzone Cheats bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Warzone combat pace across BR matches and Resurgence.",
								"Prefer softer tracking language? See <a href=\"/warzone-aimbot/\">soft aim</a>. Full settings: <a href=\"/warzone-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid the gulag.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Ricochet updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Ricochet bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/warzone-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Warzone ESP Hack 2026 | Player Boxes & Loot",
					description: "Warzone ESP hack with player boxes and loot markers for Windows PC. Undetected warzone cheats with — see overlays and buy.",
					h1: "Warzone ESP Hack — Player Boxes Guide",
					intro: "Warzone ESP hack overlays for Warzone — player outlines, boss threat cues, loot and container markers with distance readouts across raid and Resurgence.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP hack gallery",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "What a Warzone ESP hack shows",
							paragraphs: [
								"A Warzone ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/warzone-esp/\">Warzone ESP</a>. Wallhack wording: <a href=\"/warzone-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports BR matches and Resurgence.",
								"POI and loot changes publish through <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Ricochet maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Ricochet and Warzone patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/warzone-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/warzone-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-wallhack.webp",
				},
				"unlock-all": {
					title: "Warzone Unlock All 2026 | What It Really Means",
					description: "Warzone unlock all explained vs real warzone cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Warzone Unlock All — What Players Search For",
					intro: "Warzone unlock all is a common search term for Warzone — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Warzone Cheats actually provides on Windows PC.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone unlock all guide visuals",
					ctaPrimary: "Buy Warzone Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Warzone unlock all usually means",
							paragraphs: [
								"Warzone unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Warzone Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.callofduty.com/warzone\" target=\"_blank\" rel=\"noopener noreferrer\">Warzone</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/warzone-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/warzone-cheats/\">Warzone cheats</a> and <a href=\"/warzone-cheats/\">Warzone cheats</a>.",
							],
						},
						{
							h2: "Buying Warzone Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Warzone on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Ricochet patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Warzone Cheats",
					description: "Privacy policy for Warzone Cheats. How we handle support emails, order data, and checkout for warzone cheats licenses on warzonecheats.co.",
					h1: "Privacy Policy",
					intro: "How Warzone Cheats handles information when you browse warzonecheats.co or contact support about a Warzone license.",
					imageAlt: "Warzone Cheats privacy policy page",
					galleryTitle: "Warzone Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Warzone Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@warzonecheats.co with your request details.",
								"Policy updates publish on this page. Continued use of warzonecheats.co after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Warzone Cheats",
					description: "Refund policy for Warzone Cheats. Digital delivery terms and eligibility for warzone cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Warzone Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Warzone.",
					imageAlt: "Warzone Cheats refund policy page",
					galleryTitle: "Warzone Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Warzone Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@warzonecheats.co with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Warzone Cheats Rules",
					description: "Terms of use for warzonecheats.co and Warzone Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of warzonecheats.co and Warzone Cheats licenses for Warzone on Windows PC.",
					imageAlt: "Warzone Cheats terms of use page",
					galleryTitle: "Warzone Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Warzone Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Warzone on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Warzone may violate Activision terms and result in account penalties. Warzone Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/warzone-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@warzonecheats.co for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Warzone indetectables",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack y Aimbot para Warzone en PC Windows — mantenimiento Ricochet incluido.",
					subtitleShort: "ESP, radar y Aimbot para Warzone PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Warzone Cheats está activo para Warzone en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Ricochet incluido",
					antiCheatShort: "Ricochet incluido",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Warzone",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Warzone Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Warzone — checkout en Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Warzone indetectables para Warzone en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Ricochet. Entrega digital instantánea.",
					h1: "Warzone Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Warzone en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Ricochet tras cada parche.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galería Warzone Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Warzone Cheats en 2026",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Ideal para leer escuadrones enemigos en BR y Resurgence.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Cajas de jugador y wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Controles soft aim",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Funciones.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Precios.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Instalación.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Ricochet",
					description: "Actualizaciones: Ricochet patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Actualizaciones.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Ricochet patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Soporte.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Ricochet patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Trucos indetectables.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. undetected maintenance after Ricochet patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | Visibilidad ESP",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Mantenimiento de parches",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Warzone 2026 | Guía del comprador",
					description: "Trucos Warzone 2026: 2026 Warzone cheats checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Warzone 2026",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Trucos Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Trucos Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Trucos Warzone 2026",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Warzone | Guía ESP y Aimbot",
					description: "Trucos Warzone: the Warzone hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Trucos Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Warzone Cheats | Acceso instantáneo",
					description: "Descarga Warzone Cheats: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Warzone Cheats",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Descarga Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Descarga Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Warzone Cheats",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Warzone | Controles en partida",
					description: "Menú mod Warzone: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Menú mod Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Menú mod Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Ajustes soft aim",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Warzone | Lista de compra",
					description: "Mejores trucos Warzone: what to compare before buying Warzone cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Mejores trucos Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Mejores trucos Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. what to compare before buying Warzone cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Asistencia soft aim",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. undetected Aimbot hack assist for Warzone.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Cajas y loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | Qué significa",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Warzone Cheats",
					description: "Política de privacidad for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Política de privacidad for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Warzone Cheats",
					description: "Política de reembolso for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Política de reembolso for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Ricochet. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Warzone Cheats",
					description: "Términos de uso for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Términos de uso for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Ricochet maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Warzone Cheats ofrece ESP wallhack, radar hack y warzone aimbot indetectables para Warzone en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@warzonecheats.co para solicitudes legales o de soporte.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Warzone indétectables",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Warzone sur PC Windows — maintenance Ricochet incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Warzone PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Warzone Cheats est actif pour Warzone sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Ricochet incluse",
					antiCheatShort: "Ricochet inclus",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Warzone",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Warzone Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Warzone indétectables pour Warzone sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Ricochet. Livraison numérique instantanée.",
					h1: "Warzone Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Warzone sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Ricochet après chaque patch.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galerie Warzone Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Warzone Cheats en 2026",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Parfait pour lire les escouades ennemies en BR et Resurgence.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Boîtes joueur et wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Contrôles soft aim",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Fonctions.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Tarifs.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Installation.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Ricochet",
					description: "Mises à jour: Ricochet patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Mises à jour.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Ricochet patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Support.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Ricochet patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Triches indétectables.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. undetected maintenance after Ricochet patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | Visibilité ESP",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Maintenance des patchs",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Warzone 2026 | Guide acheteur",
					description: "Triches Warzone 2026: 2026 Warzone cheats checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Warzone 2026",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Triches Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Triches Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Triches Warzone 2026",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. 2026 Warzone cheats checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Warzone | Guide ESP et Aimbot",
					description: "Triches Warzone: the Warzone hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Triches Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Warzone Cheats | Accès instantané",
					description: "Téléchargement Warzone Cheats: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Warzone Cheats",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Téléchargement Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Téléchargement Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Warzone Cheats",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Warzone | Contrôles en jeu",
					description: "Menu mod Warzone: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Menu mod Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Menu mod Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Réglages soft aim",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Warzone | Checklist acheteur",
					description: "Meilleures triches Warzone: what to compare before buying Warzone cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Meilleures triches Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Meilleures triches Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. what to compare before buying Warzone cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Assistance soft aim",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. undetected Aimbot hack assist for Warzone.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Boîtes et loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | Ce que ça signifie",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter Warzone Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Warzone Cheats",
					description: "Politique de confidentialité for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Politique de confidentialité for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Warzone Cheats",
					description: "Politique de remboursement for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Politique de remboursement for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Ricochet. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Warzone Cheats",
					description: "Conditions d'utilisation for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Conditions d'utilisation for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Ricochet.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Warzone Cheats combine ESP wallhack, radar hack et warzone aimbot indétectables pour Warzone sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@warzonecheats.co pour le support ou les demandes légales.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Warzone Cheats",
					accentShort: "Warzone Cheats",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Warzone auf Windows PC — Ricochet-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Warzone PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Warzone Cheats Paket ist live für Warzone auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Ricochet-Wartung unterstützt",
					antiCheatShort: "Ricochet Support",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Warzone Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Warzone — Checkout über Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Warzone Cheats für Warzone auf PC. ESP Wallhack, Radar Hack und Aimbot mit Ricochet-Wartung. Sofortige digitale Lieferung.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Warzone: ESP Wallhack, Radar und Aimbot mit Ricochet-Wartung nach jedem Patch.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Warzone Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Warzone Cheats 2026 führt",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Ideal um feindliche Squads in BR und Resurgence zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Spielerboxen & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft-Aim Steuerung",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Features.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Preise.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Setup.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Ricochet Wartungslog",
					description: "Updates: Ricochet patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Updates.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Ricochet patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Support.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Ricochet patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Undetected Cheats.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. undetected maintenance after Ricochet patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Sichtbarkeit",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch-Wartung",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Käuferleitfaden",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Cheat Download | Sofortzugang",
					description: "Warzone Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Cheat Download",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Cheat Download.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Cheat Download",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone Mod-Menü | In-Game Toggles",
					description: "Warzone Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Mod-Menü",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Mod-Menü.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone Mod-Menü",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Mod-Menü",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Soft-Aim Einstellungen",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Warzone Cheats | Käufer-Checkliste",
					description: "Beste Warzone Cheats: what to compare before buying Warzone cheats. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Warzone Cheats",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Beste Warzone Cheats.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Beste Warzone Cheats",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Warzone Cheats",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. what to compare before buying Warzone cheats.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hack | Soft-Aim Assist",
					description: "Warzone Aimbot Hack: undetected Aimbot hack assist for Warzone. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Aimbot Hack",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Aimbot Hack.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Aimbot Hack",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. undetected Aimbot hack assist for Warzone.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP Hack | Boxen & Loot",
					description: "Warzone ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone ESP Hack",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone ESP Hack.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP Hack",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | Was es bedeutet",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Warzone Cheats",
					description: "Datenschutz for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Datenschutz for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Warzone Cheats",
					description: "Rückerstattung for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Rückerstattung for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Ricochet-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Warzone Cheats",
					description: "Nutzungsbedingungen for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Nutzungsbedingungen for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Ricochet-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Warzone Cheats bündelt ESP wallhack, radar hack und warzone aimbot als undetected Paket für Warzone auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@warzonecheats.co für Support und rechtliche Anfragen.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Warzone indetectáveis",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot para Warzone no PC Windows — manutenção Ricochet incluída.",
					subtitleShort: "ESP, radar e Aimbot para Warzone PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Warzone Cheats está ativo para Warzone no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Ricochet incluída",
					antiCheatShort: "Ricochet incluído",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Warzone",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Warzone Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Warzone indetectáveis para Warzone no PC. ESP wallhack, radar hack e Aimbot com manutenção Ricochet. Entrega digital instantánea.",
					h1: "Warzone Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Warzone no Windows PC: ESP wallhack, radar e Aimbot com manutenção Ricochet após cada patch.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galeria Warzone Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Warzone Cheats em 2026",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Ideal para ler esquadrões inimigos em BR e Resurgence.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Caixas de jogador e wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Controles soft aim",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Recursos.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Preços.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Instalação.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Ricochet",
					description: "Atualizações: Ricochet patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Atualizações.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Ricochet patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Suporte.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Ricochet patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Cheats indetectáveis.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. undetected maintenance after Ricochet patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | Visibilidade ESP",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Manutenção de patches",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Warzone 2026 | Guia do comprador",
					description: "Cheats Warzone 2026: 2026 Warzone cheats checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Warzone 2026",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Cheats Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Cheats Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheats Warzone 2026",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. 2026 Warzone cheats checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Warzone | Guia ESP e Aimbot",
					description: "Cheats Warzone: the Warzone hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Cheats Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Warzone Cheats | Acesso instantâneo",
					description: "Download Warzone Cheats: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Warzone Cheats",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Download Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Download Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Warzone Cheats",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Warzone | Controles in-game",
					description: "Menu mod Warzone: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Menu mod Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Menu mod Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Ajustes soft aim",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Warzone | Checklist do comprador",
					description: "Melhores cheats Warzone: what to compare before buying Warzone cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Melhores cheats Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Melhores cheats Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. what to compare before buying Warzone cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Assistência soft aim",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. undetected Aimbot hack assist for Warzone.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Caixas e loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | O que significa",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar Warzone Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Warzone Cheats",
					description: "Política de privacidade for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Política de privacidade for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Warzone Cheats",
					description: "Política de reembolso for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Política de reembolso for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Ricochet. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Warzone Cheats",
					description: "Termos de uso for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Termos de uso for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats reúne ESP wallhack, radar hack e warzone aimbot indetectáveis para Warzone no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@warzonecheats.co para suporte ou questões legais.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Warzone indetectable",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack e Aimbot per Warzone su PC Windows — manutenzione Ricochet inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Warzone PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Warzone Cheats è attivo per Warzone su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Ricochet supportata",
					antiCheatShort: "Ricochet supportato",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Warzone",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Warzone Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Warzone indetectable per Warzone su PC. ESP wallhack, radar hack e Aimbot con manutenzione Ricochet. Consegna digitale istantanea.",
					h1: "Warzone Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Warzone su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Ricochet dopo ogni patch.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galleria Warzone Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Warzone Cheats nel 2026",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Ideale per leggere squadre nemiche in BR e Resurgence.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Box giocatore e wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Controlli soft aim",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Funzioni.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Prezzi.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Setup.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Ricochet",
					description: "Aggiornamenti: Ricochet patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Aggiornamenti.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Ricochet patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Supporto.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Ricochet patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Cheat indetectable.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. undetected maintenance after Ricochet patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | Visibilità ESP",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Manutenzione patch",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Warzone 2026 | Guida acquirente",
					description: "Cheat Warzone 2026: 2026 Warzone cheats checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Warzone 2026",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Cheat Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Cheat Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheat Warzone 2026",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. 2026 Warzone cheats checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Warzone | Guida ESP e Aimbot",
					description: "Cheat Warzone: the Warzone hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Cheat Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Warzone Cheats | Accesso istantaneo",
					description: "Download Warzone Cheats: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Warzone Cheats",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Download Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Download Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Warzone Cheats",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Warzone | Toggle in-game",
					description: "Mod menu Warzone: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Mod menu Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Mod menu Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Impostazioni soft aim",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Warzone | Checklist acquirente",
					description: "Migliori cheat Warzone: what to compare before buying Warzone cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Migliori cheat Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Migliori cheat Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. what to compare before buying Warzone cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Assist soft aim",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. undetected Aimbot hack assist for Warzone.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Box e loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | Cosa significa",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista Warzone Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Warzone Cheats",
					description: "Informativa privacy for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Informativa privacy for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Warzone Cheats",
					description: "Politica di rimborso for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Politica di rimborso for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Ricochet. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Warzone Cheats",
					description: "Termini di utilizzo for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Termini di utilizzo for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats unisce ESP wallhack, radar hack e warzone aimbot indetectable per Warzone su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@warzonecheats.co per supporto o richieste legali.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Warzone Cheats",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Warzone op Windows PC — Ricochet-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Warzone PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Warzone Cheats pakket is live voor Warzone op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Ricochet-onderhoud ondersteund",
					antiCheatShort: "Ricochet support",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Warzone Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Warzone cheats voor Warzone op PC. ESP wallhack, radar hack en Aimbot met Ricochet-onderhoud. Directe digitale levering.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Warzone: ESP wallhack, radar en Aimbot met Ricochet-onderhoud na elke patch.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Warzone Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Warzone Cheats in 2026",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Ideaal om vijandelijke squads te lezen in BR en Resurgence.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Functies.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Prijzen.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Setup.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Ricochet Maintenance Log",
					description: "Updates: Ricochet patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Updates.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Ricochet patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Support.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Ricochet Safe Status",
					description: "Undetected Cheats: undetected maintenance after Ricochet patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Undetected Cheats.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. undetected maintenance after Ricochet patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Buyer Guide",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Cheat Download | Instant Access",
					description: "Warzone Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Cheat Download",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Cheat Download.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Cheat Download",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone Mod Menu | In-Game Toggles",
					description: "Warzone Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Mod Menu",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Mod Menu.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone Mod Menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Mod Menu",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Warzone Cheats | Buyer Checklist",
					description: "Beste Warzone Cheats: what to compare before buying Warzone cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Warzone Cheats",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Beste Warzone Cheats.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Beste Warzone Cheats",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Warzone Cheats",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. what to compare before buying Warzone cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hack | Soft Aim Assist",
					description: "Warzone Aimbot Hack: undetected Aimbot hack assist for Warzone. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Aimbot Hack",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Aimbot Hack.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Aimbot Hack",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. undetected Aimbot hack assist for Warzone.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP Hack | Boxes & Loot",
					description: "Warzone ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone ESP Hack",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone ESP Hack.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP Hack",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
								"support@warzonecheats.co voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Warzone Cheats",
					description: "Privacybeleid for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Privacybeleid for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co voor support en juridische vragen.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Warzone Cheats",
					description: "Restitutiebeleid for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Restitutiebeleid for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Ricochet-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co voor support en juridische vragen.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Warzone Cheats",
					description: "Gebruiksvoorwaarden for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Gebruiksvoorwaarden for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Ricochet-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats bundelt ESP wallhack, radar hack en warzone aimbot als undetected pakket voor Warzone op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co voor support en juridische vragen.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Warzone",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack i Aimbot do Warzone na PC Windows — konserwacja Ricochet w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Warzone PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Warzone Cheats jest aktywny dla Warzone na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Ricochet",
					antiCheatShort: "Ricochet wsparcie",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Warzone",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Warzone Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Warzone — checkout przez Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Warzone dla Warzone na PC. ESP wallhack, radar hack i Aimbot z konserwacją Ricochet. Natychmiastowa dostawa cyfrowa.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Warzone na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Ricochet po każdym patchu.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galeria Warzone Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Warzone Cheats w 2026",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Idealny do czytania wrogich squadów w BR i Resurgence.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Player Boxes & Wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Soft Aim Controls",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Funkcje.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Cennik.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Instalacja.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Ricochet Maintenance Log",
					description: "Aktualizacje: Ricochet patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Aktualizacje.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Ricochet patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Wsparcie.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Ricochet Safe Status",
					description: "Cheaty undetected: undetected maintenance after Ricochet patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Cheaty undetected.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. undetected maintenance after Ricochet patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | ESP Visibility",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Patch Maintenance",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Warzone 2026 | Buyer Guide",
					description: "Cheaty Warzone 2026: 2026 Warzone cheats checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Warzone 2026",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Cheaty Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Cheaty Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheaty Warzone 2026",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. 2026 Warzone cheats checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Warzone | ESP Aimbot Guide",
					description: "Cheaty Warzone: the Warzone hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Cheaty Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Warzone Cheats | Instant Access",
					description: "Pobieranie Warzone Cheats: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Warzone Cheats",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Pobieranie Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Pobieranie Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Warzone Cheats",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Warzone | In-Game Toggles",
					description: "Mod menu Warzone: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Mod menu Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Mod menu Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Smooth Aim Settings",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Warzone | Buyer Checklist",
					description: "Najlepsze cheaty Warzone: what to compare before buying Warzone cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Najlepsze cheaty Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Najlepsze cheaty Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. what to compare before buying Warzone cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Soft Aim Assist",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. undetected Aimbot hack assist for Warzone.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Boxes & Loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | What It Means",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup Warzone Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Warzone Cheats",
					description: "Polityka prywatności for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Polityka prywatności for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Warzone Cheats",
					description: "Polityka zwrotów for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Polityka zwrotów for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Ricochet. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Warzone Cheats",
					description: "Warunki użytkowania for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Warunki użytkowania for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats łączy ESP wallhack, radar hack i warzone aimbot jako pakiet undetected dla Warzone na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co w sprawach wsparcia i prawnych.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Warzone",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack и Aimbot для Warzone на Windows PC — обслуживание Ricochet включено.",
					subtitleShort: "ESP, radar и Aimbot для Warzone PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Warzone Cheats активен для Warzone на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Ricochet",
					antiCheatShort: "Ricochet поддержка",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Warzone Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Warzone — оплата через Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Warzone для Warzone на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Ricochet. Мгновенная цифровая доставка.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Warzone на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Ricochet после патчей.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Галерея Warzone Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Warzone Cheats в 2026",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Идеально для чтения вражеских отрядов в BR и Resurgence.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Боксы игроков и wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Управление soft aim",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Функции.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Цены.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Установка.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Ricochet",
					description: "Обновления: Ricochet patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Обновления.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Ricochet patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Поддержка.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Ricochet patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Undetected читы.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. undetected maintenance after Ricochet patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | Видимость ESP",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Обслуживание патчей",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Warzone 2026 | Гайд покупателя",
					description: "Читы Warzone 2026: 2026 Warzone cheats checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Warzone 2026",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Читы Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Читы Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Читы Warzone 2026",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Warzone | Гайд ESP и Aimbot",
					description: "Читы Warzone: the Warzone hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Читы Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Warzone Cheats | Мгновенный доступ",
					description: "Скачать Warzone Cheats: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Warzone Cheats",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Скачать Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Скачать Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Warzone Cheats",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Warzone | Игровые переключатели",
					description: "Мод-меню Warzone: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Мод-меню Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Мод-меню Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Настройки soft aim",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Warzone | Чеклист покупателя",
					description: "Лучшие читы Warzone: what to compare before buying Warzone cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Лучшие читы Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Лучшие читы Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. what to compare before buying Warzone cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Warzone | Soft aim ассист",
					description: "Хак aimbot Warzone: undetected Aimbot hack assist for Warzone. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Хак aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. undetected Aimbot hack assist for Warzone.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Warzone | Боксы и лут",
					description: "Хак ESP Warzone: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Хак ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Хак ESP Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | Что это значит",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить Warzone Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
								"support@warzonecheats.co для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Warzone Cheats",
					description: "Политика конфиденциальности for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Политика конфиденциальности for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co для поддержки и юридических вопросов.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Warzone Cheats",
					description: "Политика возврата for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Политика возврата for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Ricochet. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co для поддержки и юридических вопросов.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Warzone Cheats",
					description: "Условия использования for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Условия использования for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats объединяет ESP wallhack, radar hack и warzone aimbot в undetected пакете для Warzone на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co для поддержки и юридических вопросов.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Warzone hileleri",
					accentShort: "Warzone Cheats",
					subtitle: "Warzone Windows PC için ESP wallhack, radar hack ve Aimbot — Ricochet bakımı dahil.",
					subtitleShort: "Warzone PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Warzone Cheats paketi Warzone Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Ricochet bakım desteği",
					antiCheatShort: "Ricochet destek",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Warzone Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Warzone için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "Warzone için undetected hileler. ESP wallhack, radar hack ve Aimbot — Ricochet bakımı. Anında dijital teslimat.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "Warzone Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Ricochet bakımı dahil.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Warzone Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Warzone Cheats",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. BR ve Resurgence'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Ricochet Maintenance Log",
					description: "Güncellemeler: Ricochet patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Ricochet patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and Ricochet questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. SSS.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. ESP, soft aim, delivery, and Ricochet questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Destek.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Ricochet Safe Status",
					description: "Undetected hileler: undetected maintenance after Ricochet patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. undetected maintenance after Ricochet patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet bypass | Patch Maintenance",
					description: "Ricochet bypass: how Ricochet updates are handled for Warzone hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "Ricochet bypass",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Ricochet bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet bypass",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. how Ricochet updates are handled for Warzone hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Hileleri 2026 | Buyer Guide",
					description: "Warzone Hileleri 2026: 2026 Warzone cheats checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Hileleri 2026",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Hileleri 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Hileleri 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Hileleri 2026",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. 2026 Warzone cheats checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Hileleri | ESP Aimbot Guide",
					description: "Warzone Hileleri: the Warzone hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Hileleri",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Hileleri.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Hileleri",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Hileleri",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. the Warzone hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Hile İndir | Instant Access",
					description: "Warzone Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Hile İndir",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Hile İndir.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Hile İndir",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Hile İndir",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone Mod Menü | In-Game Toggles",
					description: "Warzone Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Mod Menü",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Mod Menü.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone Mod Menü",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Mod Menü",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Warzone Hileleri | Buyer Checklist",
					description: "En İyi Warzone Hileleri: what to compare before buying Warzone cheats. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Warzone Hileleri",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. En İyi Warzone Hileleri.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "En İyi Warzone Hileleri",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Warzone Hileleri",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. what to compare before buying Warzone cheats.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hilesi | Soft Aim Assist",
					description: "Warzone Aimbot Hilesi: undetected Aimbot hack assist for Warzone. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Aimbot Hilesi",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Aimbot Hilesi.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone Aimbot Hilesi",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Aimbot Hilesi",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. undetected Aimbot hack assist for Warzone.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP Hilesi | Boxes & Loot",
					description: "Warzone ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone ESP Hilesi",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone ESP Hilesi.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP Hilesi",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP Hilesi",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
								"Destek ve yasal sorular için support@warzonecheats.co.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Warzone Cheats",
					description: "Gizlilik politikası for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Gizlilik politikası for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@warzonecheats.co.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Warzone Cheats",
					description: "İade politikası for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. İade politikası for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Ricochet yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@warzonecheats.co.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Warzone Cheats",
					description: "Kullanım şartları for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Kullanım şartları for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Ricochet bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats, Warzone için Windows PC üzerinde ESP wallhack, radar hack ve warzone aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@warzonecheats.co.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Warzone غير مكتشف",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Warzone على Windows PC — صيانة Ricochet مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Warzone PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Warzone Cheats نشطة لـ Warzone على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Ricochet",
					antiCheatShort: "دعم Ricochet",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Warzone Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Warzone — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش Warzone undetected لـ Warzone على PC. ESP wallhack ورadar hack وAimbot مع صيانة Ricochet. تسليم رقمي فوري.",
					h1: "Warzone Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Warzone على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Ricochet.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "معرض Warzone Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Warzone Cheats في 2026",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. مثالي لقراءة فرق العدو في BR وResurgence.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Player Boxes & Wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Soft Aim Controls",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. الميزات.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. الأسعار.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. التثبيت.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Ricochet Maintenance Log",
					description: "التحديثات: Ricochet patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. التحديثات.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Ricochet patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and Ricochet questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. الأسئلة.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. الدعم.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Ricochet Safe Status",
					description: "غش undetected: undetected maintenance after Ricochet patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. غش undetected.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. undetected maintenance after Ricochet patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | ESP Visibility",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Patch Maintenance",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Warzone 2026 | Buyer Guide",
					description: "غش Warzone 2026: 2026 Warzone cheats checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Warzone 2026",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. غش Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "غش Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "غش Warzone 2026",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. 2026 Warzone cheats checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Warzone | ESP Aimbot Guide",
					description: "غش Warzone: the Warzone hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. غش Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "غش Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Warzone Cheats | Instant Access",
					description: "تحميل Warzone Cheats: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Warzone Cheats",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. تحميل Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "تحميل Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Warzone Cheats",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Warzone | In-Game Toggles",
					description: "قائمة مود Warzone: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. قائمة مود Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "قائمة مود Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Smooth Aim Settings",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Warzone | Buyer Checklist",
					description: "أفضل غش Warzone: what to compare before buying Warzone cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. أفضل غش Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "أفضل غش Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. what to compare before buying Warzone cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Warzone | Soft Aim Assist",
					description: "هاك Aimbot Warzone: undetected Aimbot hack assist for Warzone. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. هاك Aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. undetected Aimbot hack assist for Warzone.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Warzone | Boxes & Loot",
					description: "هاك ESP Warzone: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. هاك ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "هاك ESP Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | What It Means",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ Warzone Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
								"support@warzonecheats.co للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Warzone Cheats",
					description: "سياسة الخصوصية for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. سياسة الخصوصية for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@warzonecheats.co للدعم والطلبات القانونية.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Warzone Cheats",
					description: "سياسة الاسترداد for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. سياسة الاسترداد for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Ricochet. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@warzonecheats.co للدعم والطلبات القانونية.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Warzone Cheats",
					description: "شروط الاستخدام for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. شروط الاستخدام for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Ricochet.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Warzone Cheats يجمع ESP wallhack وradar hack وwarzone aimbot غير مكتشف لـ Warzone على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@warzonecheats.co للدعم والطلبات القانونية.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Warzoneチート",
					accentShort: "Warzone Cheats",
					subtitle: "Warzone Windows PC向けESP wallhack、radar hack、Aimbot — Ricochetメンテナンス付き。",
					subtitleShort: "Warzone PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Warzone CheatsパッケージはWarzone Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Ricochetメンテナンス対応",
					antiCheatShort: "Ricochet対応",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Warzone Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Warzone向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "Warzone向けundetectedチート。ESP wallhack、radar hack、Aimbot、Ricochetメンテナンス。即時デジタル配信。",
					h1: "Warzone Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "Warzone Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Ricochetメンテナンス付き。",
					imageAlt: "Warzone cheats hero ESP aimbot wallhack",
					galleryTitle: "Warzone Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にWarzone Cheatsを選ぶ理由",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。BRとResurgenceで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。機能.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。料金.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				updates: {
					title: "更新 | Ricochet Maintenance Log",
					description: "更新: Ricochet patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。更新.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "更新",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Ricochet patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。ESP, soft aim, delivery, and Ricochet questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Ricochet Safe Status",
					description: "Undetectedチート: undetected maintenance after Ricochet patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。undetected maintenance after Ricochet patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。how Ricochet updates are handled for Warzone hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Buyer Guide",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。2026 Warzone cheats checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。the Warzone hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Cheat Download | Instant Access",
					description: "Warzone Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Cheat Download",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Cheat Download.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Cheat Download",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone Mod Menu | In-Game Toggles",
					description: "Warzone Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Mod Menu",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Mod Menu.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone Mod Menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Mod Menu",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Warzoneチート | Buyer Checklist",
					description: "最強Warzoneチート: what to compare before buying Warzone cheats. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Warzoneチート",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。最強Warzoneチート.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "最強Warzoneチート",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Warzoneチート",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。what to compare before buying Warzone cheats.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hack | Soft Aim Assist",
					description: "Warzone Aimbot Hack: undetected Aimbot hack assist for Warzone. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Aimbot Hack",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Aimbot Hack.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Aimbot Hack",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。undetected Aimbot hack assist for Warzone.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP Hack | Boxes & Loot",
					description: "Warzone ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone ESP Hack",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone ESP Hack.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP Hack",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
								"サポート・法務: support@warzonecheats.co",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Warzone Cheats",
					description: "プライバシーポリシー for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。プライバシーポリシー for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Warzone Cheats",
					description: "返金ポリシー for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。返金ポリシー for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Ricochetパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Warzone Cheats",
					description: "利用規約 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。利用規約 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにRicochetメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Warzone CheatsはWarzone向けWindows PC用ESP wallhack、radar hack、warzone aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Warzone 치트",
					accentShort: "Warzone Cheats",
					subtitle: "Warzone Windows PC용 ESP wallhack, radar hack, Aimbot — Ricochet 유지보수 포함.",
					subtitleShort: "Warzone PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Warzone Cheats 패키지는 Warzone Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Ricochet 유지보수 지원",
					antiCheatShort: "Ricochet 지원",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Warzone Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Warzone용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "Warzone undetected 치트. ESP wallhack, radar hack, Aimbot, Ricochet 유지보수. 즉시 디지털 배송.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "Warzone Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Ricochet 유지보수 포함.",
					imageAlt: "Warzone cheats hero ESP aimbot wallhack",
					galleryTitle: "Warzone Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Warzone Cheats를 선택하는 이유",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. BR 및 Resurgence에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Ricochet Maintenance Log",
					description: "업데이트: Ricochet patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Ricochet patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. ESP, soft aim, delivery, and Ricochet questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Ricochet Safe Status",
					description: "Undetected 치트: undetected maintenance after Ricochet patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. undetected maintenance after Ricochet patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. how Ricochet updates are handled for Warzone hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Buyer Guide",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 2026 Warzone cheats checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. the Warzone hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Cheat Download | Instant Access",
					description: "Warzone Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Cheat Download",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Cheat Download.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Cheat Download",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone 모드 메뉴 | In-Game Toggles",
					description: "Warzone 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone 모드 메뉴",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone 모드 메뉴.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone 모드 메뉴",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone 모드 메뉴",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Warzone 치트 | Buyer Checklist",
					description: "최고의 Warzone 치트: what to compare before buying Warzone cheats. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Warzone 치트",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 최고의 Warzone 치트.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "최고의 Warzone 치트",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Warzone 치트",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. what to compare before buying Warzone cheats.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone 에임봇 핵 | Soft Aim Assist",
					description: "Warzone 에임봇 핵: undetected Aimbot hack assist for Warzone. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone 에임봇 핵",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone 에임봇 핵.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone 에임봇 핵",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone 에임봇 핵",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. undetected Aimbot hack assist for Warzone.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP 핵 | Boxes & Loot",
					description: "Warzone ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone ESP 핵",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone ESP 핵.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP 핵",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP 핵",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
								"지원 및 법무: support@warzonecheats.co",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Warzone Cheats",
					description: "개인정보 처리방침 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 개인정보 처리방침 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Warzone Cheats",
					description: "환불 정책 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 환불 정책 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Ricochet 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Warzone Cheats",
					description: "이용 약관 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. 이용 약관 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Ricochet 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats는 Warzone Windows PC용 ESP wallhack, radar hack, warzone aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Warzone作弊",
					accentShort: "Warzone Cheats",
					subtitle: "适用于Warzone Windows PC的ESP wallhack、radar hack和Aimbot — 含Ricochet维护。",
					subtitleShort: "Warzone PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Warzone Cheats套餐已在Warzone Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Ricochet维护",
					antiCheatShort: "Ricochet支持",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Warzone Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Warzone undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "Warzone undetected作弊。ESP wallhack、radar hack、Aimbot、Ricochet维护。即时数字交付。",
					h1: "Warzone Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "Warzone Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Ricochet维护。",
					imageAlt: "Warzone cheats hero ESP aimbot wallhack",
					galleryTitle: "Warzone Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Warzone Cheats的原因",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。适合在BR和Resurgence中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。一个许可证而非多个工具。",
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。功能.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。价格.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。安装.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				updates: {
					title: "更新 | Ricochet Maintenance Log",
					description: "更新: Ricochet patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。更新.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "更新",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Ricochet patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and Ricochet questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。常见问题.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。ESP, soft aim, delivery, and Ricochet questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。支持.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Ricochet Safe Status",
					description: "Undetected作弊: undetected maintenance after Ricochet patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。undetected maintenance after Ricochet patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. 即时数字交付. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。how Ricochet updates are handled for Warzone hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone作弊 2026 | Buyer Guide",
					description: "Warzone作弊 2026: 2026 Warzone cheats checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone作弊 2026",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone作弊 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone作弊 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone作弊 2026",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。2026 Warzone cheats checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Warzone作弊 | ESP Aimbot Guide",
					description: "Warzone作弊: the Warzone hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone作弊",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone作弊.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone作弊",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone作弊",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。the Warzone hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone作弊下载 | Instant Access",
					description: "Warzone作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone作弊下载",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone作弊下载.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone作弊下载",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone作弊下载",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone修改菜单 | In-Game Toggles",
					description: "Warzone修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone修改菜单",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone修改菜单.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone修改菜单",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone修改菜单",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Warzone作弊 | Buyer Checklist",
					description: "最佳Warzone作弊: what to compare before buying Warzone cheats. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Warzone作弊",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。最佳Warzone作弊.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "最佳Warzone作弊",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Warzone作弊",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。what to compare before buying Warzone cheats.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone自瞄外挂 | Soft Aim Assist",
					description: "Warzone自瞄外挂: undetected Aimbot hack assist for Warzone. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone自瞄外挂",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone自瞄外挂.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone自瞄外挂",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone自瞄外挂",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。undetected Aimbot hack assist for Warzone.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP外挂 | Boxes & Loot",
					description: "Warzone ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone ESP外挂",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone ESP外挂.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP外挂",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP外挂",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 Warzone Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
								"支持与法务：support@warzonecheats.co",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Warzone Cheats",
					description: "隐私政策 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。隐私政策 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Warzone Cheats",
					description: "退款政策 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。退款政策 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Ricochet补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Warzone Cheats",
					description: "使用条款 for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。使用条款 for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Ricochet维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats为WarzoneWindows PC提供ESP wallhack、radar hack和warzone aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Warzone cheats",
					accentShort: "Warzone Cheats",
					subtitle: "Warzone Windows PC के लिए ESP wallhack, radar hack और Aimbot — Ricochet maintenance शामिल।",
					subtitleShort: "Warzone PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Warzone Cheats पैकेज Warzone Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Ricochet maintenance समर्थित",
					antiCheatShort: "Ricochet समर्थित",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Warzone Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Warzone के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "Warzone undetected cheats. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. Instant digital delivery.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "Warzone Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Ricochet maintenance सहित.",
					imageAlt: "Warzone cheats hero ESP aimbot wallhack",
					galleryTitle: "Warzone Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Warzone Cheats क्यों",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। BR और Resurgence में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Ricochet Maintenance Log",
					description: "अपडेट: Ricochet patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Ricochet patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and Ricochet questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Ricochet Safe Status",
					description: "Undetected cheats: undetected maintenance after Ricochet patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। undetected maintenance after Ricochet patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। how Ricochet updates are handled for Warzone hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Buyer Guide",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। 2026 Warzone cheats checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। the Warzone hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Cheat Download | Instant Access",
					description: "Warzone Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Cheat Download",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Cheat Download.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Cheat Download",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone Mod Menu | In-Game Toggles",
					description: "Warzone Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Mod Menu",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Mod Menu.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone Mod Menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Mod Menu",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Warzone Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ Warzone Cheats: what to compare before buying Warzone cheats. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Warzone Cheats",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Warzone Cheats.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "सर्वश्रेष्ठ Warzone Cheats",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Warzone Cheats",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। what to compare before buying Warzone cheats.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hack | Soft Aim Assist",
					description: "Warzone Aimbot Hack: undetected Aimbot hack assist for Warzone. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Aimbot Hack",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Aimbot Hack.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Aimbot Hack",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Warzone.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP Hack | Boxes & Loot",
					description: "Warzone ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone ESP Hack",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone ESP Hack.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP Hack",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Warzone Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
								"सहायता: support@warzonecheats.co",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Warzone Cheats",
					description: "गोपनीयता नीति for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। गोपनीयता नीति for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Warzone Cheats",
					description: "रिफंड नीति for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। रिफंड नीति for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Ricochet पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Warzone Cheats",
					description: "उपयोग की शर्तें for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। उपयोग की शर्तें for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Ricochet maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats Warzone के लिए Windows PC पर ESP wallhack, radar hack और warzone aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@warzonecheats.co",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Warzone undetected",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Warzone di PC Windows — pemeliharaan Ricochet termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Warzone PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Warzone Cheats aktif untuk Warzone di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Ricochet didukung",
					antiCheatShort: "Ricochet didukung",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Warzone Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Warzone undetected untuk Warzone di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Ricochet. Pengiriman digital instan.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Warzone di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Ricochet.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galeri Warzone Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Warzone Cheats di 2026",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Ideal membaca squad musuh di BR dan Resurgence.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Player Boxes & Wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Soft Aim Controls",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Fitur.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Harga.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Setup.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Ricochet Maintenance Log",
					description: "Pembaruan: Ricochet patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Pembaruan.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Ricochet patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Dukungan.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Ricochet Safe Status",
					description: "Cheat undetected: undetected maintenance after Ricochet patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Cheat undetected.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. undetected maintenance after Ricochet patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | ESP Visibility",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Patch Maintenance",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Warzone 2026 | Buyer Guide",
					description: "Cheat Warzone 2026: 2026 Warzone cheats checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Warzone 2026",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Cheat Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Cheat Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheat Warzone 2026",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. 2026 Warzone cheats checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Warzone | ESP Aimbot Guide",
					description: "Cheat Warzone: the Warzone hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Cheat Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Warzone | Instant Access",
					description: "Download Cheat Warzone: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Download Cheat Warzone.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Download Cheat Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Warzone | In-Game Toggles",
					description: "Menu mod Warzone: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Menu mod Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Menu mod Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Smooth Aim Settings",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Warzone terbaik | Buyer Checklist",
					description: "Cheat Warzone terbaik: what to compare before buying Warzone cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Warzone terbaik",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Cheat Warzone terbaik.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Cheat Warzone terbaik",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Warzone terbaik",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. what to compare before buying Warzone cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Soft Aim Assist",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. undetected Aimbot hack assist for Warzone.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Boxes & Loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | What It Means",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli Warzone Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
								"support@warzonecheats.co untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Warzone Cheats",
					description: "Kebijakan privasi for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Kebijakan privasi for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co untuk dukungan dan legal.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Warzone Cheats",
					description: "Kebijakan refund for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Kebijakan refund for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Ricochet. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co untuk dukungan dan legal.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Warzone Cheats",
					description: "Syarat penggunaan for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Syarat penggunaan for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats menyediakan ESP wallhack, radar hack, dan warzone aimbot undetected untuk Warzone di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co untuk dukungan dan legal.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Warzone cheats ไม่ถูกตรวจจับ",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Warzone บน Windows PC — รวมการดูแล Ricochet",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Warzone PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Warzone Cheats พร้อมใช้งานสำหรับ Warzone บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Ricochet",
					antiCheatShort: "Ricochet รองรับ",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Warzone Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Warzone — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Warzone undetected สำหรับ Warzone บน PC. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Warzone บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Ricochet maintenance",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "แกลเลอรี Warzone Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Warzone Cheats ปี 2026",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Resurgence",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ฟีเจอร์.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ราคา.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ติดตั้ง.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Ricochet Maintenance Log",
					description: "อัปเดต: Ricochet patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC อัปเดต.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Ricochet patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ESP, soft aim, delivery, and Ricochet questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC สนับสนุน.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Ricochet Safe Status",
					description: "Cheats undetected: undetected maintenance after Ricochet patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Cheats undetected.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC undetected maintenance after Ricochet patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC how Ricochet updates are handled for Warzone hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Buyer Guide",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC 2026 Warzone cheats checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC the Warzone hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Warzone Cheats | Instant Access",
					description: "ดาวน์โหลด Warzone Cheats: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Warzone Cheats",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ดาวน์โหลด Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Warzone Cheats",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Warzone | In-Game Toggles",
					description: "เมนูมอด Warzone: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Warzone",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC เมนูมอด Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "เมนูมอด Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Warzone",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Warzone ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Warzone ที่ดีที่สุด: what to compare before buying Warzone cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Warzone ที่ดีที่สุด",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Cheat Warzone ที่ดีที่สุด.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Cheat Warzone ที่ดีที่สุด",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Warzone ที่ดีที่สุด",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC what to compare before buying Warzone cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Warzone | Soft Aim Assist",
					description: "Hack Aimbot Warzone: undetected Aimbot hack assist for Warzone. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Warzone",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Hack Aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC undetected Aimbot hack assist for Warzone.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Boxes & Loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ Warzone Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
								"support@warzonecheats.co สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Warzone Cheats",
					description: "นโยบายความเป็นส่วนตัว for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC นโยบายความเป็นส่วนตัว for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co สำหรับการสนับสนุน",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Warzone Cheats",
					description: "นโยบายการคืนเงิน for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC นโยบายการคืนเงิน for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Ricochet ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co สำหรับการสนับสนุน",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Warzone Cheats",
					description: "ข้อกำหนดการใช้งาน for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC ข้อกำหนดการใช้งาน for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Ricochet",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats รวม ESP wallhack, radar hack และ warzone aimbot แบบ undetected สำหรับ Warzone บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co สำหรับการสนับสนุน",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Warzone undetected",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Warzone trên PC Windows — bảo trì Ricochet bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Warzone PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Warzone Cheats đang hoạt động cho Warzone trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Ricochet",
					antiCheatShort: "Hỗ trợ Ricochet",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Warzone Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Warzone — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Warzone undetected cho Warzone trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Ricochet. Giao hàng kỹ thuật số tức thì.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Warzone trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Ricochet.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Thư viện Warzone Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Lý tưởng đọc squad địch trong BR và Resurgence.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Player Boxes & Wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Soft Aim Controls",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Tính năng.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Giá.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Cài đặt.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Ricochet Maintenance Log",
					description: "Cập nhật: Ricochet patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Cập nhật.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Ricochet patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Hỗ trợ.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Ricochet Safe Status",
					description: "Cheat undetected: undetected maintenance after Ricochet patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Cheat undetected.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. undetected maintenance after Ricochet patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | ESP Visibility",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Patch Maintenance",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Warzone 2026 | Buyer Guide",
					description: "Cheat Warzone 2026: 2026 Warzone cheats checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Warzone 2026",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Cheat Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Cheat Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheat Warzone 2026",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. 2026 Warzone cheats checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Warzone | ESP Aimbot Guide",
					description: "Cheat Warzone: the Warzone hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Cheat Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Warzone | Instant Access",
					description: "Tải Cheat Warzone: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Tải Cheat Warzone.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Warzone | In-Game Toggles",
					description: "Mod menu Warzone: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Mod menu Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Mod menu Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Smooth Aim Settings",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Warzone tốt nhất | Buyer Checklist",
					description: "Cheat Warzone tốt nhất: what to compare before buying Warzone cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Warzone tốt nhất",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Cheat Warzone tốt nhất.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Cheat Warzone tốt nhất",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Warzone tốt nhất",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. what to compare before buying Warzone cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Soft Aim Assist",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. undetected Aimbot hack assist for Warzone.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Boxes & Loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | What It Means",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua Warzone Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Warzone Cheats",
					description: "Chính sách bảo mật for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Chính sách bảo mật for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Warzone Cheats",
					description: "Chính sách hoàn tiền for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Chính sách hoàn tiền for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Ricochet. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Warzone Cheats",
					description: "Điều khoản sử dụng for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Điều khoản sử dụng for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats cung cấp ESP wallhack, radar hack và warzone aimbot undetected cho Warzone trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co cho hỗ trợ và pháp lý.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Warzone",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack і Aimbot для Warzone на Windows PC — обслуговування Ricochet включено.",
					subtitleShort: "ESP, radar і Aimbot для Warzone PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Warzone Cheats активний для Warzone на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Ricochet",
					antiCheatShort: "Ricochet підтримка",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Warzone Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Warzone — оплата через Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Warzone для Warzone на PC. ESP wallhack, radar hack, Aimbot, обслуговування Ricochet. Мгновенная цифровая доставка.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Warzone на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Ricochet.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Галерея Warzone Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Warzone Cheats у 2026",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Ідеально для читання ворожих загонів у BR і Resurgence.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Player Boxes & Wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Soft Aim Controls",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Функції.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Ціни.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Встановлення.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Ricochet Maintenance Log",
					description: "Оновлення: Ricochet patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Оновлення.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Ricochet patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Підтримка.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Ricochet Safe Status",
					description: "Undetected чіти: undetected maintenance after Ricochet patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Undetected чіти.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. undetected maintenance after Ricochet patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | ESP Visibility",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Patch Maintenance",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Warzone 2026 | Buyer Guide",
					description: "Чіти Warzone 2026: 2026 Warzone cheats checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Warzone 2026",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Чіти Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Чіти Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Чіти Warzone 2026",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Warzone | ESP Aimbot Guide",
					description: "Чіти Warzone: the Warzone hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Чіти Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Warzone Cheats | Instant Access",
					description: "Завантаження Warzone Cheats: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Warzone Cheats",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Завантаження Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Завантаження Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Warzone Cheats",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Warzone | In-Game Toggles",
					description: "Мод-меню Warzone: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Мод-меню Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Мод-меню Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Smooth Aim Settings",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Warzone | Buyer Checklist",
					description: "Найкращі чіти Warzone: what to compare before buying Warzone cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Найкращі чіти Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Найкращі чіти Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. what to compare before buying Warzone cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Warzone | Soft Aim Assist",
					description: "Хак aimbot Warzone: undetected Aimbot hack assist for Warzone. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Хак aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. undetected Aimbot hack assist for Warzone.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Warzone | Boxes & Loot",
					description: "Хак ESP Warzone: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Хак ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Хак ESP Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | What It Means",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити Warzone Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
								"support@warzonecheats.co для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Warzone Cheats",
					description: "Політика конфіденційності for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Політика конфіденційності for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co для підтримки та правових питань.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Warzone Cheats",
					description: "Політика повернення for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Політика повернення for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Ricochet. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co для підтримки та правових питань.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Warzone Cheats",
					description: "Умови використання for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Умови використання for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats об'єднує ESP wallhack, radar hack і warzone aimbot у undetected пакеті для Warzone на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co для підтримки та правових питань.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Warzone cheaty",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Warzone na Windows PC — údržba Ricochet v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Warzone PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Warzone Cheats je aktivní pro Warzone na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Ricochet",
					antiCheatShort: "Ricochet podpora",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Warzone Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Warzone — checkout přes Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Warzone cheaty pro Warzone na PC. ESP wallhack, radar hack, Aimbot, údržba Ricochet. Okamžité digitální doručení.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Warzone na Windows PC: ESP wallhack, radar, Aimbot s údržbou Ricochet.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galerie Warzone Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Warzone Cheats v roce 2026",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Ideální pro čtení nepřátelských squadů v BR a Resurgence.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Funkce.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Ceny.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Instalace.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Ricochet Maintenance Log",
					description: "Aktualizace: Ricochet patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Aktualizace.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Ricochet patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Podpora.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Ricochet Safe Status",
					description: "Undetected cheaty: undetected maintenance after Ricochet patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Undetected cheaty.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. undetected maintenance after Ricochet patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone cheaty 2026 | Buyer Guide",
					description: "Warzone cheaty 2026: 2026 Warzone cheats checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone cheaty 2026",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone cheaty 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone cheaty 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone cheaty 2026",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Warzone cheaty | ESP Aimbot Guide",
					description: "Warzone cheaty: the Warzone hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone cheaty",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone cheaty.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone cheaty",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone cheaty",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Warzone Cheats | Instant Access",
					description: "Stáhnout Warzone Cheats: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Warzone Cheats",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Stáhnout Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Stáhnout Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Warzone Cheats",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone mod menu | In-Game Toggles",
					description: "Warzone mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone mod menu",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone mod menu.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone mod menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone mod menu",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Warzone cheaty | Buyer Checklist",
					description: "Nejlepší Warzone cheaty: what to compare before buying Warzone cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Warzone cheaty",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Nejlepší Warzone cheaty.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Nejlepší Warzone cheaty",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Warzone cheaty",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. what to compare before buying Warzone cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone aimbot hack | Soft Aim Assist",
					description: "Warzone aimbot hack: undetected Aimbot hack assist for Warzone. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone aimbot hack",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone aimbot hack.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone aimbot hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone aimbot hack",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. undetected Aimbot hack assist for Warzone.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP hack | Boxes & Loot",
					description: "Warzone ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone ESP hack",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone ESP hack.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP hack",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit Warzone Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
								"support@warzonecheats.co pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Warzone Cheats",
					description: "Zásady ochrany soukromí for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Zásady ochrany soukromí for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co pro podporu a právní dotazy.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Warzone Cheats",
					description: "Zásady vrácení peněz for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Zásady vrácení peněz for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Ricochet zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co pro podporu a právní dotazy.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Warzone Cheats",
					description: "Podmínky použití for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Podmínky použití for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats spojuje ESP wallhack, radar hack a warzone aimbot jako undetected balíček pro Warzone na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co pro podporu a právní dotazy.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Warzone undetected",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Warzone pe PC Windows — mentenanță Ricochet inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Warzone PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Warzone Cheats este activ pentru Warzone pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Ricochet suportată",
					antiCheatShort: "Ricochet suportat",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Warzone Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Warzone undetected pentru Warzone pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Ricochet. Livrare digitală instantă.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Warzone pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Ricochet.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Galerie Warzone Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Warzone Cheats în 2026",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și Resurgence.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "ESP Warzone | Player Boxes & Wallhack",
					description: "ESP Warzone: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. ESP Warzone.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "ESP Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Aimbot Warzone | Soft Aim Controls",
					description: "Aimbot Warzone: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Aimbot Warzone.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Aimbot Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Funcții.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Prețuri.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Instalare.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Ricochet Maintenance Log",
					description: "Actualizări: Ricochet patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Actualizări.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Ricochet patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. ESP, soft aim, delivery, and Ricochet questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Suport.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Ricochet Safe Status",
					description: "Cheats undetected: undetected maintenance after Ricochet patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Cheats undetected.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. undetected maintenance after Ricochet patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Warzone | ESP Visibility",
					description: "Wallhack Warzone: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Wallhack Warzone.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Wallhack Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Radar hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				ricochet: {
					title: "Bypass Ricochet | Patch Maintenance",
					description: "Bypass Ricochet: how Ricochet updates are handled for Warzone hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Ricochet",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Bypass Ricochet.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Bypass Ricochet",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Ricochet",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. how Ricochet updates are handled for Warzone hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Warzone 2026 | Buyer Guide",
					description: "Cheats Warzone 2026: 2026 Warzone cheats checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Warzone 2026",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Cheats Warzone 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Cheats Warzone 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Cheats Warzone 2026",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. 2026 Warzone cheats checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Warzone | ESP Aimbot Guide",
					description: "Cheats Warzone: the Warzone hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Cheats Warzone.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Warzone",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. the Warzone hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Warzone Cheats | Instant Access",
					description: "Descărcare Warzone Cheats: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Warzone Cheats",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Descărcare Warzone Cheats.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Descărcare Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Warzone Cheats",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Warzone | In-Game Toggles",
					description: "Meniu mod Warzone: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Meniu mod Warzone.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Meniu mod Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Warzone | Smooth Aim Settings",
					description: "Soft aim Warzone: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Soft aim Warzone.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Soft aim Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Warzone | Buyer Checklist",
					description: "Cele mai bune cheats Warzone: what to compare before buying Warzone cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Cele mai bune cheats Warzone.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Cele mai bune cheats Warzone",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. what to compare before buying Warzone cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Warzone | Soft Aim Assist",
					description: "Hack aimbot Warzone: undetected Aimbot hack assist for Warzone. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Hack aimbot Warzone.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Warzone",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. undetected Aimbot hack assist for Warzone.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Warzone | Boxes & Loot",
					description: "Hack ESP Warzone: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Hack ESP Warzone.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Warzone",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Hack ESP Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Warzone | What It Means",
					description: "Unlock all Warzone: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Warzone",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Unlock all Warzone.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Unlock all Warzone",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără Warzone Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Warzone",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
								"support@warzonecheats.co pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Warzone Cheats",
					description: "Politica de confidențialitate for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Politica de confidențialitate for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co pentru suport și legal.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Warzone Cheats",
					description: "Politica de rambursare for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Politica de rambursare for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Ricochet. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co pentru suport și legal.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Warzone Cheats",
					description: "Termeni de utilizare for Warzone Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Termeni de utilizare for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Ricochet.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats combină ESP wallhack, radar hack și warzone aimbot undetected pentru Warzone pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co pentru suport și legal.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Warzone cheats",
					accentShort: "Warzone Cheats",
					subtitle: "ESP wallhack, radar hack och Aimbot för Warzone på Windows PC — Ricochet-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Warzone PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Warzone Cheats-paketet är live för Warzone på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Ricochet-underhåll stöds",
					antiCheatShort: "Ricochet stöd",
				},
				product: {
					title: "Warzone Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Warzone",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Warzone Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Warzone — checkout via Zadeyo.",
				},
				images: {
					hero: "Warzone Cheats hero — ESP and aimbot overlay in Warzone",
					espWallhack: "Wallhack outlines showing players through walls",
					aimbotCombat: "Soft aim assist overlay during an Warzone raid",
					squadFight: "Warzone Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Warzone raid",
					headerArt: "Aimbot view and bone priority controls for Warzone",
					cheatsPackage: "2D radar threat overlay for Warzone",
					rebootFight: "Aimbot assist during a Warzone firefight",
					battleRoyale: "Warzone Cheats in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and the gulag in Warzone",
				},
			},
			pages: {
				home: {
					title: "Warzone Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Warzone cheats för Warzone på PC. ESP wallhack, radar hack, Aimbot, Ricochet-underhåll. Omedelbar digital leverans.",
					h1: "Warzone Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Warzone på Windows PC: ESP wallhack, radar, Aimbot med Ricochet-underhåll.",
					imageAlt: "Warzone ESP player tags hack",
					galleryTitle: "Warzone Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Ideal för att läsa fiendesquads i BR och Resurgence.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"warzone-esp": {
					title: "Warzone ESP | Player Boxes & Wallhack",
					description: "Warzone ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone ESP",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone ESP.",
					imageAlt: "Warzone ESP player boxes and distance readouts in a raid",
					galleryTitle: "Warzone ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone ESP",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"warzone-aimbot": {
					title: "Warzone Aimbot | Soft Aim Controls",
					description: "Warzone Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Aimbot",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Aimbot.",
					imageAlt: "Warzone aimbot and soft aim controls on Windows PC",
					galleryTitle: "Warzone Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Aimbot",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Funktioner.",
					imageAlt: "Warzone Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Priser.",
					imageAlt: "Warzone Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Installation.",
					imageAlt: "Warzone Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Ricochet Maintenance Log",
					description: "Uppdateringar: Ricochet patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Uppdateringar.",
					imageAlt: "Warzone Cheats live status after Ricochet and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Ricochet patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Ricochet questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. FAQ.",
					imageAlt: "Warzone Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. ESP, soft aim, delivery, and Ricochet questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Support.",
					imageAlt: "Warzone Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Ricochet Safe Status",
					description: "Undetected cheats: undetected maintenance after Ricochet patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Undetected cheats.",
					imageAlt: "Warzone Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. undetected maintenance after Ricochet patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Warzone Wallhack | ESP Visibility",
					description: "Warzone Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Wallhack",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Wallhack.",
					imageAlt: "Warzone wallhack visibility through walls in a raid",
					galleryTitle: "Warzone Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone Wallhack",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Radar Hack.",
					imageAlt: "Warzone 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				ricochet: {
					title: "Ricochet Bypass | Patch Maintenance",
					description: "Ricochet Bypass: how Ricochet updates are handled for Warzone hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Ricochet Bypass",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Ricochet Bypass.",
					imageAlt: "Warzone Cheats maintenance after a Ricochet patch",
					galleryTitle: "Ricochet Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Ricochet Bypass",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. how Ricochet updates are handled for Warzone hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Warzone Cheats 2026 | Buyer Guide",
					description: "Warzone Cheats 2026: 2026 Warzone cheats checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Cheats 2026",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Cheats 2026.",
					imageAlt: "Warzone Cheats product overview for Warzone",
					galleryTitle: "Warzone Cheats 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-cheats/",
					sections: [
						{
							h2: "Warzone Cheats 2026",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. 2026 Warzone cheats checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Warzone Cheats | ESP Aimbot Guide",
					description: "Warzone Cheats: the Warzone hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Cheats",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Cheats.",
					imageAlt: "Warzone Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Warzone Cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Cheats",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. the Warzone hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Warzone Cheat Download | Instant Access",
					description: "Warzone Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Cheat Download",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Cheat Download.",
					imageAlt: "Warzone Cheats download and install delivery flow",
					galleryTitle: "Warzone Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Warzone Cheat Download",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Warzone Mod-meny | In-Game Toggles",
					description: "Warzone Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Mod-meny",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Mod-meny.",
					imageAlt: "Warzone Cheats in-game menu controls",
					galleryTitle: "Warzone Mod-meny",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Mod-meny",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Warzone Soft Aim | Smooth Aim Settings",
					description: "Warzone Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Soft Aim",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Soft Aim.",
					imageAlt: "Warzone soft aim FOV and smoothness settings",
					galleryTitle: "Warzone Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Soft Aim",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Warzone Cheats | Buyer Checklist",
					description: "Bästa Warzone Cheats: what to compare before buying Warzone cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Warzone Cheats",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Bästa Warzone Cheats.",
					imageAlt: "Warzone Cheats overview for Warzone on PC",
					galleryTitle: "Bästa Warzone Cheats",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Warzone Cheats",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. what to compare before buying Warzone cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Warzone Aimbot Hack | Soft Aim Assist",
					description: "Warzone Aimbot Hack: undetected Aimbot hack assist for Warzone. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Aimbot Hack",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Aimbot Hack.",
					imageAlt: "Warzone aimbot hack controls and bone priority",
					galleryTitle: "Warzone Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-aimbot/",
					sections: [
						{
							h2: "Warzone Aimbot Hack",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. undetected Aimbot hack assist for Warzone.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Warzone ESP Hack | Boxes & Loot",
					description: "Warzone ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone ESP Hack",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone ESP Hack.",
					imageAlt: "Warzone ESP hack boxes and loot markers",
					galleryTitle: "Warzone ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/warzone-esp/",
					sections: [
						{
							h2: "Warzone ESP Hack",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Warzone Unlock All | What It Means",
					description: "Warzone Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Warzone Unlock All",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Warzone Unlock All.",
					imageAlt: "Warzone Cheats license features overview",
					galleryTitle: "Warzone Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp Warzone Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warzone Unlock All",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
								"support@warzonecheats.co för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Warzone Cheats",
					description: "Integritetspolicy for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Integritetspolicy for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@warzonecheats.co för support och juridik.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Warzone Cheats",
					description: "Återbetalningspolicy for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Återbetalningspolicy for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Ricochet-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@warzonecheats.co för support och juridik.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Warzone Cheats",
					description: "Användarvillkor for Warzone Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Användarvillkor for warzonecheats.co and Warzone licenses.",
					imageAlt: "warzone cheats",
					galleryTitle: "warzone cheats",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Ricochet-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Warzone Cheats kombinerar ESP wallhack, radar hack och warzone aimbot som undetected paket för Warzone på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@warzonecheats.co för support och juridik.",
								"Email: support@warzonecheats.co",
							],
						},
					],
				},
			},
		},
	};
