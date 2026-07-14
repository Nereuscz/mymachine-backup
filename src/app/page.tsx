import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import InventionsSection from "@/components/home/InventionsSection";
import NewsSection from "@/components/home/NewsSection";
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

const mapCities: {
  label: string;
  left: string;
  top: string;
  size: number;
  labelSide: "top" | "left";
}[] = [
  { label: "Brno a okolí", left: "55.9%", top: "43.3%", size: 20, labelSide: "top" },
  { label: "Znojmo", left: "24.9%", top: "75.7%", size: 14, labelSide: "top" },
  { label: "Višňové", left: "33.4%", top: "60.9%", size: 14, labelSide: "top" },
  { label: "Hustopeče", left: "62.1%", top: "67.6%", size: 14, labelSide: "top" },
  { label: "Kyjov · Milotice", left: "84.0%", top: "61.0%", size: 14, labelSide: "left" },
  { label: "Hodonín", left: "85.1%", top: "76.3%", size: 14, labelSide: "left" },
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
              Děti vymyslí stroj svých snů. Studenti a firmy ho společně
              postaví. Nápad se mění v realitu — a děti zjistí, že dokážou
              cokoliv.
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
        </div>
      </section>

      {/* ============ VYNÁLEZY — UKÁZKA (carousel) ============ */}
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

            <div className={styles.mapCanvas}>
              <svg
                viewBox="0 0 800 700"
                preserveAspectRatio="xMidYMid meet"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                aria-hidden="true"
              >
                <polygon
                  points="447,40 560,120 650,210 690,300 720,400 720,470 700,560 640,610 520,640 400,630 300,600 210,560 160,470 150,390 180,300 230,220 300,140 370,80"
                  fill="rgba(203,205,21,0.06)"
                  stroke="rgba(203,205,21,0.34)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
              {mapCities.map((city) => (
                <div
                  key={city.label}
                  style={{
                    position: "absolute",
                    left: city.left,
                    top: city.top,
                    width: 0,
                    height: 0,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: -city.size / 2,
                      top: -city.size / 2,
                      width: city.size,
                      height: city.size,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "2px solid #0a0a0a",
                      boxShadow:
                        city.size === 20
                          ? "0 0 0 3px rgba(203,205,21,0.28), 0 0 16px rgba(203,205,21,0.65)"
                          : "0 0 12px rgba(203,205,21,0.55)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      fontFamily: "var(--font-wide)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: city.size === 20 ? 11 : 10,
                      letterSpacing: "0.05em",
                      color: "#fff",
                      background: "rgba(0,0,0,0.62)",
                      padding: city.size === 20 ? "3px 9px" : "3px 8px",
                      borderRadius: 6,
                      whiteSpace: "nowrap",
                      ...(city.labelSide === "top"
                        ? {
                            left: "50%",
                            bottom: city.size === 20 ? 16 : 13,
                            transform: "translateX(-50%)",
                          }
                        : { right: 16, top: -8 }),
                    }}
                  >
                    {city.label}
                  </span>
                </div>
              ))}
              <span className={styles.mapCorner}>Jihomoravský kraj</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CITACE UČITELE ============ */}
      <section className={styles.quote}>
        <div className={styles.quoteInner}>
          <span className={styles.quoteMark}>„</span>
          <blockquote className={styles.quoteText}>
            Poprvé jsem viděla, jak se do hodiny naplno zapojily i děti, které
            techniku do té doby míjely. Zjistily, že jejich vlastní nápad má
            cenu — a ten pocit už jim nikdo nevezme.
          </blockquote>
          <div className={styles.quoteMeta}>
            <ImageSlot
              src="/assets/photos/portrait.jpg"
              alt="Foto"
              height={54}
              radius={27}
              style={{ width: 54, flex: "none", borderRadius: "50%" }}
            />
            <div style={{ textAlign: "left" }}>
              <div className={styles.quoteName}>Jana Nováková</div>
              <div className={styles.quoteRole}>
                Učitelka · ZŠ Otevřená, Žebětín
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNEŘI ============ */}
      <section id="partneri" className={styles.partners}>
        <div className="container">
          <h2 className={`display ${styles.partnersH2}`}>
            Kdo je v tom s námi
          </h2>

          <div className={styles.groupTitle}>
            <span>Hlavní univerzitní partner</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 44 }}>
            <div className={styles.mainTile}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mainPartner.src} alt={mainPartner.alt} />
            </div>
          </div>

          <div className={styles.groupTitle}>
            <span>Univerzity a instituce</span>
          </div>
          <div className={styles.tileGrid}>
            {institutions.map((p) => (
              <PartnerTile key={p.alt} partner={p} />
            ))}
          </div>

          <div className={styles.groupTitle}>
            <span>Firemní patroni vynálezů</span>
          </div>
          <div className={styles.tileGrid}>
            {patrons.map((p) => (
              <PartnerTile key={p.alt} partner={p} />
            ))}
          </div>

          <div className={styles.groupTitle}>
            <span>Partneři projektu</span>
          </div>
          <div className={styles.projectGrid}>
            {projectPartners.map((p) => (
              <PartnerTile key={p.alt} partner={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEZINÁRODNĚ ============ */}
      <section className={styles.global}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/shape-orange.png" alt="" className={styles.globalShape} />
        <div className={styles.globalInner}>
          <span className="eyebrow" style={{ color: "#cbcd15" }}>
            5 kontinentů · 15 zemí
          </span>
          <h2 className={styles.globalH2}>Mezinárodně uznávaný program</h2>
          <p className={styles.globalText}>
            MyMachine je součástí mezinárodní iniciativy MyMachine Global
            Foundation. Vznikla v Belgii a dnes se realizuje v 15 zemích na 5
            kontinentech. V roce 2025 ji MIT Solve vybral mezi TOP 10 STEAM
            řešení v USA.
          </p>
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

      {/* ============ NOVINKY (carousel) ============ */}
      <NewsSection news={homeNews} />

      <Footer bottomPad={88} />
    </div>
  );
}
