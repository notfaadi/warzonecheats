import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const publicDir = path.join(root, 'public');
const imagesDir = path.join(publicDir, 'images');
const sourcePath =
	'C:/Users/Aman/.cursor/projects/c-Users-Aman-warzonehacks/assets/c__Users_Aman_AppData_Roaming_Cursor_User_workspaceStorage_5fc01ad59007d6b1ec3564ba48b04eb7_images_image-4be7ee07-5934-4878-8eb6-1fb2f3143ab4.png';

const BG = { r: 10, g: 6, b: 18, alpha: 1 }; // #0a0612 — matches theme-color

async function squareLogoBuffer(size) {
	return sharp(sourcePath)
		.resize(size, size, { fit: 'contain', background: BG })
		.png()
		.toBuffer();
}

async function generateSiteLogo() {
	const logoPng = await squareLogoBuffer(512);
	await writeFile(path.join(imagesDir, 'warzone-cheats-logo.png'), logoPng);
	console.log('Wrote public/images/tarkov-cheats-logo.png (512×512)');

	const logoWebp = await sharp(logoPng).webp({ quality: 90, effort: 6 }).toBuffer();
	await writeFile(path.join(imagesDir, 'warzone-cheats-logo.webp'), logoWebp);
	console.log('Wrote public/images/tarkov-cheats-logo.webp');
}

async function generateFavicons(logoBuffer) {
	const sizes = [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	];

	for (const { name, size } of sizes) {
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
	console.log('Wrote public/favicon.ico (32×32 PNG)');

	const svgBase64 = logoBuffer.toString('base64');
	const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect width="512" height="512" fill="#0a0612"/><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`;
	await writeFile(path.join(publicDir, 'favicon.svg'), faviconSvg);
	console.log('Wrote public/favicon.svg (embedded PNG)');
}

async function generateWebManifest() {
	const manifest = {
		name: 'Warzone Cheats',
		short_name: 'Warzone Cheats',
		description: 'Undetected warzone cheats — ESP, aimbot, radar and for PC',
		start_url: '/',
		display: 'standalone',
		background_color: '#0a0612',
		theme_color: '#0a0612',
		icons: [
			{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
			{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
	};
	await writeFile(path.join(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);
	console.log('Wrote public/site.webmanifest');
}

await mkdir(imagesDir, { recursive: true });
const logoBuffer = await squareLogoBuffer(512);
await generateSiteLogo();
await generateFavicons(logoBuffer);
await generateWebManifest();
console.log('Brand assets generated.');
