const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c51686118fbd9369a33f9_e05520c736f24c95da8c1c5278672026_ic-arrow.svg";

const services = [
  {
    tag: "Digestive",
    icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692d749d1d61071ab867c798_ic-service-06.svg",
    title: "Chirurgie Digestive & Viscérale",
    desc: "Pathologies hépato-biliaires, œsogastriques, paroi abdominale et urgences digestives.",
    href: "/specialites/chirurgie-digestive-viscerale",
  },
  {
    tag: "Oncologie",
    icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692592b567c63ea9127cfa42_ic-service-05.svg",
    title: "Chirurgie Oncologique",
    desc: "Cancers digestifs et gynécologiques pris en charge avec une expertise de trois décennies.",
    href: "/specialites/chirurgie-oncologique",
  },
  {
    tag: "Mini-Invasive",
    icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692592ac3fda55b39bc1128e_ic-service-04.svg",
    title: "Chirurgie Laparoscopique & Robotique",
    desc: "Coelioscopie et robotique : moins de cicatrices, plus de précision, récupération accélérée.",
    href: "/specialites/chirurgie-laparoscopique-robotique",
  },
  {
    tag: "CHIP",
    icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692592a3bd4d017567b9546a_ic-service-03.svg",
    title: "Cytoréduction & CHIP (HIPEC)",
    desc: "Traitement combiné de la carcinose péritonéale par chirurgie et chimiothérapie hyperthermique.",
    href: "/specialites/cytoreduction-chip-hipec",
  },
];

export function Services() {
  return (
    <section className="service">
      <div className="container">
        <div className="section-title reveal">
          <div className="sub-title">
            <img src={IC_TITLE} alt="" />
            Nos Spécialités
          </div>
          <h2 className="section-heading">Domaines d&rsquo;Expertise</h2>
        </div>
        <div className="service-list-02">
          {services.map((s, i) => (
            <div key={s.href} className={`service-box reveal${i > 0 ? ` reveal-d${i}` : ""}`}>
              <div className="service-top">
                <span className="service-tag">{s.tag}</span>
                <div className="service-icon-wrap">
                  <img className="service-icon" src={s.icon} alt="" loading="lazy" />
                </div>
              </div>
              <div className="service-middle">
                <div className="service-main-text">{s.title}</div>
                <div className="service-divider"></div>
                <div className="service-desc">{s.desc}</div>
              </div>
              <div className="service-bottom">
                <a href={s.href} className="secondary-button">
                  Voir Détails <img src={IC_ARROW} alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
