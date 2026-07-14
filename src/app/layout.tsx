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

export const metadata: Metadata = {
  title: "MyMachine Czechia — Dětský sen. Skutečný stroj.",
  description:
    "Děti vymyslí stroj svých snů. Studenti a firmy ho společně postaví. Nápad se mění v realitu — a děti zjistí, že dokážou cokoliv.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${fontDisplay.variable} ${fontWide.variable} ${fontBody.variable}`}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
