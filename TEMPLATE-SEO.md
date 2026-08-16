# Template SEO Playbook (for employees)

This project is a **locked SEO template**. When you retarget another game or domain, keep the same SEO system. Only swap brand/game details.

## Goal

Same structure for every game / domain:

- Simple language
- Short pages
- Clear nav (Preview / Features / Store / Status / Reviews)
- Predictable titles and descriptions
- Same technical SEO (schema, sitemaps, canonicals)
- **One brand file** drives name, domain, keywords, checkout, and meta tokens

## Brand Studio (easiest for employees)

Local-only form UI — no production access:

```bash
npm run dev
```

Open [http://localhost:4321/brand-studio/](http://localhost:4321/brand-studio/)

1. Follow the checklist: Identity + domain → Product → SEO titles → Copy → Colors → **Save permanently** (Ctrl+S)
2. SEO tab shows a coverage audit (green = permanent in Studio; yellow = still manual files) and a live SERP preview clamped like production (titles ≤70, descriptions ≤160)
3. Or on any localhost page: **double-click text** → edit → Save (`data-edit` fields write `brand.ts`; other text goes to `inline-edits.json` as a **dev-only** override)
4. Click **Save permanently** (writes `src/data/brand.ts`, syncs robots + Astro `site`; sitemaps rebuild on refresh / build). Truncation / consistency notes appear as warnings — the form reloads from disk so you see what actually saved.
5. Sitemap section **mirrors Site URL live** — no separate sitemap domain field

Optional lock: set env `BRAND_STUDIO_TOKEN=your-secret` before `npm run dev`, then enter the token under **Images & advanced**.

**Still edit by hand after a rebrand:** keyword landing bodies (`content.generated.ts`), FAQ/review item answers (`site.ts`). Hub page SEO/copy/theme/hero/domain are permanent via Studio.

**Security:** write API only exists in `astro dev`; localhost IP + Host + header checks; rate-limited; stripped from `dist` on build; Cloudflare `_redirects` rewrites Brand Studio to `/404.html` (Workers disallow status 404 in `_redirects`); robots disallow `/brand-studio/`.

Then continue with FAQs / images if the game changed (steps below).

## Single source of truth

Edit **`src/data/brand.ts` first** (or use Brand Studio). Everything else derives from it:

| Token | Meaning |
|-------|---------|
| `{brand}` | Public site name |
| `{game}` | Target game |
| `{antiCheat}` | Anti-cheat name |
| `{email}` | Support email |
| `{primaryKeyword}` | Main search phrase |
| `{checkout}` | Checkout URL |

Then run:

```bash
npm run sync:brand
```

This updates `astro.config.mjs` `site`, `public/robots.txt`, and `public/site.webmanifest`. It also runs automatically on `npm run build` (`prebuild`).

## What you may change

| Area | File(s) | What to edit |
|------|---------|--------------|
| Brand, URL, email, checkout, keywords, plans, SEO, sitemap labels, colors | `src/data/brand.ts` | All brand tokens + `sitemap` + `theme` |
| Site colors (accent + bg + soft/deep/hover/panel) | Brand Studio → Colors | All six tones editable; Layout injects CSS vars |
| SEO meta for main pages | Brand Studio → SEO (audit table) | Home, Features, Store, Status, Preview, Setup, Support, FAQ, Reviews, Blog — permanent on Save |
| Derived site/product config | `src/data/site-core.ts` | Only if adding new derived fields |
| Sitemap XML (auto) | `src/pages/sitemap*.xml.ts` + `brand.sitemap` | Do not hand-edit XML — change brand URL / labels, then rebuild |
| FAQs / reviews / landing link labels | `src/data/site.ts` | Use `{brand}` `{game}` tokens in copy |
| Simple EN pages (Preview, Features, Store, Status) | `src/data/i18n/simple-pages.ts` | Keep structure; swap game wording / tokens |
| Images | `public/images/` + `src/data/warzone.ts` | Own licensed / provided assets only |
| Nav labels | `src/components/Navbar.astro` | Keep meanings (Preview / Features / Store / Status) |
| Dense i18n landings (optional) | `src/data/i18n/content.generated.ts` | Regenerate or rewrite after brand swap |

## What you must not change

- Title / H1 / intro / section **formula**
- Dense “SEO paragraph” writing style on template pages
- Random new page types without matching the template pattern
- Keyword stuffing in the hero or H1
- IGN or other third-party scraped images
- Hardcoding brand/domain in components (use `siteConfig` / `brand` / tokens)

## Page formula (copy this every time)

```text
Title:       {Game} {Topic} | {Brand}
Description: {Benefit}. {What you get}. {Platform}.
H1:          Short nav-style label (Features, Store, Status…)
Intro:       1–2 short sentences
Sections:    2–4 blocks → one H2 + short text + bullets
CTA:         Buy now + one secondary link
```

Helpers: `seoTitle(topic)` and `seoDescription(template)` in `src/data/brand.ts`.

### Examples

**Features** — H1 `Features` · Intro: `Everything included in one license for {game} on Windows PC.`

**Store** — H1 `Store` · Intro: `Pick a plan. Same features on both. Instant delivery after payment.`

**Status** — H1 `Status` · Intro: `Check here after a {game} or {antiCheat} patch before you play.`

## Language rules

1. One idea per sentence.
2. Prefer: buy, setup, status, features, store, support.
3. Primary keyword once in title, once in H1/intro area, lightly in body — not everywhere.
4. Bullets beat long paragraphs.
5. Write like you’re explaining to a new teammate.

## Rebrand checklist (order)

0. Prefer **Brand Studio**: `npm run dev` → `/brand-studio/` → Save
1. Or update **`src/data/brand.ts`** manually, then **`npm run sync:brand`**
2. Rewrite **`simple-pages.ts`** for the new game (keep structure + tokens)
3. Update FAQs / review meta in **`site.ts`** (keep `{brand}` / `{game}` tokens)
4. Replace images; update **`warzone.ts`** (image registry) paths/alts
5. Update keyword landing **hrefs** in `seoLandingPages` if URL slugs change for the new game
6. (Optional) Regenerate or trim `content.generated.ts` / blog posts for the new niche
7. Run **`npm run build`** and spot-check `/`, `/features/`, `/pricing/`, `/updates/`, `/faq/`, `/reviews/`
8. Submit / refresh sitemaps after deploy

## Expandability notes

- **Any domain**: set `brand.url` → sync updates Astro `site`, robots sitemap, webmanifest.
- **Any keyword set**: set `brand.keywords.primary` + `list` (5–8 terms). Layout meta keywords and schema follow automatically.
- **Any game**: set `brand.game` + `antiCheat`; template EN pages and FAQs resolve via tokens.
- **UI brand strings**: Hero, footer, 404, reviews CTAs, blog eyebrow read from `siteConfig` / `blogLabel` — do not hardcode.

## Quality bar

A page is done when:

- [ ] A non-expert understands it in under 20 seconds
- [ ] Title and description look clean in Google SERP preview
- [ ] H1 matches the nav idea
- [ ] No keyword salad
- [ ] Same layout pattern as other template pages
- [ ] No hardcoded old brand/domain left in UI for this rebrand

## AI / Cursor note

Cursor rules in `.cursor/rules/` enforce this system automatically. Do not ask the AI to “make SEO longer” or invent a new architecture. Point employees and agents at **`brand.ts` + this playbook**.
