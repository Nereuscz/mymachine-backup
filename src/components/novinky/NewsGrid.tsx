"use client";

import Link from "next/link";
import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import type { NewsPost } from "@/content/news";
import styles from "./NewsGrid.module.css";

/** Stálé obsahové rubriky blogu. */
const CATEGORIES = [
  "Vše",
  "Vynálezy",
  "Ze škol",
  "Akce",
  "Zapojte se",
  "O programu",
] as const;

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
      <section
        className={styles.filterSection}
        aria-label="Filtrovat články podle rubriky"
      >
        <div className={styles.filterRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={
                cat === filter
                  ? `${styles.chip} ${styles.chipActive}`
                  : styles.chip
              }
              aria-pressed={cat === filter}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className={styles.resultCount} aria-live="polite">
          {visible.length}{" "}
          {visible.length === 1
            ? "článek"
            : visible.length < 5
              ? "články"
              : "článků"}
        </p>
      </section>

      {/* ============ MŘÍŽKA ČLÁNKŮ ============ */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {visible.map((post) => {
            const cardContent = (
              <>
                <div className={styles.media}>
                  <ImageSlot src={post.image} alt={post.title} height={190} />
                  <span className={styles.badge}>{post.category}</span>
                </div>
                <div className={styles.body}>
                  <span className={styles.date}>{post.date}</span>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <span className={styles.readLink}>
                    {post.href ? "Číst článek" : "Článek připravujeme"}
                    {post.href && <span aria-hidden="true">→</span>}
                  </span>
                </div>
              </>
            );

            if (!post.href) {
              return (
                <article
                  key={post.title}
                  className={`${styles.card} ${styles.cardStatic}`}
                >
                  {cardContent}
                </article>
              );
            }

            return (
              <Link
                key={post.title}
                href={post.href}
                className={`${styles.card} ${styles.cardInteractive}`}
                aria-label={`Číst článek: ${post.title}`}
              >
                <article>{cardContent}</article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
