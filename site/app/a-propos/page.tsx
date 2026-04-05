"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Inquiry } from "@/components/sections/Inquiry";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const IC_PHONE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691ea0b8e1c99be6f2c709cb_ic-phone.svg";
const IC_MAIL = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691ea16318dbdab56f7d3e78_ic-mail-02.svg";
const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_DOT = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";
const IC_ARROW_BLACK = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921538e227be2cec8f60124_ic-arrow-black.svg";
const IC_QUOTE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692143b34bcad4054c0eef9d_quote.svg";
const IC_STAR = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692145b0e2e0fe226b2d2dbd_ic-star.svg";
const IC_STAR_EMPTY = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921457bef27bc15ca2486c7_4fea99f201b55fd70f1e6e140da9482a_star.svg";

const aboutBlocks = [
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fdc4165d765a6eb743_ic-about-01.svg", label: "Chirurgie Viscérale" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fde23bb0007caa3184_ic-about-02.svg", label: "Chirurgie Robotique" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fd4052dd04b1381a91_ic-about-03.svg", label: "Approche Mini-Invasive" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fd185e0ca79fdeedb6_ic-about-04.svg", label: "Cancérologie Digestive" },
  { icon: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/692559fddb9f4723c26c20b4_ic-about-05.svg", label: "Récupération Rapide (RAAC)" },
];

const articles = [
  {
    tag: "Chirurgie Digestive",
    date: "Mars 2026",
    title: "Quand consulter un chirurgien digestif ?",
    slug: "quand-consulter-chirurgien-digestif",
    image: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06.webp",
  },
  {
    tag: "Innovation",
    date: "Mars 2026",
    title: "La chirurgie robotique : révolution au bloc opératoire",
    slug: "chirurgie-robotique-revolution",
    image: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02.webp",
  },
  {
    tag: "Récupération",
    date: "Mars 2026",
    title: "RAAC : récupérer plus vite après une chirurgie",
    slug: "raac-recuperation-amelioree",
    image: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05.webp",
  },
];

const reviews = [
  {
    name: "Fatima Zahra El Amrani",
    location: "Casablanca, Maroc",
    stars: 5,
    text: "Dès mon arrivée, je me suis sentie entre de bonnes mains. Le Dr. Benzakour a pris le temps de tout m\u2019expliquer et j\u2019ai vraiment été écoutée et accompagnée tout au long du processus.",
    thumb: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921428a4923fc23e2a483de_review-01.webp",
  },
  {
    name: "Youssef Bennani",
    location: "Rabat, Maroc",
    stars: 4,
    text: "Je consulte le Dr. Benzakour depuis plus d\u2019un an et chaque expérience est exceptionnelle. Son expertise en chirurgie robotique m\u2019a permis une récupération rapide après mon intervention.",
    thumb: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921428a3817776bd46c871b_review-02.webp",
  },
  {
    name: "Amina Tazi",
    location: "Marrakech, Maroc",
    stars: 5,
    text: "Nous avons consulté le Dr. Benzakour pour une intervention digestive. Sa patience, son approche douce et la propreté du cabinet nous ont impressionnés. Tout le processus s\u2019est déroulé sans stress.",
    thumb: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921428a227be2cec8f4abce_review-03.webp",
  },
  {
    name: "Karim Alaoui",
    location: "Tanger, Maroc",
    stars: 4,
    text: "L\u2019équipe du Dr. Benzakour est professionnelle, bienveillante et efficace. La communication claire et la confiance dans le traitement reçu m\u2019ont vraiment rassuré. Je recommande vivement.",
    thumb: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921428aa1c05f99b0fc22f2_review-04.webp",
  },
  {
    name: "Nadia Chraibi",
    location: "Fès, Maroc",
    stars: 5,
    text: "Le Dr. Benzakour a dépassé toutes mes attentes. L\u2019attention aux détails, le suivi post-opératoire et la bienveillance de toute l\u2019équipe font vraiment la différence.",
    thumb: "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921428a593a027ec63b7854_review-05.webp",
  },
];

const IC_ARROW_LIST = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925512183ebd58552d2e806_ic-arrow-list.svg";

function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = sectionHeight - viewportHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const maxTranslate = content.scrollWidth - window.innerWidth;
      content.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hscroll-section" ref={sectionRef}>
      <div className="hscroll-sticky">
        <div className="hscroll-content" ref={contentRef}>
          {/* Panel 1: Text */}
          <div className="hscroll-panel hscroll-text-panel">
            <div className="purpose-title">Votre Santé, Notre Engagement</div>
            <p className="single-text">
              Spécialisé dans la prise en charge des pathologies de l&apos;appareil digestif, je mets au service de mes patients une expertise acquise durant plusieurs années.
            </p>
            <div className="purpose-stat">
              <div className="purpose-heading">20+</div>
              <p className="single-text">Années d&apos;expérience en chirurgie viscérale et robotique.</p>
            </div>
            <div className="purpose-stat">
              <div className="purpose-heading">1er</div>
              <p className="single-text">Chirurgien marocain à réaliser la chirurgie digestive robot-assistée de façon autonome</p>
            </div>
            <ul className="purpose-list" style={{ marginTop: 10 }}>
              <li className="purpose-item">Ancien attaché des Hôpitaux de Toulouse</li>
              <li className="purpose-item">Chirurgie robotique Da Vinci &amp; MedBot</li>
              <li className="purpose-item">Techniques RAAC (récupération rapide)</li>
              <li className="purpose-item">Cabinet moderne à Cité de l&apos;Air, Casa Anfa</li>
            </ul>
            <p className="single-text" style={{ marginTop: 20 }}>
              Mon approche repose sur une conviction : allier la rigueur de la chirurgie traditionnelle aux bénéfices des technologies de pointe.
            </p>
          </div>

          {/* Panel 2: Image Da Vinci */}
          <div className="hscroll-panel hscroll-img-panel">
            <img src="/images/dr-davinci.jpg" alt="Dr. Benzakour - Da Vinci" />
          </div>

          {/* Panel 3: Text */}
          <div className="hscroll-panel hscroll-text-panel hscroll-center-panel">
            <h3 className="purpose-small-heading">Nos Engagements</h3>
            <p className="single-text" style={{ textAlign: "center" }}>
              Mon parcours s&apos;est structuré autour de trois piliers majeurs : la chirurgie viscérale et digestive, la chirurgie mini-invasive par laparoscopie, et la chirurgie robotique avec les systèmes Da Vinci et MedBot.
            </p>
            <p className="single-text" style={{ textAlign: "center" }}>
              Ancien attaché des Hôpitaux de Toulouse, j&apos;ai dédié ma carrière à l&apos;apprentissage et à la pratique des techniques chirurgicales les plus innovantes.
            </p>
            <Link href="/rendez-vous" className="primary-button" style={{ alignSelf: "center" }}>
              <div className="arrow-wrap _01">
                <img src={IC_ARROW_DOT} alt="Arrow" />
              </div>
              <div className="primary-text">
                <div>Prendre Rendez-vous</div>
              </div>
              <div className="arrow-wrap _02">
                <img src={IC_ARROW_DOT} alt="Arrow" />
              </div>
            </Link>
          </div>

          {/* Panel 4: Image MedBot */}
          <div className="hscroll-panel hscroll-img-panel">
            <img src="/images/dr-medbot.jpg" alt="Dr. Benzakour - MedBot" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="star-wrapper">
      {[1, 2, 3, 4, 5].map((i) => (
        <img key={i} src={i <= count ? IC_STAR : IC_STAR_EMPTY} alt="Star" />
      ))}
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <ScrollReveal>
      <Navbar />
      <main>
        {/* Doctor Profile Hero */}
        <section className="doctor-profile">
          <div className="doctor-profile-inner">
            <div className="doctor-profile-wrapper">
              <div className="doctor-profile-img reveal reveal-left">
                <img
                  src="/images/IMG_0025.jpg"
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
                      Premier marocain à avoir réalisé la chirurgie digestive robot-assistée de façon autonome.
                      Expert reconnu en chirurgie viscérale, digestive et oncologique, spécialiste de la CRS &amp; CHIP (HIPEC)
                      et pionnier de la chirurgie robotique au Maroc.
                    </p>
                  </div>
                </div>

                <div className="reveal reveal-left reveal-d3">
                  <div className="doctor-profile-info">
                    <div className="doctor-info-block top">
                      <div className="doctor-info-label">Formation :</div>
                      <div>Ancien attaché des Hôpitaux&nbsp;de&nbsp;Toulouse</div>
                    </div>
                    <div className="doctor-info-block">
                      <div className="doctor-info-label">Expérience :</div>
                      <div>+20 ans d&rsquo;expérience</div>
                    </div>
                    <div className="doctor-info-block last">
                      <div className="doctor-info-label">Jours de consultation :</div>
                      <div>Lundi au Vendredi, Samedi Matin</div>
                    </div>
                  </div>
                  <div className="doctor-profile-contact">
                    <div className="doctor-contact-row">
                      <img src={IC_PHONE} loading="lazy" alt="Phone" />
                      <a href="tel:+212661143123" className="doctor-contact-link">+212 661 143 123</a>
                    </div>
                    <div className="doctor-contact-row">
                      <img src={IC_MAIL} loading="lazy" alt="Mail" />
                      <a href="mailto:drbenzakouramal@gmail.com" className="doctor-contact-link">drbenzakouramal@gmail.com</a>
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
                    <h5>Un chirurgien de référence alliant expertise et technologie de pointe</h5>
                    <p>Spécialisé dans la prise en charge des pathologies de l&rsquo;appareil digestif, le Dr. Benzakour combine la rigueur de la chirurgie traditionnelle aux bénéfices des technologies les plus avancées. Son parcours s&rsquo;est structuré autour de trois piliers majeurs : la chirurgie viscérale et digestive, la chirurgie mini-invasive par laparoscopie, et la chirurgie robotique avec les systèmes Da Vinci Xi et MedBot.</p>
                  </div>
                </div>
                <div className="details-block reveal">
                  <h3 className="details-heading">Parcours</h3>
                  <div className="details-content">
                    <ul className="parcours-list">
                      <li>Chirurgie Générale, digestive et viscérale diplômé de la Faculté de Toulouse en Rangueil</li>
                      <li>Chirurgie Coelioscopique depuis 1992</li>
                      <li>Diplômé de Cancérologie digestive de Paris</li>
                      <li>Diplômé de Chirurgie Laparoscopique avancée</li>
                      <li>Diplômé de Chirurgie Mini-Invasive Hépato-Bilio-Pancréatique de Paris</li>
                      <li>Diplômé de Chirurgie Robotique, de Nancy 2024, et de Montpellier en 2025</li>
                      <li>Accréditation en Chirurgie Robotique MEDBOT SHANGHAI en 2025</li>
                    </ul>
                  </div>
                </div>
                <div className="details-block reveal">
                  <h3 className="details-heading">Domaines d&rsquo;Expertise</h3>
                  <div className="details-content">
                    <h5>1. Chirurgie Viscérale &amp; Digestive</h5>
                    <p>Prise en charge complète des pathologies de l&rsquo;appareil digestif : vésicule biliaire, hernies, reflux gastro-œsophagien, pathologies colorectales et chirurgie de l&rsquo;obésité.</p>
                    <h5>2. Chirurgie Robotique (Da Vinci Xi &amp; MedBot)</h5>
                    <p>Utilisation de systèmes de haute précision pour une vision 3D augmentée et une dextérité chirurgicale optimale, garantissant sécurité et précision lors des interventions complexes.</p>
                    <h5>3. Cancérologie Digestive</h5>
                    <p>Prise en charge des pathologies digestives malignes : cancérologie digestive, pathologies du péritoine (pseudomyxome, mésothéliome et carcinose). Approche pluridisciplinaire en coordination avec oncologues et radiothérapeutes.</p>
                    <h5>4. Chirurgie Mini-Invasive &amp; RAAC</h5>
                    <p>Techniques par petites incisions (laparoscopie) permettant de réduire les douleurs post-opératoires et d&rsquo;accélérer la reprise d&rsquo;activité. Protocole de Récupération Améliorée Après Chirurgie (RAAC).</p>
                  </div>
                </div>
                <div className="details-block reveal">
                  <h3 className="details-heading">Ma philosophie de soin</h3>
                  <div className="details-content">
                    <p>Dans ce nouveau cadre, je privilégie une approche fondée sur :</p>
                    <ul className="parcours-list">
                      <li>L&rsquo;écoute et la clarté du diagnostic.</li>
                      <li>La rigueur technique acquise au fil des années.</li>
                      <li>La collaboration avec les autres spécialistes pour un suivi global.</li>
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
      <Inquiry />
      <Footer />
    </ScrollReveal>
  );
}
