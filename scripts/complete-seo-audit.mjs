#!/usr/bin/env node
/**
 * Completes warzone-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'warzone-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'warzone-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'warzone-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'warzone-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-warzone-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'warzone-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'warzone-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'warzone-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'warzone'],
	[/ricochet-bypass-warzone/g, 'ricochet-bypass'],
	[/Warzone/g, 'Warzone'],
	[/Warzone/g, 'Warzone'],
	[/Call of Duty/g, 'Warzone'],
	[/Warzone Wallhack/g, 'Warzone Wallhack'],
	[/Warzone Radar Hack/g, 'Warzone Radar Hack'],
	[/Warzone Cheat Features/g, 'Warzone Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Warzone Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Warzone Cheat Setup'],
	[/Warzone Cheat Status/g, 'Warzone Cheat Status'],
	[/Warzone Cheat Support/g, 'Warzone Cheat Support'],
	[/Warzone squad fight/g, 'Warzone squad fight'],
	[/Warzone squad builder/g, 'Warzone loadout builder'],
	[/Warzone store header/g, 'Warzone header'],
	[/Warzone wasteland combat/g, 'Warzone battle royale combat'],
	[/Warzone loadout builder/g, 'Warzone loadout builder'],
	[/Warzone pricing/g, 'Warzone pricing'],
	[/Warzone Ricochet/g, 'Warzone Ricochet'],
	[/on Warzone/g, 'on Warzone'],
	[/for Warzone/g, 'for Warzone'],
	[/Warzone guides/g, 'Warzone guides'],
	[/Warzone guide/g, 'Warzone guide'],
	[/Warzone hileleri/g, 'Warzone hileleri'],
	[/Warzone hile/g, 'Warzone hile'],
	[/Warzone hileleri/g, 'Warzone hileleri'],
	[/cheatów Warzone/g, 'cheatów Warzone'],
	[/cheat Warzone/g, 'cheat Warzone'],
	[/cheats Warzone/g, 'cheats Warzone'],
	[/trucos Warzone/g, 'trucos Warzone'],
	[/triche Warzone/g, 'triche Warzone'],
	[/trucchi Warzone/g, 'trucchi Warzone'],
	[/Wallhack Warzone/g, 'Warzone Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Warzone undetected'],
	[/cheats Warzone undetected/g, 'cheats Warzone undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and Resurgence'],
	[/Verdansk, Urzikstan/g, 'Verdansk, Resurgence'],
	[/raid and Resurgence/g, 'raid and Resurgence'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/ricochet/gi, 'ricochet'],
	[/Ricochet/g, 'Ricochet'],
	[/warzone-cheats/g, 'warzone-cheats'],
	[/warzone/g, 'warzone'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Warzone'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Warzone anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Warzone Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Warzone guides/g, 'Warzone guides');
	content = content.replace(/Warzone guide/g, 'Warzone guide');
	content = content.replace(/Warzone hileleri/g, 'Warzone hileleri');
	content = content.replace(/Warzone hile/g, 'Warzone hile');
	content = content.replace(/cheat Warzone/g, 'cheat Warzone');
	content = content.replace(/cheats Warzone/g, 'cheats Warzone');
	content = content.replace(/trucos Warzone/g, 'trucos Warzone');
	content = content.replace(/triche Warzone/g, 'triche Warzone');
	content = content.replace(/trucchi Warzone/g, 'trucchi Warzone');
	content = content.replace(/cheatów Warzone/g, 'cheatów Warzone');
	content = content.replace(/читов Warzone/g, 'читов Warzone');
	content = content.replace(/читів Warzone/g, 'читів Warzone');
	content = content.replace(/Warzoneチート/g, 'Warzoneチート');
	content = content.replace(/Warzone 치트/g, 'Warzone 치트');
	content = content.replace(/Warzone作弊/g, 'Warzone作弊');
	content = content.replace(/Warzone rehberleri/g, 'Warzone rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Warzone gidsen');
	content = content.replace(/Warzone průvodce/g, 'Warzone průvodce');
	content = content.replace(/Warzone guider/g, 'Warzone guider');
	content = content.replace(/Warzone related/g, 'Warzone related');
	content = content.replace(/Warzone ガイド/g, 'Warzone ガイド');
	content = content.replace(/Warzone 가이드/g, 'Warzone 가이드');
	content = content.replace(/Warzone指南/g, 'Warzone指南');
	content = content.replace(/Warzone गाइड/g, 'Warzone गाइड');
	content = content.replace(/Warzone panduan/g, 'Warzone panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Warzone คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Warzone hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Warzone Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
