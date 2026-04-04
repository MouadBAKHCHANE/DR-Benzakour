import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function MentionsLegalesPage() {
  return (
    <ScrollReveal>
      <Navbar />

      <div className="page-title">
        <div className="container">
          <div className="pg-inner">
            <h1 className="main-heading reveal">Mentions Légales</h1>
            <p className="pg-title-text">
              Informations légales relatives au site du Dr. Benzakour Mohammed Amal.
            </p>
          </div>
        </div>
      </div>

      <div className="page-wrap">
        <section className="doctor-details-section">
          <div className="container">
            <div className="details-wrapper">
              <div className="details-block reveal">
                <h3 className="details-heading">Éditeur du site</h3>
                <div className="details-content">
                  <ul className="parcours-list">
                    <li>Dr. Mohammed Amal Benzakour</li>
                    <li>Chirurgien spécialiste en chirurgie viscérale, digestive et robotique</li>
                    <li>Adresse : Angle Bd. Sidi Abderrahmane et Route d&rsquo;Azemour, Hay-Hassani, Casablanca, Maroc</li>
                    <li>Téléphone : +212 661 143 123</li>
                    <li>Email : drbenzakouramal@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Conception et développement</h3>
                <div className="details-content">
                  <p>Ce site a été conçu et développé par :</p>
                  <ul className="parcours-list">
                    <li>MouaDev</li>
                    <li>Contact : <a href="https://wa.me/212611714711" target="_blank" style={{ color: "#0a2c35", textDecoration: "underline" }}>+212 611 714 711</a></li>
                  </ul>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Hébergement</h3>
                <div className="details-content">
                  <p>Le site est hébergé par Vercel Inc., dont le siège social est situé à San Francisco, Californie, États-Unis.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Propriété intellectuelle</h3>
                <div className="details-content">
                  <p>L&rsquo;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, vidéos) est la propriété exclusive du Dr. Mohammed Amal Benzakour, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Responsabilité</h3>
                <div className="details-content">
                  <p>Les informations fournies sur ce site le sont à titre informatif uniquement et ne sauraient se substituer à un avis médical professionnel. Le Dr. Benzakour décline toute responsabilité quant à l&rsquo;utilisation qui pourrait être faite des informations présentes sur ce site.</p>
                  <p>Le site peut contenir des liens vers des sites tiers. Le Dr. Benzakour n&rsquo;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Données personnelles</h3>
                <div className="details-content">
                  <p>Le traitement des données personnelles collectées via ce site est soumis à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l&rsquo;égard du traitement des données à caractère personnel. Pour plus d&rsquo;informations, consultez notre <a href="/confidentialite" style={{ color: "#0a2c35", textDecoration: "underline" }}>Politique de Confidentialité</a>.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Droit applicable</h3>
                <div className="details-content">
                  <p>Le présent site et ses mentions légales sont régis par le droit marocain. En cas de litige, les tribunaux de Casablanca seront seuls compétents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </ScrollReveal>
  );
}
