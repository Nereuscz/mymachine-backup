/**
 * Obsahová vrstva — detail článku (Clanek.dc.html).
 * Data jsou zatím lokální; při napojení na headless CMS (např. Strapi)
 * stačí nahradit tyto konstanty fetchem z API se stejným tvarem dat.
 */

import { ARTICLE_SLUG } from "./news";

/** Blok strukturovaného obsahu článku — odstavec / mezititulek / citace / obrázek. */
export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
      /** Odstavec s iniciálou (v návrhu třída .drop-first). */
      dropCap?: boolean;
    }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | {
      type: "cta";
      eyebrow: string;
      title: string;
      text: string;
      href: string;
      buttonLabel: string;
    };

/** Položka pásu klíčových čísel pod hero fotkou. */
export type ArticleStat = {
  value: string;
  label: string;
};

/** Karta v sekci „Další příběhy“. */
export type RelatedPost = {
  date: string;
  title: string;
  image: string;
  href: string | null;
};

export type Article = {
  slug: string;
  /** Štítek kategorie v hlavičce článku (pill s akcentním rámečkem). */
  category: string;
  /** Datum publikace pro zobrazení, např. „15. června 2026“. */
  date: string;
  /** Strojové datum (ISO) pro metadata. */
  dateISO: string;
  /** Odhad délky čtení, např. „4 min čtení“. */
  readingTime: string;
  title: string;
  /** Perex pod titulkem. */
  lead: string;
  author: {
    name: string;
    role: string;
    /** Iniciály do kruhového avataru. */
    initials: string;
  };
  hero: {
    src: string;
    alt: string;
    caption: string;
  };
  stats: ArticleStat[];
  blocks: ArticleBlock[];
  tags: string[];
  related: RelatedPost[];
};

export const articles: Article[] = [
  {
    slug: ARTICLE_SLUG,
    category: "Akce",
    date: "15. června 2026",
    dateISO: "2026-06-15",
    readingTime: "4 min čtení",
    title: "Oslavovali jsme první ročník MyMachine Czechia",
    lead: "Ve čtvrtek 11. června se ve VIDA! science centru proměnily dětské kresby ve skutečnost. MyMachine EXPO představilo osm funkčních prototypů a uzavřelo celý pilotní ročník.",
    author: {
      name: "Dominika Franeková",
      role: "Koordinátorka MyMachine",
      initials: "DF",
    },
    hero: {
      src: "/assets/photos/news1.jpg",
      alt: "Hlavní foto článku — EXPO ve VIDA!",
      caption:
        "Děti, studenti a firmy poprvé pohromadě — finále pilotního ročníku v brněnském VIDA! science centru.",
    },
    stats: [
      { value: "8", label: "Funkčních prototypů" },
      {
        value: "4",
        label: "Propojené světy — děti, studenti, univerzita, firmy",
      },
      { value: "1", label: "Společné finále v VIDA!" },
    ],
    blocks: [
      {
        type: "paragraph",
        dropCap: true,
        text: "Rok práce, stovky zapojených dětí a studentů, desítky workshopů a jedno společné finále. MyMachine EXPO uzavřelo úplně první ročník programu v Česku — a ukázalo, co se stane, když dětskou fantazii vezmou vážně studenti, univerzity i firmy.",
      },
      {
        type: "paragraph",
        text: "Všechno začalo dětskou kresbou. Žáci základních škol nakreslili vynález, který by chtěli mít — bez hranic a bez „to nejde\". Středoškoláci pak jejich nápady proměnili v technické návrhy a vysokoškoláci s firemními partnery postavili funkční prototypy. Na EXPU stálo osm z nich, připravených k vyzkoušení.",
      },
      { type: "heading", text: "Osm snů, které ožily" },
      {
        type: "paragraph",
        text: "Návštěvníci si mohli osahat LED kšiltovku měnící barvy podle nálady, nechat se obsloužit robotickým Nosičem obědů nebo si popovídat s Nápojovým automatem s AI. Nechyběl ani Megatron, Bobot, ASR robot, Učebník s chytrou flaškou a Chodící větrák v mexickém stylu.",
      },
      {
        type: "quote",
        text: "Děti odcházely s pocitem, že dokážou cokoliv. A to je přesně ten cíl.",
        author: "Dominika Franeková · koordinátorka MyMachine",
      },
      {
        type: "paragraph",
        text: "Za každým prototypem stojí tým napříč generacemi — od dvanáctiletého autora nápadu po inženýra z partnerské firmy. Právě tahle spolupráce je jádrem celého programu. Děti vidí, že jejich nápad má sílu, studenti získají reálnou zkušenost a firmy potkávají budoucí talenty.",
      },
      {
        type: "image",
        src: "/assets/photos/inline.jpg",
        alt: "Foto z EXPA — dítě u svého prototypu",
        caption:
          "Každý prototyp měl svého malého autora, který hrdě vysvětloval, jak jeho vynález funguje.",
      },
      { type: "heading", text: "A jede se dál" },
      {
        type: "paragraph",
        text: "Pilotní ročník skončil, ale program pokračuje. Přihlašování škol pro rok 2026/2027 je uzavřené; vysokoškoláci se mohou hlásit do konce srpna. Pokud chcete, aby i dětské sny dostaly podobu skutečného vynálezu, ozvěte se nám.",
      },
      {
        type: "cta",
        eyebrow: "Přihlášky 2026/2027",
        title: "Přidejte se k dalšímu ročníku",
        text: "Vyberte si svou roli a zjistěte, jak se může zapojit vaše škola, univerzitní tým nebo firma.",
        href: "/zapoj-se",
        buttonLabel: "Vybrat cestu zapojení",
      },
      {
        type: "paragraph",
        text: "Děkujeme všem dětem, studentům, učitelům, univerzitě VUT a firemním partnerům. Bez vás by zůstaly jen kresby v sešitech.",
      },
    ],
    tags: ["#otevřisemožnoSTEM", "EXPO", "Pilotní ročník"],
    // Karty „Další příběhy“ zůstanou neklikací, dokud nevzniknou jejich detaily.
    related: [
      {
        date: "29. května 2026",
        title: "Rok práce, stovky studentů a osm vynálezů",
        image: "/assets/photos/news2.jpg",
        href: null,
      },
      {
        date: "15. května 2026",
        title: "Co kdyby vás v létě následoval vlastní větrák?",
        image: "/assets/photos/news3.jpg",
        href: null,
      },
      {
        date: "9. dubna 2026",
        title: "Otevíráme přihlašování pro rok 2026/2027!",
        image: "/assets/photos/sketch.jpg",
        href: null,
      },
    ],
  },
];

/** Vrátí článek dle slugu, nebo undefined pokud neexistuje. */
export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
