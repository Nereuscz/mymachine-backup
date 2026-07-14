"use client";

import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import type { InventionDetail } from "@/content/inventions";
import styles from "./InventionCard.module.css";

/**
 * Karta vynálezu na stránce /vynalezy — editorial řádek s foto carouselem.
 * Chování 1:1 dle logiky návrhu (Vynalezy.dc.html): každá karta má vlastní
 * index snímku, šipky posouvají cyklicky, tečky skáčou přímo na snímek.
 */
export default function InventionCard({
  invention,
}: {
  invention: InventionDetail;
}) {
  const [index, setIndex] = useState(0);
  const count = invention.slides.length;
  // Normalizace indexu (v návrhu ((i % n) + n) % n) — stav držíme vždy platný.
  const idx = ((index % count) + count) % count;

  return (
    <article className={styles.row}>
      <div className={styles.media}>
        {/* Pás snímků — posun o -idx × 100 % s přechodem dle návrhu */}
        <div
          className={styles.track}
          style={{ transform: `translateX(${-idx * 100}%)` }}
        >
          {invention.slides.map((slide) => (
            <div key={slide.src} className={styles.slide}>
              <ImageSlot
                src={slide.src}
                alt={slide.alt}
                style={{ minHeight: 0 }}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Předchozí"
          className={`${styles.navBtn} ${styles.navBtnPrev}`}
          onClick={() => setIndex((idx - 1 + count) % count)}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Další"
          className={`${styles.navBtn} ${styles.navBtnNext}`}
          onClick={() => setIndex((idx + 1) % count)}
        >
          ›
        </button>
        <div className={styles.dots}>
          {invention.slides.map((slide, j) => (
            <button
              key={slide.src}
              type="button"
              aria-label="Foto"
              className={j === idx ? `${styles.dot} ${styles.dotActive}` : styles.dot}
              onClick={() => setIndex(j)}
            />
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{invention.title}</h2>
        {invention.paras.map((para) => (
          <p key={para.slice(0, 32)} className={styles.para}>
            {para}
          </p>
        ))}
        <div className={styles.divider} />
        <div className={styles.chips}>
          {invention.chips.map((chip) => (
            <span key={chip.name} className={styles.chip}>
              <span className={styles.chipAbbr}>{chip.abbr}</span>&nbsp; {chip.name}
            </span>
          ))}
          <span className={styles.chip}>
            <span className={styles.chipAbbr}>Patron</span>&nbsp; {invention.patron}
          </span>
        </div>
      </div>
    </article>
  );
}
