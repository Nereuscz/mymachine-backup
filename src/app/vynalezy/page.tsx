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
