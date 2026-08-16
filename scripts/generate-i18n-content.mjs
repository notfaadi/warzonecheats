#!/usr/bin/env node
/**
 * Generates src/data/i18n/content.generated.ts with UI strings and page content
 * for all 22 locales. Run: node scripts/generate-i18n-content.mjs
 */
import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES, TS_HEADER } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { englishPagesFinal } from './i18n-data/pages-en.mjs';
import { buildPagesForLocale } from './i18n-data/pages-i18n.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'i18n', 'content.generated.ts');

/** Serialize to valid TypeScript object literal with tabs. */
function serialize(value, indent = 1) {
	const pad = '\t'.repeat(indent);
	const padIn = '\t'.repeat(indent + 1);

	if (value === null || value === undefined) return 'undefined';
	if (typeof value === 'string') return JSON.stringify(value);
	if (typeof value === 'number' || typeof value === 'boolean') return String(value);

	if (Array.isArray(value)) {
		if (value.length === 0) return '[]';
		const items = value.map((v) => `${padIn}${serialize(v, indent + 1)}`).join(',\n');
		return `[\n${items},\n${pad}]`;
	}

	const entries = Object.entries(value);
	const lines = entries.map(([k, v]) => {
		const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) && !k.includes('-') ? k : JSON.stringify(k);
		return `${padIn}${key}: ${serialize(v, indent + 1)}`;
	});
	return `{\n${lines.join(',\n')},\n${pad}}`;
}

function buildI18nContent() {
	/** @type {Record<string, { ui: object; pages: object }>} */
	const content = {};

	for (const locale of LOCALES) {
		const ui = allUiStrings[locale];
		if (!ui) throw new Error(`Missing UI strings for locale: ${locale}`);

		const pages = locale === 'en' ? englishPagesFinal : buildPagesForLocale(locale);

		// Validate required page keys
		const requiredPages = [
			'home', 'warzone-esp', 'warzone-aimbot', 'features', 'pricing', 'setup',
			'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'ricochet',
			'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
			'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
		];
		for (const pageId of requiredPages) {
			if (!pages[pageId]) throw new Error(`Missing page "${pageId}" for locale "${locale}"`);
			const p = pages[pageId];
			if (p.title.length > 60) console.warn(`WARN [${locale}/${pageId}] title ${p.title.length} chars: ${p.title}`);
			if (p.description.length > 160) console.warn(`WARN [${locale}/${pageId}] desc ${p.description.length} chars`);
			if (!p.heroImage?.startsWith('/images/tarkov') && !p.heroImage?.startsWith('/images/warzone')) {
				throw new Error(`Invalid heroImage for ${locale}/${pageId}: ${p.heroImage}`);
			}
			if (pageId === 'home' && p.sections.length !== 2) {
				throw new Error(`Home must have 2 sections for ${locale}, got ${p.sections.length}`);
			}
			if (['privacy', 'refund', 'terms'].includes(pageId) && p.sections.length !== 3) {
				throw new Error(`Legal page ${pageId} must have 3 sections for ${locale}`);
			}
			if (!['home', 'privacy', 'refund', 'terms'].includes(pageId) && p.sections.length < 3) {
				throw new Error(`Page ${pageId} needs 3+ sections for ${locale}, got ${p.sections.length}`);
			}
			for (const sec of p.sections) {
				if (sec.paragraphs.length < 2) {
					throw new Error(`Section "${sec.h2}" in ${locale}/${pageId} needs 2 paragraphs`);
				}
			}
		}

		content[locale] = { ui, pages };
	}

	return content;
}

async function main() {
	console.log('Generating i18n content for', LOCALES.length, 'locales...');

	const i18nContent = buildI18nContent();
	const body = `${TS_HEADER}\nexport const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = ${serialize(i18nContent)};\n`;

	await mkdir(path.dirname(OUT_FILE), { recursive: true });
	await writeFile(OUT_FILE, body, 'utf8');

	const { size } = await stat(OUT_FILE);
	const sizeKb = (size / 1024).toFixed(1);
	const sizeMb = (size / (1024 * 1024)).toFixed(2);

	console.log('✓ Wrote', OUT_FILE);
	console.log(`✓ File size: ${size.toLocaleString()} bytes (${sizeKb} KB / ${sizeMb} MB)`);
	console.log(`✓ Locales: ${LOCALES.join(', ')}`);
	console.log(`✓ Pages per locale: 25`);
	console.log('Success.');
}

main().catch((err) => {
	console.error('Generation failed:', err);
	process.exit(1);
});
