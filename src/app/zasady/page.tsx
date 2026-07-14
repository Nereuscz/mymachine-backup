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
            Poslední aktualizace: červenec 2026.
          </p>
        </div>
      </section>

      {/* TĚLO */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {/* Upozornění na vzorové znění */}
          <div className={styles.note}>
            <span className={styles.noteDot} />
            <p className={styles.noteText}>
              Vzorové znění pro web. Před zveřejněním nechte text schválit a
              doplňte údaje v <strong>hranatých závorkách</strong> (IČO, sídlo,
              konkrétní analytické nástroje a doby uchování).
            </p>
          </div>

          {/* 1. OCHRANA OSOBNÍCH ÚDAJŮ */}
          <div id="soukromi" className={styles.section}>
            <span className={styles.partEyebrow}>Část 1</span>
            <h2 className={styles.heading}>Ochrana osobních údajů</h2>
            <p className={styles.text}>
              Osobní údaje zpracováváme v souladu s nařízením GDPR (EU)
              2016/679 a zákonem č. 110/2019 Sb. Zpracováváme jen údaje, které
              jsou pro daný účel nezbytné, a chráníme je před zneužitím.
            </p>

            <h3 className={styles.subheading}>Správce údajů</h3>
            <p className={styles.text}>
              JINTEK, z. ú. — provozovatel programu MyMachine Czechia, IČO:
              [doplňte], se sídlem [doplňte], Brno. Kontakt:{" "}
              <a href="mailto:franekova@btym.cz" className={styles.mailLink}>
                franekova@btym.cz
              </a>
              , +420 720 867 458.
            </p>

            <h3 className={styles.subheading}>Jaké údaje zpracováváme</h3>
            <p className={styles.text}>
              Údaje z kontaktních a přihlašovacích formulářů (jméno, e‑mail,
              telefon, škola nebo firma) a technické údaje o návštěvě webu
              (cookies, IP adresa) v rozsahu nezbytném pro provoz a jeho
              vyhodnocení.
            </p>

            <h3 className={styles.subheading}>Účel a právní základ</h3>
            <p className={styles.text}>
              Vyřízení poptávky a přihlášek do programu (plnění smlouvy či
              opatření před uzavřením smlouvy), zasílání informací o programu
              (oprávněný zájem nebo souhlas) a analytika webu (souhlas s
              cookies).
            </p>

            <h3 className={styles.subheading}>Doba uchování</h3>
            <p className={styles.text}>
              Údaje uchováváme po dobu nezbytnou k danému účelu, nejdéle
              [doplňte] let od poslední interakce, nebo do odvolání souhlasu.
            </p>

            <h3 className={styles.subheading}>Vaše práva</h3>
            <p className={styles.text}>
              Máte právo na přístup k údajům, jejich opravu či výmaz, omezení
              zpracování, přenositelnost a vznesení námitky. Souhlas můžete
              kdykoli odvolat. Máte také právo podat stížnost u Úřadu pro
              ochranu osobních údajů (uoou.cz).
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
