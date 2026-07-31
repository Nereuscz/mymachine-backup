import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ZapojTabs from "@/components/zapoj/ZapojTabs";
import { allInventions } from "@/content/inventions";
import { patrons } from "@/content/partners";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Zapoj se — MyMachine Czechia",
  description:
    "Tři cesty, jeden stroj. Vyber si, kým jsi — učitel, vysokoškolák nebo firma — a my ti přesně ukážeme, co to obnáší a jak začít.",
};

/* Kroky závěrečného pásu „Jak vaše role zapadá" (Zapoj.dc.html) */
const flowSteps = [
  {
    step: "Krok 01",
    title: "Děti sní",
    text: "Žáci ZŠ vymyslí a nakreslí stroj svých snů.",
  },
  {
    step: "Krok 02",
    title: "VŠ navrhne",
    text: "Vysokoškoláci promění nápad v technický návrh.",
  },
  {
    step: "Krok 03",
    title: "SŠ staví",
    text: "Středoškoláci postaví funkční prototyp.",
  },
  {
    step: "Napříč",
    title: "Firmy drží",
    text: "Firemní patroni financují a mentorují celou cestu.",
  },
];

const proofStats = [
  { value: "9", label: "zapojených základních škol" },
  { value: "400+", label: "malých vynálezců" },
  { value: "80+", label: "studentů středních škol" },
  { value: "32+", label: "vysokoškoláků" },
  { value: String(patrons.length), label: "firemních patronů" },
  { value: String(allInventions.length), label: "hotových vynálezů" },
];

export default function ZapojSePage() {
  return (
    <div className={styles.page}>
      <header className={styles.simpleHeader}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Zpět na domovskou stránku MyMachine Czechia"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/mymachine-czechia-white.png"
            alt="MyMachine Czechia"
          />
        </Link>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          Zpět na homepage
        </Link>
      </header>

      {/* ---- Hero ---- */}
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/shape-orange.png"
          alt=""
          className={styles.heroShape}
        />
        <div className={styles.heroInner}>
          <span className="eyebrow">Zapoj se do MyMachine</span>
          <h1 className={`display ${styles.heroTitle}`}>
            Tři cesty,
            <br />
            jeden stroj
          </h1>
          <p className={styles.heroText}>
            Dětský sen se stane strojem jen díky lidem kolem. Vyber si, kým jsi
            — a my ti přesně ukážeme, co to obnáší a jak začít.
          </p>
        </div>
      </section>

      {/* ---- Sdílený pás „Jak vaše role zapadá" ---- */}
      <section className={styles.flowSection}>
        <div className="container">
          <div className={styles.flowHead}>
            <span className="eyebrow">Všichni v jednom týmu</span>
            <h2 className={`display ${styles.flowTitle}`}>
              Jak vaše role zapadá
            </h2>
          </div>
          <div className={styles.flowGrid}>
            {flowSteps.map((item) => (
              <div key={item.title} className={styles.flowCard}>
                <span className={styles.flowStep}>{item.step}</span>
                <h3 className={styles.flowCardTitle}>{item.title}</h3>
                <p className={styles.flowCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Výsledky pilotního ročníku ---- */}
      <section className={styles.proofSection} aria-labelledby="proof-title">
        <div className={styles.proofInner}>
          <div className={styles.proofHead}>
            <span className={styles.proofEyebrow}>Pilotní ročník 2025/2026</span>
            <h2 id="proof-title" className={`display ${styles.proofTitle}`}>
              Už jsme to společně dokázali
            </h2>
            <p className={styles.proofText}>
              Za první rok se kolem dětských nápadů propojily školy, studenti,
              univerzity i firmy z Jihomoravského kraje.
            </p>
          </div>
          <ul className={styles.proofGrid} aria-label="Výsledky pilotního ročníku">
            {proofStats.map((stat) => (
              <li key={stat.label} className={styles.proofStat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Přepínač záložek + panely škola / student / firma ---- */}
      <ZapojTabs />

      <Footer />
    </div>
  );
}
