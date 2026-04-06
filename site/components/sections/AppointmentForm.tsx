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
              <img className="appointment-contact-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6926c1c12be8b119d1077a19_ic-call.svg" alt="Phone" />
            </div>
            <div className="appointment-contact-info">
              <a href="tel:+212661143123" className="appointment-phone">+212 661 143 123</a>
              <span className="appointment-call-text">Appelez-nous</span>
            </div>
          </div>
          <div className="appointment-contact">
            <div className="appointment-contact-images">
              <img className="appointment-contact-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6926c1c11e3c5e430c5a5886_ic-msg.svg" alt="Email" />
            </div>
            <div className="appointment-contact-info">
              <a href="mailto:drbenzakouramal@gmail.com" className="appointment-phone">drbenzakouramal@gmail.com</a>
              <span className="appointment-call-text">Envoyez-nous un email</span>
            </div>
          </div>
        </div>

        {/* Right Side — Info */}
        <div className="appointment-right">
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
              Angle Bd. Sidi Abderrahmane,<br />Hay-Hassani, Casablanca
            </p>
          </div>

          <div className="appointment-map">
            <iframe
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Angle+Bd+Sidi+Abderrahmane,+Hay-Hassani,+Casablanca&hl=fr&z=15&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="appointment-cta-wrap">
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
      </div>
    </section>
  );
}
