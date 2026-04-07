const IC_LOCATION =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691d8eded5d539bcc7ecac20_ic-location.svg";
const IC_CALENDAR_STAR =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_DOT =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";

export function AppointmentForm() {
  return (
    <section className="appointment-section" id="appointment">
      <div className="appointment-inner">
        {/* Left Side Content */}
        <div className="appointment-left">
          <div className="appointment-badge">
            <img src={IC_CALENDAR_STAR} alt="" />
            <span>Rendez-vous</span>
          </div>
          <h2 className="appointment-title">Demander une consultation.</h2>
          <p className="appointment-desc">Vos coordonnées seront transmises à notre secrétariat<br />qui vous contactera rapidement.</p>

          <div className="appointment-contact">
            <div className="appointment-contact-images">
              <svg className="appointment-contact-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="appointment-contact-info">
              <a href="tel:+212522894419" className="appointment-phone">05 22 89 44 19</a>
              <span className="appointment-call-text">Téléphone fixe</span>
            </div>
          </div>

          <div className="appointment-contact">
            <div className="appointment-contact-images">
              <svg className="appointment-contact-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <div className="appointment-contact-info">
              <a href="tel:+212767494916" className="appointment-phone">07 67 49 49 16</a>
              <span className="appointment-call-text">Téléphone portable</span>
            </div>
          </div>

          <div className="appointment-contact">
            <div className="appointment-contact-images">
              <svg className="appointment-contact-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="appointment-contact-info">
              <a href="mailto:drmohammedamalbenzakour@gmail.com" className="appointment-phone">drmohammedamalbenzakour@gmail.com</a>
              <span className="appointment-call-text">Envoyez-nous un email</span>
            </div>
          </div>

          <button type="button" data-appointment className="primary-button" style={{ marginTop: '32px' }}>
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

        {/* Right Side — Info */}
        <div className="appointment-right">
          <div className="appointment-info-row">
            <div className="appointment-info-block">
              <div className="appointment-info-heading">
                <img src={IC_CALENDAR_STAR} alt="" />
                <div>Jours de consultation</div>
              </div>
              <p className="appointment-info-text">Lundi au Vendredi, Samedi Matin</p>
            </div>

            <div className="appointment-info-block">
              <div className="appointment-info-heading">
                <img src={IC_LOCATION} alt="" />
                <div>Adresse du cabinet</div>
              </div>
              <p className="appointment-info-text">
                Uptown Business Center, 5e étage N°9,<br />
                Immeuble D, CFC,<br />
                Bd Moulay Abdellah Chérif,<br />
                Casablanca, Maroc
              </p>
            </div>
          </div>

          <div className="appointment-map">
            <iframe
              width="100%"
              height="420"
              style={{ border: 0, minHeight: 280 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Uptown+Business+Center+CFC+Bd+Moulay+Abdellah+Cherif+Casablanca&hl=fr&z=16&t=m&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
