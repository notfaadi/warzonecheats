#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Warzone Cheats', 'Warzone Cheats'],
	['Warzone cheats', 'Warzone cheats'],
	['Warzone Cheats', 'Warzone Cheats'],
	['Warzone', 'Warzone'],
	['Warzone', 'Warzone'],
	['Call of Duty', 'Warzone'],
	['Warzone PC', 'Warzone PC'],
	['for Warzone', 'for Warzone'],
	['Warzone ', 'Warzone '],
	['warzone ', 'warzone '],
	['Ricochet maintenance', 'Ricochet maintenance'],
	['Ricochet', 'Ricochet'],
	['Ricochet', 'Ricochet'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['squads', 'players'],
	['operator', 'player'],
	['squads', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['Resurgence', 'Resurgence'],
	['gulag', 'gulag'],
	['warzonecheats.co', 'warzonecheats.co'],
	['Trucos Warzone', 'Trucos Warzone'],
	['Triches Warzone', 'Triches Warzone'],
	['Cheats Warzone', 'Cheats Warzone'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en ricochet key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tricochet: \{/, "\t'ricochet': {");
pagesEn = pagesEn.replace(/Warzone Warzone/g, 'Warzone');
pagesEn = pagesEn.replace(/for Warzone Warzone/g, 'for Warzone');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'ricochet'/g, "'ricochet'");
pagesI18n = pagesI18n.replace(/ricochet:/g, "'ricochet':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
