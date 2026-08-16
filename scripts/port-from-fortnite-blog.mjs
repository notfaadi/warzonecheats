#!/usr/bin/env node
/**
 * Ports the 8 posts from ../warzone-blog into src/data/blog/posts.generated.ts
 * and rewrites scripts/generate-blog-posts.mjs sources for future regenerations.
 */
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SOURCE_DIR = join(ROOT, '..', 'warzone-blog', 'src', 'content', 'posts');
const OUT = join(ROOT, 'src', 'data', 'blog', 'posts.generated.ts');

const CATEGORY_NAMES = {
	'battle-royale-meta': 'raid Meta',
	'zero-build-strategies': 'Resurgence',
	'skin-leaks-cosmetics': 'Skin Leaks & Cosmetics',
	'weapon-tier-lists': 'Weapon Tier Lists',
	'pro-player-setups': 'Pro Player Setups',
	'creative-mode-maps': 'Creative Mode',
	'esports-tournaments': 'Esports & Tournaments',
	'patch-notes-breakdown': 'Patch Notes Breakdown',
};

const IMAGE_KEYS = {
	'zero-build-meta-broken-aggressive-strategies': 'battleRoyaleCombat',
	'secret-loot-routes-full-gold': 'battleRoyaleIslandMap',
	'hammer-ar-s-tier-data-analysis': 'aimbotCombat',
	'chapter-7-season-3-skin-leaks-vbucks': 'headerArt',
	'fncs-meta-watch-tournament-drops': 'rebootFight',
	'bugha-settings-pro-setup': 'cheatsPackage',
	'creative-warmup-maps-pros-use': 'playerEsp',
	'patch-notes-buffs-nerfs-vaults': 'squadFight',
};

const POST_FILES = [
	'hammer-ar-tier-list.ts',
	'zero-build-meta-broken.ts',
	'secret-loot-routes.ts',
	'skin-leaks-c7s3.ts',
	'fncs-meta-watch.ts',
	'bugha-settings.ts',
	'creative-warmup-maps.ts',
	'patch-notes-breakdown.ts',
];

function blockToParagraph(block) {
	switch (block.type) {
		case 'paragraph':
			return block.text;
		case 'proTip':
			return `${block.title ?? 'Pro Tip'}: ${block.text}`;
		case 'tryThis':
			return `${block.title ?? 'Try This Today'}: ${block.steps.join(' ')}`;
		case 'visualBreakdown': {
			const items = block.items.map((item, i) => `${i + 1}. ${item}`).join(' ');
			const caption = block.caption ? ` ${block.caption}` : '';
			return `${block.title}: ${items}${caption}`;
		}
		case 'checklist':
			return `${block.title}: ${block.items.map((item) => `• ${item}`).join(' ')}`;
		case 'poll':
			return `${block.question} Options: ${block.options.join(' | ')}`;
		case 'youtube':
			return `Watch: ${block.title} (YouTube ${block.videoId})`;
		case 'faq':
			return block.items.map((item) => `Q: ${item.question} A: ${item.answer}`).join(' ');
		default:
			return null;
	}
}

function contentToSections(post) {
	const sections = [];
	let current = null;

	const flush = () => {
		if (current && current.paragraphs.length) sections.push(current);
		current = null;
	};

	for (const block of post.content) {
		if (block.type === 'heading') {
			flush();
			current = { h2: block.text, paragraphs: [] };
			continue;
		}
		if (!current) current = { h2: 'Overview', paragraphs: [] };
		const text = blockToParagraph(block);
		if (text) current.paragraphs.push(text);
	}
	flush();

	if (post.faq?.length) {
		sections.push({
			h2: 'FAQ',
			paragraphs: post.faq.map((item) => `Q: ${item.question} A: ${item.answer}`),
		});
	}

	return sections;
}

async function loadPost(filePath) {
	let src = readFileSync(filePath, 'utf8');
	src = src.replace(/import\s+type\s+\{\s*Post\s*\}\s+from\s+["']@\/lib\/types["'];?\s*/m, '');
	src = src.replace(/:\s*Post\s*=/, ' =');
	src = src.replace(/export\s+const\s+\w+\s*=/, 'const post =');
	src += '\nexport default post;\n';

	const dir = mkdtempSync(join(tmpdir(), 'fn-blog-port-'));
	const tmp = join(dir, basename(filePath).replace(/\.ts$/, '.mjs'));
	// Strip remaining TS-only syntax if any; content is plain JS object literals.
	writeFileSync(tmp, src);
	try {
		const mod = await import(`${pathToFileURL(tmp).href}?t=${Date.now()}`);
		return mod.default;
	} finally {
		rmSync(dir, { recursive: true, force: true });
	}
}

function dateOnly(iso) {
	return iso.slice(0, 10);
}

function shortH1(title) {
	const cleaned = title.replace(/^The\s+/i, '').replace(/'/g, '');
	if (cleaned.length <= 72) return title.replace(/'/g, '');
	return cleaned.split(':')[0].trim();
}

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
		en: ${translationBlock(src)},
		},
	}`;
}

const sources = [];

for (const file of POST_FILES) {
	const post = await loadPost(join(SOURCE_DIR, file));
	const id = file.replace(/\.ts$/, '');
	const imageKey = IMAGE_KEYS[post.slug];
	if (!imageKey) throw new Error(`No imageKey for slug ${post.slug}`);

	sources.push({
		id,
		imageKey,
		published: dateOnly(post.publishedAt),
		updated: dateOnly(post.updatedAt ?? post.publishedAt),
		category: CATEGORY_NAMES[post.category] ?? post.category,
		featured: Boolean(post.featured),
		slug: post.slug,
		title: post.title,
		metaDescription: post.description,
		h1: shortH1(post.title),
		intro: post.excerpt,
		keywords: [...post.tags, 'warzone intel'],
		imageAlt: post.thumbnailAlt,
		sections: contentToSections(post),
	});
}

// Sort newest first for a natural index order
sources.sort((a, b) => (a.published < b.published ? 1 : -1));

const file = `/* Auto-generated by scripts/port-from-warzone-blog.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);
console.log(`Wrote ${sources.length} posts → ${OUT}`);
for (const s of sources) {
	console.log(` - /blog/${s.slug}/`);
}
