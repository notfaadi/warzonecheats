#!/usr/bin/env node
/**
 * One-time migration: Warzone Hacks → Warzone Cheats (Warzone).
 * Domain: warzonecheats.co
 * Run from project root: node scripts/adapt-tarkov.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['warzone-aimbot', 'warzone-aimbot'],
	['warzone-esp', 'warzone-esp'],
	['warzone-wallhack', 'warzone-wallhack'],
	['warzone-radar-hack', 'warzone-radar-hack'],
	['undetected-warzone-cheats', 'undetected-warzone-cheats'],
	['warzone-cheats-2026', 'warzone-cheats-2026'],
	['ricochet-bypass', 'ricochet-bypass'],
	['warzone-hacks', 'warzone-cheats'],
	['warzone-cheat-download', 'warzone-cheat-download'],
	['warzone-mod-menu', 'warzone-mod-menu'],
	['warzone-soft-aim', 'warzone-soft-aim'],
	['best-warzone-cheats', 'best-warzone-cheats'],
	['warzone-aimbot-hack', 'warzone-aimbot-hack'],
	['warzone-esp-hack', 'warzone-esp-hack'],
	['warzone-unlock-all', 'warzone-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://warzonehacks.net', 'https://warzonecheats.co'],
	['https://www.warzonehacks.net', 'https://warzonecheats.co'],
	['www.warzonehacks.net', 'warzonecheats.co'],
	['warzonehacks.net', 'warzonecheats.co'],
	['support@warzonehacks.net', 'support@warzonecheats.co'],
	['support@warzonescheats.net', 'support@warzonecheats.co'],
	['warzonescheats.net', 'warzonecheats.co'],
	['warzonescheats.com', 'warzonecheats.co'],
	['warzonescheats.xyz', 'warzonecheats.co'],
	['/products/warzone', '/products/warzone'],
	['project-name=warzonehacks', 'project-name=warzonecheats'],
	['project-name=warzonescheats', 'project-name=warzonecheats'],
	['name = "warzonehacks"', 'name = "bestwarzonecheats"'],
	['name = "warzonescheats"', 'name = "bestwarzonecheats"'],
	['"name": "warzone-hacks"', '"name": "warzone-cheats"'],
	['warzone-esp-player-tags', 'warzone-esp-player-tags'],
	['warzone-wallhack-skeleton', 'warzone-wallhack-skeleton'],
	['warzone-aimbot-sniper', 'warzone-aimbot-sniper'],
	['warzone-aimbot-skeleton', 'warzone-aimbot-skeleton'],
	['warzone-esp-radar', 'warzone-esp-radar'],
	['warzone-cheats-combat', 'warzone-cheats-combat'],
	['warzone-hacks-logo', 'warzone-cheats-logo'],
	['warzone-hero-banner', 'warzone-hero-banner'],
	['warzone-hero-ghost', 'warzone-hero-ghost'],
	['warzone-hero-source', 'warzone-hero-source'],
	['undetected-warzone-cheats', 'undetected-warzone-cheats'],
	['best-warzone-cheats', 'best-warzone-cheats'],
	['warzone-cheat-download', 'warzone-cheat-download'],
	['warzone-cheats-2026', 'warzone-cheats-2026'],
	['warzone-radar-hack', 'warzone-radar-hack'],
	['warzone-aimbot-hack', 'warzone-aimbot-hack'],
	['warzone-esp-hack', 'warzone-esp-hack'],
	['warzone-unlock-all', 'warzone-unlock-all'],
	['warzone-soft-aim', 'warzone-soft-aim'],
	['warzone-mod-menu', 'warzone-mod-menu'],
	['warzone-wallhack', 'warzone-wallhack'],
	['warzone-hacks', 'warzone-cheats'],
	['warzone-aimbot', 'warzone-aimbot'],
	['warzone-esp', 'warzone-esp'],
	['ricochet-bypass', 'ricochet-bypass'],
	["'ricochet'", "'ricochet'"],
	['| ricochet', '| ricochet'],
	['pageId="ricochet"', 'pageId="ricochet"'],
	['pageId: \'ricochet\'', "pageId: 'ricochet'"],
	['"ricochet"', '"ricochet"'],
	['call-of-duty-warzone-cheats', 'warzone-cheats'],
	['Call of Duty: Warzone', 'Warzone'],
	['Call of Duty Warzone', 'Warzone'],
	['Warzone Hacks', 'Warzone Cheats'],
	['Warzone Cheats', 'Warzone Cheats'],
	['Warzone cheats', 'Warzone cheats'],
	['Warzone cheat', 'Warzone cheat'],
	['Warzone hacks', 'Warzone cheats'],
	['Warzone hack', 'Warzone cheat'],
	['WarzoneCheatsSite', 'WarzoneCheatsSite'],
	['Warzone Intel', 'Warzone Intel'],
	['Ricochet anti-cheat', 'Ricochet'],
	['Ricochet maintenance', 'Ricochet maintenance'],
	['Ricochet bypass', 'Ricochet bypass'],
	['Ricochet Bypass', 'Ricochet Bypass'],
	['Ricochet patches', 'Ricochet patches'],
	['Ricochet patch', 'Ricochet patch'],
	['Ricochet updates', 'Ricochet updates'],
	['Ricochet update', 'Ricochet update'],
	['after Ricochet', 'after Ricochet'],
	['RICOCHET', 'Ricochet'],
	['Ricochet', 'Ricochet'],
	['ricochet', 'ricochet'],
	['warzone hacks', 'warzone cheats'],
	['warzone cheats', 'warzone cheats'],
	['warzone hack', 'warzone cheat'],
	['warzone cheat', 'warzone cheat'],
	['Verdansk, Urzikstan, and Rebirth Island', 'Verdansk, Rebirth, and Streets of Warzone'],
	['Verdansk, Urzikstan and Rebirth Island', 'Verdansk, Rebirth and Streets of Warzone'],
	['Verdansk, Urzikstan et Rebirth Island', 'Verdansk, Rebirth et Streets of Warzone'],
	['Verdansk, Urzikstan e Rebirth Island', 'Verdansk, Rebirth e Streets of Warzone'],
	['Verdansk, Urzikstan und Rebirth Island', 'Verdansk, Rebirth und Streets of Warzone'],
	['gulag fights', 'gulag fights'],
	['gulag fight', 'gulag fight'],
	['gulag rounds', 'raid rounds'],
	['gulag', 'gulag'],
	['BR and Resurgence-style modes', 'BR matches and Resurgence'],
	['BR and Resurgence', 'BR matches and Resurgence'],
	['BR & Resurgence', 'squad & Scav'],
	['Resurgence and Battle Royale', 'BR matches and Resurgence'],
	['Battle Royale', 'raid'],
	['Resurgence', 'Resurgence'],
	['resurgence', 'scav run'],
	['contract markers', 'gulag and loot markers'],
	['loadout drops', 'high-value loot'],
	['loadout drop', 'high-value loot'],
	['Operators', 'squads'],
	['operators', 'squads'],
	['UAV', 'gulag timer'],
	['warzoneImages', 'tarkovImages'],
	["from './warzone'", "from './tarkov'"],
	["from '../data/warzone'", "from '../data/tarkov'"],
	["from '../../data/warzone'", "from '../../data/tarkov'"],
	['fetch-warzone-images', 'fetch-tarkov-images'],
	['warzone-hack-overlays', 'warzone-hack-overlays'],
	['trucos-warzone', 'trucos-warzone'],
	['triche-warzone', 'triche-warzone'],
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
	['warzone-cheats-funktionen', 'warzone-cheats-funktionen'],
	['warzone-cheats-functies', 'warzone-cheats-functies'],
	['caracteristicas-trucos-warzone', 'caracteristicas-trucos-warzone'],
	['fonctionnalites-triche-warzone', 'fonctionnalites-triche-warzone'],
	['recursos-cheats-warzone', 'recursos-cheats-warzone'],
	['call-of-duty-warzone', 'warzone'],
	['Buy Warzone Hacks', 'Buy Warzone Cheats'],
	['Warzone', 'Warzone'],
	['warzone', 'warzone'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameWarzoneTs() {
	const from = path.join(ROOT, 'src', 'data', 'warzone.ts');
	const to = path.join(ROOT, 'src', 'data', 'warzone.ts');
	try {
		await rename(from, to);
		console.log('Renamed warzone.ts → warzone.ts');
	} catch (e) {
		console.warn(`warzone.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-warzone-images.mjs', 'fetch-tarkov-images.mjs'],
		['warzone-hack-overlays.mjs', 'warzone-hack-overlays.mjs'],
		['fix-warzone-copy.mjs', 'fix-tarkov-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'warzone-aimbot': 'warzone-aimbot',
		'warzone-esp': 'warzone-esp',
		'warzone-wallhack': 'wallhack',
		'warzone-radar-hack': 'radar',
		'undetected-warzone-cheats': 'undetected',
		'warzone-cheats-2026': 'cheats-2026',
		'ricochet-bypass': 'ricochet',
		'warzone-cheats': 'hacks',
		'warzone-cheat-download': 'cheat-download',
		'warzone-mod-menu': 'mod-menu',
		'warzone-soft-aim': 'soft-aim',
		'best-warzone-cheats': 'best-cheats',
		'warzone-aimbot-hack': 'aimbot-hack',
		'warzone-esp-hack': 'esp-hack',
		'warzone-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('warzone')) continue;
		const newName = file.replace(/warzone/g, 'warzone').replace(/warzone-hacks-logo/g, 'warzone-cheats-logo');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Warzone Hacks → Warzone Cheats (warzonecheats.co)...\n');
	await renamePageDirs();
	await renameWarzoneTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
