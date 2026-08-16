export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Warzone Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Warzone Cheats Blog | BR Guides',
		blogDescription:
			'Warzone guides — raid tips, ESP, aimbot notes, loot routes, and Ricochet update coverage. English blog at warzonecheats.co/blog/.',
		blogH1: 'Warzone Cheats Intel',
		blogIntro:
			'Short Warzone guides for BR matches and Resurgence. Pair these tips with the Warzone Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Warzone Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Warzone Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Warzone Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Warzone en PC Windows.',
		blogH1: 'Blog Warzone Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Warzone indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Ricochet en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Warzone relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Warzone Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Warzone Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Warzone Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Warzone sur PC Windows.',
		blogH1: 'Blog Warzone Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Warzone indétectables, ESP wallhack, radar hack, Aimbot et Ricochet en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Warzone associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Warzone Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Warzone Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Warzone Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Warzone auf Windows PC.',
		blogH1: 'Warzone Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Warzone Cheats, ESP Wallhack, Radar Hack, Aimbot und Ricochet in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Warzone Guides',
		allPosts: 'Alle Beiträge',
		home: 'Warzone Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Warzone Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Warzone Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Warzone no PC.',
		blogH1: 'Blog Warzone Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Warzone indetectáveis, ESP wallhack, radar hack, Aimbot e Ricochet em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Warzone relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Warzone Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Warzone Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Warzone Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Warzone su PC Windows.',
		blogH1: 'Blog Warzone Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Warzone indetectable, ESP wallhack, radar hack, Aimbot e Ricochet in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Warzone correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Warzone Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Warzone Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Warzone Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Warzone op Windows PC.',
		blogH1: 'Warzone Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Warzone cheats, ESP wallhack, radar hack, Aimbot en Ricochet in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Warzone gidsen',
		allPosts: 'Alle posts',
		home: 'Warzone Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Warzone Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Warzone Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Warzone na PC.',
		blogH1: 'Blog Warzone Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Warzone, ESP wallhack, radar hack, Aimbot i Ricochet w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Warzone',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Warzone Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Warzone Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Warzone Cheats: undetected ESP, wallhack, radar и Aimbot для Warzone на Windows PC.',
		blogH1: 'Блог Warzone Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Warzone, ESP wallhack, radar hack, Aimbot и Ricochet на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Warzone',
		allPosts: 'Все статьи',
		home: 'Главная Warzone Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Warzone Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Warzone Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Warzone Windows PC.',
		blogH1: 'Warzone Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Warzone hileleri, ESP wallhack, radar hack, Aimbot ve Ricochet SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Warzone rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Warzone Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Warzone Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Warzone Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Warzone على Windows PC.',
		blogH1: 'مدونة Warzone Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Warzone undetected وESP wallhack ورadar hack وAimbot وRicochet بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Warzone ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Warzone Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Warzone Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Warzone Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Warzone Windows PC向け。',
		blogH1: 'Warzone Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Warzoneチート、ESP wallhack、radar hack、Aimbot、RicochetのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Warzoneガイド',
		allPosts: 'すべての記事',
		home: 'Warzone Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Warzone Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Warzone Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Warzone Windows PC.',
		blogH1: 'Warzone Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Warzone 치트, ESP wallhack, radar hack, Aimbot, Ricochet SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Warzone 가이드',
		allPosts: '모든 게시물',
		home: 'Warzone Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Warzone Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Warzone Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Warzone Windows PC。',
		blogH1: 'Warzone Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Warzone作弊、ESP wallhack、radar hack、Aimbot和Ricochet的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Warzone指南',
		allPosts: '所有文章',
		home: 'Warzone Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Warzone Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Warzone Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Warzone Windows PC के लिए।',
		blogH1: 'Warzone Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Warzone cheats, ESP wallhack, radar hack, Aimbot और Ricochet SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Warzone गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Warzone Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Warzone Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Warzone Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Warzone di PC Windows.',
		blogH1: 'Blog Warzone Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Warzone undetected, ESP wallhack, radar hack, Aimbot dan Ricochet dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Warzone terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Warzone Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Warzone Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Warzone Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Warzone บน PC',
		blogH1: 'บล็อก Warzone Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Warzone undetected, ESP wallhack, radar hack, Aimbot และ Ricochet 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Warzone ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Warzone Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Warzone Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Warzone Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Warzone trên PC.',
		blogH1: 'Blog Warzone Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Warzone undetected, ESP wallhack, radar hack, Aimbot và Ricochet bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Warzone liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Warzone Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Warzone Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Warzone Cheats: undetected ESP, wallhack, radar та Aimbot для Warzone на Windows PC.',
		blogH1: 'Блог Warzone Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Warzone, ESP wallhack, radar hack, Aimbot та Ricochet 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Warzone",
		allPosts: 'Усі статті',
		home: 'Головна Warzone Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Warzone Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Warzone Cheats: undetected ESP, wallhack, radar a Aimbot pro Warzone na Windows PC.',
		blogH1: 'Blog Warzone Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Warzone cheaty, ESP wallhack, radar hack, Aimbot a Ricochet ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Warzone průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Warzone Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Warzone Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Warzone Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Warzone pe PC.',
		blogH1: 'Blog Warzone Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Warzone undetected, ESP wallhack, radar hack, Aimbot și Ricochet în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Warzone related',
		allPosts: 'Toate articolele',
		home: 'Acasă Warzone Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Warzone Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Warzone Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Warzone på PC.',
		blogH1: 'Warzone Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Warzone cheats, ESP wallhack, radar hack, Aimbot och Ricochet på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Warzone guider',
		allPosts: 'Alla inlägg',
		home: 'Warzone Cheats hem',
		language: 'Språk',
	},
};
