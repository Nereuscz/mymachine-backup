import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZapojTabs from "@/components/zapoj/ZapojTabs";
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
    text: "Vysokoškoláci proměnní nápad v technický návrh.",
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

export default function ZapojSePage() {
  return (
    <div className={styles.page}>
      <Header variant="sub" active="zapoj" ctaHref="#cesty" />

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

      {/* ---- Přepínač záložek + panely škola / student / firma ---- */}
      <ZapojTabs />

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

      <Footer />
    </div>
  );
}
