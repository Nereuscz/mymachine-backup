"use client";

import styles from "./ContactForm.module.css";

/**
 * Kontaktní formulář — v návrhu čistě vizuální (preventDefault, nikam
 * neodesílá). Při nasazení napojit na backend / e-mail a doplnit validaci.
 */
export default function ContactForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.twoCol}>
        <label className={styles.field}>
          <span className={styles.label}>Jméno *</span>
          <input type="text" placeholder="Jan" className={styles.input} />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Příjmení *</span>
          <input type="text" placeholder="Novák" className={styles.input} />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>E-mailová adresa *</span>
        <input
          type="email"
          placeholder="jan.novak@email.cz"
          className={styles.input}
        />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Název organizace (nepovinné)</span>
        <input
          type="text"
          placeholder="Základní škola…"
          className={styles.input}
        />
      </label>
      <label className={styles.checkboxRow}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.checkboxText}>
          Ano, chci přihlásit svou školu nebo žáky do programu MyMachine.
        </span>
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Tvůj vzkaz</span>
        <textarea rows={4} placeholder="Napiš nám…" className={styles.textarea} />
      </label>
      <button type="submit" className={styles.submit}>
        Odeslat zprávu
      </button>
    </form>
  );
}
