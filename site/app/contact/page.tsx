"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const IC_INFO =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d8e3386838f9d0ddc27cb_ic-info.svg";
const IC_MAIL =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d8ede455edc5e0ef4c1bc_ic-mail.svg";
const IC_LOCATION =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d8eded5d539bcc7ecac20_ic-location.svg";
const IC_TITLE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const CONTACT_IMG =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d8d91438c43a9acc0253c_contact.webp";

const faqItems = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Contactez-nous par t\u00e9l\u00e9phone ou via le formulaire en ligne.",
  },
  {
    q: "Que dois-je apporter lors de ma premi\u00e8re visite ?",
    a: "R\u00e9sultats d\u2019examens r\u00e9cents, dossier m\u00e9dical et pi\u00e8ce d\u2019identit\u00e9.",
  },
  {
    q: "Proposez-vous des consultations en t\u00e9l\u00e9m\u00e9decine ?",
    a: "Oui, pour les suivis et avis pr\u00e9liminaires.",
  },
  {
    q: "Les vaccinations sont-elles disponibles pour les adultes et les enfants ?",
    a: "Non applicable \u2014 nous sommes sp\u00e9cialis\u00e9s en chirurgie.",
  },
  {
    q: "Quels documents dois-je apporter ?",
    a: "Carte d\u2019identit\u00e9, carte mutuelle, et r\u00e9sultats d\u2019analyses r\u00e9cents.",
  },
  {
    q: "Les consultations sont-elles sur rendez-vous uniquement ?",
    a: "Oui, contactez-nous pour fixer un cr\u00e9neau.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <ScrollReveal>
        {/* ── Page Title ── */}
        <div className="page-title">
          <div className="w-layout-blockcontainer container w-container">
            <div className="pg-inner">
              <h1 className="main-heading reveal">Nous Contacter</h1>
              <p className="pg-title-text">
                Une question ou besoin d&apos;assistance&nbsp;? Nous sommes
                l&agrave; pour vous aider&nbsp;&mdash;&nbsp;contactez-nous
                d&egrave;s aujourd&apos;hui.
              </p>
            </div>
          </div>
        </div>

        <div className="page-wrap">
          {/* ── Contact Section ── */}
          <section className="contact">
            <div className="w-layout-blockcontainer container w-container">
              <div className="contact-inner">
                <div className="contact-image">
                  <div className="section-img">
                    <img
                      src="/images/contact us.png"
                      loading="lazy"
                      alt="Contact"
                      className="section-image"
                    />
                  </div>
                </div>

                <div className="contact-right reveal">
                  <div className="contact-top">
                    <img src={IC_INFO} loading="lazy" alt="Info" />
                    <div>Le moyen le plus rapide est de nous envoyer un message.</div>
                  </div>

                  <div className="contact-wrapper contact-two-cols">
                    <div className="contact-wrap">
                      <div className="contact-heading-wrap">
                        <img src={IC_MAIL} loading="lazy" alt="Mail" />
                        <div>Nous joindre</div>
                      </div>
                      <div className="contact-data">
                        <div className="contact-info">
                          <div className="contact-text">Email&nbsp;:</div>
                          <a
                            href="mailto:drbenzakouramal@gmail.com"
                            className="contact-link w-inline-block"
                          >
                            <div className="nav-top-line _02"></div>
                            <div>drbenzakouramal@gmail.com</div>
                            <div className="nav-bottom-line _02"></div>
                          </a>
                        </div>
                        <div className="contact-info">
                          <div className="contact-text">Rendez-vous&nbsp;:</div>
                          <a
                            href="tel:+212661143123"
                            className="contact-link w-inline-block"
                          >
                            <div className="nav-top-line _02"></div>
                            <div>+212 661 143 123</div>
                            <div className="nav-bottom-line _02"></div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="contact-wrap">
                      <div className="contact-heading-wrap">
                        <img src={IC_LOCATION} loading="lazy" alt="Adresse" />
                        <div>Adresse du cabinet</div>
                      </div>
                      <div className="body-small">
                        Angle Bd. Sidi Abderrahmane, Hay-Hassani, Casablanca
                      </div>
                    </div>
                  </div>
                  <div className="map w-embed w-iframe">
                    <iframe
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=Angle+Bd+Sidi+Abderrahmane,+Hay-Hassani,+Casablanca&hl=fr&z=15&output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact Form ── */}
          <section className="contact-form">
            <div className="w-layout-blockcontainer container w-container">
              <div className="form-wrapper">
                <div className="overflow-hidden">
                  <div className="form-heading reveal">
                    Contactez-nous pour toute demande, nous sommes &agrave;
                    votre &eacute;coute&nbsp;!
                  </div>
                </div>
                <div className="form-block w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    className="form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-inner">
                      <input
                        className="input w-input"
                        maxLength={256}
                        name="First-Name"
                        data-name="First Name"
                        placeholder="Pr&eacute;nom*"
                        type="text"
                        id="first-name"
                        required
                      />
                      <input
                        className="input w-input"
                        maxLength={256}
                        name="Last-Name"
                        data-name="Last Name"
                        placeholder="Nom"
                        type="text"
                        id="last-name"
                      />
                      <input
                        className="input w-input"
                        maxLength={256}
                        name="Phone"
                        data-name="Phone"
                        placeholder="T&eacute;l&eacute;phone*"
                        type="tel"
                        id="phone"
                        required
                      />
                      <input
                        className="input w-input"
                        maxLength={256}
                        name="Email"
                        data-name="Email"
                        placeholder="Email"
                        type="email"
                        id="Email"
                      />
                      <textarea
                        className="message w-input"
                        maxLength={5000}
                        name="Message"
                        data-name="Message"
                        placeholder="&Eacute;crivez votre message ici *"
                        id="message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="contact-submit-btn">
                      Prendre Rendez-vous
                    </button>
                  </form>
                  {formStatus === "success" && (
                    <div className="success-message">
                      <div>Merci&nbsp;! Votre demande a bien &eacute;t&eacute; envoy&eacute;e.</div>
                    </div>
                  )}
                  {formStatus === "error" && (
                    <div className="error-message">
                      <div>
                        Oups&nbsp;! Une erreur est survenue lors de l&apos;envoi du
                        formulaire.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ Section ── */}
          <section className="faq">
            <div className="w-layout-blockcontainer container w-container">
              <div className="section-title">
                <div className="sub-title">
                  <img src={IC_TITLE} loading="lazy" alt="Sub Title" />
                  <div>FAQ</div>
                </div>
                <h2 className="section-heading">Questions Fr&eacute;quentes</h2>
              </div>

              <div className="faq-wrapper">
                {faqItems.map((item, i) => (
                  <div key={i} className={`faq-data w-dropdown ${openIndex === i ? "open" : ""}`}>
                    <div
                      className={`que${i === 0 ? " top" : ""} w-dropdown-toggle`}
                      onClick={() => toggle(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") toggle(i);
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
                      className="ans w-dropdown-list"
                      style={{
                        height: openIndex === i ? "auto" : "0",
                        overflow: "hidden",
                        transition: "height 0.3s ease",
                      }}
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
        </div>
      </ScrollReveal>
      <Footer />
    </>
  );
}
