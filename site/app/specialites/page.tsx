import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import Link from "next/link";

const services = [
  {
    category: "Chirurgie Générale",
    title: "Chirurgie Viscérale et Digestive",
    href: "/specialites/chirurgie-viscerale",
    image: "/images/spec-1.png",
    srcSet: "",
  },
  {
    category: "Innovation Technologique",
    title: "Chirurgie Robotique",
    href: "/specialites/chirurgie-robotique",
    image: "/images/spec-4.png",
    srcSet: "",
  },
  {
    category: "Techniques Avancées",
    title: "Chirurgie Mini-Invasive",
    href: "/specialites/chirurgie-mini-invasive",
    image: "/images/spec-2.png",
    srcSet: "",
  },
  {
    category: "Oncologie",
    title: "Cancérologie Digestive",
    href: "/specialites/cancerologie-digestive",
    image: "/images/spec-5.png",
    srcSet: "",
  },
  {
    category: "Protocole Innovant",
    title: "RAAC — Récupération Améliorée",
    href: "/specialites/raac",
    image:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204ed3536e9ba4c261d06d_service-thumb-02.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204ed3536e9ba4c261d06d_service-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204ed3536e9ba4c261d06d_service-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204ed3536e9ba4c261d06d_service-thumb-02.webp 872w",
  },
  {
    category: "Suivi Médical",
    title: "Consultation Spécialisée",
    href: "/specialites/consultation",
    image:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204edad03f115b68897d2a_service-thumb-01.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204edad03f115b68897d2a_service-thumb-01-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204edad03f115b68897d2a_service-thumb-01-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204edad03f115b68897d2a_service-thumb-01.webp 872w",
  },
];

export default function SpecialitesPage() {
  return (
    <ScrollReveal>
      <Navbar />

      {/* ── Page Title ── */}
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pg-inner">
            <h1 className="main-heading reveal">Nos Spécialités</h1>
            <p className="pg-title-text">
              Découvrez notre expertise en chirurgie viscérale, digestive et
              robotique au service de votre santé.
            </p>
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="page-wrap">
        <section className="service">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-dyn-list">
              <div role="list" className="service-list w-dyn-items">
                {services.map((svc) => (
                  <div
                    key={svc.href}
                    role="listitem"
                    className="service-item w-dyn-item"
                  >
                    <Link href={svc.href} className="service-block w-inline-block reveal">
                      <div className="service-img">
                        <img
                          src={svc.image}
                          loading="lazy"
                          alt={svc.title}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 726.625px, 939.15625px"
                          srcSet={svc.srcSet}
                          className="service-image"
                        />
                      </div>
                      <div className="service-wrap">
                        <div className="service-text">{svc.category}</div>
                        <div className="service-text-02">{svc.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>


      <Footer />
    </ScrollReveal>
  );
}
