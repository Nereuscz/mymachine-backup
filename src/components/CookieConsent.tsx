"use client";

import { useCallback, useEffect, useState } from "react";
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
    if (!readConsent()) {
      setOpen(true);
      // Vstupní animace až po prvním vykreslení (translateY 120% → 0).
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
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
    return () => document.removeEventListener("click", onClick);
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
          <a href="/zasady#cookies" className={styles.link}>
            zásadách používání cookies
          </a>
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
