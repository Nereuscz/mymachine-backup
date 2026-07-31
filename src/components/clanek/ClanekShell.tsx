"use client";

import type { ReactNode } from "react";
import ReadingProgress from "./ReadingProgress";

type ClanekShellProps = {
  /** Třída wrapperu s CSS proměnnými obou barevných variant (page.module.css). */
  className: string;
  children: ReactNode;
};

/**
 * Klientský obal detailu článku doplňuje indikátor průběhu čtení.
 * Detail používá jednotnou tmavou variantu.
 */
export default function ClanekShell({ className, children }: ClanekShellProps) {
  return (
    <div className={className} data-v="A">
      <ReadingProgress />
      {children}
    </div>
  );
}
