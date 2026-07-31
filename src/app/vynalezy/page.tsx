import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InventionCard from "@/components/vynalezy/InventionCard";
import { allInventions } from "@/content/inventions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vynálezy — MyMachine Czechia",
  description:
    "Úžasné vynálezy, které se díky kreativitě a odvaze mladých tvůrců stanou skutečností. Od dětské skici až po funkční prototyp.",
};

const yearStats = [
  { value: "400+", label: "dětí ze základních škol" },
  { value: "80+", label: "studentů středních škol" },
  { value: "32+", label: "vysokoškoláků" },
  { value: String(allInventions.length), label: "hotových vynálezů" },
];

/** Stránka Vynálezy — 1:1 převod návrhu Vynalezy.dc.html. */
export default function VynalezyPage() {
  return (
    <div className={styles.page}>
      <Header variant="sub" active="vynalezy" />

      {/* HERO */}
      <section className={styles.hero}>
        {/* Dekorativní plovoucí tvar přebarvený do akcentové žlutozelené */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/shape-orange.png"
          alt=""
          className={styles.heroShape}
        />
        <div className={styles.heroInner}>
          <span className="eyebrow">Pilotní ročník 2025/2026</span>
          <h1 className={`display ${styles.heroTitle}`}>Vynálezy</h1>
          <p className={styles.heroLead}>
            Úžasné vynálezy, které se díky kreativitě a odvaze mladých tvůrců
            stanou skutečností. Od dětské skici až po funkční prototyp.
          </p>
        </div>
      </section>

      {/* INFOGRAFIKA ROČNÍKU */}
      <section className={styles.yearOverview} aria-labelledby="year-overview-title">
        <div className={styles.yearOverviewInner}>
          <div className={styles.yearOverviewHead}>
            <span className="eyebrow">Ročník v číslech</span>
            <h2
              id="year-overview-title"
              className={`display ${styles.yearOverviewTitle}`}
            >
              Jeden rok společného vynalézání
            </h2>
          </div>
          <div className={styles.yearStats}>
            {yearStats.map((stat) => (
              <div key={stat.label} className={styles.yearStat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VYNÁLEZY — EDITORIAL STACK */}
      <section className={styles.stack}>
        <div className={styles.stackInner}>
          {allInventions.map((invention) => (
            <InventionCard key={invention.id} invention={invention} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={`display ${styles.ctaTitle}`}>
          Tvůj nápad může být další
        </h2>
        <p className={styles.ctaLead}>
          Přihlaš svou školu nebo žáky do dalšího ročníku MyMachine a proměň
          dětský sen ve skutečný stroj.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/zapoj-se#skola" className={styles.ctaBtn}>
            Přihlásit školu
          </Link>
          <Link href="/zapoj-se#student" className={styles.ctaBtn}>
            Zapojit se jako vysokoškolák
          </Link>
          <Link href="/zapoj-se#firma" className={styles.ctaBtn}>
            Stát se patronem
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
