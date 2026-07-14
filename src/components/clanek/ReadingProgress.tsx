"use client";

import { useEffect, useState } from "react";

/**
 * Ukazatel průběhu čtení — fixní 3px lišta u horní hrany okna,
 * jejíž šířka odpovídá poloze scrollu (1:1 dle Clanek.dc.html).
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      const p = Math.max(0, Math.min(1, (h.scrollTop || window.scrollY) / max));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 60,
        background: "transparent",
        pointerEvents: "none",
      }}
      aria-hidden
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background: "var(--accent)",
          boxShadow: "var(--glow)",
          transition: "width .08s linear",
        }}
      />
    </div>
  );
}
