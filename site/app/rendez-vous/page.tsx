"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const IC_TITLE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_PHONE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691ea0b8e1c99be6f2c709cb_ic-phone.svg";
const IC_MAIL =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691ea16318dbdab56f7d3e78_ic-mail-02.svg";
const IC_FEATURE_01 =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db628df1656aa61ae1df5_ic-feature-01.svg";
const IC_FEATURE_02 =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db628a09a478062829583_ic-feature-02.svg";
const IC_FEATURE_03 =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db62981c44291c4ff04dc_ic-feature-03.svg";
const APPOINTMENT_IMG =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691e97f73a1e5ad1ffe4421a_appoinment.webp";
const FEATURE_IMG_01 =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6282353ce6a70d93685_feature-img-01.webp";
const FEATURE_IMG_02 =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6288d67674e64a07a23_feature-img-02.webp";
const FEATURE_IMG_03 =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db628dffb49f913be9f59_feature-img-03.webp";

const faqItems = [
  {
    q: "Comment prendre rendez-vous avec Dr. Benzakour ?",
    a: "Vous pouvez prendre rendez-vous en remplissant le formulaire ci-dessus, en appelant notre secrétariat au +212 661 143 123, ou par email à drbenzakouramal@gmail.com.",
  },
  {
    q: "Quels documents apporter lors de la première consultation ?",
    a: "Veuillez apporter votre carte d'identité, votre carnet de santé, vos résultats d'examens récents (analyses, imagerie) et votre carte d'assurance maladie si applicable.",
  },
  {
    q: "Est-il possible d'avoir une consultation en ligne ?",
    a: "Oui, Dr. Benzakour propose des téléconsultations pour les suivis post-opératoires et les avis spécialisés. Contactez le secrétariat pour organiser un rendez-vous à distance.",
  },
  {
    q: "Quels sont les délais d'attente pour une consultation ?",
    a: "Les délais varient selon l'urgence. Les cas urgents sont pris en charge rapidement. Pour une consultation de routine, comptez généralement 1 à 2 semaines.",
  },
  {
    q: "La chirurgie robotique est-elle couverte par l'assurance ?",
    a: "La couverture dépend de votre contrat d'assurance. Notre équipe administrative peut vous aider à vérifier votre prise en charge avant l'intervention.",
  },
  {
    q: "Comment se déroule la préparation avant une intervention ?",
    a: "Dr. Benzakour applique le protocole RAAC (Récupération Améliorée Après Chirurgie). Un bilan pré-opératoire complet est réalisé et des instructions détaillées vous sont fournies avant l'intervention.",
  },
];

export default function RendezVousPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <ScrollReveal>
      <Navbar />

      {/* ── Page Title ── */}
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pg-inner">
            <h1 className="main-heading reveal" style={{ whiteSpace: 'nowrap' }}>Rendez-vous</h1>
            <p className="pg-title-text">
              Besoin d&rsquo;une consultation ? Choisissez votre créneau, nous
              nous occupons du reste.
            </p>
          </div>
        </div>
      </div>

      <div className="page-wrap">
        {/* ── Appointment Section ── */}
        <section className="appointment">
          <div className="w-layout-blockcontainer container w-container">
            <div className="appointment-inner">
              {/* Left */}
              <div className="appointment-left">
                <div className="overflow-hidden">
                  <div>
                    <div className="sub-title">
                      <img src={IC_TITLE} loading="lazy" alt="" />
                      <div>Consultation</div>
                    </div>
                  </div>
                  <h2 className="appointment-heading reveal">
                    Des rendez-vous adaptés, un chirurgien de confiance et une
                    prise en charge qui place vos besoins en priorité.
                  </h2>
                </div>
                <div className="appointment-bottom reveal">
                  <div className="appointment-title">Prendre Rendez-vous</div>
                  <div className="appointment-link-wrap">
                    <div className="appointment-link">
                      <img src={IC_PHONE} loading="lazy" alt="Téléphone" />
                      <a
                        href="tel:+212661143123"
                        className="ft-contact-link w-inline-block"
                      >
                        <div className="nav-top-line _02"></div>
                        <div>+212 661 143 123</div>
                        <div className="nav-bottom-line _02"></div>
                      </a>
                    </div>
                    <div className="appointment-link">
                      <img src={IC_MAIL} loading="lazy" alt="Email" />
                      <a
                        href="mailto:drbenzakouramal@gmail.com"
                        className="contact-link w-inline-block"
                      >
                        <div className="nav-top-line _02"></div>
                        <div>drbenzakouramal@gmail.com</div>
                        <div className="nav-bottom-line _02"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="appointment-right">
                <div className="appointment-top">
                  <div className="appointment-data reveal">
                    <div className="appointment-img">
                      <img
                        src={APPOINTMENT_IMG}
                        loading="lazy"
                        alt="Patient satisfait"
                        className="cover-image"
                      />
                    </div>
                    <div>
                      <div className="appointment-text">Patient Satisfait</div>
                      <div className="body-small">Casablanca, Maroc</div>
                    </div>
                  </div>
                  <p className="appointment-info reveal">
                    &laquo;Le processus était remarquablement fluide &mdash;
                    j&rsquo;ai rempli le formulaire en ligne et reçu un appel de
                    confirmation en quelques minutes.&raquo;
                  </p>
                </div>
                <div className="appointment-form-block w-form">
                  <form
                    method="get"
                    name="email-form"
                    data-name="Email Form"
                    id="email-form"
                    className="appointment-form reveal"
                  >
                    <div className="appointment-form-inner">
                      <input
                        className="appointment-input w-input"
                        maxLength={256}
                        name="First-Name"
                        data-name="First Name"
                        placeholder="Prénom*"
                        type="text"
                        id="first-name"
                        required
                      />
                      <input
                        className="appointment-input w-input"
                        maxLength={256}
                        name="Last-Name"
                        data-name="Last Name"
                        placeholder="Nom"
                        type="text"
                        id="last-name"
                      />
                      <input
                        className="appointment-input w-input"
                        maxLength={256}
                        name="Phone-number"
                        data-name="Phone number"
                        placeholder="Numéro de téléphone"
                        type="tel"
                        id="phone"
                      />
                      <input
                        className="appointment-input w-input"
                        maxLength={256}
                        name="email"
                        data-name="Email"
                        placeholder="Email*"
                        type="email"
                        id="email"
                        required
                      />
                      <input
                        className="appointment-input w-input"
                        maxLength={256}
                        name="Date"
                        data-name="Date"
                        placeholder="Date souhaitée*"
                        type="text"
                        id="date"
                        required
                      />
                      <input
                        className="appointment-input w-input"
                        maxLength={256}
                        name="Time"
                        data-name="Time"
                        placeholder="Heure souhaitée*"
                        type="text"
                        id="time"
                        required
                      />
                      <textarea
                        required
                        placeholder="Décrivez votre motif de consultation *"
                        maxLength={5000}
                        id="message"
                        name="Message"
                        data-name="Message"
                        className="appointment-message w-input"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      data-wait=""
                      className="form-button w-button"
                      value="Prendre Rendez-vous"
                    />
                  </form>
                  <div className="success-message w-form-done">
                    <div>
                      Merci ! Votre demande a bien été reçue. Nous vous
                      contacterons rapidement.
                    </div>
                  </div>
                  <div className="error-message w-form-fail">
                    <div>
                      Une erreur s&rsquo;est produite. Veuillez réessayer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="faq">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-title">
              <div className="sub-title">
                <img src={IC_TITLE} loading="lazy" alt="" />
                <div>FAQ</div>
              </div>
              <h2 className="section-heading">Questions Fréquentes</h2>
            </div>
            <div className="faq-wrapper">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="faq-data w-dropdown"
                  data-delay="0"
                  data-hover="false"
                >
                  <div
                    className={`que ${i === 0 ? "top " : ""}w-dropdown-toggle${openFaq === i ? " w--open" : ""}`}
                    onClick={() => toggleFaq(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleFaq(i);
                    }}
                  >
                    <div>
                      <div className="faq-small-text">Q.{i + 1}</div>
                      <div>{item.q}</div>
                    </div>
                    <div className="que-icon">
                      <div className="vartical-line"></div>
                      <div className="horizontal-line"></div>
                    </div>
                  </div>
                  <nav
                    className={`ans w-dropdown-list${openFaq === i ? " w--open" : ""}`}
                  >
                    <div className="ans-box">
                      <p className="ans-text">{item.a}</p>
                    </div>
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature Section ── */}
        <section className="feature">
          <div className="w-layout-blockcontainer container w-container">
            <div className="feature-top">
              <div className="feature-wrap">
                <div className="feature-block _02 reveal">
                  <div className="feature-icon-wrap">
                    <img
                      src={IC_FEATURE_01}
                      loading="lazy"
                      alt="Infrastructure"
                      className="feature-icon"
                    />
                  </div>
                  <div>
                    <div className="feature-text white">
                      Infrastructure Moderne
                    </div>
                    <div className="body-small">
                      Équipements de pointe et bloc opératoire robotisé pour une
                      chirurgie sûre et efficace.
                    </div>
                  </div>
                </div>
                <div className="feature-block reveal">
                  <div className="feature-icon-wrap">
                    <img
                      src={IC_FEATURE_02}
                      loading="lazy"
                      alt="Équipe"
                      className="feature-icon"
                    />
                  </div>
                  <div>
                    <div className="feature-text">Équipe Dédiée</div>
                    <div className="body-small">
                      Une équipe pluridisciplinaire expérimentée, toujours à
                      votre écoute.
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-main-img">
                <div className="section-img">
                  <img
                    src={FEATURE_IMG_01}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.96875px, 939.96875px"
                    alt="Infrastructure moderne"
                    srcSet="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6282353ce6a70d93685_feature-img-01-p-500.webp 500w, https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6282353ce6a70d93685_feature-img-01-p-800.webp 800w, https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6282353ce6a70d93685_feature-img-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6282353ce6a70d93685_feature-img-01.webp 1400w"
                    className="section-image"
                  />
                </div>
              </div>
            </div>
            <div className="feature-bottom">
              <div className="feature-img _02">
                <div className="section-img">
                  <img
                    src={FEATURE_IMG_03}
                    loading="lazy"
                    sizes="(max-width: 660px) 100vw, 660px"
                    alt="Équipe dédiée"
                    srcSet="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db628dffb49f913be9f59_feature-img-03-p-500.webp 500w, https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db628dffb49f913be9f59_feature-img-03.webp 660w"
                    className="section-image"
                  />
                </div>
              </div>
              <div className="feature-block _03 reveal">
                <div className="feature-icon-wrap">
                  <img
                    src={IC_FEATURE_03}
                    loading="lazy"
                    alt="Suivi"
                    className="feature-icon"
                  />
                </div>
                <div className="feature-data">
                  <div className="feature-text">Suivi Personnalisé</div>
                  <div className="body-small">
                    Un accompagnement sur mesure avant, pendant et après
                    l&rsquo;intervention, avec le protocole RAAC pour une
                    récupération optimale.
                  </div>
                </div>
              </div>
              <div className="feature-img">
                <div className="section-img">
                  <img
                    src={FEATURE_IMG_02}
                    loading="lazy"
                    sizes="(max-width: 660px) 100vw, 660px"
                    alt="Suivi personnalisé"
                    srcSet="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6288d67674e64a07a23_feature-img-02-p-500.webp 500w, https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db6288d67674e64a07a23_feature-img-02.webp 660w"
                    className="section-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </ScrollReveal>
  );
}
