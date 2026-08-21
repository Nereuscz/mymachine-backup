/**
 * Obsahová vrstva — vynálezy.
 * Data jsou zatím lokální; při napojení na headless CMS (např. Strapi)
 * stačí nahradit tyto konstanty fetchem z API se stejným tvarem dat.
 */

export type Invention = {
  title: string;
  patron: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

/** Jeden snímek fotogalerie vynálezu na stránce Vynálezy. */
export type InventionSlide = {
  src: string;
  alt: string;
};

/** Štítek zapojené školy (ZŠ / SŠ / VŠ) u vynálezu. */
export type InventionChip = {
  abbr: string;
  name: string;
};

/** Kompletní vynález pro stránku /vynalezy (editorial stack s galerií). */
export type InventionDetail = {
  id: string;
  title: string;
  /** Odstavce popisu (v návrhu inv.paras). */
  paras: string[];
  /** Štítky škol — zkratka + název (bez firemního partnera). */
  chips: InventionChip[];
  /** Zkrácený název firemního patrona (bez právní formy). */
  patron: string;
  /** Fotky galerie: návrh, finální foto, z výroby. */
  slides: InventionSlide[];
};

/** Čtyři vynálezy ve výběru na domovské stránce (pořadí dle návrhu). */
export const featuredInventions: Invention[] = [
  {
    title: "LED Kšiltovka",
    patron: "TE Connectivity",
    description:
      "Kšiltovka, která mění barvy podle nálady — emoce sdílíš beze slov, ať jsi na tréninku nebo ve škole.",
    tags: ["ZŠ Otevřená, Žebětín", "SŠ Purkyňka, Brno", "VUT FEKT"],
    image: "/assets/inventions/led-ksiltovka.jpg",
    imageAlt: "Finální prototyp LED kšiltovky",
  },
  {
    title: "Nosič obědů",
    patron: "NXP Semiconductors",
    description:
      "Robot, který přiveze jídlo až ke stolu, odnese nádobí a ještě se zeptá, jak chutnalo.",
    tags: ["ZŠ Hodonín", "SŠ polytechnická, Kyjov", "VUT FSI"],
    image: "/assets/inventions/nosic-obedu.jpg",
    imageAlt: "Finální prototyp robotického nosiče obědů",
  },
  {
    title: "Megatron",
    patron: "Garrett Motion",
    description:
      "Pojízdné autíčko, které svému majiteli doveze jídlo přesně podle jeho libosti — a schová i příbor.",
    tags: ["ZŠ Husova 17, Brno", "SŠTE Olomoucká, Brno", "VUT FSI"],
    image: "/assets/inventions/megatron.jpg",
    imageAlt: "Finální prototyp Megatron s účastníky projektu",
  },
  {
    title: "Chodící větrák",
    patron: "ABB",
    description:
      "Dálkově ovládaný větrák v mexickém stylu, co přijede chladit přesně tam, kde ho potřebuješ.",
    tags: ["ZŠ Milotice", "SŠ polytechnická, Kyjov", "VUT FEKT"],
    image: "/assets/inventions/chodici-vetrak.jpg",
    imageAlt: "Finální prototyp chodícího větráku v mexickém stylu",
  },
];

/**
 * Všech osm vynálezů pilotního ročníku pro stránku /vynalezy.
 * Každý vynález obsahuje finální fotografii prototypu z ročníku 2025/2026.
 */
export const allInventions: InventionDetail[] = [
  {
    id: "led",
    title: "LED Kšiltovka",
    paras: [
      "Kšiltovka, která mění barvy podle nálady. Původně to mělo být LED triko na fotbal – aby trenér nebo zdravotník hned viděl, jak se kdo cítí: jestli je smutný, veselý, naštvaný, nebo dokonce zraněný.",
      "Vynález umožňuje sdílet emoce beze slov. Říká si o pozornost nebo o podporu, když je to potřeba, a přitom je to super cool svítící doplněk na trénink, do školy i jen tak ven s kamarády.",
    ],
    chips: [
      { abbr: "ZŠ", name: "ZŠ Otevřená, Žebětín" },
      { abbr: "SŠ", name: "SŠ Purkyňka, Brno" },
      { abbr: "VŠ", name: "VUT FEKT" },
    ],
    patron: "TE Connectivity",
    slides: [
      {
        src: "/assets/inventions/led-ksiltovka.jpg",
        alt: "Finální prototyp LED kšiltovky",
      },
    ],
  },
  {
    id: "nosic",
    title: "Nosič obědů",
    paras: [
      "Děti si vysnily pomocníka, který přiveze jídlo až ke stolu, odnese nádobí a ještě se zeptá, jak chutnalo. V návrhu nechybělo robotické rameno na více tácú a dotykový displej pro hlasování o chuti oběda.",
      "Prototyp robotického nosiče má zatím jednodušší podobu. Místo skutečného jídla vozí modely vytištěné na 3D tiskárně. Už teď ale umí jezdit po nakreslených čárách, rozpoznat barvu tácu a podle ní dovézt jídlo od výdejního okénka ke správnému stolu.",
    ],
    chips: [
      { abbr: "ZŠ", name: "Základní škola, Hodonín" },
      { abbr: "SŠ", name: "Střední škola polytechnická, Kyjov" },
      { abbr: "VŠ", name: "VUT FSI" },
    ],
    patron: "NXP Semiconductors",
    slides: [
      {
        src: "/assets/inventions/nosic-obedu.jpg",
        alt: "Finální prototyp robotického nosiče obědů",
      },
    ],
  },
  {
    id: "ucebnik",
    title: "Učebník s flaškou se zásobníkem na vodu",
    paras: [
      "Spojili jsme dva dětské nápady do jednoho chytrého řešení. Učebník je upravená aktovka, která po stisknutí tlačítka sama vysune učebnice na konkrétní předmět.",
      "K tomu je propojená chytrá flaška s vlastním zásobníkem na vodu – když se vypije, automaticky se doplní. Díky tomuhle vynálezu mají děti méně stresu při chystání do školy, větší přehled v aktovce a dostatek pití po celý den.",
    ],
    chips: [
      { abbr: "ZŠ", name: "ZŠ a MŠ Višňové" },
      { abbr: "SŠ", name: "Střední škola technická, Znojmo" },
      { abbr: "VŠ", name: "VUT FSI / FEKT" },
    ],
    patron: "BioVendor – Laboratorní medicína",
    slides: [
      {
        src: "/assets/inventions/ucebnak.jpg",
        alt: "Finální prototyp učebníku s chytrou flaškou",
      },
    ],
  },
  {
    id: "asr",
    title: "Automatický skládací robot (ASR)",
    paras: [
      "ASR je malý automatický robot plný vychytávek, celý vytištěný na 3D tiskárně. Říká se mu skládací robot, protože má stejnou funkci jako skládací nůž.",
      "Najdete v něm zubní kartáček, kalkulačku, budík, ořezávátko, stojan na pendrl­íky, hodiny, mini tiskárnu na vtipy, baterku i razítko. Zkrátka všechno, co se může hodit – vždy po ruce a na jednom místě.",
    ],
    chips: [
      { abbr: "ZŠ", name: "ZŠ Žlákochovice" },
      { abbr: "SŠ", name: "Gymnázium T. G. Masaryka, Hustopeče" },
      { abbr: "VŠ", name: "VUT FIT" },
    ],
    patron: "Bohemia Interactive",
    slides: [
      {
        src: "/assets/inventions/automaticky-skladaci-robot.jpg",
        alt: "Finální prototyp automatického skládacího robota",
      },
    ],
  },
  {
    id: "megatron",
    title: "Megatron",
    paras: [
      "Jde o pojízdné autíčko pojmenované po jednom z Transformerů, jehož hlavním úkolem je nosit svému majiteli jídlo přesně podle jeho libosti.",
      "Autíčko má i úložný prostor, kam si můžete odložit například příbor, nápoj nebo jiné drobnosti, které chcete mít po ruce. Stačí zadat požadavek a Megatron vyrazí do akce.",
    ],
    chips: [
      { abbr: "ZŠ", name: "ZŠ a MŠ Husova 17, Brno" },
      { abbr: "SŠ", name: "SŠTE Olomoucká, Brno" },
      { abbr: "VŠ", name: "VUT FSI" },
    ],
    patron: "Garrett Motion",
    slides: [
      {
        src: "/assets/inventions/megatron.jpg",
        alt: "Finální prototyp Megatron s účastníky projektu",
      },
    ],
  },
  {
    id: "napoj",
    title: "Nápojový automat s AI",
    paras: [
      "Tenhle automat nebude jen tak ledajaký. Místo klasického výběru čísla a zmáčknutí tlačítka si popovídáte s umělou inteligencí.",
      "Řeknete jí, jak se dnes cítíte, na co máte chuť, jestli potřebujete povzbudit, uklidnit nebo jen něco dobrého na pití – a AI vám z dostupných ingrediencí namíchá drink přesně na míru. Každý nápoj je originál, stejně jako člověk, pro kterého vznikl.",
    ],
    chips: [
      { abbr: "ZŠ", name: "Tyršova ZŠ, Brno" },
      { abbr: "SŠ", name: "Gymnázium Křenová, Brno" },
      { abbr: "VŠ", name: "MUNI FI / VUT FAST" },
    ],
    patron: "Yunex Traffic",
    slides: [
      {
        src: "/assets/inventions/napojovy-automat.jpg",
        alt: "Finální prototyp nápojového automatu s AI",
      },
    ],
  },
  {
    id: "bobot",
    title: "Bobot",
    paras: [
      "Původní návrh byl opravdu ambiciózní. Multifunkční robůtek měl zvládat vše od zábavy až po pomoc v domácnosti. Středoškoláci a vysokoškolský tým se nakonec zaměřili na to nejzajímavější – chytrý koš, který odpadky přijme i sám vynese.",
      "Stačí vhodit dovnitř a Bobot se o zbytek postará. Díky průsvitnému tělu z plexiskla můžeš celý proces sledovat. Bobot navíc pomocí robotického ramene posbírá i nepořádek kolem sebe.",
    ],
    chips: [
      { abbr: "ZŠ", name: "ZŠ Jasanová, Brno" },
      { abbr: "SŠ", name: "Eko Gymnázium, Brno" },
      { abbr: "VŠ", name: "VUT FEKT" },
    ],
    patron: "AT&T Global Network Services CZ",
    slides: [
      {
        src: "/assets/inventions/bobot.jpg",
        alt: "Finální prototyp robota Bobot",
      },
    ],
  },
  {
    id: "vetrak",
    title: "Chodící větrák v mexickém stylu",
    paras: [
      "Chodící větrák se ovládá dálkově, jezdí, kam mu řeknete, a chladí přesně tam, kde je potřeba. Už žádné přenášení větráku po pokoji – tentokrát přijde ochlazení přímo za vámi.",
      "A protože je v mexickém stylu, nechybí sombréro ani třeba nacho. Po obvodu má LED úsek měnící barvu. Středoškoláci mu dali jméno Carmen, děti ze základky zase Pablo. A upřímně? Sedí mu obě.",
    ],
    chips: [
      { abbr: "ZŠ", name: "ZŠ a MŠ Milotice, okr. Hodonín" },
      { abbr: "SŠ", name: "Střední škola polytechnická, Kyjov" },
      { abbr: "VŠ", name: "VUT FEKT" },
    ],
    patron: "ABB",
    slides: [
      {
        src: "/assets/inventions/chodici-vetrak.jpg",
        alt: "Finální prototyp chodícího větráku v mexickém stylu",
      },
    ],
  },
];
