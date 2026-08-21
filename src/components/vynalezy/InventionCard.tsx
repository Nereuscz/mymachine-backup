"use client";

import { useEffect, useRef, useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import type { InventionDetail } from "@/content/inventions";
import styles from "./InventionCard.module.css";

export default function InventionCard({
  invention,
}: {
  invention: InventionDetail;
}) {
  const gallerySlides = invention.slides;
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lightboxOpen = activeSlide !== null;

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSlide(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveSlide((current) =>
          current === null
            ? null
            : (current - 1 + gallerySlides.length) % gallerySlides.length
        );
      }
      if (event.key === "ArrowRight") {
        setActiveSlide((current) =>
          current === null ? null : (current + 1) % gallerySlides.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [gallerySlides.length, lightboxOpen]);

  return (
    <article className={styles.row}>
      <div
        className={`${styles.gallery} ${
          gallerySlides.length === 1 ? styles.gallerySingle : ""
        }`}
        aria-label={`Galerie: ${invention.title}`}
      >
        {gallerySlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={styles.thumbnail}
            onClick={() => setActiveSlide(index)}
            aria-label={`Zvětšit fotografii: ${slide.alt}`}
          >
            <ImageSlot
              src={slide.src}
              alt={slide.alt}
              radius={0}
              style={{ minHeight: 0 }}
            />
            <span className={styles.expandLabel} aria-hidden="true">
              Zvětšit
              <span>↗</span>
            </span>
          </button>
        ))}
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

      {activeSlide !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Zvětšená galerie: ${invention.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveSlide(null);
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.lightboxClose}
            onClick={() => setActiveSlide(null)}
            aria-label="Zavřít galerii"
          >
            Zavřít ×
          </button>

          <div className={styles.lightboxContent}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gallerySlides[activeSlide].src}
              alt={gallerySlides[activeSlide].alt}
            />
          </div>

          {gallerySlides.length > 1 && (
            <div className={styles.lightboxControls}>
              <button
                type="button"
                onClick={() =>
                  setActiveSlide(
                    (activeSlide - 1 + gallerySlides.length) % gallerySlides.length
                  )
                }
                aria-label="Předchozí fotografie"
              >
                ←
              </button>
              <span>
                {activeSlide + 1} / {gallerySlides.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % gallerySlides.length)
                }
                aria-label="Další fotografie"
              >
                →
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
