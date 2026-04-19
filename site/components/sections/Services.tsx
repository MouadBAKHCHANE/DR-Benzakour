import { getHomePage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c51686118fbd9369a33f9_e05520c736f24c95da8c1c5278672026_ic-arrow.svg";

export async function Services() {
  const data = await getHomePage();

  const fallbackServices = [
    {
      tag: "Digestive",
      icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692d749d1d61071ab867c798_ic-service-06.svg",
      title: "Chirurgie Digestive & Viscérale",
      description: "Pathologies hépato-biliaires, œsogastriques, paroi abdominale et urgences digestives.",
      link: "chirurgie-digestive-viscerale",
    },
    {
      tag: "Oncologie",
      icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692592b567c63ea9127cfa42_ic-service-05.svg",
      title: "Chirurgie Oncologique",
      description: "Cancers digestifs et gynécologiques pris en charge avec une expertise de trois décennies.",
      link: "chirurgie-oncologique",
    },
    {
      tag: "Mini-Invasive",
      icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692592ac3fda55b39bc1128e_ic-service-04.svg",
      title: "Chirurgie Laparoscopique & Robotique",
      description: "Coelioscopie et robotique : moins de cicatrices, plus de précision, récupération accélérée.",
      link: "chirurgie-laparoscopique-robotique",
    },
    {
      tag: "CHIP",
      icon: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692592a3bd4d017567b9546a_ic-service-03.svg",
      title: "Cytoréduction & CHIP (HIPEC)",
      description: "Traitement combiné de la carcinose péritonéale par chirurgie et chimiothérapie hyperthermique.",
      link: "cytoreduction-chip-hipec",
    },
  ];

  const servicesToRender = data?.servicesList?.length ? data.servicesList : fallbackServices;

  return (
    <section className="service">
      <div className="container">
        <div className="section-title reveal">
          <div className="sub-title">
            <img src={IC_TITLE} alt="" />
            {data?.servicesTagline || "Nos Spécialités"}
          </div>
          <h2 className="section-heading">{data?.servicesHeading || "Domaines d'Expertise"}</h2>
        </div>
        <div className="service-list-02">
          {servicesToRender.map((s: any, i: number) => {
            const iconUrl = s.icon 
              ? (s.icon.asset ? urlForImage(s.icon).url() : (typeof s.icon === 'string' ? s.icon : "")) 
              : "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692d749d1d61071ab867c798_ic-service-06.svg";
              
            return (
              <div key={s.link || i} className={`service-box reveal${i > 0 ? ` reveal-d${i}` : ""}`}>
                <div className="service-top">
                  <span className="service-tag">{s.tag}</span>
                  <div className="service-icon-wrap">
                    {iconUrl && <img className="service-icon" src={iconUrl} alt={s.title} loading="lazy" />}
                  </div>
                </div>
                <div className="service-middle">
                  <div className="service-main-text">{s.title}</div>
                  <div className="service-divider"></div>
                  <div className="service-desc">{s.description || s.desc}</div>
                </div>
                <div className="service-bottom">
                  <a href={`/specialites/${s.link || s.href?.replace('/specialites/', '')}`} className="secondary-button">
                    Voir Détails <img src={IC_ARROW} alt="" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
