import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsGrid from "@/components/novinky/NewsGrid";
import { allPosts } from "@/content/news";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Novinky — MyMachine Czechia",
  description:
    "Objevte inspirativní příběhy o vynálezech, které vznikly ve spolupráci dětí, studentů a učitelů.",
};

/** Stránka Novinky — výpis článků (1:1 dle Novinky.dc.html). */
export default function NovinkyPage() {
  return (
    <div className={styles.page}>
      <Header variant="sub" active="novinky" />

      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <Link href="/" className={styles.backLink}>
          ← Zpět na hlavní stránku
        </Link>
        <h1 className={`display ${styles.heroTitle}`}>Příběhy MyMachine</h1>
        <p className={styles.heroLead}>
          Objevte inspirativní příběhy o vynálezech, které vznikly ve
          spolupráci dětí, studentů a učitelů.
        </p>
      </section>

      {/* ============ FILTR + MŘÍŽKA ČLÁNKŮ ============ */}
      <NewsGrid posts={allPosts} />

      {/* ============ CTA — ZAPOJ SE ============ */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className="eyebrow">Tři cesty, jeden stroj</span>
          <h2 className={`display ${styles.ctaTitle}`}>
            Zapoj se do MyMachine
          </h2>
          <p className={styles.ctaText}>
            Ať jsi učitel, vysokoškolák nebo firma — máš u nás své místo.
            Vyber si cestu a pojď proměnit dětský sen ve stroj.
          </p>
          <div className={styles.ctaBtns}>
            <Link
              href="/zapoj-se#skola"
              className={`${styles.btn} ${styles.btnAccent}`}
            >
              Přihlásit školu
            </Link>
            <Link
              href="/zapoj-se#student"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Přidat se do týmu
            </Link>
            <Link
              href="/zapoj-se#firma"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Stát se patronem
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
