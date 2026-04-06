export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-main-img">
        <img className="hero-main-image" src="/images/hero.png" alt="Dr. Benzakour" loading="eager" />
      </div>
      <div className="hero-inner">
        <div className="container hero-content-area">
          <div className="hero-wrapper">
            <h1 className="hero-heading">Votre Santé, Notre Mission</h1>
            <p className="hero-info">Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique &amp; Robotique.<br />Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca</p>
            <a href="/specialites" className="primary-button">
              <div className="arrow-wrap _01">
                <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
              </div>
              <div className="primary-text">
                <div>Nos Spécialités</div>
              </div>
              <div className="arrow-wrap _02">
                <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
              </div>
            </a>
          </div>

        </div>
        <div className="hero-service-wrapper">
          <div className="hero-service-wrap">
            {/* Original services */}
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Robotique</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Oncologique</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">CRS &amp; HIPEC</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Digestive</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Bariatrique</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie HBP</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            {/* Duplicated services for seamless loop */}
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Robotique</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Oncologique</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">CRS &amp; HIPEC</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Digestive</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie Bariatrique</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
            <div className="hero-block">
              <a href="#" className="service-link">Chirurgie HBP</a>
              <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
