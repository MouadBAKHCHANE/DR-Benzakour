export function Inquiry() {
  return (
    <section className="inquiry-section">
      <div className="container">
        <div className="inquiry-inner reveal">
          <div className="section-title">
            <div className="sub-title">
              <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
              Consultation
            </div>
            <h2 className="section-heading">Prendre Rendez-vous</h2>
          </div>
          <div className="inquiry-wrapper">
            <a href="tel:+212522894419" className="inquiry-block">
              <div>Planifier un Appel</div>
              <div className="inquiry-icon-wrap">
                <img className="inquiry-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6926c1c12be8b119d1077a19_ic-call.svg" alt="" />
              </div>
            </a>
            <a href="/contact" className="inquiry-block">
              <div>Envoyer un Message</div>
              <div className="inquiry-icon-wrap">
                <img className="inquiry-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6926c1c11e3c5e430c5a5886_ic-msg.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
