"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  /** "home" — kotvy sekcí na domovské stránce; "sub" — Domů/Novinky/Vynálezy */
  variant?: "home" | "sub";
  /** Aktivní položka navigace (zvýrazněná akcentem — v nav i menu overlay). */
  active?: "novinky" | "vynalezy" | "zapoj";
  /** Cíl tlačítka „Chci se zapojit" — stránka Zapoj se odkazuje na #cesty. */
  ctaHref?: string;
};

const HOME_NAV = [
  { href: "#jak", label: "Jak to funguje", key: "jak" },
  { href: "#program", label: "O programu", key: "program" },
  { href: "#vynalezy", label: "Vynálezy", key: "vynalezy" },
  { href: "#novinky", label: "Novinky", key: "novinky" },
  { href: "#partneri", label: "Partneři", key: "partneri" },
  { href: "#kontakt", label: "Kontakt", key: "kontakt" },
];

export default function Header({
  variant = "home",
  active,
  ctaHref = "/zapoj-se",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const overlayLinks =
    variant === "home"
      ? [
          ...HOME_NAV,
          { href: "/zapoj-se", label: "Zapoj se", key: "zapoj" },
        ]
      : [
          { href: "/", label: "Domů", key: "domu" },
          { href: "/novinky", label: "Novinky", key: "novinky" },
          { href: "/vynalezy", label: "Vynálezy", key: "vynalezy" },
          { href: "/zapoj-se", label: "Zapoj se", key: "zapoj" },
        ];

  return (
    <>
      <header className={styles.header}>
        <Link href={variant === "home" ? "#top" : "/"} className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/mymachine-czechia-white.png"
            alt="MyMachine Czechia"
            style={{
              height: variant === "home" ? 38 : 36,
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        {variant === "home" ? (
          <nav className={styles.nav} style={{ gap: 24 }}>
            {HOME_NAV.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>
        ) : (
          <nav className={styles.nav} style={{ gap: 22 }}>
            <Link href="/" className={styles.navLink}>
              Domů
            </Link>
            <Link
              href="/novinky"
              className={active === "novinky" ? styles.navLinkActive : styles.navLink}
            >
              Novinky
            </Link>
            <Link
              href="/vynalezy"
              className={active === "vynalezy" ? styles.navLinkActive : styles.navLink}
            >
              Vynálezy
            </Link>
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href={ctaHref} className={styles.cta}>
            Chci se zapojit
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            Menu
            <span className={styles.menuIcon}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Hlavní menu"
        >
          <div className={styles.overlayTop}>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/brand/mymachine-czechia-white.png"
                alt="MyMachine Czechia"
                style={{ height: 38, width: "auto", display: "block" }}
              />
            </span>
            <button type="button" onClick={closeMenu} className={styles.closeBtn}>
              Zavřít ✕
            </button>
          </div>
          <nav className={styles.overlayNav}>
            {overlayLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={styles.overlayLink}
                style={item.key === active ? { color: "#cbcd15" } : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span className={styles.overlayTag}>#otevřisemožnoSTEM</span>
        </div>
      )}
    </>
  );
}
