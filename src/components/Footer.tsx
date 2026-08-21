import Link from "next/link";
import styles from "./Footer.module.css";

type FooterProps = {
  /** Spodní padding — domovská stránka má 88px, podstránky 56px. */
  bottomPad?: number;
};

export default function Footer({ bottomPad = 56 }: FooterProps) {
  return (
    <footer className={styles.footer} style={{ paddingBottom: bottomPad }}>
      <div className={styles.grid}>
        <div>
          <div style={{ marginBottom: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/brand/mymachine-czechia-white.png"
              alt="MyMachine Czechia"
              style={{ height: 40, width: "auto", display: "block" }}
            />
          </div>
          <p className={styles.about}>
            MyMachine je mezinárodní vzdělávací program, který propojuje žáky
            základních škol, studenty středních a vysokých škol a firmy.
          </p>
          <p className={styles.tag}>#otevřisemožnoSTEM</p>
        </div>
        <div>
          <span className={styles.colTitle}>Kontakt</span>
          <p className={styles.contact}>
            Dominika Franeková
            <br />
            dominika.franekova@futureshapers.cz
            <br />
            +420 720 867 456
            <br />
            Brno, Česká republika
          </p>
        </div>
        <div>
          <span className={styles.colTitle}>Odkazy</span>
          <div className={styles.links}>
            <Link href="/#jak" className={styles.link}>
              Jak to funguje
            </Link>
            <Link href="/#program" className={styles.link}>
              O programu
            </Link>
            <Link href="/#partneri" className={styles.link}>
              Partneři
            </Link>
            <Link href="/novinky" className={styles.link}>
              Novinky
            </Link>
            <Link href="/vynalezy" className={styles.link}>
              Vynálezy
            </Link>
            <Link href="/zapoj-se" className={styles.link}>
              Zapoj se
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          Copyright 2026 JINTEK, z. ú. | All Rights Reserved.
        </span>
        <div className={styles.bottomLinks}>
          <Link href="/zasady#soukromi" className={styles.bottomLink}>
            Ochrana osobních údajů
          </Link>
          <Link href="/zasady#cookies" className={styles.bottomLink}>
            Zásady cookies
          </Link>
          <button type="button" data-cookie-settings className={styles.cookieBtn}>
            Nastavení cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
