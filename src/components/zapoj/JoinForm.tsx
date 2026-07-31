"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import styles from "./JoinForm.module.css";

export type JoinRole = "skola" | "student" | "firma";

type FieldConfig = {
  name: string;
  label: string;
  kind: "input" | "select" | "textarea";
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  options?: string[];
  fullWidth?: boolean;
};

type CheckGroupConfig = {
  name: string;
  legend: string;
  hint: string;
  options: string[];
};

type FormConfig = {
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  emailSubject: string;
  fields: FieldConfig[];
  checkGroup?: CheckGroupConfig;
};

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "error" | "ready"; message: string };

const FORM_CONFIGS: Record<JoinRole, FormConfig> = {
  skola: {
    eyebrow: "Nezávazný zájem školy",
    title: "Přihlaste svou školu",
    description:
      "Napište nám základní informace o škole a představě zapojení. Ozveme se vám a společně vybereme vhodnou cestu pro vaše žáky.",
    submitLabel: "Připravit přihlášku školy",
    emailSubject: "Zájem školy o MyMachine Czechia",
    fields: [
      {
        name: "organization",
        label: "Název školy",
        kind: "input",
        type: "text",
        autoComplete: "organization",
        placeholder: "Základní škola…",
        required: true,
        minLength: 2,
        maxLength: 160,
        fullWidth: true,
      },
      {
        name: "schoolType",
        label: "Typ školy",
        kind: "select",
        required: true,
        options: ["Základní škola", "Střední škola", "ZŠ a SŠ", "Jiný typ školy"],
      },
      {
        name: "city",
        label: "Město / obec",
        kind: "input",
        type: "text",
        autoComplete: "address-level2",
        placeholder: "Brno",
        required: true,
        minLength: 2,
        maxLength: 100,
      },
      {
        name: "contactName",
        label: "Kontaktní osoba",
        kind: "input",
        type: "text",
        autoComplete: "name",
        placeholder: "Jméno a příjmení",
        required: true,
        minLength: 3,
        maxLength: 120,
      },
      {
        name: "position",
        label: "Role ve škole",
        kind: "input",
        type: "text",
        autoComplete: "organization-title",
        placeholder: "Učitelka fyziky, ředitel…",
        maxLength: 120,
      },
      {
        name: "email",
        label: "E-mail",
        kind: "input",
        type: "email",
        autoComplete: "email",
        placeholder: "jmeno@skola.cz",
        required: true,
        maxLength: 160,
      },
      {
        name: "phone",
        label: "Telefon",
        kind: "input",
        type: "tel",
        autoComplete: "tel",
        placeholder: "+420 777 000 000",
        maxLength: 40,
      },
      {
        name: "involvement",
        label: "Jak se chcete zapojit?",
        kind: "select",
        required: true,
        options: [
          "ZŠ — vymýšlení dětských vynálezů",
          "SŠ — stavba funkčního prototypu",
          "Chceme probrat obě možnosti",
          "Zatím nevíme",
        ],
      },
      {
        name: "groupSize",
        label: "Předpokládaný počet tříd nebo žáků",
        kind: "input",
        type: "text",
        placeholder: "Např. 2 třídy / 45 žáků",
        maxLength: 100,
      },
      {
        name: "message",
        label: "Co bychom o vaší škole měli vědět?",
        kind: "textarea",
        placeholder:
          "Napište nám svou představu, zkušenosti s projektovou výukou nebo otázky…",
        required: true,
        minLength: 20,
        maxLength: 2000,
        fullWidth: true,
      },
    ],
  },
  student: {
    eyebrow: "Nezávazný zájem studenta",
    title: "Přidej se k týmu",
    description:
      "Pověz nám, co studuješ a v čem by ses chtěl nebo chtěla zapojit. Nemusíš mít hotový tým ani technický obor.",
    submitLabel: "Připravit studentskou přihlášku",
    emailSubject: "Zájem vysokoškoláka o MyMachine Czechia",
    fields: [
      {
        name: "firstName",
        label: "Jméno",
        kind: "input",
        type: "text",
        autoComplete: "given-name",
        placeholder: "Jan",
        required: true,
        minLength: 2,
        maxLength: 80,
      },
      {
        name: "lastName",
        label: "Příjmení",
        kind: "input",
        type: "text",
        autoComplete: "family-name",
        placeholder: "Novák",
        required: true,
        minLength: 2,
        maxLength: 80,
      },
      {
        name: "email",
        label: "E-mail",
        kind: "input",
        type: "email",
        autoComplete: "email",
        placeholder: "jmeno@email.cz",
        required: true,
        maxLength: 160,
      },
      {
        name: "phone",
        label: "Telefon",
        kind: "input",
        type: "tel",
        autoComplete: "tel",
        placeholder: "+420 777 000 000",
        maxLength: 40,
      },
      {
        name: "university",
        label: "Vysoká škola",
        kind: "input",
        type: "text",
        autoComplete: "organization",
        placeholder: "VUT v Brně",
        required: true,
        minLength: 2,
        maxLength: 160,
      },
      {
        name: "studyProgram",
        label: "Fakulta a studijní obor",
        kind: "input",
        type: "text",
        placeholder: "Fakulta strojního inženýrství…",
        required: true,
        minLength: 2,
        maxLength: 180,
      },
      {
        name: "studyYear",
        label: "Ročník studia",
        kind: "select",
        required: true,
        options: [
          "1. ročník",
          "2. ročník",
          "3. ročník",
          "4. ročník",
          "5. a vyšší ročník",
          "Doktorské studium",
        ],
      },
      {
        name: "portfolio",
        label: "Portfolio nebo LinkedIn",
        kind: "input",
        type: "url",
        autoComplete: "url",
        placeholder: "https://…",
        maxLength: 300,
      },
      {
        name: "message",
        label: "Proč se chceš zapojit?",
        kind: "textarea",
        placeholder:
          "Co tě na MyMachine láká, co umíš nebo co by ses chtěl či chtěla naučit?",
        required: true,
        minLength: 20,
        maxLength: 2000,
        fullWidth: true,
      },
    ],
    checkGroup: {
      name: "teamAreas",
      legend: "V čem se chceš zapojit?",
      hint: "Vyber alespoň jednu možnost.",
      options: [
        "Technický návrh a konstrukce",
        "Výroba a prototypování",
        "Design a práce s uživatelem",
        "Elektronika nebo programování",
        "Organizace a komunikace",
        "Zatím nevím — rád/a se poradím",
      ],
    },
  },
  firma: {
    eyebrow: "Nezávazný zájem firmy",
    title: "Staňte se patronem",
    description:
      "Napište nám, jaké zkušenosti, technologie nebo podporu můžete nabídnout. Konkrétní rozsah patronství nastavíme společně.",
    submitLabel: "Připravit zájem firmy",
    emailSubject: "Zájem firmy o patronství MyMachine Czechia",
    fields: [
      {
        name: "organization",
        label: "Název firmy",
        kind: "input",
        type: "text",
        autoComplete: "organization",
        placeholder: "Firma s.r.o.",
        required: true,
        minLength: 2,
        maxLength: 160,
      },
      {
        name: "companyId",
        label: "IČO",
        kind: "input",
        type: "text",
        placeholder: "12345678",
        maxLength: 20,
      },
      {
        name: "contactName",
        label: "Kontaktní osoba",
        kind: "input",
        type: "text",
        autoComplete: "name",
        placeholder: "Jméno a příjmení",
        required: true,
        minLength: 3,
        maxLength: 120,
      },
      {
        name: "position",
        label: "Pozice ve firmě",
        kind: "input",
        type: "text",
        autoComplete: "organization-title",
        placeholder: "HR, CSR, technický ředitel…",
        required: true,
        minLength: 2,
        maxLength: 120,
      },
      {
        name: "email",
        label: "E-mail",
        kind: "input",
        type: "email",
        autoComplete: "email",
        placeholder: "jmeno@firma.cz",
        required: true,
        maxLength: 160,
      },
      {
        name: "phone",
        label: "Telefon",
        kind: "input",
        type: "tel",
        autoComplete: "tel",
        placeholder: "+420 777 000 000",
        maxLength: 40,
      },
      {
        name: "website",
        label: "Web firmy",
        kind: "input",
        type: "url",
        autoComplete: "url",
        placeholder: "https://…",
        maxLength: 300,
        fullWidth: true,
      },
      {
        name: "message",
        label: "Jak si představujete spolupráci?",
        kind: "textarea",
        placeholder:
          "Popište stručně své možnosti, zkušenosti nebo typ vynálezu, který by vás zajímal…",
        required: true,
        minLength: 20,
        maxLength: 2000,
        fullWidth: true,
      },
    ],
    checkGroup: {
      name: "supportAreas",
      legend: "Jak chcete projekt podpořit?",
      hint: "Vyberte alespoň jednu možnost.",
      options: [
        "Finanční patronství",
        "Materiál nebo komponenty",
        "Mentoři a odborné konzultace",
        "Výroba nebo prototypování",
        "Technologie, software nebo prostory",
        "Zatím nevíme — rádi se poradíme",
      ],
    },
  },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export default function JoinForm({ role }: { role: JoinRole }) {
  const config = FORM_CONFIGS[role];
  const formId = `formular-${role}`;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  function clearFieldError(name: string) {
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};

    config.fields.forEach((field) => {
      const value = String(formData.get(field.name) ?? "").trim();

      if (field.required && !value) {
        nextErrors[field.name] = "Vyplňte prosím toto pole.";
        return;
      }
      if (value && field.minLength && value.length < field.minLength) {
        nextErrors[field.name] = `Použijte alespoň ${field.minLength} znaků.`;
        return;
      }
      if (value && field.type === "email" && !EMAIL_PATTERN.test(value)) {
        nextErrors[field.name] = "Zadejte platnou e-mailovou adresu.";
        return;
      }
      if (value && field.type === "url" && !validateUrl(value)) {
        nextErrors[field.name] = "Zadejte úplnou adresu začínající http:// nebo https://.";
      }
    });

    if (config.checkGroup && formData.getAll(config.checkGroup.name).length === 0) {
      nextErrors[config.checkGroup.name] = "Vyberte alespoň jednu možnost.";
    }
    if (!formData.get("privacyConsent")) {
      nextErrors.privacyConsent = "Pro pokračování potvrďte souhlas se zpracováním údajů.";
    }

    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      setStatus({
        type: "error",
        message: "Některé údaje chybí nebo nejsou ve správném formátu.",
      });
      window.requestAnimationFrame(() => {
        form.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      });
      return;
    }

    setStatus({
      type: "ready",
      message:
        "Formulář je vyplněný správně. Odesílání zatím není aktivní, proto se žádná data neodeslala.",
    });
  }

  return (
    <section
      id={formId}
      className={styles.formSection}
      aria-labelledby={`${formId}-title`}
    >
      <div className={styles.formHead}>
        <div>
          <span className={styles.eyebrow}>{config.eyebrow}</span>
          <h3 id={`${formId}-title`} className={styles.formTitle}>
            {config.title}
          </h3>
        </div>
        <p className={styles.formDescription}>{config.description}</p>
      </div>

      <div className={styles.draftNotice} role="note">
        <strong>Pracovní verze formuláře</strong>
        <span>Data se zatím nikam neodesílají. Skutečné odeslání připojíme později.</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldGrid}>
          {config.fields.map((field) => {
            const inputId = `${role}-${field.name}`;
            const errorId = `${inputId}-error`;
            const fieldClass = field.fullWidth
              ? `${styles.field} ${styles.fieldFull}`
              : styles.field;

            return (
              <label key={field.name} htmlFor={inputId} className={fieldClass}>
                <span className={styles.label}>
                  {field.label}
                  {field.required && <span aria-hidden="true"> *</span>}
                </span>

                {field.kind === "select" ? (
                  <select
                    id={inputId}
                    name={field.name}
                    required={field.required}
                    defaultValue=""
                    className={`${styles.control} ${styles.select}`}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? errorId : undefined}
                    onChange={() => clearFieldError(field.name)}
                  >
                    <option value="" disabled>
                      Vyberte možnost
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.kind === "textarea" ? (
                  <textarea
                    id={inputId}
                    name={field.name}
                    rows={6}
                    required={field.required}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                    className={`${styles.control} ${styles.textarea}`}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? errorId : undefined}
                    onChange={() => clearFieldError(field.name)}
                  />
                ) : (
                  <input
                    id={inputId}
                    name={field.name}
                    type={field.type ?? "text"}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                    className={styles.control}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? errorId : undefined}
                    onChange={() => clearFieldError(field.name)}
                  />
                )}

                {errors[field.name] && (
                  <span id={errorId} className={styles.fieldError}>
                    {errors[field.name]}
                  </span>
                )}
              </label>
            );
          })}
        </div>

        {config.checkGroup && (
          <fieldset
            className={styles.checkFieldset}
            aria-invalid={Boolean(errors[config.checkGroup.name])}
            aria-describedby={
              errors[config.checkGroup.name]
                ? `${role}-${config.checkGroup.name}-error`
                : `${role}-${config.checkGroup.name}-hint`
            }
          >
            <legend className={styles.label}>{config.checkGroup.legend} *</legend>
            <p id={`${role}-${config.checkGroup.name}-hint`} className={styles.fieldHint}>
              {config.checkGroup.hint}
            </p>
            <div className={styles.checkGrid}>
              {config.checkGroup.options.map((option) => (
                <label key={option} className={styles.checkOption}>
                  <input
                    type="checkbox"
                    name={config.checkGroup?.name}
                    value={option}
                    onChange={() => clearFieldError(config.checkGroup?.name ?? "")}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {errors[config.checkGroup.name] && (
              <p
                id={`${role}-${config.checkGroup.name}-error`}
                className={styles.fieldError}
              >
                {errors[config.checkGroup.name]}
              </p>
            )}
          </fieldset>
        )}

        <label className={styles.consent}>
          <input
            type="checkbox"
            name="privacyConsent"
            aria-invalid={Boolean(errors.privacyConsent)}
            aria-describedby={errors.privacyConsent ? `${role}-consent-error` : undefined}
            onChange={() => clearFieldError("privacyConsent")}
          />
          <span>
            Souhlasím se zpracováním osobních údajů za účelem vyřízení mého zájmu. Více
            v <Link href="/zasady#soukromi">zásadách ochrany osobních údajů</Link>.
          </span>
        </label>
        {errors.privacyConsent && (
          <p id={`${role}-consent-error`} className={styles.fieldError}>
            {errors.privacyConsent}
          </p>
        )}

        <div className={styles.formFooter}>
          <button type="submit" className={styles.submit}>
            {config.submitLabel}
          </button>
          <span className={styles.requiredNote}>* Povinná pole</span>
        </div>

        {status.type !== "idle" && (
          <div
            className={`${styles.status} ${
              status.type === "error" ? styles.statusError : styles.statusReady
            }`}
            role={status.type === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            <p>{status.message}</p>
            {status.type === "ready" && (
              <a
                href={`mailto:franekova@btym.cz?subject=${encodeURIComponent(config.emailSubject)}`}
              >
                Prozatím poslat zájem e-mailem
              </a>
            )}
          </div>
        )}
      </form>
    </section>
  );
}
