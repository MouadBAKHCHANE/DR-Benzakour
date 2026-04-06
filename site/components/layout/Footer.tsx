import Link from "next/link";

const IC_TITLE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_DOT =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";
const IC_YOUTUBE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d4d00d6afd16dd6ff4d08_ic-youtube.svg";
const IC_TWITTER =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d4d00487cab9fb6978c8d_ic-twitter.svg";
const IC_MSG =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6926c1c11e3c5e430c5a5886_ic-msg.svg";
const IC_CALL =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6926c1c12be8b119d1077a19_ic-call.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Left Panel - Dark */}
        <div className="footer-left">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <img
                src="/images/Logo_Dr._Benzakour_Mohammed_Amal_horz-removebg.webp"
                alt="Oncodigest - Dr. Benzakour"
                className="brand-logo footer-brand-logo"
              />
            </Link>
            <div className="footer-about-label">
              <img src={IC_TITLE} alt="" />
              À PROPOS
            </div>
            <p className="footer-description">
              Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique &amp; Robotique.<br />Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca
            </p>
            {/* Socials - Mobile Only (Below Description) */}
            <div className="footer-socials mobile-only">
              <a href="#" className="footer-social-link yt">
                <img src={IC_YOUTUBE} alt="YouTube" />
              </a>
              <a href="#" className="footer-social-link tw">
                <img src={IC_TWITTER} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="footer-cta">
            <button type="button" data-appointment className="primary-button">
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
            <div className="footer-socials desktop-only">
              <a href="#" className="footer-social-link yt">
                <img src={IC_YOUTUBE} alt="YouTube" />
              </a>
              <a href="#" className="footer-social-link tw">
                <img src={IC_TWITTER} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel - Light */}
        <div className="footer-right">
          <div className="footer-nav-section">
            <div className="footer-nav-group">
              <div className="footer-nav-title">
                <img src={IC_TITLE} alt="" />
                NAVIGATION
              </div>
              <div className="footer-nav-links">
                <Link href="/" className="footer-nav-link">
                  Accueil
                </Link>
                <Link href="/a-propos" className="footer-nav-link">
                  À Propos
                </Link>
                <Link href="/actualites" className="footer-nav-link">
                  Actualités
                </Link>
                <Link href="/contact" className="footer-nav-link">
                  Contact
                </Link>
                <Link href="/confidentialite" className="footer-nav-link">
                  Politique de Confidentialité
                </Link>
              </div>
            </div>
            <div className="footer-nav-group">
              <div className="footer-nav-title">
                <img src={IC_TITLE} alt="" />
                SPÉCIALITÉS
              </div>
              <div className="footer-nav-links">
                <Link href="/specialites" className="footer-nav-link">
                  Nos Spécialités
                </Link>
                <Link href="/specialites/chirurgie-viscerale" className="footer-nav-link">
                  Chirurgie Viscérale &amp; Digestive
                </Link>
                <Link href="/specialites/chirurgie-robotique" className="footer-nav-link">
                  Chirurgie Robotique
                </Link>
                <Link href="/specialites/chirurgie-mini-invasive" className="footer-nav-link">
                  Chirurgie Mini-Invasive
                </Link>
                <Link href="/specialites/cancerologie-digestive" className="footer-nav-link">
                  Cancérologie Digestive
                </Link>
                <Link href="/specialites/raac" className="footer-nav-link">
                  RAAC &mdash; Récupération
                </Link>
                <Link href="/specialites/consultation-specialisee" className="footer-nav-link">
                  Consultation Spécialisée
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-title">
              <img src={IC_TITLE} alt="" />
              NOUS CONTACTER
            </div>
            <div className="footer-contact-list">
              <a
                href="mailto:drbenzakouramal@gmail.com"
                className="footer-contact-item"
              >
                <img className="footer-contact-icon" src={IC_MSG} alt="" />
                <span>drbenzakouramal@gmail.com</span>
              </a>
              <a href="tel:+212661143123" className="footer-contact-item">
                <img className="footer-contact-icon" src={IC_CALL} alt="" />
                <span>+212 661 143 123</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Angle+Bd+Sidi+Abderrahmane+et+Route+d%27Azemour+Hay-Hassani+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <img className="footer-contact-icon" src={IC_TITLE} alt="" />
                <span>
                  Angle Bd. Sidi Abderrahmane et Route d&rsquo;Azemour,
                  Hay-Hassani, Casablanca
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          &copy; 2025 Dr. Benzakour - Casablanca
        </span>
        <div className="footer-credits">
          <span>Conçu par</span>
          <a href="https://wa.me/212611714711" target="_blank">
            MouaDev
          </a>
        </div>
      </div>
    </footer>
  );
}
