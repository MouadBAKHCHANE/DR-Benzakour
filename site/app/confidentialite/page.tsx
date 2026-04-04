import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ConfidentialitePage() {
  return (
    <ScrollReveal>
      <Navbar />

      <div className="page-title">
        <div className="container">
          <div className="pg-inner">
            <h1 className="main-heading reveal">Politique de Confidentialité</h1>
            <p className="pg-title-text">
              Nous nous engageons à protéger vos données personnelles et à respecter votre vie privée.
            </p>
          </div>
        </div>
      </div>

      <div className="page-wrap">
        <section className="doctor-details-section">
          <div className="container">
            <div className="details-wrapper">
              <div className="details-block reveal">
                <h3 className="details-heading">Introduction</h3>
                <div className="details-content">
                  <p>Le cabinet du Dr. Mohammed Amal Benzakour, situé à Casablanca, accorde une importance primordiale à la protection de vos données personnelles. La présente politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web ou nos services.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Données collectées</h3>
                <div className="details-content">
                  <p>Nous pouvons collecter les informations suivantes :</p>
                  <ul className="parcours-list">
                    <li>Nom, prénom et coordonnées (téléphone, email)</li>
                    <li>Informations relatives à votre demande de rendez-vous</li>
                    <li>Messages envoyés via le formulaire de contact</li>
                    <li>Données de navigation (cookies, adresse IP, pages consultées)</li>
                  </ul>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Utilisation des données</h3>
                <div className="details-content">
                  <p>Vos données personnelles sont utilisées exclusivement pour :</p>
                  <ul className="parcours-list">
                    <li>Répondre à vos demandes de consultation et de rendez-vous</li>
                    <li>Assurer le suivi médical et administratif de votre dossier</li>
                    <li>Améliorer la qualité de nos services et de notre site web</li>
                    <li>Vous contacter en cas de nécessité liée à votre prise en charge</li>
                  </ul>
                  <p>Vos informations ne seront jamais vendues, louées ou partagées avec des tiers à des fins commerciales.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Protection des données</h3>
                <div className="details-content">
                  <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction.</p>
                  <p>L&rsquo;accès à vos données est strictement limité au personnel médical et administratif du cabinet, dans le cadre de leurs fonctions.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Cookies</h3>
                <div className="details-content">
                  <p>Notre site utilise des cookies pour améliorer votre expérience de navigation. Ces cookies permettent de mémoriser vos préférences et d&rsquo;analyser le trafic du site. Vous pouvez à tout moment modifier les paramètres de votre navigateur pour refuser les cookies.</p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Vos droits</h3>
                <div className="details-content">
                  <p>Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l&rsquo;égard du traitement des données à caractère personnel, vous disposez des droits suivants :</p>
                  <ul className="parcours-list">
                    <li>Droit d&rsquo;accès à vos données personnelles</li>
                    <li>Droit de rectification des données inexactes</li>
                    <li>Droit de suppression de vos données</li>
                    <li>Droit d&rsquo;opposition au traitement de vos données</li>
                  </ul>
                  <p>Pour exercer ces droits, contactez-nous à l&rsquo;adresse : <a href="mailto:drbenzakouramal@gmail.com" style={{ color: "#0a2c35", textDecoration: "underline" }}>drbenzakouramal@gmail.com</a></p>
                </div>
              </div>

              <div className="details-block reveal">
                <h3 className="details-heading">Contact</h3>
                <div className="details-content">
                  <p>Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :</p>
                  <ul className="parcours-list">
                    <li>Email : drbenzakouramal@gmail.com</li>
                    <li>Téléphone : +212 661 143 123</li>
                    <li>Adresse : Angle Bd. Sidi Abderrahmane et Route d&rsquo;Azemour, Hay-Hassani, Casablanca</li>
                  </ul>
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
