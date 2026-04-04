export function AppointmentForm() {
  return (
    <section className="appointment-section" id="appointment">
      <div className="appointment-inner">
        {/* Left Side Content */}
        <div className="appointment-left">
          <div className="appointment-badge">
            <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
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

        {/* Right Side Form */}
        <form className="appointment-form" id="appointmentForm">
          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" name="name" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-input" name="phone" placeholder="Numéro de téléphone" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="date" className="form-input" name="date" required />
            </div>
            <div className="form-group">
              <input type="time" className="form-input" name="time" required />
            </div>
          </div>
          <div className="form-group full-width">
            <input type="email" className="form-input" name="email" placeholder="Adresse email" required />
          </div>
          <div className="form-group full-width">
            <textarea className="form-textarea" name="message" placeholder="Votre message" required></textarea>
          </div>
          <div className="form-bottom">
            <p className="form-privacy">Votre vie privée est notre priorité. Vos informations ne seront utilisées qu&rsquo;avec votre consentement explicite.</p>
            <button type="submit" className="primary-button">
              <div className="arrow-wrap _01">
                <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
              </div>
              <div className="primary-text">
                <div>Prendre Rendez-vous</div>
              </div>
              <div className="arrow-wrap _02">
                <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
