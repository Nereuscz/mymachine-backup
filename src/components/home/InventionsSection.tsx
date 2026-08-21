import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import type { Invention } from "@/content/inventions";
import styles from "./InventionsSection.module.css";

/** Stručný výběr vynálezů aktuálního ročníku na domovské stránce. */
export default function InventionsSection({
  inventions,
}: {
  inventions: Invention[];
}) {
  return (
    <section id="vynalezy" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Ročník 2025/2026</span>
            <h2 className={`display ${styles.heading}`}>Vynálezy</h2>
          </div>
          <p className={styles.headlineNote}>
            Výběr dětských nápadů, které letos díky společné práci škol,
            vysokoškoláků a firem ožily jako skutečné prototypy.
          </p>
        </div>

        <div className={styles.grid}>
          {inventions.map((inv, index) => (
            <article key={inv.title} className={styles.card}>
              <div className={styles.media}>
                <ImageSlot
                  src={inv.image}
                  alt={inv.imageAlt}
                  height={240}
                  radius={0}
                />
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardEyebrow}>Vynález letošního ročníku</span>
                <h3 className={styles.cardTitle}>{inv.title}</h3>
                <p className={styles.cardText}>{inv.description}</p>
                <p className={styles.patron}>
                  <span>Patron</span>
                  {inv.patron}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.allWrap}>
          <Link href="/vynalezy" className={styles.allBtn}>
            Prohlédnout všechny vynálezy
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
