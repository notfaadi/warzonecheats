import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'warzone cheats',
		title: 'warzone cheats gallery',
		subtitle: 'Simple warzone cheats visuals — ESP, wallhack, aimbot, and radar for Warzone on PC.',
		lead: 'Warzone Cheats helps you spot squads, bots, loot, and the gulag with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'warzone cheats esp', copy: 'See players through walls with warzone cheats esp and wallhack overlays.' },
			{ title: 'warzone cheats radar', copy: 'Track nearby threats with warzone cheats radar before you push or gulag.' },
			{ title: 'warzone cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Warzone raids on Windows PC.' },
		],
		updatesLabel: 'warzone cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Warzone Cheats',
		title: 'Galería Warzone',
		subtitle: 'Visuales de Warzone con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Warzone Cheats está pensado para el loop BR de Warzone: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al gulag.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Verdansk y Resurgence para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Warzone', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Warzone Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Warzone Cheats',
		title: 'Galerie Warzone',
		subtitle: 'Visuels Warzone — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Warzone Cheats suit la boucle BR de Warzone : lire la carte, suivre les escouades, loot et survivre au gulag.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Verdansk et Resurgence pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Warzone', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Warzone Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone Galerie',
		subtitle: 'Warzone-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Warzone Cheats passt zur Raid-Schleife von Warzone: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Verdansk und Resurgence für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Warzone Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Warzone Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Warzone Cheats',
		title: 'Galeria Warzone',
		subtitle: 'Visuais de Warzone com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Warzone Cheats segue o loop BR do Warzone: ler o mapa, rastrear esquadrões, lootar e sobreviver ao gulag.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Verdansk e Resurgence para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Warzone', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Warzone Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Warzone Cheats',
		title: 'Galleria Warzone',
		subtitle: 'Immagini Warzone — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Warzone Cheats è pensato per il loop BR di Warzone: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al gulag.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Verdansk e Resurgence per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Warzone', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Warzone Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone galerij',
		subtitle: 'Warzone-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Warzone Cheats volgt de raid-loop van Warzone: kaart lezen, vijandelijke squads volgen, looten en de gulag overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Verdansk en Resurgence voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Warzone Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Warzone Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Warzone Cheats',
		title: 'Galeria Warzone',
		subtitle: 'Grafiki Warzone — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Warzone Cheats pasuje do pętli BR Warzone: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj gulag.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Verdansk i Resurgence dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Warzone', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Warzone Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Warzone Cheats',
		title: 'Галерея Warzone',
		subtitle: 'Визуалы Warzone — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Warzone Cheats создан для рейд-циклу Warzone: читать карту, отслеживать вражеские отряды, лут и выживать в gulag.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Verdansk и Resurgence для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Warzone', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Warzone Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Warzone Cheats, Warzone BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve gulag\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Verdansk ve Resurgence\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Warzone Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Warzone Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Warzone Cheats',
		title: 'معرض Warzone',
		subtitle: 'صور Warzone — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Warzone Cheats مبني لحلقة BR في Warzone: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في gulag.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Verdansk وResurgence لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Warzone', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Warzone Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのWarzoneビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Warzone CheatsはWarzoneのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてgulagを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'VerdanskとResurgenceで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Warzoneエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Warzone Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Warzone 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Warzone Cheats는 Warzone BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, gulag 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Verdansk와 Resurgence에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Warzone 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Warzone Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone 图库',
		subtitle: 'Warzone 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Warzone Cheats 为 Warzone BR 循环设计：读图、追踪敌方小队、搜刮并在 gulag 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Verdansk 和 Resurgence 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Warzone 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Warzone Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Warzone Cheats Warzone BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और gulag survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Verdansk और Resurgence पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Warzone Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Warzone Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Warzone Cheats',
		title: 'Galeri Warzone',
		subtitle: 'Visual Warzone — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Warzone Cheats untuk loop BR Warzone: baca peta, lacak squad musuh, loot, dan selamat di gulag.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Verdansk dan Resurgence untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Warzone', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Warzone Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Warzone Cheats',
		title: 'แกลเลอรี Warzone',
		subtitle: 'ภาพ Warzone — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Warzone Cheats สำหรับลูป BR ของ Warzone: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด gulag',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Verdansk และ Resurgence เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Warzone', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Warzone Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Warzone Cheats',
		title: 'Thư viện Warzone',
		subtitle: 'Hình ảnh Warzone — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Warzone Cheats cho vòng BR Warzone: đọc bản đồ, theo dõi squad địch, loot và sống sót gulag.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Verdansk và Resurgence để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Warzone', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Warzone Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Warzone Cheats',
		title: 'Галерея Warzone',
		subtitle: 'Візуали Warzone — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Warzone Cheats для рейд-циклу Warzone: читати карту, відстежувати ворожі загони, лут і виживати в gulag.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Verdansk і Resurgence для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Warzone', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Warzone Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Warzone Cheats',
		title: 'Galerie Warzone',
		subtitle: 'Warzone vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Warzone Cheats pro BR smyčku Warzone: číst mapu, sledovat nepřátelské squady, loot a přežít gulag.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Verdansk a Resurgence pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Warzone', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Warzone Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Warzone Cheats',
		title: 'Galerie Warzone',
		subtitle: 'Vizualuri Warzone — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Warzone Cheats pentru bucla BR Warzone: citește harta, urmărește squad-uri inamice, loot și supraviețuiește gulag.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Verdansk și Resurgence pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Warzone', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Warzone Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Warzone Cheats',
		title: 'Warzone galleri',
		subtitle: 'Warzone-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Warzone Cheats för Warzone:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev gulag.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Verdansk och Resurgence för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Warzone Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Warzone Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
