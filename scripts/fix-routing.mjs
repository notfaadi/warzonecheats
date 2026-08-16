#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'warzone-esp'],
	['warzone-aimbot', 'warzone-aimbot'],
	['ricochet', 'ricochet'],
	['undetected-warzone-cheats', 'undetected-warzone-cheats'],
	['warzone-wallhack', 'warzone-wallhack'],
	['warzone-radar-hack', 'warzone-radar-hack'],
	['warzone-cheats-2026', 'warzone-cheats-2026'],
	['ricochet-bypass', 'ricochet-bypass'],
	['warzonecheats.co', 'warzonecheats.co'],
	['trucos-warzone', 'trucos-warzone'],
	['triche-warzone', 'triche-warzone'],
	['warzone-cheats', 'warzone-cheats'],
	['cheats-warzone', 'cheats-warzone'],
	['trucchi-warzone', 'trucchi-warzone'],
	['cheaty-warzone', 'cheaty-warzone'],
	['chity-warzone', 'chity-warzone'],
	['chitov-warzone', 'chitov-warzone'],
	['chitiv-warzone', 'chitiv-warzone'],
	['cheatow-warzone', 'cheatow-warzone'],
	['hile-warzone', 'hile-warzone'],
	['warzone-hile', 'warzone-hile'],
	['warzone-esp-chity', 'warzone-esp-chity'],
	['warzone-aimbot-chity', 'warzone-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-warzone-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-warzone-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-warzone-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-warzone'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-warzone'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-warzone-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-warzone'],
	['cheats-warzone-nedetectabile', 'cheats-warzone-nedetectabile'],
	['basta-warzone-cheats', 'basta-warzone-cheats'],
	['ricochet-bypass-trucos-warzone', 'ricochet-bypass-trucos-warzone'],
	['ricochet-bypass-triche-warzone', 'ricochet-bypass-triche-warzone'],
	['ricochet-bypass-cheats-warzone', 'ricochet-bypass-cheats-warzone'],
	['ricochet-bypass-chity-warzone', 'ricochet-bypass-chity-warzone'],
	['ricochet-bypass-warzone', 'ricochet-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix ricochet key in englishPaths
	content = content.replace(/\tricochet: '/, "\t'ricochet': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich warzone-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/warzone-cheats-hero.webp',
	'warzone-esp': '/images/warzone-cheats-esp-wallhack.webp',
	'warzone-aimbot': '/images/warzone-cheats-aimbot-combat.webp',
	features: '/images/warzone-cheats-package.webp',
	pricing: '/images/warzone-cheats-cover.webp',
	setup: '/images/tarkov-loadout-builder.webp',
	updates: '/images/tarkov-header-art.webp',
	faq: '/images/tarkov-squad-fight.webp',
	support: '/images/warzone-cheats-package.webp',
	undetected: '/images/tarkov-battle-royale-combat.webp',
	wallhack: '/images/warzone-cheats-esp-wallhack.webp',
	radar: '/images/tarkov-player-esp.webp',
	'ricochet': '/images/tarkov-reboot-van-fight.webp',
	'cheats-2026': '/images/warzone-cheats-hero.webp',
	privacy: '/images/warzone-cheats-aimbot-combat.webp',
	refund: '/images/warzone-cheats-cover.webp',
	terms: '/images/warzone-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'warzone-esp', 'warzone-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'ricochet',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'warzone-esp' | 'warzone-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'ricochet' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
