import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Link from "next/link";
import InventionsSection from "@/components/home/InventionsSection";
import NewsSection from "@/components/home/NewsSection";
import SchoolsMap from "@/components/home/SchoolsMap";
import ContactForm from "@/components/home/ContactForm";
import { featuredInventions } from "@/content/inventions";
import { homeNews } from "@/content/news";
import {
  mainPartner,
  institutions,
  patrons,
  projectPartners,
  type Partner,
} from "@/content/partners";
import styles from "./page.module.css";

const ecosystemPartners = [...institutions, ...projectPartners];

const phases = [
  {
    badge: "Fáze 01",
    icon: "/assets/icons/stem-science-green.svg",
    title: "Dětský sen",
    text: "Žák základní školy nakreslí stroj, který by chtěl mít. Žádné hranice, žádné „to nejde“. Jen čistá fantazie.",
  },
  {
    badge: "Fáze 02",
    icon: "/assets/icons/stem-engineering-green.svg",
    title: "Návrh řešení",
    text: "Vysokoškoláci promění dětský nápad v konkrétní technický návrh. Z čmáranice vzniká plán.",
  },
  {
    badge: "Fáze 03",
    icon: "/assets/icons/stem-technology-green.svg",
    title: "Stavba prototypu",
    text: "Středoškoláci a firmy postaví funkční prototyp. Sen se stává strojem, který si můžeš osahat.",
  },
];

const audiences = [
  {
    number: "01",
    label: "Základní a střední školy",
    title: "Pro školy",
    text: "Na základní škole dostanou děti prostor snít bez hranic. Na střední škole studenti promění vybrané nápady ve funkční prototypy.",
    benefit: "Kreativita, spolupráce a zkušenost, která přesahuje běžnou výuku.",
    href: "/zapoj-se#skola",
    cta: "Zapojit školu",
  },
  {
    number: "02",
    label: "Studenti vysokých škol",
    title: "Pro vysokoškoláky",
    text: "Vezmete dětskou skicu a v mezioborovém týmu z ní vytvoříte technický návrh, který se skutečně postaví.",
    benefit: "Reálný projekt do portfolia, praxe a spolupráce s odborníky.",
    href: "/zapoj-se#student",
    cta: "Přidat se k týmu",
  },
  {
    number: "03",
    label: "Firmy a odborní partneři",
    title: "Pro firmy",
    text: "Podpoříte konkrétní dětský vynález financemi, materiálem nebo zkušenostmi mentorů z vašich řad.",
    benefit: "Smysluplné partnerství, viditelný výsledek a kontakt s talenty.",
    href: "/zapoj-se#firma",
    cta: "Stát se patronem",
  },
];

function PartnerTile({ partner }: { partner: Partner }) {
  return (
    <div className={styles.tile}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={partner.src} alt={partner.alt} />
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Header variant="home" />

      {/* ============ HERO ============ */}
      <section id="top" className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/shape-orange.png" alt="" className={styles.heroShape} />
        <div className={styles.heroGrid}>
          <div>
            <span className="eyebrow">MyMachine Czechia</span>
            <h1 className={styles.heroTitle}>
              Dětský sen.
              <br />
              Skutečný stroj.
            </h1>
            <p className={styles.heroText}>
              Žáci základních škol vymyslí stroj svých snů. Vysokoškoláci ho
              navrhnou a studenti středních škol s firmami společně postaví.
              Děti tak zjistí, že jejich nápady mohou změnit svět.
            </p>
            <div className={styles.heroBtns}>
              <a href="#jak" className={styles.heroBtnWhite}>
                Zjistit víc
              </a>
              <a href="/zapoj-se" className={styles.heroBtnAccent}>
                Chci se zapojit
              </a>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <ImageSlot
              src="/assets/photos/hero.jpg"
              alt="Foto dětí při tvorbě"
              minHeight={420}
              radius={20}
            />
          </div>
        </div>
      </section>

      {/* ============ NÁBOR BANNER ============ */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerLead}>
            <span className={styles.bannerPulse} />
            <div>
              <span className={styles.bannerEyebrow}>
                Přihlašování otevřeno · ročník 2026/2027
              </span>
              <p className={styles.bannerTitle}>
                Startujeme v září — přihlaš se už teď přes léto
              </p>
              <p className={styles.bannerText}>
                [Placeholder — doplňte termín uzávěrky přihlášek.] Přes
                prázdniny sbíráme přihlášky škol, studentů i firem a naostro
                začínáme v září.
              </p>
            </div>
          </div>
          <a href="/zapoj-se" className={styles.bannerBtn}>
            Chci se zapojit
          </a>
        </div>
      </section>

      {/* ============ JAK TO FUNGUJE ============ */}
      <section id="jak" className={styles.how}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Tři fáze, jeden stroj</span>
            <h2 className={`display ${styles.h2}`}>Jak to funguje</h2>
          </div>
          <div className={styles.phaseGrid}>
            {phases.map((phase) => (
              <div key={phase.badge} className={styles.phaseCard}>
                <div className={styles.phaseTop}>
                  <span className={styles.phaseBadge}>{phase.badge}</span>
                  <span className={styles.phaseIcon}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={phase.icon} width={30} height={30} alt="" />
                  </span>
                </div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseText}>{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRO KOHO PROGRAM JE ============ */}
      <section className={styles.audiences} aria-labelledby="audiences-title">
        <div className="container">
          <div className={styles.audiencesHead}>
            <div>
              <span className="eyebrow">Tři cesty, jeden společný výsledek</span>
              <h2 id="audiences-title" className={`display ${styles.audiencesTitle}`}>
                Kde je vaše místo?
              </h2>
            </div>
            <p className={styles.audiencesLead}>
              MyMachine propojuje školy, vysokoškoláky a firmy v jednom
              celoročním projektu. Každý přináší něco jiného — a bez žádné z
              těchto rolí by dětský vynález nevznikl.
            </p>
          </div>

          <div className={styles.audiencesGrid}>
            {audiences.map((audience) => (
              <article key={audience.number} className={styles.audienceCard}>
                <div className={styles.audienceMeta}>
                  <span className={styles.audienceNumber}>{audience.number}</span>
                  <span className={styles.audienceLabel}>{audience.label}</span>
                </div>
                <h3 className={styles.audienceTitle}>{audience.title}</h3>
                <p className={styles.audienceText}>{audience.text}</p>
                <p className={styles.audienceBenefit}>{audience.benefit}</p>
                <Link href={audience.href} className={styles.audienceLink}>
                  {audience.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ O PROGRAMU ============ */}
      <section id="program" className={styles.program}>
        <div className="container">
          <h2 className={`display ${styles.programH2}`}>O programu</h2>
          <div className={`${styles.programRow} ${styles.programRowFirst}`}>
            <ImageSlot
              src="/assets/photos/drawing.jpg"
              alt="Foto: dítě kreslí svůj vynález"
              minHeight={380}
              radius={18}
            />
            <div>
              <span className="eyebrow">Od fantazie k realitě</span>
              <h3 className={styles.programH3}>Děti se stávají vynálezci</h3>
              <p className={styles.programText}>
                MyMachine propojí dětskou fantazii s moderními technologiemi.
                Ukáže dětem, že i ten nejodvážnější nápad může vzniknout — od
                první skici až po hotový stroj. Děti spolupracují na vymýšlení,
                navrhování i stavbě vlastních vynálezů.
              </p>
            </div>
          </div>
          <div className={styles.programRow}>
            <div style={{ order: 2, display: "flex" }}>
              <ImageSlot
                src="/assets/photos/lab.jpg"
                alt="Foto: tým staví prototyp"
                minHeight={380}
                radius={18}
              />
            </div>
            <div style={{ order: 1 }}>
              <span className="eyebrow">Víc než technika</span>
              <h3 className={styles.programH3}>Co děti získají</h3>
              <p className={styles.programText} style={{ marginBottom: 14 }}>
                Na cestě objeví nejen svět programování, elektroniky a práce s
                materiálem, ale hlavně sílu týmové spolupráce a kreativity. Učí
                se naslouchat, hledat řešení a posouvat hranice toho, co si
                myslely, že je možné.
              </p>
              <p className={styles.programText}>
                Děti odcházejí s pocitem, že dokážou cokoliv — a že jejich
                nápady mají sílu měnit svět.
              </p>
            </div>
          </div>

          <div className={styles.programGlobal}>
            <div className={styles.programGlobalNumbers} aria-label="5 kontinentů a 15 zemí">
              <div>
                <strong>5</strong>
                <span>kontinentů</span>
              </div>
              <div>
                <strong>15</strong>
                <span>zemí</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">Mezinárodní přesah</span>
              <h3 className={styles.programGlobalTitle}>
                Mezinárodně uznávaný program
              </h3>
              <p className={styles.programGlobalText}>
                MyMachine je součástí iniciativy MyMachine Global Foundation.
                Vznikla v Belgii a dnes propojuje školy, studenty a firmy na
                pěti kontinentech. V roce 2025 ji MIT Solve vybral mezi TOP 10
                STEAM řešení v USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VYNÁLEZY — UKÁZKA ============ */}
      <InventionsSection inventions={featuredInventions} />

      {/* ============ STATS BAND ============ */}
      <section className={styles.stats}>
        <div className="container">
          <h2 className={`display ${styles.statsH2}`}>
            Letošní vynálezci a vynálezkyně
          </h2>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNum}>400+</div>
              <div className={styles.statLabel}>Žáků základních škol</div>
              <p className={styles.statText}>
                Malí vynálezci, kteří tvoří první nápady a představují si
                vynálezy svých snů.
              </p>
            </div>
            <div className={`${styles.stat} ${styles.statMiddle}`}>
              <div className={styles.statNum}>80+</div>
              <div className={styles.statLabel}>Studentů středních škol</div>
              <p className={styles.statText}>
                Zruční tvůrci, kteří promění dětské návrhy v reálné funkční
                prototypy.
              </p>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>32+</div>
              <div className={styles.statLabel}>Vysokoškoláků</div>
              <p className={styles.statText}>
                Kreativní designéři a inženýři, kteří hledají nejlepší řešení,
                jak nápady sestavit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAPA KRAJE ============ */}
      <section id="mapa" className={styles.map}>
        <div className="container">
          <div className={styles.mapSplit}>
            <div>
              <span className="eyebrow">Zapojené školy</span>
              <h2 className={`display ${styles.mapH2}`}>
                Rosteme napříč krajem
              </h2>
              <p className={styles.mapText}>
                MyMachine běží po celém Jihomoravském kraji — od Znojma přes
                Brno až po Hodonín. Základní školy sní, střední staví,
                univerzita a firmy pomáhají.
              </p>
              <div className={styles.mapStats}>
                <div>
                  <div className={styles.mapStatNum}>9</div>
                  <div className={styles.mapStatLabel}>Základních škol</div>
                </div>
                <div>
                  <div className={styles.mapStatNum}>19</div>
                  <div className={styles.mapStatLabel}>Zapojených tříd</div>
                </div>
                <div>
                  <div className={styles.mapStatNum}>400+</div>
                  <div className={styles.mapStatLabel}>Malých vynálezců</div>
                </div>
              </div>
              <div className={styles.mapLegend}>
                <div className={styles.mapLegendRow}>
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      boxShadow: "0 0 12px rgba(203,205,21,0.6)",
                      flex: "none",
                    }}
                  />
                  <span className={styles.mapLegendText}>
                    Město se zapojenou školou
                  </span>
                </div>
                <div className={styles.mapLegendRow}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      boxShadow: "0 0 14px rgba(203,205,21,0.7)",
                      flex: "none",
                    }}
                  />
                  <span className={styles.mapLegendText}>
                    Brno — více zapojených škol
                  </span>
                </div>
              </div>
            </div>

            <SchoolsMap />
          </div>
        </div>
      </section>

      {/* ============ NOVINKY ============ */}
      <NewsSection news={homeNews} />

      {/* ============ PARTNEŘI ============ */}
      <section id="partneri" className={styles.partners}>
        <div className="container">
          <div className={styles.partnersHead}>
            <div>
              <span className="eyebrow">Síť, která dává nápadům tvar</span>
              <h2 className={`display ${styles.partnersH2}`}>
                Kdo je v tom s námi
              </h2>
            </div>
            <p className={styles.partnersLead}>
              Školy, univerzity, veřejné instituce a firmy spojují zkušenosti,
              technologie i materiál, aby mohly dětské nápady skutečně vzniknout.
            </p>
          </div>

          <div className={styles.partnerFeature}>
            <div className={styles.partnerFeatureCopy}>
              <span className={styles.partnerFeatureLabel}>
                Hlavní univerzitní partner
              </span>
              <h3 className={styles.partnerFeatureTitle}>VUT v Brně</h3>
              <p className={styles.partnerFeatureText}>
                Univerzitní zázemí propojuje dětské vize s týmy studentů,
                které je proměňují v technické návrhy.
              </p>
            </div>
            <div className={styles.partnerFeatureLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mainPartner.src} alt={mainPartner.alt} />
            </div>
          </div>

          <div className={styles.partnerGroup}>
            <div className={styles.partnerGroupHead}>
              <h3 className={styles.partnerGroupTitle}>
                Instituce a partneři projektu
              </h3>
              <span className={styles.partnerGroupCount}>
                {ecosystemPartners.length} partnerů
              </span>
            </div>
            <div className={styles.partnerGrid}>
              {ecosystemPartners.map((partner) => (
                <PartnerTile key={partner.alt} partner={partner} />
              ))}
            </div>
          </div>

          <div className={styles.partnerGroup}>
            <div className={styles.partnerGroupHead}>
              <h3 className={styles.partnerGroupTitle}>
                Firemní patroni vynálezů
              </h3>
              <span className={styles.partnerGroupCount}>
                {patrons.length} patronů
              </span>
            </div>
            <div className={`${styles.partnerGrid} ${styles.patronGrid}`}>
              {patrons.map((partner) => (
                <PartnerTile key={partner.alt} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ KONTAKT ============ */}
      <section id="kontakt" className={styles.contact}>
        <div className="container">
          <div className={styles.contactHead}>
            <h2 className={`display ${styles.contactH2}`}>Kontakt</h2>
            <p className={styles.contactLead}>
              Chceš se přihlásit, stát se partnerem, nebo máš otázku? Vyplň
              formulář a my se ti ozveme.
            </p>
          </div>
          <div className={styles.contactGrid}>
            <ContactForm />
            <div className={styles.contactSide}>
              <div className={styles.fsCard}>
                <div style={{ marginBottom: 16 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/brand/future-shapers-white.svg"
                    alt="Future Shapers"
                    style={{ height: 54, width: "auto", display: "block" }}
                  />
                </div>
                <p className={styles.fsCardText}>
                  MyMachine Czechia je součástí iniciativy Future Shapers,
                  která propojuje lidi z vědy a techniky a mění pohled mladých
                  lidí na svět STEM.
                </p>
                <a href="#" className={styles.fsCardLink}>
                  Více o Future Shapers
                </a>
              </div>
              <div className={styles.socialCard}>
                <span className={styles.socialTitle}>Sledujte nás</span>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    Instagram
                  </a>
                  <a href="#" className={styles.socialLink}>
                    Facebook
                  </a>
                  <a href="#" className={styles.socialLink}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer bottomPad={88} />
    </div>
  );
}
