"use client";

import Link from "next/link";
import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import type { NewsPost } from "@/content/news";
import styles from "./NewsGrid.module.css";

/** Kategorie filtru — 1:1 dle návrhu (Novinky.dc.html). */
const CATEGORIES = ["Vše", "Novinky", "O projektu"] as const;

type Category = (typeof CATEGORIES)[number];

/**
 * Filtr kategorií + mřížka článků na stránce Novinky.
 * Klientská komponenta — drží stav aktivního filtru.
 */
export default function NewsGrid({ posts }: { posts: NewsPost[] }) {
  const [filter, setFilter] = useState<Category>("Vše");

  const visible =
    filter === "Vše" ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      {/* ============ FILTR ============ */}
      <section className={styles.filterSection}>
        <div className={styles.filterRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={
                cat === filter ? `${styles.chip} ${styles.chipActive}` : styles.chip
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ============ MŘÍŽKA ČLÁNKŮ ============ */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {visible.map((post) => (
            <article key={post.title} className={styles.card}>
              <div className={styles.media}>
                <ImageSlot
                  src={post.image}
                  alt="Foto článku"
                  height={190}
                />
                <span className={styles.badge}>{post.category}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.date}>{post.date}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={post.href} className={styles.readLink}>
                  Číst článek
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
