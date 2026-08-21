import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

// Obviously (OHno Type Co.) — komerční licencované písmo, viz README handoffu.
const fontDisplay = localFont({
  src: "../fonts/Obviously-CondensedBold.otf",
  weight: "700",
  variable: "--font-display",
  fallback: ["Arial Narrow", "sans-serif"],
});

const fontWide = localFont({
  src: "../fonts/Obviously-WideBold.otf",
  weight: "700",
  variable: "--font-wide",
  fallback: ["Arial Black", "sans-serif"],
});

const fontBody = localFont({
  src: "../fonts/Obviously-Medium.otf",
  weight: "500",
  variable: "--font-body",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

/**
 * Základ pro absolutní URL v metadatech (OG / canonical).
 * Priorita: vlastní NEXT_PUBLIC_SITE_URL → veřejná doména z Railway →
 * lokální fallback. Díky tomu se resolvují sociální náhledy i po nasazení.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MyMachine Czechia — Dětský sen. Skutečný vynález.",
  description:
    "Děti vymyslí vynález svých snů. Studenti a firmy ho společně postaví. Nápad se mění v realitu — a děti zjistí, že dokážou cokoliv.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontWide.variable} ${fontBody.variable}`}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
