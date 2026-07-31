"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import styles from "./ZapojTabs.module.css";

type TabKey = "skola" | "student" | "firma";

type PanelCard = {
  icon: string;
  title: string;
  text: string;
};

type PanelFaq = {
  q: string;
  a: string;
};

type Panel = {
  key: TabKey;
  /** Číslo na záložce (01/02/03). */
  num: string;
  /** Popisek na záložce. */
  tabLabel: string;
  eyebrow: string;
  title: string;
  /** Odstavce úvodu (mohou obsahovat <strong>). */
  paragraphs: ReactNode[];
  image: { src: string; alt: string };
  /** Obrázek jako první v DOM s CSS order (panel Vysokoškolák) — na mobilu je text první. */
  imageFirst: boolean;
  cards: PanelCard[];
  faqs: PanelFaq[];
  notice: { label: string; title: string; text: string };
  ctaLabel: string;
};

/* Obsah tří panelů přenesený 1:1 ze Zapoj.dc.html */
const PANELS: Panel[] = [
  {
    key: "skola",
    num: "01",
    tabLabel: "Učitel / škola",
    eyebrow: "Cesta 01 · Vaše škola",
    title: "Přiveďte své žáky k vynálézání",
    paragraphs: [
      <>
        Zapojte třídu, kroužek nebo celou školu.{" "}
        <strong>Základní školy</strong> vymýšlejí stroje svých snů,{" "}
        <strong>střední školy</strong> je pomáhají stavět. My dodáme metodiku i
        lektory — vy dodáte prostor a chuť.
      </>,
      <>
        Zapadne to do výuky fyziky, techniky i informatiky, nebo do
        volnočasového kroužku. Program je pro školy zdarma.
      </>,
    ],
    image: {
      src: "/assets/photos/drawing.jpg",
      alt: "Foto: děti kreslí vynálezy",
    },
    imageFirst: false,
    cards: [
      {
        icon: "/assets/icons/stem-science-green.svg",
        title: "Co děláte",
        text: "Provázíte žáky programem. ZŠ vymýšlí a kreslí, SŠ staví. Lektor MyMachine vede workshopy, vy jste průvodce.",
      },
      {
        icon: "/assets/icons/stem-math-green.svg",
        title: "Kolik to zabere",
        text: "Několik workshopů rozložených do školního roku. Není to projekt navíc přes noc — jde postupně, ve vašem tempu.",
      },
      {
        icon: "/assets/icons/stem-technology-green.svg",
        title: "Co získáte",
        text: "Zapojení do mezinárodního programu zdarma, spolupráci s VUT a firmami z kraje a silný příběh pro rodiče i zřizovatele.",
      },
      {
        icon: "/assets/icons/stem-engineering-green.svg",
        title: "Co po vás chceme",
        text: "Jednoho učitele-koordinátora, prostor pro workshopy a ochotu pustit děti do vlastní fantazie.",
      },
    ],
    faqs: [
      {
        q: "Musíme mít technické vybavení?",
        a: "Ne. Stavba probíhá u partnerů (VUT, FabLab, firmy). Škola dodává hlavně nápady a nadšení.",
      },
      {
        q: "Pro jaké ročníky to je?",
        a: "ZŠ zapojuje žáky 2. stupně, SŠ studenty technických i všeobecných oborů. Ozvěte se a doladíme to na míru.",
      },
      {
        q: "Působíte mimo Jihomoravský kraj?",
        a: "Aktuálně se rozjíždíme na jihu Moravy. Máte-li zájem odjinud, napište — plánujeme růst.",
      },
    ],
    notice: {
      label: "Termín",
      title: "Přihlášky pro ročník 2026/2027 jsou otevřené",
      text: "Hledáme základní i střední školy z kraje. Kapacita je omezená — ozvěte se včas.",
    },
    ctaLabel: "Přihlásit školu",
  },
  {
    key: "student",
    num: "02",
    tabLabel: "Vysokoškolák",
    eyebrow: "Cesta 02 · Vysokoškolák",
    title: "Proměň dětský nápad ve stroj",
    paragraphs: [
      <>
        V týmu vezmeš dětskou skicu a proměníš ji v technický návrh — a pak
        pomůžeš postavit reálný prototyp. Je to opravdový projekt, ne školní
        cvičení.
      </>,
      <>
        <strong>Nezáleží na oboru, záleží na nadšení.</strong> Ať studuješ
        techniku, design nebo něco úplně jiného — místo se najde.
      </>,
    ],
    image: {
      src: "/assets/photos/lab.jpg",
      alt: "Foto: studenti staví prototyp",
    },
    imageFirst: true,
    cards: [
      {
        icon: "/assets/icons/stem-engineering-green.svg",
        title: "Co děláš",
        text: "Navrhuješ řešení dětského vynálezu a v týmu se SŠ a firmou ho stavíš — od plánu po funkční prototyp.",
      },
      {
        icon: "/assets/icons/stem-math-green.svg",
        title: "Kolik to zabere",
        text: "Práce v týmu během školního roku. Tempo si z velké části řídíte sami — kolem studia se to dá zvládnout.",
      },
      {
        icon: "/assets/icons/stem-technology-green.svg",
        title: "Co získáš",
        text: "Reálný projekt do portfolia, mentory z firem, nové lidi napříč obory — a pocit, že jsi dětský sen postavil.",
      },
      {
        icon: "/assets/icons/stem-science-green.svg",
        title: "Co potřebuješ",
        text: "Být studentem VŠ (ideálně v kraji) a chtít tvořit. Obor ani ročník neřešíme — přihlásit se můžeš sám.",
      },
    ],
    faqs: [
      {
        q: "Musím být z techniky?",
        a: "Ne. Týmy potřebují i designéry, komunikátory a organizátory. Nadšení je důležitější než obor.",
      },
      {
        q: "Dostanu za to kredity nebo odměnu?",
        a: "Možnosti (stipendium, uznání praxe) řešíme s VUT individuálně. Napiš nám a probereme to.",
      },
      {
        q: "Přihlašuju se sám, nebo za tým?",
        a: "Klidně sám — do týmu tě zařadíme. Když máte partu, přihlaste se společně.",
      },
    ],
    notice: {
      label: "Nábor",
      title: "Hledáme studenty do týmů pro ročník 2026/2027",
      text: "Osm dětských vynálezů čeká na svůj tým. Přidej se, dokud jsou místa.",
    },
    ctaLabel: "Přihlásit se do týmu",
  },
  {
    key: "firma",
    num: "03",
    tabLabel: "Firma",
    eyebrow: "Cesta 03 · Firma",
    title: "Staňte se patronem vynálezu",
    paragraphs: [
      <>
        Vezměte jeden dětský vynález za svůj. Podpoříte jeho stavbu financemi,
        materiálem i mentory z vlastních řad — a uvidíte, jak z nápadu vzniká
        stroj.
      </>,
      <>
        Je to CSR, které jde nahmatat: konkrétní výsledek, spojení s VUT a
        školami v kraji a kontakt s budoucími talenty.
      </>,
    ],
    image: {
      src: "/assets/photos/inline.jpg",
      alt: "Foto: mentor s týmem",
    },
    imageFirst: false,
    cards: [
      {
        icon: "/assets/icons/stem-technology-green.svg",
        title: "Co děláte",
        text: "Patronujete jeden vynález — přispějete na jeho stavbu a zapojíte své lidi jako mentory týmu.",
      },
      {
        icon: "/assets/icons/stem-math-green.svg",
        title: "Kolik to zabere",
        text: "Patronství jednoho vynálezu na jeden ročník. Rozsah zapojení mentorů si nastavíte podle svých možností.",
      },
      {
        icon: "/assets/icons/stem-science-green.svg",
        title: "Co získáte",
        text: "Hmatatelné CSR s reálným výstupem, viditelnost mezi partnery a školami a přímý kontakt s budoucími techniky.",
      },
      {
        icon: "/assets/icons/stem-engineering-green.svg",
        title: "Jak začít",
        text: "Ozvěte se a domluvíme rozsah patronství na míru vaší firmě. Přidáte se k ABB, Honeywell, NXP a dalším.",
      },
    ],
    faqs: [
      {
        q: "Kolik patronství stojí?",
        a: "Rozsah domlouváme individuálně podle vynálezu a možností firmy. Napište si o konkrétní nabídku.",
      },
      {
        q: "Musíme dodat i mentory?",
        a: "Mentoři jsou to nejcennější, ale rozsah je na vás. I pár konzultací týmu hodně pomůže.",
      },
      {
        q: "Jak nás uvidí veřejnost?",
        a: "U vynálezu, na webu, na EXPO i v médiích uvádíme patrona. Viditelnost je součástí spolupráce.",
      },
    ],
    notice: {
      label: "Ročník 2026/2027",
      title: "Vyberte si vynález, který postavíte",
      text: "Nové dětské nápady hledají patrony. Čím dřív se ozvete, tím víc si vyberete.",
    },
    ctaLabel: "Stát se patronem",
  },
];

/**
 * Sticky přepínač „Učitel / škola · Vysokoškolák · Firma" a tři panely.
 * Stav odpovídá skriptu v Zapoj.dc.html: výchozí záložka „skola",
 * kotva v URL (#skola/#student/#firma) přepne záložku po načtení.
 */
export default function ZapojTabs() {
  const [tab, setTab] = useState<TabKey>("skola");

  useEffect(() => {
    const syncTabWithHash = () => {
      const hash = (window.location.hash || "").replace("#", "");
      if (hash === "skola" || hash === "student" || hash === "firma") {
        setTab(hash);
      }
    };

    const frame = window.requestAnimationFrame(syncTabWithHash);
    window.addEventListener("hashchange", syncTabWithHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncTabWithHash);
    };
  }, []);

  const selectTab = (key: TabKey) => {
    setTab(key);
    window.history.replaceState(null, "", `#${key}`);
  };

  return (
    <>
      <section className={styles.choiceSection} aria-labelledby="choice-title">
        <div className={styles.choiceHead}>
          <span className="eyebrow">Vyberte svou roli</span>
          <h2 id="choice-title" className={`display ${styles.choiceTitle}`}>
            Jak se chcete zapojit?
          </h2>
          <p className={styles.choiceText}>
            Každá cesta má jinou roli, časovou náročnost i přínos. Přepněte se
            mezi možnostmi a najděte tu svou.
          </p>
        </div>
      </section>

      {/* Sticky lišta se záložkami (kotva #cesty) */}
      <div id="cesty" className={styles.tabBar}>
        <div
          className={styles.tabBarInner}
          role="tablist"
          aria-label="Způsob zapojení do MyMachine"
        >
          {PANELS.map((panel) => (
            <button
              key={panel.key}
              id={`tab-${panel.key}`}
              type="button"
              role="tab"
              aria-selected={tab === panel.key}
              aria-controls={`panel-${panel.key}`}
              tabIndex={tab === panel.key ? 0 : -1}
              onClick={() => selectTab(panel.key)}
              className={
                tab === panel.key
                  ? `${styles.tab} ${styles.tabActive}`
                  : styles.tab
              }
            >
              <span className={styles.tabNum}>{panel.num}</span>
              <span className={styles.tabLabel}>{panel.tabLabel}</span>
              <span className={styles.tabState}>
                {tab === panel.key ? "Vybráno" : "Zobrazit cestu"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Panely — neaktivní se skrývají přes display:none (jako v návrhu) */}
      {PANELS.map((panel) => (
        <div
          key={panel.key}
          id={`panel-${panel.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${panel.key}`}
          hidden={tab !== panel.key}
        >
          {/* Úvod: text + fotka */}
          <section className={styles.sectionIntro}>
            <div
              className={
                panel.imageFirst ? styles.splitIntroRev : styles.splitIntro
              }
            >
              {panel.imageFirst && (
                <ImageSlot
                  src={panel.image.src}
                  alt={panel.image.alt}
                  radius={20}
                  minHeight={340}
                  style={{ order: 2 }}
                />
              )}
              <div style={panel.imageFirst ? { order: 1 } : undefined}>
                <span className="eyebrow">{panel.eyebrow}</span>
                <h2 className={`display ${styles.introTitle}`}>
                  {panel.title}
                </h2>
                {panel.paragraphs.map((paragraph, i) => (
                  <p key={i} className={styles.introP}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {!panel.imageFirst && (
                <ImageSlot
                  src={panel.image.src}
                  alt={panel.image.alt}
                  radius={20}
                  minHeight={340}
                />
              )}
            </div>
          </section>

          {/* Čtyři karty */}
          <section className={styles.sectionCards}>
            <div className={styles.cards}>
              {panel.cards.map((card) => (
                <div key={card.title} className={styles.card}>
                  <span className={styles.cardIcon}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.icon} width={26} height={26} alt="" />
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Časté otázky + upoutávka s CTA */}
          <section className={styles.sectionFaq}>
            <div className={styles.splitFaq}>
              <div className={styles.faqBox}>
                <span className={styles.kicker}>Časté otázky</span>
                <div className={styles.faqList}>
                  {panel.faqs.map((faq) => (
                    <div key={faq.q} className={styles.faqItem}>
                      <p className={styles.faqQ}>{faq.q}</p>
                      <p className={styles.faqA}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.ctaCol}>
                <div className={styles.noticeBox}>
                  <span className={styles.kicker}>{panel.notice.label}</span>
                  <p className={styles.noticeTitle}>{panel.notice.title}</p>
                  <p className={styles.noticeText}>{panel.notice.text}</p>
                </div>
                <Link href="/#kontakt" className={styles.ctaBtn}>
                  {panel.ctaLabel}
                </Link>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
