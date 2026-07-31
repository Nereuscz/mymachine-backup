"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

const KEY = "mm-cookie-consent";

type Consent = "all" | "necessary";

function readConsent(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function writeConsent(value: Consent) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* localStorage nedostupné — volbu neukládáme */
  }
}

/**
 * Cookie lišta podle cookie-consent.js z handoffu.
 * Otevře se, pokud volba není uložena; znovu ji otevře klik na
 * libovolný prvek s [data-cookie-settings] (tlačítko v patičce).
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let openFrame: number | undefined;
    let visibleFrame: number | undefined;

    if (!readConsent()) {
      openFrame = requestAnimationFrame(() => {
        setOpen(true);
        // Vstupní animace až po vykreslení lišty (translateY 120% → 0).
        visibleFrame = requestAnimationFrame(() => setVisible(true));
      });
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-cookie-settings]")) {
        e.preventDefault();
        setOpen(true);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setVisible(true))
        );
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (openFrame) cancelAnimationFrame(openFrame);
      if (visibleFrame) cancelAnimationFrame(visibleFrame);
    };
  }, []);

  const close = useCallback((value: Consent) => {
    writeConsent(value);
    setVisible(false);
    setTimeout(() => setOpen(false), 400);
  }, []);

  if (!open) return null;

  return (
    <div className={`${styles.bar} ${visible ? styles.barVisible : ""}`}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Používáme cookies nezbytné pro fungování webu a — s vaším souhlasem —
          také analytické cookies, které nám pomáhají web zlepšovat. Více v{" "}
          <Link href="/zasady#cookies" className={styles.link}>
            zásadách používání cookies
          </Link>
          .
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.decline}
            onClick={() => close("necessary")}
          >
            Jen nezbytné
          </button>
          <button
            type="button"
            className={styles.accept}
            onClick={() => close("all")}
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
