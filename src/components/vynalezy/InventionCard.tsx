"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ImageSlot from "@/components/ImageSlot";
import type { InventionDetail } from "@/content/inventions";
import styles from "./InventionCard.module.css";

export default function InventionCard({
  invention,
}: {
  invention: InventionDetail;
}) {
  const [detailOpen, setDetailOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const detailId = `invention-detail-${invention.id}`;
  const titleId = `${detailId}-title`;
  const mainPhoto = invention.slides[0];

  useEffect(() => {
    if (!detailOpen) return;

    const triggerButton = triggerButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailOpen(false);
      }
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerButton?.focus();
    };
  }, [detailOpen]);

  return (
    <article className={styles.row}>
      <button
        ref={triggerButtonRef}
        type="button"
        className={styles.cardTrigger}
        onClick={() => setDetailOpen(true)}
        aria-haspopup="dialog"
        aria-controls={detailId}
      >
        <span className={styles.thumbnail}>
          <ImageSlot
            src={mainPhoto.src}
            alt={mainPhoto.alt}
            radius={0}
            style={{ minHeight: 0 }}
          />
        </span>

        <span className={styles.body}>
          <span className={styles.title}>{invention.title}</span>
          <span className={styles.excerpt}>{invention.excerpt}</span>
          <span className={styles.detailLink} aria-hidden="true">
            Zobrazit detail <span>↗</span>
          </span>
        </span>
      </button>

      {detailOpen &&
        createPortal(
          <div
          className={styles.detailOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          id={detailId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDetailOpen(false);
          }}
        >
          <div className={styles.detailPanel}>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.detailClose}
              onClick={() => setDetailOpen(false)}
              aria-label="Zavřít detail vynálezu"
            >
              Zavřít ×
            </button>

            <div className={styles.detailMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mainPhoto.src} alt={mainPhoto.alt} />
            </div>

            <div className={styles.detailBody}>
              <span className={styles.detailEyebrow}>Vynález ročníku 2025/2026</span>
              <h2 id={titleId} className={styles.detailTitle}>
                {invention.title}
              </h2>
              <div className={styles.detailCopy}>
                {invention.paras.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
              <div className={styles.divider} />
              <div className={styles.chips}>
                {invention.chips.map((chip) => (
                  <span key={chip.name} className={styles.chip}>
                    <span className={styles.chipAbbr}>{chip.abbr}</span>&nbsp;{" "}
                    {chip.name}
                  </span>
                ))}
                <span className={styles.chip}>
                  <span className={styles.chipAbbr}>Patron</span>&nbsp;{" "}
                  {invention.patron}
                </span>
              </div>
            </div>
          </div>
          </div>,
          document.body
        )}
    </article>
  );
}
