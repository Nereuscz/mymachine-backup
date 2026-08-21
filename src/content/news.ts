/**
 * Obsahová vrstva — novinky.
 * Data jsou zatím lokální; při napojení na headless CMS (např. Strapi)
 * stačí nahradit tyto konstanty fetchem z API se stejným tvarem dat.
 */

/** Slug jediného hotového článku (Clanek.dc.html). */
export const ARTICLE_SLUG = "oslavovali-jsme-prvni-rocnik";

export type NewsCard = {
  badge: string;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

/** Článek ve výpisu na stránce Novinky. */
export type NewsPost = {
  /** Kategorie pro filtr (štítek na fotce). */
  category: "Vynálezy" | "Ze škol" | "Akce" | "Zapojte se" | "O programu";
  date: string;
  title: string;
  excerpt: string;
  image: string;
  /** Cíl detailu; null znamená, že detail zatím není publikovaný. */
  href: string | null;
};

/** Fotky karet — cyklí se přes výpis stejně jako v návrhu (Novinky.dc.html). */
const postPhotos = [
  "/assets/photos/news1.jpg",
  "/assets/photos/news2.jpg",
  "/assets/photos/sketch.jpg",
  "/assets/photos/inline.jpg",
  "/assets/photos/news3.jpg",
  "/assets/photos/drawing.jpg",
  "/assets/photos/news4.jpg",
  "/assets/photos/lab.jpg",
  "/assets/photos/portrait.jpg",
];

/** Surová data výpisu: [kategorie, datum, titulek, perex] — 1:1 dle návrhu. */
const postRows: [NewsPost["category"], string, string, string][] = [
  [
    "Akce",
    "15. června 2026",
    "Oslavovali jsme první ročník MyMachine Czechia",
    "Ve čtvrtek 11. června se ve VIDA! science centru proměnily dětské kresby ve skutečnost. MyMachine EXPO představilo osm funkčních prototypů a oslavilo celý pilotní ročník.",
  ],
  [
    "Akce",
    "29. května 2026",
    "Rok práce, stovky zapojených studentů a osm dětských vynálezů",
    "První ročník MyMachine Czechia vrcholí. Přijďte si prohlédnout a vyzkoušet vynálezy, které vznikly díky spolupráci základních a středních škol, univerzity VUT a firem z celého Jihomoravského kraje.",
  ],
  [
    "Zapojte se",
    "20. května 2026",
    "Hledáme vysokoškoláky do projektu MyMachine Czechia",
    "Navrhni vynález, který ještě neexistuje. Hledáme studenty technických a kreativních oborů do druhého ročníku – zkušenost z praxe, projekt do portfolia a stipendium od VUT.",
  ],
  [
    "Vynálezy",
    "15. května 2026",
    "Co kdyby vás v létě mohl následovat vlastní větrák?",
    "Šestačka Julie vymyslela pohyblivý větrák na dálkové ovládání. Středoškoláci její nápad proměnili ve funkční prototyp – a Česká televize natočila reportáž.",
  ],
  [
    "Vynálezy",
    "2. května 2026",
    "AI barman z Brna? Studenti staví automat, který vám namíchá drink podle nálady",
    "Studenti Gymnázia Křenová staví v rámci MyMachine inteligentního barmana, který se zákazníkem komunikuje a podle nálady namíchá drink na míru.",
  ],
  [
    "Ze škol",
    "30. března 2026",
    "Děti ze ZŠ a SŠ objevovaly VUT: technologie, laboratoře a vlastní vynálezy v praxi",
    "Během února až dubna navštívily děti ze základních a středních škol fakulty VUT v Brně, kde se setkaly se svými univerzitními týmy a vyzkoušely si moderní technologie.",
  ],
  [
    "Vynálezy",
    "4. dubna 2026",
    "Středoškoláci se pustili do práce na vynálezech",
    "Po měsících návrhů a ladění přichází ta pravá chvíle – středoškolské týmy začínají stavět funkční prototypy dětských vynálezů.",
  ],
  [
    "Zapojte se",
    "9. dubna 2026",
    "Otevíráme přihlašování do MyMachine pro rok 2026/2027!",
    "Hledáme 12 základních a 12 středních škol a 12 vysokoškolských týmů z Jihomoravského kraje. Děti a studenty čeká jedinečný zážitek – navrhnout a vytvořit skutečný funkční prototyp.",
  ],
  [
    "Vynálezy",
    "10. února 2026",
    "Když děti myslí na planetu: vynálezy pro lepší svět",
    "Na workshopech nás překvapilo, kolik dětských nápadů směřovalo k ochraně přírody a zvířat. Představujeme 6 vynálezů, které vychází z toho, co dětem dává smysl změnit.",
  ],
  [
    "O programu",
    "15. ledna 2026",
    "MyMachine v TOP 10 STEAM řešení podle MIT Solve",
    "S hrdostí oznamujeme, že MyMachine bylo zařazeno mezi TOP 10 řešení v oblasti STEAM vzdělávání v USA, které vybrala iniciativa MIT Solve.",
  ],
  [
    "Vynálezy",
    "29. prosince 2025",
    "Vybrané vynálezy 2025 – část 2",
    "Teď je máme všechny! Osm vynálezů, které letos ožijí. Představujeme Megatron, AI nápojový automat, Bobot a Chodící větrák.",
  ],
  [
    "Vynálezy",
    "20. prosince 2025",
    "Vybrané vynálezy 2025 – část 1",
    "Představujeme první čtyři dětské nápady, které se promění ve skutečné prototypy: LED kšiltovka, Nosič obědů, ASR robot a Učebník s chytrou flaškou.",
  ],
  [
    "Ze škol",
    "28. listopadu 2025",
    "Představujeme zapojené střední školy",
    "Kde se z nápadů stává realita? Na středních školách studenti berou do ruky návrhy od vysokoškoláků a jdou je postavit.",
  ],
  [
    "Vynálezy",
    "18. listopadu 2025",
    "Rady pro výběr vynálezů: 8 dětských nápadů míří do výroby",
    "První ročník výběru vynálezů v MyMachine je za námi. Osm dětských nápadů postupuje k realizaci na partnerských středních školách.",
  ],
  [
    "Ze škol",
    "3. listopadu 2025",
    "Co když se fantazie potká s technikou?",
    "Na workshopech MyMachine se setkala dětská fantazie s technickou zvídavostí vysokoškoláků z VUT a MUNI. 38 studentů z VUT a 2 z MUNI pomáhají dětem realizovat jejich sny.",
  ],
  [
    "Ze škol",
    "28. října 2025",
    "Workshopy MyMachine jsou za námi!",
    "Do tvoření se zapojilo 8 základních škol a 410 dětí. Děti vymýšlely, kreslily a hlavně přemýšlely úplně jinak.",
  ],
  [
    "O programu",
    "22. srpna 2025",
    "Setkání koordinátorů MyMachine v Bruselu: sbíráme zkušenosti pro český start",
    "V Bruselu jsme se setkali s koordinátory MyMachine z celého světa. Sdílené zkušenosti a inspirace nám pomohou při spuštění programu v České republice.",
  ],
  [
    "O programu",
    "16. srpna 2025",
    "Co je MyMachine a proč vznikl",
    "MyMachine propojuje děti, studenty a firmy při tvorbě funkčních prototypů snových vynálezů. Zjistěte, jak funguje a proč má smysl i v České republice.",
  ],
  [
    "Zapojte se",
    "7. srpna 2025",
    "Proč zapojit vaši školu do MyMachine",
    "MyMachine propojuje základní, střední a vysoké školy i firmy. Zjistěte, jaké výhody přináší zapojení vaší školy do tohoto mezinárodního programu.",
  ],
];

/**
 * Kompletní výpis článků pro stránku /novinky.
 * První článek vede na hotový detail. Ostatní karty zůstávají neklikací,
 * dokud pro ně nevznikne samostatný detail.
 */
export const allPosts: NewsPost[] = postRows.map(
  ([category, date, title, excerpt], i) => ({
    category,
    date,
    title,
    excerpt,
    image: postPhotos[i % postPhotos.length],
    href: i === 0 ? `/novinky/${ARTICLE_SLUG}` : null,
  })
);

/** Tři nejnovější články na domovské stránce. */
export const homeNews: NewsCard[] = [
  {
    badge: "Novinka",
    date: "15. června 2026",
    dateISO: "2026-06-15",
    title: "Oslavili jsme první ročník MyMachine Czechia",
    excerpt:
      "Ve VIDA! science centru se dětské kresby proměnily ve skutečnost. MyMachine EXPO představilo osm hotových prototypů a uzavřelo první ročník.",
    image: "/assets/photos/news1.jpg",
    href: `/novinky/${ARTICLE_SLUG}`,
  },
  {
    badge: "Pozvánka",
    date: "29. května 2026",
    dateISO: "2026-05-29",
    title: "Rok práce, stovky studentů a osm dětských vynálezů",
    excerpt:
      "První ročník vrcholí. Přijďte se podívat na prototypy, které vznikly díky spolupráci škol, univerzity VUT a firem z celého Jihomoravského kraje.",
    image: "/assets/photos/news2.jpg",
    href: "/novinky",
  },
  {
    badge: "Nábor",
    date: "20. května 2026",
    dateISO: "2026-05-20",
    title: "Hledáme vysokoškoláky do projektu MyMachine",
    excerpt:
      "Nezáleží na oboru, záleží na nadšení. Hledáme studenty, kteří chtějí proměnit dětské nápady v realitu — a získat zkušenost z reálného projektu.",
    image: "/assets/photos/news3.jpg",
    href: "/#kontakt",
  },
];
