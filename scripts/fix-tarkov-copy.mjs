#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/phrases.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'scripts/generate-blog-posts.mjs',
	'README.md',
];

const reps = [
	['EXT.epic', 'EXT.activision'],
	['Epic Games', 'Activision'],
	['Epic platform', 'Activision platform'],
	['Epic service', 'Activision service'],
	['Epic services', 'Activision services'],
	['Epic outages', 'Activision outages'],
	['Epic outage', 'Activision outage'],
	["Epic's", "Activision's"],
	['Warzone', 'Warzone'],
	['KW.eac', 'KW.ricochet'],
	['Easy Anti-Cheat (EAC)', 'Ricochet'],
];

for (const file of files) {
	let content = readFileSync(file, 'utf8');
	for (const [from, to] of reps) {
		content = content.split(from).join(to);
	}
	writeFileSync(file, content);
	console.log('Updated', file);
}
