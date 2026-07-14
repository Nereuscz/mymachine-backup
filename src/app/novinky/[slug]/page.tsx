import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import ClanekShell from "@/components/clanek/ClanekShell";
import { articles, getArticle, type ArticleBlock } from "@/content/articles";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Článek nenalezen — MyMachine Czechia" };
  }
  return {
    title: `${article.title} — MyMachine Czechia`,
    description: article.lead,
    openGraph: {
      title: article.title,
      description: article.lead,
      type: "article",
      publishedTime: article.dateISO,
      images: [article.hero.src],
    },
  };
}

/** Vykreslí jeden blok strukturovaného obsahu článku. */
function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className={
            block.dropCap ? `${styles.dropFirst} ${styles.paragraph}` : styles.paragraph
          }
        >
          {block.text}
        </p>
      );
    case "heading":
      // Mezititulek má v návrhu vždy krátkou akcentní linku nad sebou
      return (
        <div key={index}>
          <div className={styles.divider} />
          <h2 className={styles.heading}>{block.text}</h2>
        </div>
      );
    case "quote":
      return (
        <blockquote key={index} className={styles.quote}>
          <span className={styles.quoteMark}>“</span>
          <p className={styles.quoteText}>{block.text}</p>
          <span className={styles.quoteAuthor}>{block.author}</span>
        </blockquote>
      );
    case "image":
      return (
        <figure key={index} className={styles.figure}>
          <ImageSlot
            src={block.src}
            alt={block.alt}
            radius={16}
            height="auto"
            style={{ aspectRatio: "3 / 2" }}
          />
          <figcaption className={styles.caption}>{block.caption}</figcaption>
        </figure>
      );
  }
}

export default async function ClanekPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <ClanekShell className={styles.page}>
      {/* Hlavička je v návrhu vždy tmavá — scope přebíjí variantní proměnné */}
      <div className={styles.headerScope}>
        <Header variant="sub" active="novinky" />
      </div>

      {/* Hlavička článku — vzdušná, centrovaná */}
      <section className={styles.articleHeader}>
        <div className={styles.articleHeaderInner}>
          <div className={styles.metaRow}>
            <span className={styles.categoryPill}>{article.category}</span>
            <span className={styles.metaDate}>
              {article.date} · {article.readingTime}
            </span>
          </div>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.lead}>{article.lead}</p>
          <div className={styles.authorRow}>
            <span className={styles.authorAvatar}>{article.author.initials}</span>
            <div className={styles.authorMeta}>
              <div className={styles.authorName}>{article.author.name}</div>
              <div className={styles.authorRole}>{article.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero foto */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <ImageSlot
            src={article.hero.src}
            alt={article.hero.alt}
            radius={20}
            height="auto"
            style={{ aspectRatio: "3 / 2" }}
          />
          <p className={styles.caption}>{article.hero.caption}</p>
        </div>
      </section>

      {/* Pás klíčových čísel */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          <div className={styles.statStrip}>
            {article.stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tělo článku — úzká sazba, hodně vzduchu */}
      <article className={styles.articleBody}>
        <div className={styles.articleBodyInner}>
          {article.blocks.map(renderBlock)}

          {/* Štítky + sdílení */}
          <div className={styles.tagsRow}>
            <div className={styles.tags}>
              {article.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.share}>
              <span className={styles.shareLabel}>Sdílet</span>
              <a href="#" className={styles.shareLink}>
                Facebook
              </a>
              <a href="#" className={styles.shareLink}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Další příběhy */}
      <section className={styles.related}>
        <div className={styles.relatedInner}>
          <h2 className={styles.relatedTitle}>Další příběhy</h2>
          <div className={styles.relatedGrid}>
            {article.related.map((post) => (
              <a key={post.title} href={post.href} className={styles.relatedCard}>
                <ImageSlot src={post.image} alt={post.title} height={160} />
                <div className={styles.relatedBody}>
                  <span className={styles.relatedDate}>{post.date}</span>
                  <h3 className={styles.relatedHeading}>{post.title}</h3>
                  <span className={styles.relatedMore}>Číst článek</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </ClanekShell>
  );
}
