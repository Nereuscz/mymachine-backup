"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "sending"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ type: "sending", message: "Odesíláme zprávu…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Zprávu se nepodařilo odeslat.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Děkujeme. Zpráva byla odeslána a brzy se vám ozveme.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.",
      });
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.twoCol}>
        <label className={styles.field}>
          <span className={styles.label}>Jméno *</span>
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="Jan"
            minLength={2}
            maxLength={80}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Příjmení *</span>
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            placeholder="Novák"
            minLength={2}
            maxLength={80}
            required
            className={styles.input}
          />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>E-mailová adresa *</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="jan.novak@email.cz"
          maxLength={160}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Název organizace (nepovinné)</span>
        <input
          type="text"
          name="organization"
          autoComplete="organization"
          placeholder="Základní škola…"
          maxLength={160}
          className={styles.input}
        />
      </label>
      <label className={styles.honeypot} aria-hidden="true" hidden>
        Webová stránka
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Vzkaz *</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Napište nám, s čím vám můžeme pomoci…"
          minLength={10}
          maxLength={3000}
          required
          className={styles.textarea}
        />
      </label>
      <p className={styles.privacyNote}>
        Odesláním souhlasíte se zpracováním údajů za účelem vyřízení zprávy. Více
        v <Link href="/zasady#soukromi">zásadách ochrany osobních údajů</Link>.
      </p>
      <button
        type="submit"
        className={styles.submit}
        disabled={status.type === "sending"}
      >
        {status.type === "sending" ? "Odesílám…" : "Odeslat zprávu"}
      </button>
      {status.type !== "idle" && (
        <p
          className={`${styles.status} ${
            status.type === "error" ? styles.statusError : styles.statusSuccess
          }`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
