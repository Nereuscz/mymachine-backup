import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import type { NewsCard } from "@/content/news";
import styles from "./NewsSection.module.css";

export default function NewsSection({ news }: { news: NewsCard[] }) {
  return (
    <section id="novinky" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Co se děje</span>
            <h2 className={`display ${styles.heading}`}>Novinky</h2>
          </div>
          <p className={styles.headlineNote}>Tři nejnovější příběhy z programu</p>
        </div>

        <div className={styles.grid}>
          {news.map((item) => (
            <article key={item.title} className={styles.card}>
              <ImageSlot src={item.image} alt={item.title} height={200} radius={0} />
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.badge}>{item.badge}</span>
                  <time dateTime={item.dateISO} className={styles.date}>
                    {item.date}
                  </time>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.excerpt}</p>
                <Link href={item.href} className={styles.readMore}>
                  Číst dál
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.allWrap}>
          <Link href="/novinky" className={styles.allBtn}>
            Zobrazit všechny články
          </Link>
        </div>
      </div>
    </section>
  );
}
