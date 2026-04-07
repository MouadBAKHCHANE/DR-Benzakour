"use client";

import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_DOT = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";

const aboutBlocks = [
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fdc4165d765a6eb743_ic-about-01.svg", label: "Chirurgie Viscérale" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fde23bb0007caa3184_ic-about-02.svg", label: "Chirurgie Robotique" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fd4052dd04b1381a91_ic-about-03.svg", label: "Approche Mini-Invasive" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fd185e0ca79fdeedb6_ic-about-04.svg", label: "Cancérologie Digestive" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fddb9f4723c26c20b4_ic-about-05.svg", label: "Récupération Rapide (RAAC)" },
];

function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const isMobile = () => window.innerWidth <= 991;

    const update = () => {
      if (isMobile()) {
        section.style.height = "auto";
        content.style.transform = "none";
        return;
      }
      const contentWidth = content.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const sectionHeight = contentWidth - viewportWidth + viewportHeight;
      section.style.height = `${sectionHeight}px`;
    };

    const handleScroll = () => {
      if (isMobile()) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollable = sectionHeight - viewportHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollable);
      const maxTranslate = content.scrollWidth - window.innerWidth;
      content.style.transform = `translate3d(${-progress * maxTranslate}px, 0px, 0px)`;
    };

    update();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => { update(); handleScroll(); });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="hscroll-section" ref={sectionRef}>
      <div className="hscroll-sticky">
        <div className="hscroll-content" ref={contentRef}>
          {/* Panel 1: Text */}
          <div className="hscroll-panel hscroll-text-panel">
            <div className="purpose-title">Votre Santé, Notre Engagement</div>
            <p className="single-text">
              Chaque patient est unique. C&apos;est pourquoi mon approche repose sur une écoute attentive, un diagnostic précis et un plan de traitement adapté à chaque situation.
            </p>
            <div className="purpose-stat">
              <div className="purpose-heading">30+</div>
              <p className="single-text">Années dédiées à la chirurgie digestive et oncologique.</p>
            </div>
            <div className="purpose-stat">
              <div className="purpose-heading">1er</div>
              <p className="single-text">Chirurgien marocain à pratiquer la chirurgie digestive robot-assistée de façon autonome.</p>
            </div>
            <ul className="purpose-list" style={{ marginTop: 10 }}>
              <li className="purpose-item">Formé aux Hôpitaux de Toulouse-Rangueil</li>
              <li className="purpose-item">Certifié Da Vinci Xi &amp; MedBot Shanghai</li>
              <li className="purpose-item">Protocole RAAC pour une récupération accélérée</li>
              <li className="purpose-item">Nouveau cabinet &mdash; Uptown Business Center, CFC, Casablanca</li>
            </ul>
            <p className="single-text" style={{ marginTop: 20 }}>
              La rigueur d&apos;hier, les technologies de demain &mdash; au service d&apos;une chirurgie plus humaine.
            </p>
          </div>

          {/* Panel 2: Image Da Vinci */}
          <div className="hscroll-panel hscroll-img-panel">
            <img src="/images/dr-davinci.webp" alt="Dr. Benzakour - Da Vinci" />
          </div>

          {/* Panel 3: Text */}
          <div className="hscroll-panel hscroll-text-panel hscroll-center-panel">
            <h3 className="purpose-small-heading">Nos Engagements</h3>
            <p className="single-text" style={{ textAlign: "center" }}>
              Trois décennies d&apos;expérience m&apos;ont appris que la meilleure chirurgie est celle qui sait évoluer. De la laparoscopie à la robotique, chaque avancée technique est mise au service d&apos;un objectif simple : votre rétablissement.
            </p>
            <p className="single-text" style={{ textAlign: "center" }}>
              Formé à Toulouse, certifié à Paris, Nancy, Montpellier et Shanghai &mdash; une expertise internationale au service des patients marocains.
            </p>
            <button type="button" data-appointment className="primary-button" style={{ alignSelf: "center" }}>
              <div className="arrow-wrap _01">
                <img src={IC_ARROW_DOT} alt="Arrow" />
              </div>
              <div className="primary-text">
                <div>Prendre Rendez-vous</div>
              </div>
              <div className="arrow-wrap _02">
                <img src={IC_ARROW_DOT} alt="Arrow" />
              </div>
            </button>
          </div>

          {/* Panel 4: Image MedBot */}
          <div className="hscroll-panel hscroll-img-panel">
            <img src="/images/dr-medbot.webp" alt="Dr. Benzakour - MedBot" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {

  return (
    <ScrollReveal>
      <Navbar />
      <main className="about-page">
        {/* Doctor Profile Hero */}
        <section className="doctor-profile">
          <div className="doctor-profile-inner">
            <div className="doctor-profile-wrapper">
              <div className="doctor-profile-img reveal reveal-left">
                <img
                  src="/images/IMG_0025.webp"
                  alt="Dr. Mohammed Amal Benzakour"
                  loading="eager"
                />
              </div>
              <div className="doctor-profile-left">
                <div className="doctor-profile-top">
                  <div className="doctor-profile-data">
                    <div className="overflow-hidden">
                      <div className="body-small reveal reveal-left">Chirurgie Viscérale, Digestive &amp; Robotique</div>
                      <h1 className="doctor-profile-heading reveal reveal-left reveal-d1">DR. MOHAMMED AMAL BENZAKOUR</h1>
                    </div>
                    <p className="single-text reveal reveal-left reveal-d2">
                      Bienvenue au sein de mon nouveau cabinet. Fort d&rsquo;un parcours de 30 années dédiées à la chirurgie générale, mon engagement a toujours été de mettre l&rsquo;expérience clinique au service d&rsquo;une prise en charge attentive et personnalisée pour toute la pathologie digestive.
                    </p>
                    <div className="reveal reveal-left reveal-d3">
                      <h3 className="about-subtitle">Une expérience au service de l&rsquo;Oncologie</h3>
                      <p className="single-text">
                        Ma pratique est principalement orientée vers la chirurgie cancérologique, qu&rsquo;il s&rsquo;agisse de pathologies digestives ou gynécologiques. Ces trois décennies d&rsquo;activité m&rsquo;ont permis d&rsquo;accompagner de nombreux patients dans des parcours de soins complexes, avec une attention constante portée à la sécurité et à la qualité de vie post-opératoire.
                      </p>
                    </div>
                    <div className="reveal reveal-left reveal-d3">
                      <h3 className="about-subtitle">L&rsquo;innovation comme outil de précision</h3>
                      <p className="single-text">
                        Si l&rsquo;expérience est le socle de mon métier, l&rsquo;évolution des techniques en est le moteur. J&rsquo;ai eu l&rsquo;opportunité de participer à l&rsquo;introduction de la chirurgie robotique en milieu digestif au Maroc, une étape importante pour le développement de la chirurgie mini-invasive dans notre pays.
                      </p>
                      <p className="single-text" style={{ marginTop: 10 }}>
                        L&rsquo;usage de ces technologies (robotique et laparoscopique) n&rsquo;est pas une fin en soi, mais un moyen d&rsquo;offrir plus de précision et de favoriser une récupération plus sereine pour le patient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-wrap">
          {/* About Section */}
          <section className="about">
            <div className="container">
              <div className="about-bottom">
                <div className="section-title">
                  <div className="sub-title">
                    <img src={IC_TITLE} alt="" />
                    <div>Notre Histoire</div>
                  </div>
                  <h2 className="about-section-heading reveal">
                    L&apos;excellence technologique au service d&apos;une prise en charge personnalisée
                  </h2>
                </div>
                <div className="about-wrap reveal">
                  {aboutBlocks.map((block, i) => (
                    <div key={i} className="about-block">
                      <img
                        src={block.icon}
                        alt={block.label}
                        className="about-icon"
                      />
                      <div>{block.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Doctor Details */}
          <section className="doctor-details-section">
            <div className="container">
              <div className="details-wrapper">
                <div className="details-block reveal">
                  <h3 className="details-heading">Présentation</h3>
                  <div className="details-content">
                    <h5>30 ans au service de la chirurgie digestive</h5>
                    <p>Formé à la Faculté de Toulouse-Rangueil, le Dr. Benzakour a consacré trois décennies à perfectionner son art. De la chirurgie classique à la robotique de dernière génération, son parcours reflète une conviction profonde : chaque patient mérite une prise en charge sur mesure, portée par l&rsquo;excellence technique et l&rsquo;écoute humaine.</p>
                    <p>Aujourd&rsquo;hui, il exerce depuis son nouveau cabinet à l&rsquo;Uptown Business Center, au cœur de Casa Finance City &mdash; un espace conçu pour allier confort du patient et technologie de pointe.</p>
                  </div>
                </div>
                <div className="details-block reveal">
                  <h3 className="details-heading">Parcours</h3>
                  <div className="details-content">
                    <h5>Un apprentissage continu, de Toulouse à Shanghai</h5>
                    <ul className="parcours-list">
                      <li>Chirurgie Générale, digestive et viscérale &mdash; Faculté de Toulouse-Rangueil</li>
                      <li>Pionnier de la chirurgie coelioscopique au Maroc depuis 1992</li>
                      <li>Diplômé de Cancérologie digestive &mdash; Paris</li>
                      <li>Diplômé de Chirurgie Laparoscopique avancée</li>
                      <li>Diplômé de Chirurgie Mini-Invasive Hépato-Bilio-Pancréatique &mdash; Paris</li>
                      <li>Diplômé de Chirurgie Robotique &mdash; Nancy 2024 &amp; Montpellier 2025</li>
                      <li>Accréditation Chirurgie Robotique MEDBOT &mdash; Shanghai 2025</li>
                    </ul>
                  </div>
                </div>
                <div className="details-block reveal">
                  <h3 className="details-heading">Domaines d&rsquo;Expertise</h3>
                  <div className="details-content">
                    <h5>Chirurgie Viscérale &amp; Digestive</h5>
                    <p>De la vésicule biliaire aux hernies complexes, en passant par le reflux et les pathologies colorectales &mdash; une prise en charge complète de l&rsquo;appareil digestif avec une approche individualisée.</p>
                    <h5>Chirurgie Robotique &mdash; Da Vinci Xi &amp; MedBot</h5>
                    <p>Vision 3D augmentée, dextérité inégalée, précision millimétrique. La robotique n&rsquo;est pas un luxe, c&rsquo;est un outil au service d&rsquo;une récupération plus rapide et plus sûre.</p>
                    <h5>Cancérologie Digestive &amp; Péritonéale</h5>
                    <p>Cancers digestifs, carcinose péritonéale, pseudomyxome, mésothéliome &mdash; une approche pluridisciplinaire en coordination étroite avec oncologues et radiothérapeutes pour un parcours de soins cohérent.</p>
                    <h5>Chirurgie Mini-Invasive &amp; RAAC</h5>
                    <p>Moins de douleur, moins de cicatrices, reprise plus rapide. Le protocole de Récupération Améliorée Après Chirurgie (RAAC) place le confort du patient au centre de chaque intervention.</p>
                  </div>
                </div>
                <div className="details-block reveal">
                  <h3 className="details-heading">Ma philosophie de soin</h3>
                  <div className="details-content">
                    <p>Après 30 ans de pratique, ma conviction n&rsquo;a pas changé : la technique ne remplace jamais l&rsquo;écoute. Dans ce nouveau cabinet, chaque consultation commence par un dialogue, chaque décision se prend ensemble.</p>
                    <ul className="parcours-list">
                      <li>L&rsquo;écoute d&rsquo;abord &mdash; comprendre avant d&rsquo;agir.</li>
                      <li>La rigueur toujours &mdash; 30 ans d&rsquo;expérience au service de la précision.</li>
                      <li>Le collectif enfin &mdash; travailler main dans la main avec les autres spécialistes.</li>
                    </ul>
                    <blockquote className="parcours-quote">
                      &laquo; La chirurgie est un métier d&rsquo;apprentissage permanent, où la technologie doit rester au service d&rsquo;un jugement clinique mûri par le temps. &raquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Purpose - Horizontal Scroll */}
          <HorizontalScroll />
        </div>
      </main>
      <Footer />
    </ScrollReveal>
  );
}
