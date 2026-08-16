#!/usr/bin/env node
import fs from 'node:fs';
import { DESCRIPTIVE_IMAGE_ALTS, PAGE_IMAGE_ALTS } from './i18n-data/image-alts.mjs';

const imagesBlock = `images: {
\t\thero: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.hero)},
\t\tespWallhack: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.espWallhack)},
\t\taimbotCombat: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.aimbotCombat)},
\t\tsquadFight: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.squadFight)},
\t\tplayerEsp: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.playerEsp)},
\t\theaderArt: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.headerArt)},
\t\tcheatsPackage: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.cheatsPackage)},
\t\trebootFight: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.rebootFight)},
\t\tbattleRoyale: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.battleRoyale)},
\t\tbattleRoyaleIsland: ${JSON.stringify(DESCRIPTIVE_IMAGE_ALTS.battleRoyaleIsland)},
\t}`;

const oldImagesRe =
	/images:\s*\{\s*hero:\s*'[^']*',\s*espWallhack:\s*'[^']*',\s*aimbotCombat:\s*'[^']*',\s*squadFight:\s*'[^']*',\s*playerEsp:\s*'[^']*',\s*headerArt:\s*'[^']*',\s*cheatsPackage:\s*'[^']*',\s*rebootFight:\s*'[^']*',\s*battleRoyale:\s*'[^']*',\s*battleRoyaleIsland:\s*'[^']*'\s*\}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	let s = fs.readFileSync(f, 'utf8');
	const n = (s.match(oldImagesRe) || []).length;
	s = s.replace(oldImagesRe, imagesBlock);
	fs.writeFileSync(f, s);
	console.log(f, 'replaced', n);
}

let pe = fs.readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
const keys = Object.keys(PAGE_IMAGE_ALTS);
let i = 0;
pe = pe.replace(/imageAlt:\s*'[^']*'/g, () => {
	const key = keys[i++] ?? 'home';
	return `imageAlt: ${JSON.stringify(PAGE_IMAGE_ALTS[key] || PAGE_IMAGE_ALTS.home)}`;
});
fs.writeFileSync('scripts/i18n-data/pages-en.mjs', pe);
console.log('pages-en imageAlts', i);

for (const f of ['public/locales/en/translation.json', 'public/locales/es/translation.json']) {
	const j = JSON.parse(fs.readFileSync(f, 'utf8'));
	j.images = { ...DESCRIPTIVE_IMAGE_ALTS };
	if (j.hero) {
		j.hero.imageAlt = '{{brand}} — Warzone ESP and aimbot overlay';
	}
	fs.writeFileSync(f, `${JSON.stringify(j, null, 2)}\n`);
	console.log('updated', f);
}
