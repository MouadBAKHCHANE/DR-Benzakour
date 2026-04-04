export function Doctors() {
  return (
    <section className="doctors">
      <div className="container">
        <div className="section-title reveal">
          <div className="sub-title">
            <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
            Formation
          </div>
          <h2 className="section-heading">Parcours Académique</h2>
        </div>
        <div className="doctors-list-02">
          {/* Credential 1 */}
          <div className="doctores-block reveal">
            <div className="doctor-wrap">
              <span className="doctor-specialty">Doctorat</span>
              <span className="doctor-text">Médecine</span>
            </div>
            <div className="doctors-img-wrap">
              <div className="doctor-img">
                <img className="doctor-image" src="https://placehold.co/200x200/0a2c35/b2e4f1?text=Univ.+Lorraine" alt="Médecine" loading="lazy" />
              </div>
              <div className="doctor-data">
                <span>Doctorat en Médecine</span>
                <span>Université de Lorraine</span>
              </div>
            </div>
          </div>
          {/* Credential 2 */}
          <div className="doctores-block reveal reveal-d1">
            <div className="doctor-wrap">
              <span className="doctor-specialty">Spécialisation</span>
              <span className="doctor-text">Chirurgie Viscérale</span>
            </div>
            <div className="doctors-img-wrap">
              <div className="doctor-img">
                <img className="doctor-image" src="https://placehold.co/200x200/0a2c35/b2e4f1?text=Sp%C3%A9cialisation" alt="Chirurgie Viscérale" loading="lazy" />
              </div>
              <div className="doctor-data">
                <span>Chirurgie Viscérale et Digestive</span>
                <span>Formation Complète</span>
              </div>
            </div>
          </div>
          {/* Credential 3 */}
          <div className="doctores-block reveal reveal-d2">
            <div className="doctor-wrap">
              <span className="doctor-specialty">DU Paris</span>
              <span className="doctor-text">Chirurgie Robotique</span>
            </div>
            <div className="doctors-img-wrap">
              <div className="doctor-img">
                <img className="doctor-image" src="https://placehold.co/200x200/0a2c35/b2e4f1?text=Univ.+Paris" alt="Chirurgie Robotique" loading="lazy" />
              </div>
              <div className="doctor-data">
                <span>Diplôme Universitaire</span>
                <span>Chirurgie Robotique Digestive</span>
              </div>
            </div>
          </div>
          {/* Credential 4 */}
          <div className="doctores-block reveal reveal-d3">
            <div className="doctor-wrap">
              <span className="doctor-specialty">DIU Paris</span>
              <span className="doctor-text">Chirurgie HBP</span>
            </div>
            <div className="doctors-img-wrap">
              <div className="doctor-img">
                <img className="doctor-image" src="https://placehold.co/200x200/0a2c35/b2e4f1?text=DIU+Paris" alt="Chirurgie HBP" loading="lazy" />
              </div>
              <div className="doctor-data">
                <span>Diplôme Inter-Universitaire</span>
                <span>Chirurgie Hépato-Bilio-Pancréatique</span>
              </div>
            </div>
          </div>
          {/* Credential 5 */}
          <div className="doctores-block reveal reveal-d4">
            <div className="doctor-wrap">
              <span className="doctor-specialty">DUCLA</span>
              <span className="doctor-text">Laparoscopie</span>
            </div>
            <div className="doctors-img-wrap">
              <div className="doctor-img">
                <img className="doctor-image" src="https://placehold.co/200x200/0a2c35/b2e4f1?text=DUCLA+Paris" alt="Laparoscopie" loading="lazy" />
              </div>
              <div className="doctor-data">
                <span>DUCLA - Paris</span>
                <span>Chirurgie Laparoscopique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
