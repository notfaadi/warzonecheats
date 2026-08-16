import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { buildOverlaySvg } from './warzone-hack-overlays.mjs';

const imagesDir = path.resolve('public/images');
const publicDir = path.resolve('public');

/** Verified IGN Warzone screenshot CDN paths. */
const ME_G = 'https://sm.ign.com/t/ign_me/gallery/c/call-of-du';
const ME = 'https://sm.ign.com/t/ign_me/screenshot/c/call-of-du';
const NL = 'https://sm.ign.com/t/ign_nl/screenshot/c/call-of-du';
const BR = 'https://sm.ign.com/t/ign_br/screenshot/default';
const PK = 'https://sm.ign.com/t/ign_pk/screenshot/default';

/**
 * Warzone cheats image pipeline:
 * 1. Download real Warzone gameplay from IGN
 * 2. Composite ESP / aimbot / radar / mod-menu overlays for warzone cheats marketing
 */
const KEYWORD_ASSETS = [
	{
		file: 'warzone-cheats-hero.webp',
		url: `${ME_G}/warzone-screenshots_wjkx.1400.jpg`,
		overlay: 'hero',
	},
	{
		file: 'warzone-cheats-aimbot.webp',
		url: `${ME}/warzone-screenshots_wjb1.1400.jpg`,
		overlay: 'aimbot',
	},
	{
		file: 'warzone-cheats-esp-wallhack.webp',
		url: `${ME}/warzone-screenshots_55fp.1400.jpg`,
		overlay: 'wallhack',
	},
	{
		file: 'warzone-squad-fight.webp',
		url: `${ME}/warzone-screenshots_67cp.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'warzone-cheats-package.webp',
		url: `${ME}/warzone-screenshots_anf4.1400.jpg`,
		overlay: 'menu',
	},
	{
		file: 'warzone-cheats-cover.webp',
		url: `${ME}/warzone-screenshots_7pr8.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'warzone-header-art.webp',
		url: `${ME}/warzone-screenshots_c36j.1400.jpg`,
		overlay: 'hero',
	},
	{
		file: 'warzone-loadout-builder.webp',
		url: `${NL}/warzone-screenshots_e5gw.1400.jpg`,
		overlay: 'menu',
	},
	{
		file: 'warzone-battle-royale-combat.webp',
		url: `${ME}/warzone-screenshots_4h92.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'warzone-gulag-fight.webp',
		url: `${BR}/goulag-inside_zusa.1400.png`,
		overlay: 'gulag',
	},
	{
		file: 'warzone-player-esp.webp',
		url: `${ME}/warzone-screenshots_rb92.1400.jpg`,
		overlay: 'esp',
	},
	{
		file: 'warzone-Resurgence-combat.webp',
		url: `${BR}/plunder_px6d.1400.png`,
		overlay: 'Resurgence',
	},
	{
		file: 'warzone-Resurgence-mode.webp',
		url: `${BR}/parachuting_qhh2.1400.png`,
		overlay: 'loot',
	},
	{
		file: 'warzone-verdansk-map.webp',
		url: `${PK}/wz-verdansksubway-1601169413816_x2hg.1400.jpg`,
		overlay: 'map',
	},
];

const REMOVE_PATTERNS = [
	/^fortnite-/,
	/-\d+w\.webp$/i,
	/^warzone-cheats-logo/,
];

async function fetchBase(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WarzoneHacksSite/1.0)' },
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function composeHackImage(baseBuffer, overlayPreset) {
	const base = sharp(baseBuffer).resize({ width: 1920, withoutEnlargement: true });
	const meta = await base.metadata();
	const width = meta.width ?? 1920;
	const height = meta.height ?? 1080;

	const overlaySvg = Buffer.from(buildOverlaySvg(width, height, overlayPreset));
	const darkened = await base.modulate({ brightness: 0.92, saturation: 1.08 }).toBuffer();

	return sharp(darkened)
		.composite([{ input: overlaySvg, top: 0, left: 0 }])
		.webp({ quality: 86 })
		.toBuffer();
}

async function cleanImagesDir() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (file.includes('warzone-cheats-logo')) continue;
		if (REMOVE_PATTERNS.some((pattern) => pattern.test(file))) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed ${file}`);
		}
	}
}

async function generateBrandAssets(heroBuffer) {
	const logoBuffer = await sharp(heroBuffer)
		.gulag({ left: 420, top: 180, width: 520, height: 520 })
		.resize(512, 512, { fit: 'cover' })
		.webp({ quality: 88 })
		.toBuffer();

	await writeFile(path.join(imagesDir, 'warzone-cheats-logo.webp'), logoBuffer);

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(path.join(publicDir, name), await sharp(logoBuffer).resize(size, size).png().toBuffer());
	}
	await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logoBuffer).resize(32, 32).png().toBuffer());
}

await mkdir(imagesDir, { recursive: true });
await cleanImagesDir();

let heroBuffer = null;
let saved = 0;

for (const asset of KEYWORD_ASSETS) {
	console.log(`Fetching ${asset.file} (${asset.overlay} overlay)`);
	try {
		const base = await fetchBase(asset.url);
		const webp = await composeHackImage(base, asset.overlay);
		await writeFile(path.join(imagesDir, asset.file), webp);
		console.log(`  ✓ ${asset.file} (${webp.length} bytes)`);
		saved++;
		if (asset.file === 'warzone-cheats-hero.webp') heroBuffer = webp;
	} catch (err) {
		console.warn(`  ✗ Skip ${asset.file}: ${err.message}`);
	}
}

if (heroBuffer) {
	await generateBrandAssets(heroBuffer);
	console.log('Generated logo + favicons from hero.');
}

console.log(`\nDone — ${saved}/${KEYWORD_ASSETS.length} Warzone cheats images (IGN base + ESP/aimbot overlays).`);
