"use client";

import type { CSSProperties } from "react";

export type PageVariant = "A" | "B";

/** Styl segmentového tlačítka — přepis funkce seg() z návrhu. */
const seg = (active: boolean): CSSProperties => ({
  appearance: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: "var(--font-wide)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontSize: 10,
  lineHeight: 1,
  padding: "8px 14px",
  borderRadius: 999,
  background: active ? "#cbcd15" : "transparent",
  color: active ? "#0c0c0c" : "rgba(255,255,255,0.85)",
});

type StyleSwitcherProps = {
  variant: PageVariant;
  onChange: (variant: PageVariant) => void;
};

/**
 * Plovoucí přepínač světlé/tmavé varianty stránky (vpravo dole) —
 * 1:1 dle Clanek.dc.html; "B" = světlý styl, "A" = tmavý.
 */
export default function StyleSwitcher({ variant, onChange }: StyleSwitcherProps) {
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(12,12,12,0.9)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 999,
        padding: "7px 9px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-wide)",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: 9,
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.55)",
          paddingLeft: 6,
        }}
      >
        Styl
      </span>
      <button type="button" onClick={() => onChange("B")} style={seg(variant === "B")}>
        Světlý
      </button>
      <button type="button" onClick={() => onChange("A")} style={seg(variant === "A")}>
        Tmavý
      </button>
    </div>
  );
}
