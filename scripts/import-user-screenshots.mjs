import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const publicDir = path.join(root, 'public');
const assetsDir =
	'C:/Users/Aman/.cursor/projects/c-Users-Aman-warzonehacks/assets';

const USER_SCREENSHOTS = [
	{
		source:
			'c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-4e39dba0-c5eb-40a6-9dff-f00c004bf6c1.png',
		file: 'warzone-esp-player-tags.webp',
	},
	{
		source:
			'c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-d50dbb87-0ddd-476a-b41f-a5ba6cf79e6b.png',
		file: 'warzone-wallhack-skeleton.webp',
	},
	{
		source:
			'c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-d6376015-d4c8-420c-bb87-bd5bd5d98c45.png',
		file: 'warzone-aimbot-sniper.webp',
	},
	{
		source:
			'c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-339045fa-5567-4df1-8592-91160ec6e0af.png',
		file: 'warzone-aimbot-skeleton.webp',
	},
	{
		source:
			'c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-f0dcf8d8-7475-4e77-b690-c0bcac4fc67c.png',
		file: 'warzone-esp-radar.webp',
	},
	{
		source:
			'c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-ba262ad4-1a09-43a6-95eb-e7371f63c6ee.png',
		file: 'warzone-cheats-combat.webp',
	},
];

const HERO_WIDTHS = [480, 640, 960, 1400];
const CONTENT_WIDTHS = [480, 960];

const REMOVE_PREFIXES = [
	'warzone-battle-royale-combat',
	'warzone-gulag-fight',
	'warzone-cheats-aimbot',
	'warzone-cheats-cover',
	'warzone-cheats-esp-wallhack',
	'warzone-cheats-hero',
	'warzone-cheats-logo',
	'warzone-cheats-package',
	'warzone-header-art',
	'warzone-loadout-builder',
	'warzone-player-esp',
	'warzone-Resurgence-combat',
	'warzone-Resurgence-mode',
	'warzone-squad-fight',
	'warzone-verdansk-map',
];

async function removeOldWarzoneImages() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (file.includes('warzone-cheats-logo')) continue;
		const base = file.replace(/(-\d+w)?\.webp$/i, '');
		if (REMOVE_PREFIXES.includes(base)) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed ${file}`);
		}
	}
}

async function convertScreenshots() {
	const results = [];
	for (const { source, file } of USER_SCREENSHOTS) {
		const input = path.join(assetsDir, source);
		const dest = path.join(imagesDir, file);
		const buffer = await sharp(input)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 86, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		results.push({ file, bytes: buffer.length });
		console.log(`Wrote ${file} (${buffer.length} bytes)`);
	}
	return results;
}

async function generateResponsiveVariants() {
	const heroSource = path.join(imagesDir, 'warzone-esp-player-tags.webp');
	const heroMeta = await sharp(heroSource).metadata();

	for (const width of HERO_WIDTHS) {
		if (heroMeta.width && width > heroMeta.width) continue;
		const file = `warzone-esp-player-tags-${width}w.webp`;
		const quality = width <= 480 ? 56 : width <= 640 ? 70 : 78;
		const buffer = await sharp(heroSource)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, file), buffer);
		console.log(`Wrote ${file}`);
	}

	for (const { file } of USER_SCREENSHOTS) {
		if (file === 'warzone-esp-player-tags.webp') continue;
		const source = path.join(imagesDir, file);
		const meta = await sharp(source).metadata();
		const base = file.replace(/\.webp$/i, '');

		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${base}-${width}w.webp`;
			const buffer = await sharp(source)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, variant), buffer);
			console.log(`Wrote ${variant}`);
		}
	}
}

async function generateFavicons() {
	const logoPath = path.join(imagesDir, 'warzone-cheats-logo.png');
	const logoBuffer = await sharp(logoPath)
		.resize(512, 512, { fit: 'contain', background: { r: 10, g: 6, b: 18, alpha: 1 } })
		.png()
		.toBuffer();

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
		console.log(`Wrote public/${name}`);
	}

	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
	);
	console.log('Wrote public/favicon.ico');

	const svgBase64 = logoBuffer.toString('base64');
	const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect width="512" height="512" fill="#0a0612"/><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`;
	await writeFile(path.join(publicDir, 'favicon.svg'), faviconSvg);
	console.log('Wrote public/favicon.svg (embedded PNG)');
}

await mkdir(imagesDir, { recursive: true });
await removeOldWarzoneImages();
await convertScreenshots();
await generateResponsiveVariants();
await generateFavicons();
console.log('Done — user screenshots imported, old assets removed, favicons generated.');
