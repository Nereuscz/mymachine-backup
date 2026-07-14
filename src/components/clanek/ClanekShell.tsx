"use client";

import { useState, type ReactNode } from "react";
import ReadingProgress from "./ReadingProgress";
import StyleSwitcher, { type PageVariant } from "./StyleSwitcher";

type ClanekShellProps = {
  /** Třída wrapperu s CSS proměnnými obou barevných variant (page.module.css). */
  className: string;
  children: ReactNode;
};

/**
 * Klientský obal detailu článku — drží stav světlé/tmavé varianty
 * a přepíná ji atributem data-v na wrapperu ("B" = světlá výchozí,
 * "A" = tmavá), přesně jako stav `v` v Clanek.dc.html.
 * Obsah stránky zůstává serverový a přichází jako children.
 */
export default function ClanekShell({ className, children }: ClanekShellProps) {
  const [variant, setVariant] = useState<PageVariant>("B");

  return (
    <div className={className} data-v={variant}>
      <ReadingProgress />
      {children}
      <StyleSwitcher variant={variant} onChange={setVariant} />
    </div>
  );
}
