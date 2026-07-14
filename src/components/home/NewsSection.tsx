"use client";

import Link from "next/link";
import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import CarouselDots from "@/components/CarouselDots";
import type { NewsCard } from "@/content/news";
import styles from "./NewsSection.module.css";

/** Šířka karty (380px) + mezera (24px) — krok posunu carouselu dle návrhu. */
const STEP = 404;

export default function NewsSection({ news }: { news: NewsCard[] }) {
  const [index, setIndex] = useState(0);
  const maxIdx = news.length - 1;

  return (
    <section id="novinky" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Co se děje</span>
            <h2 className={`display ${styles.heading}`}>Novinky</h2>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              type="button"
              className="arrow-btn"
              aria-label="Předchozí"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
            >
              ←
            </button>
            <button
              type="button"
              className="arrow-btn"
              aria-label="Další"
              onClick={() => setIndex((i) => Math.min(maxIdx, i + 1))}
            >
              →
            </button>
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div
            className={styles.track}
            style={{ transform: `translateX(${-index * STEP}px)` }}
          >
            {news.map((item) => (
              <article key={item.title} className={styles.card}>
                <ImageSlot src={item.image} alt="Foto" height={200} radius={0} />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{item.badge}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.excerpt}</p>
                  <a href={item.href} className={styles.readMore}>
                    Číst dál
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.dots}>
          <CarouselDots
            count={news.length}
            active={index}
            onSelect={setIndex}
            label="Novinka"
          />
        </div>

        <div className={styles.allWrap}>
          <Link href="/novinky" className={styles.allBtn}>
            Zobrazit všechny články
          </Link>
        </div>
      </div>
    </section>
  );
}
