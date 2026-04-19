import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { getSpecialtiesPage, getAllSpecialties } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import Link from "next/link";

export const metadata = {
  title: "Spécialités - Dr. Benzakour",
  description: "Découvrez notre expertise en chirurgie viscérale, digestive et robotique.",
};

export default async function SpecialitesPage() {
  const pageData = await getSpecialtiesPage();
  const specialties = await getAllSpecialties();

  const title = pageData?.title || "Nos Spécialités";
  const subtitle = pageData?.subtitle || "Découvrez notre expertise en chirurgie viscérale, digestive et robotique au service de votre santé.";

  return (
    <ScrollReveal>
      <Navbar />

      {/* ── Page Title ── */}
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pg-inner">
            <h1 className="main-heading reveal">{title}</h1>
            <p className="pg-title-text">
              {subtitle}
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
                {specialties.map((svc: any) => (
                  <div
                    key={svc._id}
                    role="listitem"
                    className="service-item w-dyn-item"
                  >
                    <Link href={`/specialites/${svc.slug?.current}`} className="service-block w-inline-block reveal">
                      <div className="service-img">
                        <img
                          src={svc.image ? urlForImage(svc.image).url() : "/images/spec-1.webp"}
                          loading="lazy"
                          alt={svc.name}
                          className="service-image"
                        />
                      </div>
                      <div className="service-wrap">
                        <div className="service-text">{svc.tag}</div>
                        <div className="service-text-02">{svc.name}</div>
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
