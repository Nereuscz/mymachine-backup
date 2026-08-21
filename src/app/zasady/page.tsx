import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Zásady & ochrana údajů — MyMachine Czechia",
  description:
    "Jak nakládáme s osobními údaji a cookies na webu MyMachine Czechia.",
};

/** Stránka Zásady & ochrana údajů — převedeno 1:1 ze Zasady.dc.html. */
export default function ZasadyPage() {
  return (
    <div className={styles.page}>
      <Header variant="sub" />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Právní informace</span>
          <h1 className={styles.heroTitle}>Zásady &amp; ochrana údajů</h1>
          <p className={styles.heroLead}>
            Jak nakládáme s osobními údaji a cookies na webu MyMachine Czechia.
            Poslední aktualizace: srpen 2026.
          </p>
        </div>
      </section>

      {/* TĚLO */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {/* 1. OCHRANA OSOBNÍCH ÚDAJŮ */}
          <div id="soukromi" className={styles.section}>
            <span className={styles.partEyebrow}>Část 1</span>
            <h2 className={styles.heading}>Ochrana osobních údajů</h2>
            <p className={styles.text}>
              Tento dokument upravuje zpracování osobních údajů v rámci programu
              MyMachine.
            </p>

            <h3 className={styles.subheading}>Správce údajů</h3>
            <p className={styles.text}>
              Správcem osobních údajů je JINTEK, z. ú., se sídlem Křížkovského
              554/12, Pisárky, 603 00 Brno, zapsaný v rejstříku ústavů pod sp.
              zn. U 420 vedenou u Krajského soudu v Brně, Česká republika.
            </p>

            <h3 className={styles.subheading}>Jaké údaje zpracováváme</h3>
            <p className={styles.text}>
              V rámci programu můžeme zpracovávat následující osobní údaje:
            </p>
            <ul className={styles.list}>
              <li>jméno a příjmení, e-mailovou adresu a telefonní číslo,</li>
              <li>název školy nebo organizace a její adresu,</li>
              <li>název vysoké školy, fakulty, studijního oboru a ročník studia,</li>
              <li>název společnosti a pozici ve společnosti,</li>
              <li>fotografie z aktivit programu, pokud k tomu byl udělen souhlas.</li>
            </ul>

            <h3 className={styles.subheading}>Účel zpracování</h3>
            <p className={styles.text}>
              Údaje používáme pro realizaci vzdělávacího programu MyMachine,
              komunikaci s účastníky a pedagogy, dokumentaci aktivit programu a
              zasílání informací o programu.
            </p>

            <h3 className={styles.subheading}>Právní základ zpracování</h3>
            <p className={styles.text}>
              Zpracování osobních údajů je založeno na souhlasu subjektů údajů
              podle čl. 6 odst. 1 písm. a) GDPR a na oprávněném zájmu správce
              podle čl. 6 odst. 1 písm. f) GDPR.
            </p>

            <h3 className={styles.subheading}>Doba uchování</h3>
            <p className={styles.text}>
              Osobní údaje zpracováváme po dobu trvání programu a následně po
              dobu 3 let pro účely dokumentace a vyhodnocení efektivity programu.
            </p>

            <h3 className={styles.subheading}>Vaše práva</h3>
            <ul className={styles.list}>
              <li>právo na přístup k osobním údajům, opravu a výmaz,</li>
              <li>právo na omezení zpracování a přenositelnost údajů,</li>
              <li>právo vznést námitku a odvolat souhlas.</li>
            </ul>

            <h3 className={styles.subheading}>Kontakt</h3>
            <p className={styles.text}>
              V případě dotazů nás kontaktujte na{" "}
              <a
                href="mailto:dominika.franekova@futureshapers.cz"
                className={styles.mailLink}
              >
                dominika.franekova@futureshapers.cz
              </a>{" "}
              nebo na telefonním čísle +420 720 867 456.
            </p>

            <h3 className={styles.subheading}>Závěrečná ustanovení</h3>
            <p className={styles.text}>
              Tyto zásady mohou být aktualizovány. O případných změnách budete
              informováni prostřednictvím webových stránek.
            </p>
          </div>

          <div className={styles.divider} />

          {/* 2. COOKIES */}
          <div id="cookies" className={styles.section}>
            <span className={styles.partEyebrow}>Část 2</span>
            <h2 className={styles.heading}>Zásady používání cookies</h2>
            <p className={styles.text}>
              Cookies jsou malé soubory, které web ukládá do vašeho prohlížeče.
              Nezbytné cookies jsou nutné pro fungování webu a nevyžadují
              souhlas. Analytické cookies používáme jen s vaším souhlasem.
            </p>

            <h3 className={styles.subheading}>Nezbytné cookies</h3>
            <p className={styles.text}>
              Zajišťují základní funkce a zapamatují si vaši volbu ohledně
              souhlasu s cookies. Bez nich by web nefungoval správně.
            </p>

            <h3 className={styles.subheading}>Analytické cookies</h3>
            <p className={styles.text}>
              Pomáhají nám pochopit, jak je web používán, abychom jej mohli
              zlepšovat — např. [doplňte nástroj, např. Google Analytics /
              Plausible]. Aktivují se pouze po udělení souhlasu.
            </p>

            <h3 className={styles.subheading}>Správa souhlasu</h3>
            <p className={styles.textSpaced}>
              Svůj souhlas s cookies můžete kdykoli změnit nebo odvolat.
            </p>
            {/* Otevře globální cookie lištu (delegovaný listener v CookieConsent) */}
            <button type="button" data-cookie-settings className={styles.cookieBtn}>
              Nastavení cookies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
