import { getHomePage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

export async function Hero() {
  const data = await getHomePage();

  return (
    <section className="hero" id="hero">
      <div className="hero-main-img">
        <img 
          className="hero-main-image" 
          src={data?.heroImage ? urlForImage(data.heroImage).url() : "/images/hero.webp"} 
          alt="Dr. Benzakour" 
          loading="eager" 
        />
      </div>
      <div className="hero-inner">
        <div className="container hero-content-area">
          <div className="hero-wrapper">
            <h1 className="hero-heading">{data?.heroTitle || "Votre Santé, Notre Mission"}</h1>
            <p className="hero-info" style={{ whiteSpace: "pre-wrap" }}>
              {data?.heroDescription || `Dr Benzakour Mohammed Amal, spécialiste
en Chirurgie Digestive et Viscérale,
Coelioscopique & Robotique.
Expert en Chirurgie Oncologique Viscérale
et Péritonéale (HIPEC/CRS) à Casablanca.`}
            </p>
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
            {(data?.heroMarquee?.length ? data.heroMarquee : [
              "Chirurgie Robotique", "Chirurgie Oncologique", "CRS & HIPEC", 
              "Chirurgie Digestive", "Chirurgie Bariatrique", "Chirurgie HBP"
            ]).map((service: string, index: number) => (
              <div className="hero-block" key={`orig-${index}`}>
                <a href="#" className="service-link">{service}</a>
                <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
              </div>
            ))}
            {/* Duplicated services for seamless loop */}
            {(data?.heroMarquee?.length ? data.heroMarquee : [
               "Chirurgie Robotique", "Chirurgie Oncologique", "CRS & HIPEC", 
               "Chirurgie Digestive", "Chirurgie Bariatrique", "Chirurgie HBP"
            ]).map((service: string, index: number) => (
              <div className="hero-block" key={`dup-${index}`}>
                <a href="#" className="service-link">{service}</a>
                <img className="ic-title" src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
