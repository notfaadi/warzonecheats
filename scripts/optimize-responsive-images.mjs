import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

/** Hero LCP asset — responsive widths for srcset */
const HERO_WIDTHS = [480, 640, 960, 1400];

/** Below-fold content images — smaller variants for gallery/product cards */
const CONTENT_WIDTHS = [480, 960];

const SKIP_PATTERNS = [
	/-\d+w\.webp$/i,
	/warzone-cheats-logo/i,
	/favicon/i,
];

async function optimizeHero() {
	const source = path.join(imagesDir, 'warzone-esp-player-tags.webp');
	const meta = await sharp(source).metadata();
	const results = [];

	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const file = `warzone-esp-player-tags-${width}w.webp`;
		const dest = path.join(imagesDir, file);
		const quality = width <= 480 ? 56 : width <= 640 ? 70 : 78;
		const buffer = await sharp(source)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		results.push({ file, width, bytes: buffer.length });
		console.log(`Wrote ${file} (${buffer.length} bytes)`);
	}

	return results;
}

async function optimizeContentImages() {
	const files = await readdir(imagesDir);
	const sources = files.filter(
		(file) =>
			file.endsWith('.webp') &&
			!SKIP_PATTERNS.some((pattern) => pattern.test(file)) &&
			file !== 'warzone-esp-player-tags.webp',
	);

	const results = [];

	for (const file of sources) {
		const source = path.join(imagesDir, file);
		const meta = await sharp(source).metadata();
		const base = file.replace(/\.webp$/i, '');

		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${base}-${width}w.webp`;
			const dest = path.join(imagesDir, variant);
			const buffer = await sharp(source)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(dest, buffer);
			results.push({ file: variant, width, bytes: buffer.length });
			console.log(`Wrote ${variant} (${buffer.length} bytes)`);
		}
	}

	return results;
}

const heroResults = await optimizeHero();
const contentResults = await optimizeContentImages();
console.log(`Done — ${heroResults.length} hero + ${contentResults.length} content variants.`);
