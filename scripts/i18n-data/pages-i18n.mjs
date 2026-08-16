import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Warzone Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Warzone indetectables para Warzone en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Ricochet. Entrega digital instantánea.', h1: 'Warzone Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Warzone en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Ricochet tras cada parche.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galería Warzone Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Warzone Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Resurgence.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Warzone Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Warzone indétectables pour Warzone sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Ricochet. Livraison numérique instantanée.', h1: 'Warzone Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Warzone sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Ricochet après chaque patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Warzone Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Warzone Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et Resurgence.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone Cheats für Warzone auf PC. ESP Wallhack, Radar Hack und Aimbot mit Ricochet-Wartung. Sofortige digitale Lieferung.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Warzone: ESP Wallhack, Radar und Aimbot mit Ricochet-Wartung nach jedem Patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Warzone Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Resurgence zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Warzone Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Warzone indetectáveis para Warzone no PC. ESP wallhack, radar hack e Aimbot com manutenção Ricochet. Entrega digital instantánea.', h1: 'Warzone Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Warzone no Windows PC: ESP wallhack, radar e Aimbot com manutenção Ricochet após cada patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeria Warzone Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Warzone Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e Resurgence.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Warzone Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Warzone indetectable per Warzone su PC. ESP wallhack, radar hack e Aimbot con manutenzione Ricochet. Consegna digitale istantanea.', h1: 'Warzone Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Warzone su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Ricochet dopo ogni patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galleria Warzone Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Warzone Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Resurgence.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone cheats voor Warzone op PC. ESP wallhack, radar hack en Aimbot met Ricochet-onderhoud. Directe digitale levering.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Warzone: ESP wallhack, radar en Aimbot met Ricochet-onderhoud na elke patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Warzone Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Resurgence.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Warzone Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Warzone dla Warzone na PC. ESP wallhack, radar hack i Aimbot z konserwacją Ricochet. Natychmiastowa dostawa cyfrowa.', h1: 'Warzone Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Warzone na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Ricochet po każdym patchu.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeria Warzone Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Warzone Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Resurgence.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Warzone Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Warzone для Warzone на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Ricochet. Мгновенная цифровая доставка.', h1: 'Warzone Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Warzone на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Ricochet после патчей.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Галерея Warzone Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Warzone Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Resurgence.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Warzone Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Warzone için undetected hileler. ESP wallhack, radar hack ve Aimbot — Ricochet bakımı. Anında dijital teslimat.', h1: 'Warzone Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Warzone Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Ricochet bakımı dahil.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Warzone Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Resurgence\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Warzone Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Warzone undetected لـ Warzone على PC. ESP wallhack ورadar hack وAimbot مع صيانة Ricochet. تسليم رقمي فوري.', h1: 'Warzone Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Warzone على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Ricochet.', imageAlt: 'Warzone ESP player tags hack', gallery: 'معرض Warzone Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Warzone Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وResurgence.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Warzone Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Warzone向けundetectedチート。ESP wallhack、radar hack、Aimbot、Ricochetメンテナンス。即時デジタル配信。', h1: 'Warzone Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Warzone Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Ricochetメンテナンス付き。', imageAlt: 'Warzone cheats hero ESP aimbot wallhack', gallery: 'Warzone Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にWarzone Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとResurgenceで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Warzone Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Warzone undetected 치트. ESP wallhack, radar hack, Aimbot, Ricochet 유지보수. 즉시 디지털 배송.', h1: 'Warzone Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Warzone Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Ricochet 유지보수 포함.', imageAlt: 'Warzone cheats hero ESP aimbot wallhack', gallery: 'Warzone Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Warzone Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Resurgence에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Warzone Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Warzone undetected作弊。ESP wallhack、radar hack、Aimbot、Ricochet维护。即时数字交付。', h1: 'Warzone Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Warzone Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Ricochet维护。', imageAlt: 'Warzone cheats hero ESP aimbot wallhack', gallery: 'Warzone Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Warzone Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Resurgence中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Warzone Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Warzone undetected cheats. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. Instant digital delivery.', h1: 'Warzone Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Warzone Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Ricochet maintenance सहित.', imageAlt: 'Warzone cheats hero ESP aimbot wallhack', gallery: 'Warzone Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Warzone Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Resurgence में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Warzone undetected untuk Warzone di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Ricochet. Pengiriman digital instan.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Warzone di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Ricochet.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeri Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Warzone Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Resurgence.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Warzone Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Warzone undetected สำหรับ Warzone บน PC. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. จัดส่งดิจิทัลทันที.', h1: 'Warzone Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Warzone บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Ricochet maintenance', imageAlt: 'Warzone ESP player tags hack', gallery: 'แกลเลอรี Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Warzone Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Resurgence', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Warzone undetected cho Warzone trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Ricochet. Giao hàng kỹ thuật số tức thì.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Warzone trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Ricochet.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Thư viện Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Warzone Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Resurgence.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Warzone Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Warzone для Warzone на PC. ESP wallhack, radar hack, Aimbot, обслуговування Ricochet. Мгновенная цифровая доставка.', h1: 'Warzone Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Warzone на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Ricochet.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Галерея Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Warzone Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Resurgence.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Warzone Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Warzone cheaty pro Warzone na PC. ESP wallhack, radar hack, Aimbot, údržba Ricochet. Okamžité digitální doručení.', h1: 'Warzone Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Warzone na Windows PC: ESP wallhack, radar, Aimbot s údržbou Ricochet.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Warzone Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Resurgence.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Warzone Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Warzone undetected pentru Warzone pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Ricochet. Livrare digitală instantă.', h1: 'Warzone Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Warzone pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Ricochet.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Warzone Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Warzone Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Resurgence.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Warzone Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone cheats för Warzone på PC. ESP wallhack, radar hack, Aimbot, Ricochet-underhåll. Omedelbar digital leverans.', h1: 'Warzone Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Warzone på Windows PC: ESP wallhack, radar, Aimbot med Ricochet-underhåll.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Warzone Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Warzone Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Resurgence.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'warzone-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'warzone-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Ricochet Maintenance Log', focus: 'Ricochet patch status and rebuild notes', altKeyword: 'updates Ricochet maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Ricochet questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Ricochet Safe Status', focus: 'undetected maintenance after Ricochet patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	ricochet: { suffix: 'Patch Maintenance', focus: 'how Ricochet updates are handled for Warzone hacks', altKeyword: 'Ricochet bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Warzone cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Warzone hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Warzone cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Warzone', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'warzone-esp': 'Cajas de jugador y wallhack',
		'warzone-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Ricochet',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		ricochet: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'warzone-esp': 'Boîtes joueur et wallhack',
		'warzone-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Ricochet',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		ricochet: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'warzone-esp': 'Spielerboxen & Wallhack',
		'warzone-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Ricochet Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		ricochet: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'warzone-esp': 'Caixas de jogador e wallhack',
		'warzone-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Ricochet',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		ricochet: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'warzone-esp': 'Box giocatore e wallhack',
		'warzone-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Ricochet',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		ricochet: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'warzone-esp': 'Боксы игроков и wallhack',
		'warzone-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Ricochet',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		ricochet: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Warzone Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Warzone Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'warzone-esp': { en: 'Warzone ESP', es: 'ESP Warzone', fr: 'ESP Warzone', de: 'Warzone ESP', pt: 'ESP Warzone', it: 'ESP Warzone', nl: 'Warzone ESP', pl: 'ESP Warzone', ru: 'ESP Warzone', tr: 'Warzone ESP', ar: 'ESP Warzone', ja: 'Warzone ESP', ko: 'Warzone ESP', zh: 'Warzone ESP', hi: 'Warzone ESP', id: 'ESP Warzone', th: 'Warzone ESP', vi: 'ESP Warzone', uk: 'ESP Warzone', cs: 'Warzone ESP', ro: 'ESP Warzone', sv: 'Warzone ESP' },
	'warzone-aimbot': { en: 'Warzone Aimbot', es: 'Aimbot Warzone', fr: 'Aimbot Warzone', de: 'Warzone Aimbot', pt: 'Aimbot Warzone', it: 'Aimbot Warzone', nl: 'Warzone Aimbot', pl: 'Aimbot Warzone', ru: 'Aimbot Warzone', tr: 'Warzone Aimbot', ar: 'Aimbot Warzone', ja: 'Warzone Aimbot', ko: 'Warzone Aimbot', zh: 'Warzone Aimbot', hi: 'Warzone Aimbot', id: 'Aimbot Warzone', th: 'Warzone Aimbot', vi: 'Aimbot Warzone', uk: 'Aimbot Warzone', cs: 'Warzone Aimbot', ro: 'Aimbot Warzone', sv: 'Warzone Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Warzone Wallhack', es: 'Wallhack Warzone', fr: 'Wallhack Warzone', de: 'Warzone Wallhack', pt: 'Wallhack Warzone', it: 'Wallhack Warzone', nl: 'Warzone Wallhack', pl: 'Wallhack Warzone', ru: 'Wallhack Warzone', tr: 'Warzone Wallhack', ar: 'Wallhack Warzone', ja: 'Warzone Wallhack', ko: 'Warzone Wallhack', zh: 'Warzone Wallhack', hi: 'Warzone Wallhack', id: 'Wallhack Warzone', th: 'Warzone Wallhack', vi: 'Wallhack Warzone', uk: 'Wallhack Warzone', cs: 'Warzone Wallhack', ro: 'Wallhack Warzone', sv: 'Warzone Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	ricochet: { en: 'Ricochet Bypass', es: 'Bypass Ricochet', fr: 'Bypass Ricochet', de: 'Ricochet Bypass', pt: 'Bypass Ricochet', it: 'Bypass Ricochet', nl: 'Ricochet Bypass', pl: 'Bypass Ricochet', ru: 'Bypass Ricochet', tr: 'Ricochet bypass', ar: 'Bypass Ricochet', ja: 'Ricochet Bypass', ko: 'Ricochet Bypass', zh: 'Ricochet Bypass', hi: 'Ricochet Bypass', id: 'Bypass Ricochet', th: 'Ricochet Bypass', vi: 'Bypass Ricochet', uk: 'Bypass Ricochet', cs: 'Ricochet Bypass', ro: 'Bypass Ricochet', sv: 'Ricochet Bypass' },
	'cheats-2026': { en: 'Warzone Cheats 2026', es: 'Trucos Warzone 2026', fr: 'Triches Warzone 2026', de: 'Warzone Cheats 2026', pt: 'Cheats Warzone 2026', it: 'Cheat Warzone 2026', nl: 'Warzone Cheats 2026', pl: 'Cheaty Warzone 2026', ru: 'Читы Warzone 2026', tr: 'Warzone Hileleri 2026', ar: 'غش Warzone 2026', ja: 'Warzone Cheats 2026', ko: 'Warzone Cheats 2026', zh: 'Warzone作弊 2026', hi: 'Warzone Cheats 2026', id: 'Cheat Warzone 2026', th: 'Warzone Cheats 2026', vi: 'Cheat Warzone 2026', uk: 'Чіти Warzone 2026', cs: 'Warzone cheaty 2026', ro: 'Cheats Warzone 2026', sv: 'Warzone Cheats 2026' },
	hacks: { en: 'Warzone Cheats', es: 'Trucos Warzone', fr: 'Triches Warzone', de: 'Warzone Cheats', pt: 'Cheats Warzone', it: 'Cheat Warzone', nl: 'Warzone Cheats', pl: 'Cheaty Warzone', ru: 'Читы Warzone', tr: 'Warzone Hileleri', ar: 'غش Warzone', ja: 'Warzone Cheats', ko: 'Warzone Cheats', zh: 'Warzone作弊', hi: 'Warzone Cheats', id: 'Cheat Warzone', th: 'Warzone Cheats', vi: 'Cheat Warzone', uk: 'Чіти Warzone', cs: 'Warzone cheaty', ro: 'Cheats Warzone', sv: 'Warzone Cheats' },
	'cheat-download': { en: 'Warzone Cheat Download', es: 'Descarga Warzone Cheats', fr: 'Téléchargement Warzone Cheats', de: 'Warzone Cheat Download', pt: 'Download Warzone Cheats', it: 'Download Warzone Cheats', nl: 'Warzone Cheat Download', pl: 'Pobieranie Warzone Cheats', ru: 'Скачать Warzone Cheats', tr: 'Warzone Hile İndir', ar: 'تحميل Warzone Cheats', ja: 'Warzone Cheat Download', ko: 'Warzone Cheat Download', zh: 'Warzone作弊下载', hi: 'Warzone Cheat Download', id: 'Download Cheat Warzone', th: 'ดาวน์โหลด Warzone Cheats', vi: 'Tải Cheat Warzone', uk: 'Завантаження Warzone Cheats', cs: 'Stáhnout Warzone Cheats', ro: 'Descărcare Warzone Cheats', sv: 'Warzone Cheat Download' },
	'mod-menu': { en: 'Warzone Mod Menu', es: 'Menú mod Warzone', fr: 'Menu mod Warzone', de: 'Warzone Mod-Menü', pt: 'Menu mod Warzone', it: 'Mod menu Warzone', nl: 'Warzone Mod Menu', pl: 'Mod menu Warzone', ru: 'Мод-меню Warzone', tr: 'Warzone Mod Menü', ar: 'قائمة مود Warzone', ja: 'Warzone Mod Menu', ko: 'Warzone 모드 메뉴', zh: 'Warzone修改菜单', hi: 'Warzone Mod Menu', id: 'Menu mod Warzone', th: 'เมนูมอด Warzone', vi: 'Mod menu Warzone', uk: 'Мод-меню Warzone', cs: 'Warzone mod menu', ro: 'Meniu mod Warzone', sv: 'Warzone Mod-meny' },
	'soft-aim': { en: 'Warzone Soft Aim', es: 'Soft aim Warzone', fr: 'Soft aim Warzone', de: 'Warzone Soft Aim', pt: 'Soft aim Warzone', it: 'Soft aim Warzone', nl: 'Warzone Soft Aim', pl: 'Soft aim Warzone', ru: 'Soft aim Warzone', tr: 'Warzone Soft Aim', ar: 'Soft aim Warzone', ja: 'Warzone Soft Aim', ko: 'Warzone Soft Aim', zh: 'Warzone Soft Aim', hi: 'Warzone Soft Aim', id: 'Soft aim Warzone', th: 'Warzone Soft Aim', vi: 'Soft aim Warzone', uk: 'Soft aim Warzone', cs: 'Warzone Soft Aim', ro: 'Soft aim Warzone', sv: 'Warzone Soft Aim' },
	'best-cheats': { en: 'Best Warzone Cheats', es: 'Mejores trucos Warzone', fr: 'Meilleures triches Warzone', de: 'Beste Warzone Cheats', pt: 'Melhores cheats Warzone', it: 'Migliori cheat Warzone', nl: 'Beste Warzone Cheats', pl: 'Najlepsze cheaty Warzone', ru: 'Лучшие читы Warzone', tr: 'En İyi Warzone Hileleri', ar: 'أفضل غش Warzone', ja: '最強Warzoneチート', ko: '최고의 Warzone 치트', zh: '最佳Warzone作弊', hi: 'सर्वश्रेष्ठ Warzone Cheats', id: 'Cheat Warzone terbaik', th: 'Cheat Warzone ที่ดีที่สุด', vi: 'Cheat Warzone tốt nhất', uk: 'Найкращі чіти Warzone', cs: 'Nejlepší Warzone cheaty', ro: 'Cele mai bune cheats Warzone', sv: 'Bästa Warzone Cheats' },
	'aimbot-hack': { en: 'Warzone Aimbot Hack', es: 'Hack aimbot Warzone', fr: 'Hack aimbot Warzone', de: 'Warzone Aimbot Hack', pt: 'Hack aimbot Warzone', it: 'Hack aimbot Warzone', nl: 'Warzone Aimbot Hack', pl: 'Hack aimbot Warzone', ru: 'Хак aimbot Warzone', tr: 'Warzone Aimbot Hilesi', ar: 'هاك Aimbot Warzone', ja: 'Warzone Aimbot Hack', ko: 'Warzone 에임봇 핵', zh: 'Warzone自瞄外挂', hi: 'Warzone Aimbot Hack', id: 'Hack aimbot Warzone', th: 'Hack Aimbot Warzone', vi: 'Hack aimbot Warzone', uk: 'Хак aimbot Warzone', cs: 'Warzone aimbot hack', ro: 'Hack aimbot Warzone', sv: 'Warzone Aimbot Hack' },
	'esp-hack': { en: 'Warzone ESP Hack', es: 'Hack ESP Warzone', fr: 'Hack ESP Warzone', de: 'Warzone ESP Hack', pt: 'Hack ESP Warzone', it: 'Hack ESP Warzone', nl: 'Warzone ESP Hack', pl: 'Hack ESP Warzone', ru: 'Хак ESP Warzone', tr: 'Warzone ESP Hilesi', ar: 'هاك ESP Warzone', ja: 'Warzone ESP Hack', ko: 'Warzone ESP 핵', zh: 'Warzone ESP外挂', hi: 'Warzone ESP Hack', id: 'Hack ESP Warzone', th: 'Hack ESP Warzone', vi: 'Hack ESP Warzone', uk: 'Хак ESP Warzone', cs: 'Warzone ESP hack', ro: 'Hack ESP Warzone', sv: 'Warzone ESP Hack' },
	'unlock-all': { en: 'Warzone Unlock All', es: 'Unlock all Warzone', fr: 'Unlock all Warzone', de: 'Warzone Unlock All', pt: 'Unlock all Warzone', it: 'Unlock all Warzone', nl: 'Warzone Unlock All', pl: 'Unlock all Warzone', ru: 'Unlock all Warzone', tr: 'Warzone Unlock All', ar: 'Unlock all Warzone', ja: 'Warzone Unlock All', ko: 'Warzone Unlock All', zh: 'Warzone Unlock All', hi: 'Warzone Unlock All', id: 'Unlock all Warzone', th: 'Warzone Unlock All', vi: 'Unlock all Warzone', uk: 'Unlock all Warzone', cs: 'Warzone Unlock All', ro: 'Unlock all Warzone', sv: 'Warzone Unlock All' },
};

const CTA2_HREF = {
	'warzone-esp': '/warzone-cheats/',
	'warzone-aimbot': '/warzone-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/warzone-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/warzone-cheats/',
	wallhack: '/warzone-esp/',
	radar: '/warzone-esp/',
	ricochet: '/updates/',
	'cheats-2026': '/warzone-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/warzone-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/warzone-aimbot/',
	'esp-hack': '/warzone-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Warzone Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Warzone Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for warzonecheats.co and Warzone licenses.`),
		imageAlt: 'warzone cheats',
		galleryTitle: 'warzone cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on warzonecheats.co.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@warzonecheats.co',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
