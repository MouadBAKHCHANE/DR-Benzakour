import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import Link from "next/link";

const services = [
  {
    category: "Digestive",
    title: "Chirurgie Digestive & Viscérale",
    href: "/specialites/chirurgie-digestive-viscerale",
    image: "/images/spec-1.webp",
  },
  {
    category: "Oncologie",
    title: "Chirurgie Oncologique",
    href: "/specialites/chirurgie-oncologique",
    image: "/images/spec-5.webp",
  },
  {
    category: "Mini-Invasive",
    title: "Chirurgie Laparoscopique & Robotique",
    href: "/specialites/chirurgie-laparoscopique-robotique",
    image: "/images/spec-4.webp",
  },
  {
    category: "CHIP / HIPEC",
    title: "Cytoréduction & CHIP (HIPEC)",
    href: "/specialites/cytoreduction-chip-hipec",
    image: "/images/spec-2.webp",
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
