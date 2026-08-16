#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'warzone-esp'],
	['warzone-aimbot', 'warzone-aimbot'],
	["'ricochet'", "'ricochet'"],
	['ricochet-bypass', 'ricochet-bypass'],
	['undetected-warzone-cheats', 'undetected-warzone-cheats'],
	['warzone-wallhack', 'warzone-wallhack'],
	['warzone-radar-hack', 'warzone-radar-hack'],
	['warzone-cheats-2026', 'warzone-cheats-2026'],
	['warzone-cheats', 'warzone-cheats'],
	['warzone', 'warzone'],
	['Warzone', 'Warzone'],
	['Warzone', 'Warzone'],
	['Warzone Cheats', 'Warzone Cheats'],
	['Warzone cheats', 'Warzone cheats'],
	['Warzone cheat', 'Warzone cheat'],
	['Warzone ESP', 'Warzone ESP'],
	['Warzone Aimbot', 'Warzone Aimbot'],
	['Warzone wallhack', 'Warzone wallhack'],
	['Warzone radar', 'Warzone radar'],
	['Warzone firefights', 'Warzone firefights'],
	['Warzone combat', 'Warzone combat'],
	['Warzone patches', 'Warzone patches'],
	['Warzone updates', 'Warzone updates'],
	['Warzone setup', 'Warzone setup'],
	['Warzone license', 'Warzone license'],
	['Warzone licenses', 'Warzone licenses'],
	['Warzone sessions', 'Warzone sessions'],
	['in Warzone', 'in Warzone'],
	['for Warzone', 'for Warzone'],
	['Warzone on', 'Warzone on'],
	['Warzone or', 'Warzone or'],
	['Warzone\'s', 'Warzone\'s'],
	['Warzone ', 'Warzone '],
	['Ricochet', 'Ricochet'],
	['Ricochet maintenance', 'Ricochet maintenance'],
	['Ricochet bypass', 'Ricochet bypass'],
	['Ricochet Bypass', 'Ricochet Bypass'],
	['Ricochet', 'Ricochet'],
	['ricochet', 'ricochet'],
	['support@warzonecheats.co', 'support@warzonecheats.co'],
	['Verdansk, Rebirth, and Streets of Warzone', 'Verdansk, Rebirth, and Streets of Warzone'],
	['Verdansk, Rebirth and Streets of Warzone', 'Verdansk, Rebirth and Streets of Warzone'],
	['gulag fights', 'gulag fights'],
	['gulag fight', 'gulag fight'],
	['raid rounds', 'raid rounds'],
	['gulag', 'gulag'],
	['squads', 'players'],
	['operator', 'player'],
	['squads', 'Players'],
	['Operator', 'Player'],
	['gulag timer', 'gulag timer'],
	['BR matches and Resurgence', 'BR matches and Resurgence'],
	['BR matches and Resurgence', 'BR matches and Resurgence'],
	['squad & Scav', 'squad & Scav'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Warzone combat pace'],
	['COD', 'Warzone'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Warzone Cheats',
	game: 'Warzone',
	checkout: 'Zadeyo',
	ricochet: 'Ricochet',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.ricochet');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Verdansk, Rebirth, and Streets of Warzone'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
