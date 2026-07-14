"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import CarouselDots from "@/components/CarouselDots";
import type { Invention } from "@/content/inventions";
import styles from "./InventionsSection.module.css";

const AUTOPLAY_MS = 5200;

/** Carousel vynálezů na domovské stránce — autoplay ~5,2 s, šipky, tečky. */
export default function InventionsSection({
  inventions,
}: {
  inventions: Invention[];
}) {
  const [index, setIndex] = useState(0);
  const count = inventions.length;

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % count),
      AUTOPLAY_MS
    );
    return () => clearInterval(t);
  }, [count]);

  return (
    <section id="vynalezy-ukazka" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Sny, které se staly strojem</span>
            <h2 className={`display ${styles.heading}`}>Vynálezy</h2>
          </div>
          <Link href="/vynalezy" className={styles.allBtn}>
            Všechny vynálezy
          </Link>
        </div>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {inventions.map((inv) => (
              <div key={inv.title} className={styles.card}>
                <ImageSlot
                  src={inv.image}
                  alt={inv.imageAlt}
                  minHeight={360}
                  radius={0}
                />
                <div className={styles.cardBody}>
                  <span className={styles.cardEyebrow}>
                    Vynález · Patron: {inv.patron}
                  </span>
                  <h3 className={styles.cardTitle}>{inv.title}</h3>
                  <p className={styles.cardText}>{inv.description}</p>
                  <div className={styles.tags}>
                    {inv.tags.map((tag) => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <CarouselDots
            count={count}
            active={index}
            onSelect={setIndex}
            label="Vynález"
          />
          <div style={{ display: "flex", gap: 10 }}>
            <button
              type="button"
              className="arrow-btn"
              aria-label="Předchozí"
              onClick={() => setIndex((i) => (((i - 1) % count) + count) % count)}
            >
              ←
            </button>
            <button
              type="button"
              className="arrow-btn"
              aria-label="Další"
              onClick={() => setIndex((i) => (i + 1) % count)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
