#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'warzone cheats', espWallhack: 'warzone cheats wallhack', aimbotCombat: 'warzone cheats aimbot', squadFight: 'warzone cheats', playerEsp: 'warzone cheats esp', headerArt: 'warzone cheats aimbot', cheatsPackage: 'warzone cheats radar', rebootFight: 'warzone cheats aimbot', battleRoyale: 'warzone cheats', battleRoyaleIsland: 'warzone cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Warzone ESP player tags hack'", "imageAlt: 'warzone cheats esp'"],
	["imageAlt: 'Warzone ESP radar hack'", "imageAlt: 'warzone cheats radar'"],
	["imageAlt: 'Warzone aimbot sniper kill'", "imageAlt: 'warzone cheats aimbot'"],
	["imageAlt: 'Warzone aimbot skeleton targeting'", "imageAlt: 'warzone cheats aimbot'"],
	["imageAlt: 'Warzone cheats ADS combat'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats setup PC activation'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats updates Ricochet maintenance'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats FAQ ESP aimbot'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats support license help'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Undetected warzone cheats ESP wallhack'", "imageAlt: 'undetected warzone cheats'"],
	["imageAlt: 'Warzone wallhack skeleton ESP'", "imageAlt: 'warzone cheats wallhack'"],
	["imageAlt: 'Ricochet bypass warzone ESP aimbot'", "imageAlt: 'warzone cheats ricochet'"],
	["imageAlt: 'Warzone cheats 2026 ESP aimbot'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats combat aimbot'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheat download ESP aimbot'", "imageAlt: 'warzone cheats download'"],
	["imageAlt: 'Warzone mod menu ESP aimbot'", "imageAlt: 'warzone cheats mod menu'"],
	["imageAlt: 'Warzone soft aim aimbot settings'", "imageAlt: 'warzone cheats soft aim'"],
	["imageAlt: 'Best warzone cheats 2026 ESP'", "imageAlt: 'best warzone cheats'"],
	["imageAlt: 'Warzone aimbot hack combat'", "imageAlt: 'warzone cheats aimbot'"],
	["imageAlt: 'Warzone ESP hack wallhack'", "imageAlt: 'warzone cheats esp'"],
	["imageAlt: 'Warzone unlock all ESP aimbot guide'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats privacy policy'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats refund policy'", "imageAlt: 'warzone cheats'"],
	["imageAlt: 'Warzone cheats terms of use'", "imageAlt: 'warzone cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Warzone ${meta.altKeyword}`")
	.join("imageAlt: 'warzone cheats'")
	.split("galleryTitle: `Warzone Cheats ${topicName}`")
	.join("galleryTitle: 'warzone cheats'")
	.split("imageAlt: `Warzone cheats ${kind} policy`")
	.join("imageAlt: 'warzone cheats'")
	.split("galleryTitle: `Warzone Cheats ${kind} resources`")
	.join("galleryTitle: 'warzone cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
