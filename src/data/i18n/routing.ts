import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'warzone-esp'
	| 'warzone-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'ricochet'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'warzone-esp': '/warzone-esp/',
	'warzone-aimbot': '/warzone-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-warzone-cheats/',
	wallhack: '/warzone-wallhack/',
	radar: '/warzone-radar-hack/',
	'ricochet': '/ricochet-bypass/',
	'cheats-2026': '/warzone-cheats-2026/',
	hacks: '/warzone-cheats/',
	'cheat-download': '/warzone-cheat-download/',
	'mod-menu': '/warzone-mod-menu/',
	'soft-aim': '/warzone-soft-aim/',
	'best-cheats': '/best-warzone-cheats/',
	'aimbot-hack': '/warzone-aimbot-hack/',
	'esp-hack': '/warzone-esp-hack/',
	'unlock-all': '/warzone-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'warzone-esp': {
		en: 'warzone-esp',
		es: 'trucos-warzone-esp',
		fr: 'triche-warzone-esp',
		de: 'warzone-esp-wallhack',
		pt: 'cheats-warzone-esp',
		it: 'trucchi-warzone-esp',
		nl: 'warzone-esp-wallhack',
		pl: 'cheaty-warzone-esp',
		ru: 'warzone-esp-chity',
		tr: 'warzone-esp-hile',
		ar: 'warzone-esp-wallhack',
		ja: 'warzone-esp-wallhack',
		ko: 'warzone-esp-wallhack',
		zh: 'warzone-esp-wallhack',
		hi: 'warzone-esp-wallhack',
		id: 'warzone-esp-wallhack',
		th: 'warzone-esp-wallhack',
		vi: 'warzone-esp-wallhack',
		uk: 'warzone-esp-chity',
		cs: 'warzone-esp-wallhack',
		ro: 'warzone-esp-wallhack',
		sv: 'warzone-esp-wallhack',
	},
	'warzone-aimbot': {
		en: 'warzone-aimbot',
		es: 'trucos-warzone-aimbot',
		fr: 'triche-warzone-aimbot',
		de: 'warzone-aimbot',
		pt: 'cheats-warzone-aimbot',
		it: 'trucchi-warzone-aimbot',
		nl: 'warzone-aimbot',
		pl: 'cheaty-warzone-aimbot',
		ru: 'warzone-aimbot-chity',
		tr: 'warzone-aimbot-hile',
		ar: 'warzone-aimbot',
		ja: 'warzone-aimbot',
		ko: 'warzone-aimbot',
		zh: 'warzone-aimbot',
		hi: 'warzone-aimbot',
		id: 'warzone-aimbot',
		th: 'warzone-aimbot',
		vi: 'warzone-aimbot',
		uk: 'warzone-aimbot-chity',
		cs: 'warzone-aimbot',
		ro: 'warzone-aimbot',
		sv: 'warzone-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-warzone',
		fr: 'fonctionnalites-triche-warzone',
		de: 'warzone-cheats-funktionen',
		pt: 'recursos-cheats-warzone',
		it: 'funzioni-trucchi-warzone',
		nl: 'warzone-cheats-functies',
		pl: 'funkcje-cheatow-warzone',
		ru: 'funkcii-chitov-warzone',
		tr: 'warzone-hile-ozellikleri',
		ar: 'warzone-cheats-features',
		ja: 'warzone-cheats-features',
		ko: 'warzone-cheats-features',
		zh: 'warzone-cheats-features',
		hi: 'warzone-cheats-features',
		id: 'warzone-cheats-features',
		th: 'warzone-cheats-features',
		vi: 'warzone-cheats-features',
		uk: 'funkcii-chitiv-warzone',
		cs: 'warzone-cheats-funkce',
		ro: 'functii-cheats-warzone',
		sv: 'warzone-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-warzone',
		fr: 'prix-triche-warzone',
		de: 'warzone-cheats-preise',
		pt: 'precos-cheats-warzone',
		it: 'prezzi-trucchi-warzone',
		nl: 'warzone-cheats-prijzen',
		pl: 'ceny-cheatow-warzone',
		ru: 'ceny-chitov-warzone',
		tr: 'warzone-hile-fiyatlari',
		ar: 'warzone-cheats-pricing',
		ja: 'warzone-cheats-pricing',
		ko: 'warzone-cheats-pricing',
		zh: 'warzone-cheats-pricing',
		hi: 'warzone-cheats-pricing',
		id: 'warzone-cheats-pricing',
		th: 'warzone-cheats-pricing',
		vi: 'warzone-cheats-pricing',
		uk: 'ciny-chitiv-warzone',
		cs: 'warzone-cheats-ceny',
		ro: 'preturi-cheats-warzone',
		sv: 'warzone-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-warzone',
		fr: 'installation-triche-warzone',
		de: 'warzone-cheats-installation',
		pt: 'instalacao-cheats-warzone',
		it: 'installazione-trucchi-warzone',
		nl: 'warzone-cheats-installatie',
		pl: 'instalacja-cheatow-warzone',
		ru: 'ustanovka-chitov-warzone',
		tr: 'warzone-hile-kurulum',
		ar: 'warzone-cheats-setup',
		ja: 'warzone-cheats-setup',
		ko: 'warzone-cheats-setup',
		zh: 'warzone-cheats-setup',
		hi: 'warzone-cheats-setup',
		id: 'warzone-cheats-setup',
		th: 'warzone-cheats-setup',
		vi: 'warzone-cheats-setup',
		uk: 'vstanovka-chitiv-warzone',
		cs: 'warzone-cheats-instalace',
		ro: 'instalare-cheats-warzone',
		sv: 'warzone-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-warzone',
		fr: 'mises-a-jour-triche-warzone',
		de: 'warzone-cheats-updates',
		pt: 'atualizacoes-cheats-warzone',
		it: 'aggiornamenti-trucchi-warzone',
		nl: 'warzone-cheats-updates',
		pl: 'aktualizacje-cheatow-warzone',
		ru: 'obnovleniya-chitov-warzone',
		tr: 'warzone-hile-guncellemeleri',
		ar: 'warzone-cheats-updates',
		ja: 'warzone-cheats-updates',
		ko: 'warzone-cheats-updates',
		zh: 'warzone-cheats-updates',
		hi: 'warzone-cheats-updates',
		id: 'warzone-cheats-updates',
		th: 'warzone-cheats-updates',
		vi: 'warzone-cheats-updates',
		uk: 'onovlennya-chitiv-warzone',
		cs: 'warzone-cheats-aktualizace',
		ro: 'actualizari-cheats-warzone',
		sv: 'warzone-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-warzone',
		fr: 'faq-triche-warzone',
		de: 'warzone-cheats-faq',
		pt: 'faq-cheats-warzone',
		it: 'faq-trucchi-warzone',
		nl: 'warzone-cheats-faq',
		pl: 'faq-cheatow-warzone',
		ru: 'faq-chitov-warzone',
		tr: 'warzone-hile-sss',
		ar: 'warzone-cheats-faq',
		ja: 'warzone-cheats-faq',
		ko: 'warzone-cheats-faq',
		zh: 'warzone-cheats-faq',
		hi: 'warzone-cheats-faq',
		id: 'warzone-cheats-faq',
		th: 'warzone-cheats-faq',
		vi: 'warzone-cheats-faq',
		uk: 'faq-chitiv-warzone',
		cs: 'warzone-cheats-faq',
		ro: 'faq-cheats-warzone',
		sv: 'warzone-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-warzone',
		fr: 'support-triche-warzone',
		de: 'warzone-cheats-support',
		pt: 'suporte-cheats-warzone',
		it: 'supporto-trucchi-warzone',
		nl: 'warzone-cheats-support',
		pl: 'wsparcie-cheatow-warzone',
		ru: 'podderzhka-chitov-warzone',
		tr: 'warzone-hile-destek',
		ar: 'warzone-cheats-support',
		ja: 'warzone-cheats-support',
		ko: 'warzone-cheats-support',
		zh: 'warzone-cheats-support',
		hi: 'warzone-cheats-support',
		id: 'warzone-cheats-support',
		th: 'warzone-cheats-support',
		vi: 'warzone-cheats-support',
		uk: 'pidtrymka-chitiv-warzone',
		cs: 'warzone-cheats-podpora',
		ro: 'suport-cheats-warzone',
		sv: 'warzone-cheats-support',
	},
	undetected: {
		en: 'undetected-warzone-cheats',
		es: 'trucos-warzone-indetectables',
		fr: 'triche-warzone-indetectable',
		de: 'unentdeckte-warzone-cheats',
		pt: 'cheats-warzone-indetectaveis',
		it: 'trucchi-warzone-indetectabili',
		nl: 'undetected-warzone-cheats',
		pl: 'niewykrywalne-cheats-warzone',
		ru: 'nedecektiruemye-chity-warzone',
		tr: 'tespit-edilemeyen-warzone-hileleri',
		ar: 'undetected-warzone-cheats',
		ja: 'undetected-warzone-cheats',
		ko: 'undetected-warzone-cheats',
		zh: 'undetected-warzone-cheats',
		hi: 'undetected-warzone-cheats',
		id: 'undetected-warzone-cheats',
		th: 'undetected-warzone-cheats',
		vi: 'undetected-warzone-cheats',
		uk: 'nedecektovani-chity-warzone',
		cs: 'undetected-warzone-cheats',
		ro: 'cheats-warzone-nedetectabile',
		sv: 'undetected-warzone-cheats',
	},
	wallhack: {
		en: 'warzone-wallhack',
		es: 'wallhack-trucos-warzone',
		fr: 'wallhack-triche-warzone',
		de: 'warzone-wallhack',
		pt: 'wallhack-cheats-warzone',
		it: 'wallhack-trucchi-warzone',
		nl: 'warzone-wallhack',
		pl: 'wallhack-cheatow-warzone',
		ru: 'wallhack-chity-warzone',
		tr: 'warzone-wallhack-hile',
		ar: 'warzone-wallhack',
		ja: 'warzone-wallhack',
		ko: 'warzone-wallhack',
		zh: 'warzone-wallhack',
		hi: 'warzone-wallhack',
		id: 'warzone-wallhack',
		th: 'warzone-wallhack',
		vi: 'warzone-wallhack',
		uk: 'wallhack-chity-warzone',
		cs: 'warzone-wallhack',
		ro: 'wallhack-cheats-warzone',
		sv: 'warzone-wallhack',
	},
	radar: {
		en: 'warzone-radar-hack',
		es: 'radar-hack-trucos-warzone',
		fr: 'radar-hack-triche-warzone',
		de: 'warzone-radar-hack',
		pt: 'radar-hack-cheats-warzone',
		it: 'radar-hack-trucchi-warzone',
		nl: 'warzone-radar-hack',
		pl: 'radar-hack-cheatow-warzone',
		ru: 'radar-hack-chity-warzone',
		tr: 'warzone-radar-hack',
		ar: 'warzone-radar-hack',
		ja: 'warzone-radar-hack',
		ko: 'warzone-radar-hack',
		zh: 'warzone-radar-hack',
		hi: 'warzone-radar-hack',
		id: 'warzone-radar-hack',
		th: 'warzone-radar-hack',
		vi: 'warzone-radar-hack',
		uk: 'radar-hack-chity-warzone',
		cs: 'warzone-radar-hack',
		ro: 'radar-hack-cheats-warzone',
		sv: 'warzone-radar-hack',
	},
	'ricochet': {
		en: 'ricochet-bypass',
		es: 'ricochet-bypass-trucos',
		fr: 'ricochet-bypass-triche',
		de: 'ricochet-bypass',
		pt: 'ricochet-bypass-cheats',
		it: 'ricochet-bypass-trucchi',
		nl: 'ricochet-bypass',
		pl: 'ricochet-bypass-cheatow',
		ru: 'ricochet-bypass-chity',
		tr: 'ricochet-bypass',
		ar: 'ricochet-bypass',
		ja: 'ricochet-bypass',
		ko: 'ricochet-bypass',
		zh: 'ricochet-bypass',
		hi: 'ricochet-bypass',
		id: 'ricochet-bypass',
		th: 'ricochet-bypass',
		vi: 'ricochet-bypass',
		uk: 'ricochet-bypass-chity',
		cs: 'ricochet-bypass',
		ro: 'ricochet-bypass-cheats',
		sv: 'ricochet-bypass',
	},
	'cheats-2026': {
		en: 'warzone-cheats-2026',
		es: 'trucos-warzone-2026',
		fr: 'triche-warzone-2026',
		de: 'warzone-cheats-2026',
		pt: 'cheats-warzone-2026',
		it: 'trucchi-warzone-2026',
		nl: 'warzone-cheats-2026',
		pl: 'cheaty-warzone-2026',
		ru: 'chity-warzone-2026',
		tr: 'warzone-hileleri-2026',
		ar: 'warzone-cheats-2026',
		ja: 'warzone-cheats-2026',
		ko: 'warzone-cheats-2026',
		zh: 'warzone-cheats-2026',
		hi: 'warzone-cheats-2026',
		id: 'warzone-cheats-2026',
		th: 'warzone-cheats-2026',
		vi: 'warzone-cheats-2026',
		uk: 'chity-warzone-2026',
		cs: 'warzone-cheats-2026',
		ro: 'cheats-warzone-2026',
		sv: 'warzone-cheats-2026',
	},
	hacks: {
		en: 'warzone-cheats',
		es: 'hacks-trucos-warzone',
		fr: 'hacks-triche-warzone',
		de: 'warzone-cheats',
		pt: 'hacks-cheats-warzone',
		it: 'hacks-trucchi-warzone',
		nl: 'warzone-cheats',
		pl: 'hacks-cheatow-warzone',
		ru: 'haksy-chity-warzone',
		tr: 'warzone-hile-hacks',
		ar: 'warzone-cheats',
		ja: 'warzone-cheats',
		ko: 'warzone-cheats',
		zh: 'warzone-cheats',
		hi: 'warzone-cheats',
		id: 'warzone-cheats',
		th: 'warzone-cheats',
		vi: 'warzone-cheats',
		uk: 'haksy-chity-warzone',
		cs: 'warzone-cheats',
		ro: 'hacks-cheats-warzone',
		sv: 'warzone-cheats',
	},
	'cheat-download': {
		en: 'warzone-cheat-download',
		es: 'descarga-trucos-warzone',
		fr: 'telechargement-triche-warzone',
		de: 'warzone-cheat-download',
		pt: 'download-cheats-warzone',
		it: 'download-trucchi-warzone',
		nl: 'warzone-cheat-download',
		pl: 'pobieranie-cheatow-warzone',
		ru: 'skachat-chity-warzone',
		tr: 'warzone-hile-indir',
		ar: 'warzone-cheat-download',
		ja: 'warzone-cheat-download',
		ko: 'warzone-cheat-download',
		zh: 'warzone-cheat-download',
		hi: 'warzone-cheat-download',
		id: 'warzone-cheat-download',
		th: 'warzone-cheat-download',
		vi: 'warzone-cheat-download',
		uk: 'zavantazhennya-chitiv-warzone',
		cs: 'warzone-cheat-download',
		ro: 'descarcare-cheats-warzone',
		sv: 'warzone-cheat-download',
	},
	'mod-menu': {
		en: 'warzone-mod-menu',
		es: 'menu-mod-trucos-warzone',
		fr: 'menu-mod-triche-warzone',
		de: 'warzone-mod-menu',
		pt: 'menu-mod-cheats-warzone',
		it: 'menu-mod-trucchi-warzone',
		nl: 'warzone-mod-menu',
		pl: 'menu-mod-cheatow-warzone',
		ru: 'mod-menu-chity-warzone',
		tr: 'warzone-mod-menu',
		ar: 'warzone-mod-menu',
		ja: 'warzone-mod-menu',
		ko: 'warzone-mod-menu',
		zh: 'warzone-mod-menu',
		hi: 'warzone-mod-menu',
		id: 'warzone-mod-menu',
		th: 'warzone-mod-menu',
		vi: 'warzone-mod-menu',
		uk: 'mod-menu-chity-warzone',
		cs: 'warzone-mod-menu',
		ro: 'meniu-mod-cheats-warzone',
		sv: 'warzone-mod-menu',
	},
	'soft-aim': {
		en: 'warzone-soft-aim',
		es: 'soft-aim-trucos-warzone',
		fr: 'soft-aim-triche-warzone',
		de: 'warzone-soft-aim',
		pt: 'soft-aim-cheats-warzone',
		it: 'soft-aim-trucchi-warzone',
		nl: 'warzone-soft-aim',
		pl: 'soft-aim-cheatow-warzone',
		ru: 'soft-aim-chity-warzone',
		tr: 'warzone-soft-aim',
		ar: 'warzone-soft-aim',
		ja: 'warzone-soft-aim',
		ko: 'warzone-soft-aim',
		zh: 'warzone-soft-aim',
		hi: 'warzone-soft-aim',
		id: 'warzone-soft-aim',
		th: 'warzone-soft-aim',
		vi: 'warzone-soft-aim',
		uk: 'soft-aim-chity-warzone',
		cs: 'warzone-soft-aim',
		ro: 'soft-aim-cheats-warzone',
		sv: 'warzone-soft-aim',
	},
	'best-cheats': {
		en: 'best-warzone-cheats',
		es: 'mejores-trucos-warzone',
		fr: 'meilleures-triches-warzone',
		de: 'beste-warzone-cheats',
		pt: 'melhores-cheats-warzone',
		it: 'migliori-trucchi-warzone',
		nl: 'beste-warzone-cheats',
		pl: 'najlepsze-cheats-warzone',
		ru: 'luchshie-chity-warzone',
		tr: 'en-iyi-warzone-hileleri',
		ar: 'best-warzone-cheats',
		ja: 'best-warzone-cheats',
		ko: 'best-warzone-cheats',
		zh: 'best-warzone-cheats',
		hi: 'best-warzone-cheats',
		id: 'best-warzone-cheats',
		th: 'best-warzone-cheats',
		vi: 'best-warzone-cheats',
		uk: 'naykrashchi-chity-warzone',
		cs: 'nejlepsi-warzone-cheats',
		ro: 'cele-mai-bune-cheats-warzone',
		sv: 'basta-warzone-cheats',
	},
	'aimbot-hack': {
		en: 'warzone-aimbot-hack',
		es: 'aimbot-hack-trucos-warzone',
		fr: 'aimbot-hack-triche-warzone',
		de: 'warzone-aimbot-hack',
		pt: 'aimbot-hack-cheats-warzone',
		it: 'aimbot-hack-trucchi-warzone',
		nl: 'warzone-aimbot-hack',
		pl: 'aimbot-hack-cheatow-warzone',
		ru: 'aimbot-hack-chity-warzone',
		tr: 'warzone-aimbot-hack',
		ar: 'warzone-aimbot-hack',
		ja: 'warzone-aimbot-hack',
		ko: 'warzone-aimbot-hack',
		zh: 'warzone-aimbot-hack',
		hi: 'warzone-aimbot-hack',
		id: 'warzone-aimbot-hack',
		th: 'warzone-aimbot-hack',
		vi: 'warzone-aimbot-hack',
		uk: 'aimbot-hack-chity-warzone',
		cs: 'warzone-aimbot-hack',
		ro: 'aimbot-hack-cheats-warzone',
		sv: 'warzone-aimbot-hack',
	},
	'esp-hack': {
		en: 'warzone-esp-hack',
		es: 'esp-hack-trucos-warzone',
		fr: 'esp-hack-triche-warzone',
		de: 'warzone-esp-hack',
		pt: 'esp-hack-cheats-warzone',
		it: 'esp-hack-trucchi-warzone',
		nl: 'warzone-esp-hack',
		pl: 'esp-hack-cheatow-warzone',
		ru: 'esp-hack-chity-warzone',
		tr: 'warzone-esp-hack',
		ar: 'warzone-esp-hack',
		ja: 'warzone-esp-hack',
		ko: 'warzone-esp-hack',
		zh: 'warzone-esp-hack',
		hi: 'warzone-esp-hack',
		id: 'warzone-esp-hack',
		th: 'warzone-esp-hack',
		vi: 'warzone-esp-hack',
		uk: 'esp-hack-chity-warzone',
		cs: 'warzone-esp-hack',
		ro: 'esp-hack-cheats-warzone',
		sv: 'warzone-esp-hack',
	},
	'unlock-all': {
		en: 'warzone-unlock-all',
		es: 'unlock-all-trucos-warzone',
		fr: 'unlock-all-triche-warzone',
		de: 'warzone-unlock-all',
		pt: 'unlock-all-cheats-warzone',
		it: 'unlock-all-trucchi-warzone',
		nl: 'warzone-unlock-all',
		pl: 'unlock-all-cheatow-warzone',
		ru: 'unlock-all-chity-warzone',
		tr: 'warzone-unlock-all',
		ar: 'warzone-unlock-all',
		ja: 'warzone-unlock-all',
		ko: 'warzone-unlock-all',
		zh: 'warzone-unlock-all',
		hi: 'warzone-unlock-all',
		id: 'warzone-unlock-all',
		th: 'warzone-unlock-all',
		vi: 'warzone-unlock-all',
		uk: 'unlock-all-chity-warzone',
		cs: 'warzone-unlock-all',
		ro: 'unlock-all-cheats-warzone',
		sv: 'warzone-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('warzone-aimbot', locale), pageId: 'warzone-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('warzone-esp', locale), pageId: 'warzone-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
