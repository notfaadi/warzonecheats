#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const issues = [];

function walk(dir) {
	for (const name of readdirSync(dir)) {
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) walk(full);
		else if (name === 'index.html' || name.endsWith('.html')) {
			const html = readFileSync(full, 'utf8');
			const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
			for (const m of imgs) {
				const tag = m[0];
				const alt = tag.match(/\balt=("([^"]*)"|'([^']*)')/i);
				const src = tag.match(/\bsrc=("([^"]*)"|'([^']*)')/i);
				const altVal = alt ? alt[2] ?? alt[3] ?? '' : null;
				const srcVal = src ? src[2] ?? src[3] ?? '' : '';
				if (altVal === null) issues.push({ file: full, kind: 'missing-alt', src: srcVal });
				else if (!altVal.trim()) issues.push({ file: full, kind: 'empty-alt', src: srcVal });
			}
		}
	}
}

walk(dist);
console.log('issues', issues.length);
for (const i of issues.slice(0, 40)) {
	console.log(i.kind, i.src, '→', path.relative(dist, i.file));
}

const home = readFileSync(path.join(dist, 'index.html'), 'utf8');
const og = home.match(/property="og:image"\s+content="([^"]+)"/);
const ogAlt = home.match(/property="og:image:alt"\s+content="([^"]+)"/);
const schemaImg = home.match(/"primaryImageOfPage"[\s\S]*?"url"\s*:\s*"([^"]+)"/);
const productImg = home.match(/"@type"\s*:\s*"Product"[\s\S]*?"image"\s*:\s*"([^"]+)"/);
console.log('\nHOME og:image', og?.[1]);
console.log('HOME og:image:alt', ogAlt?.[1]);
console.log('HOME primaryImageOfPage', schemaImg?.[1]);
console.log('HOME Product.image', productImg?.[1]);

const sm = readFileSync(path.join(dist, 'sitemap-en.xml'), 'utf8');
const homeBlock = sm.split('<url>').find((b) => b.includes(`${process.env.SITE || 'https://warzonecheats.co'}/</loc>`) || b.includes('warzonecheats.co/</loc>'));
console.log('\nSITEMAP HOME BLOCK:\n', homeBlock?.slice(0, 600));
