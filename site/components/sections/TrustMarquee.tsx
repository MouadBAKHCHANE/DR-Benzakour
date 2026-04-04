export function TrustMarquee() {
  return (
    <section className="trusted-section">
      {/* Marquee */}
      <div className="trusted-marquee">
        {/* Original texts */}
        <span><span>Excellence Chirurgicale</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        <span><span>Innovation Médicale</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        <span><span>Soins de Confiance</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        <span><span>Expertise Reconnue</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        {/* Duplicated texts for seamless loop */}
        <span><span>Excellence Chirurgicale</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        <span><span>Innovation Médicale</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        <span><span>Soins de Confiance</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
        <span><span>Expertise Reconnue</span> <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg" alt="" /></span>
      </div>

      {/* Bottom Section */}
      <div className="trusted-bottom reveal">
        {/* Description Text */}
        <div className="trusted-data">
          <p>Le Dr Benzakour s&rsquo;engage à offrir des soins chirurgicaux avancés et accessibles, combinant expertise médicale et attention personnalisée.</p>
          <p>Très impliqué dans l&rsquo;évolution de la médecine au Maroc, il collabore avec des organisations de premier plan et participe activement à des conférences sur la médecine de demain.</p>
        </div>

        {/* Values Section */}
        <div className="trusted-wrapper">
          {/* Image */}
          <div className="trusted-img">
            <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35fd4e2aaff92867a82_trusted.webp" alt="Trusted" loading="lazy" />
          </div>

          {/* Values List */}
          <div className="trusted-wrap">
            <div className="trusted-block top">
              <div className="trusted-info">
                <span className="body-small">01</span>
                <div>Diagnostic Précis</div>
              </div>
              <img className="trusted-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35f3a3075be20c47fa4_ic-trusted-01.svg" alt="" loading="lazy" />
            </div>
            <div className="trusted-block">
              <div className="trusted-info">
                <span className="body-small">02</span>
                <div>Techniques Mini-Invasives</div>
              </div>
              <img className="trusted-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35f8f1db73c0c58b8f7_ic-trusted-02.svg" alt="" loading="lazy" />
            </div>
            <div className="trusted-block">
              <div className="trusted-info">
                <span className="body-small">03</span>
                <div>Pratique Éthique</div>
              </div>
              <img className="trusted-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a360167ce2fed3198d33_ic-trusted-03.svg" alt="" loading="lazy" />
            </div>
            <div className="trusted-block">
              <div className="trusted-info">
                <span className="body-small">04</span>
                <div>Suivi Personnalisé</div>
              </div>
              <img className="trusted-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35f3606afaaa24586bc_ic-trusted-04.svg" alt="" loading="lazy" />
            </div>
            <div className="trusted-block">
              <div className="trusted-info">
                <span className="body-small">05</span>
                <div>Soins Bienveillants</div>
              </div>
              <img className="trusted-icon" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35fbc1302600ed9652b_ic-trusted-05.svg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
