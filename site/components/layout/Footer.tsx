import Link from "next/link";

const IC_TITLE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_DOT =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";
const IC_YOUTUBE =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d4d00d6afd16dd6ff4d08_ic-youtube.svg";
const IC_TWITTER =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d4d00487cab9fb6978c8d_ic-twitter.svg";

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
              <a
                href="https://www.instagram.com/dr.benzakour.mohammedamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link ig"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer-social-link yt" aria-label="YouTube">
                <img src={IC_YOUTUBE} alt="YouTube" />
              </a>
              <a href="#" className="footer-social-link tw" aria-label="X (Twitter)">
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
              <a
                href="https://www.instagram.com/dr.benzakour.mohammedamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link ig"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer-social-link yt" aria-label="YouTube">
                <img src={IC_YOUTUBE} alt="YouTube" />
              </a>
              <a href="#" className="footer-social-link tw" aria-label="X (Twitter)">
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
                <Link href="/specialites/chirurgie-digestive-viscerale" className="footer-nav-link">
                  Chirurgie Digestive &amp; Viscérale
                </Link>
                <Link href="/specialites/chirurgie-oncologique" className="footer-nav-link">
                  Chirurgie Oncologique
                </Link>
                <Link href="/specialites/chirurgie-laparoscopique-robotique" className="footer-nav-link">
                  Chirurgie Laparoscopique &amp; Robotique
                </Link>
                <Link href="/specialites/cytoreduction-chip-hipec" className="footer-nav-link">
                  Cytoréduction &amp; CHIP (HIPEC)
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
                href="mailto:drmohammedamalbenzakour@gmail.com"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon footer-icon-svg" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>drmohammedamalbenzakour@gmail.com</span>
              </a>
              <a href="tel:+212522894419" className="footer-contact-item">
                <span className="footer-contact-icon footer-icon-svg" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>05 22 89 44 19</span>
              </a>
              <a href="tel:+212767494916" className="footer-contact-item">
                <span className="footer-contact-icon footer-icon-svg" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </span>
                <span>07 67 49 49 16</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Uptown+Business+Center+CFC+Bd+Moulay+Abdellah+Cherif+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon footer-icon-svg" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  Uptown Business Center, 5e étage N°9,
                  Immeuble D, CFC, Bd Moulay Abdellah Chérif, Casablanca
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
