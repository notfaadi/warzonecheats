import { readFileSync } from 'node:fs';
const h = readFileSync('dist/index.html', 'utf8');
for (const s of ['hero-640w', 'hero-1024w', 'hero-full.png', 'fonts/inter', 'imagesrcset', 'fetchpriority']) {
	console.log(s, h.includes(s));
}
console.log([...new Set(h.match(/warzone-cheats-hero[^"'\\\s>]*/g) || [])]);
