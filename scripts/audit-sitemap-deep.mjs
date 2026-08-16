#!/usr/bin/env node
/**
 * Deep sitemap crawlability audit beyond validate-sitemaps.mjs
 */
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const SITE = readBrandUrl();

async function resolveDist() {
	for (const dir of [path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'client')]) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			/* next */
		}
	}
	throw new Error('dist/sitemap.xml missing — run build first');
}

function gulagUrlBlocks(xml) {
	return xml.split(/<url>/i).slice(1).map((b) => `<url>${b.split(/<\/url>/i)[0]}</url>`);
}

function pick(block, re) {
	return [...block.matchAll(re)].map((m) => m[1]);
}

function pathFromUrl(url) {
	return url.replace(SITE, '') || '/';
}

function htmlPathFor(urlPath) {
	if (urlPath === '/') return 'index.html';
	return `${urlPath.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
}

const REDIRECT_MAP = (() => {
	const text = readFileSync(path.join(ROOT, 'public/_redirects'), 'utf8');
	const map = new Map();
	for (const line of text.split(/\r?\n/)) {
		const t = line.trim();
		if (!t || t.startsWith('#')) continue;
		const parts = t.split(/\s+/);
		if (parts.length < 3) continue;
		const [from, to, status] = parts;
		if (status === '301' || status === '302') map.set(from, to);
	}
	try {
		const json = JSON.parse(readFileSync(path.join(ROOT, 'functions/cannibal-redirects.json'), 'utf8'));
		for (const [from, to] of Object.entries(json)) map.set(from, to);
	} catch {
		/* optional */
	}
	return map;
})();

let errors = 0;
const fail = (msg) => {
	console.error(`✗ ${msg}`);
	errors += 1;
};
const ok = (msg) => console.log(`✓ ${msg}`);

async function main() {
	const DIST = await resolveDist();
	console.log(`Deep sitemap audit (${path.relative(ROOT, DIST)})\n`);

	const indexXml = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const enXml = await readFile(path.join(DIST, 'sitemap-en.xml'), 'utf8');
	const imagesXml = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');

	const childSitemaps = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
	for (const loc of childSitemaps) {
		const name = loc.replace(`${SITE}/`, '');
		try {
			await access(path.join(DIST, name));
			ok(`Index child exists: ${name}`);
		} catch {
			fail(`Index lists missing file: ${name}`);
		}
	}

	const allXmlFiles = ['sitemap-en.xml', 'sitemap-images.xml', 'sitemap-i18n.xml'];
	const locales = [
		'es','fr','de','pt','it','nl','pl','ru','tr','ar','ja','ko','zh','hi','id','th','vi','uk','cs','ro','sv',
	];
	for (const l of locales) allXmlFiles.push(`sitemap-${l}.xml`);

	const allPageUrls = new Set();
	const allImageUrls = new Set();
	const hreflangIssues = [];

	for (const file of allXmlFiles) {
		const xml = await readFile(path.join(DIST, file), 'utf8');
		if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
			fail(`${file}: missing sitemap 0.9 xmlns`);
		}
		if (file !== 'sitemap-images.xml' && !xml.includes('xmlns:xhtml=')) {
			fail(`${file}: missing xhtml xmlns for hreflang`);
		}
		if (!xml.includes('xmlns:image=')) {
			fail(`${file}: missing image xmlns`);
		}

		const blocks = gulagUrlBlocks(xml);
		for (const block of blocks) {
			const locs = pick(block, /<loc>([^<]+)<\/loc>/g);
			const pageLoc = locs[0];
			if (!pageLoc) {
				fail(`${file}: url block missing loc`);
				continue;
			}
			allPageUrls.add(pageLoc);

			if (!pageLoc.startsWith(SITE)) fail(`${file}: non-apex loc ${pageLoc}`);
			if (!pageLoc.endsWith('/')) fail(`${file}: missing trailing slash ${pageLoc}`);
			if (pageLoc.includes('www.')) fail(`${file}: www in loc ${pageLoc}`);

			const p = pathFromUrl(pageLoc);
			if (REDIRECT_MAP.has(p) || REDIRECT_MAP.has(p.replace(/\/$/, ''))) {
				fail(`${file}: sitemap lists redirected URL ${pageLoc} → ${REDIRECT_MAP.get(p) || REDIRECT_MAP.get(p.replace(/\/$/, ''))}`);
			}

			const htmlRel = htmlPathFor(p);
			try {
				await access(path.join(DIST, htmlRel));
			} catch {
				fail(`${file}: no HTML for ${pageLoc} (expected ${htmlRel})`);
			}

			const imageLocs = pick(block, /<image:loc>([^<]+)<\/image:loc>/g);
			if (file !== 'sitemap-images.xml' && imageLocs.length === 0) {
				fail(`${file}: no image:image for ${pageLoc}`);
			}
			for (const img of imageLocs) {
				allImageUrls.add(img);
				if (!img.startsWith(SITE + '/images/') && !img.startsWith(SITE + '/favicon')) {
					// allow /images/ primarily
					if (!img.startsWith(SITE + '/')) fail(`${file}: bad image loc ${img}`);
				}
				const imgPath = img.replace(SITE, '');
				const candidates = [
					path.join(DIST, imgPath.replace(/^\//, '')),
					path.join(ROOT, 'public', imgPath.replace(/^\//, '')),
				];
				let found = false;
				for (const c of candidates) {
					try {
						await access(c);
						found = true;
						break;
					} catch {
						/* next */
					}
				}
				if (!found) fail(`${file}: image file missing for ${img}`);
			}

			const hrefLangs = [...block.matchAll(/hreflang="([^"]+)"\s+href="([^"]+)"/g)];
			for (const [, lang, href] of hrefLangs) {
				const hp = pathFromUrl(href);
				if (REDIRECT_MAP.has(hp) || REDIRECT_MAP.has(hp.replace(/\/$/, ''))) {
					hreflangIssues.push(`${pageLoc} hreflang=${lang} → redirect ${href}`);
				}
				if (!href.startsWith(SITE)) {
					hreflangIssues.push(`${pageLoc} hreflang=${lang} non-apex ${href}`);
				}
			}

			const lastmods = pick(block, /<lastmod>([^<]+)<\/lastmod>/g);
			for (const lm of lastmods) {
				if (!/^\d{4}-\d{2}-\d{2}/.test(lm)) fail(`${file}: bad lastmod ${lm} on ${pageLoc}`);
			}
		}
	}

	// sitemap-images dedicated checks
	const imgBlocks = gulagUrlBlocks(imagesXml);
	for (const block of imgBlocks) {
		const pageLoc = pick(block, /<loc>([^<]+)<\/loc>/g)[0];
		const imageLoc = pick(block, /<image:loc>([^<]+)<\/image:loc>/g)[0];
		if (!pageLoc || !imageLoc) fail('sitemap-images: incomplete entry');
	}

	if (hreflangIssues.length) {
		for (const issue of hreflangIssues.slice(0, 30)) fail(`hreflang: ${issue}`);
		if (hreflangIssues.length > 30) fail(`hreflang: …and ${hreflangIssues.length - 30} more`);
	} else {
		ok('No hreflang targets point at redirected URLs');
	}

	ok(`Audited ${allPageUrls.size} unique page URLs`);
	ok(`Audited ${allImageUrls.size} unique image URLs`);

	// robots
	const robots = await readFile(path.join(ROOT, 'public/robots.txt'), 'utf8');
	if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt missing primary Sitemap');
	else ok('robots.txt points at sitemap.xml');

	// Layout link rel=sitemap
	const home = await readFile(path.join(DIST, 'index.html'), 'utf8');
	if (!home.includes('href="/sitemap.xml"') && !home.includes(`href="${SITE}/sitemap.xml"`)) {
		fail('Homepage missing <link rel="sitemap">');
	} else ok('Homepage links to sitemap.xml');

	console.log('');
	if (errors) {
		console.error(`${errors} issue(s) found`);
		process.exit(1);
	}
	console.log('Deep sitemap audit passed — all links crawlable.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
