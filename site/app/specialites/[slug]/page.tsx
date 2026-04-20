import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { getSpecialtyBySlug, getAllSpecialties } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { medicalServiceJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getSpecialtyBySlug(slug);

  if (!service) return { title: "Spécialité non trouvée" };

  return {
    title: service.seoTitle || service.name,
    description: service.seoDescription || service.intro || `Expertise en ${service.name} à Casablanca.`,
    keywords: service.seoKeywords || [service.name, "Chirurgien Casablanca", "Expertise"],
    robots: service.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: service.seoTitle || service.name,
      description: service.seoDescription,
      images: service.ogImage ? [urlForImage(service.ogImage).url()] : [],
    }
  };
}

/* ── CDN assets ── */
const IC_ARROW_DOT =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";

/* ── Static params ── */
export async function generateStaticParams() {
  const specialties = await getAllSpecialties();
  return specialties.map((s: any) => ({ slug: s.slug?.current }));
}

/* ── Page component ── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getSpecialtyBySlug(slug);
  if (!service) notFound();

  const jsonLd = [
    medicalServiceJsonLd(service),
    breadcrumbJsonLd([
      { name: "Accueil", url: "https://www.cabinetdrbenzakour.ma" },
      { name: "Spécialités", url: "https://www.cabinetdrbenzakour.ma/specialites" },
      { name: service.name, url: `https://www.cabinetdrbenzakour.ma/specialites/${slug}` },
    ])
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ScrollReveal>
        {/* ── Page Title ── */}
        <div className="page-title">
          <div className="w-layout-blockcontainer container w-container">
            <div className="pg-inner">
              <h1 className="main-heading reveal">{service.name}</h1>
              <p className="pg-title-text">{service.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="page-wrap">
          {/* ── Service Main ── */}
          <section className="service-main">
            <div className="w-layout-blockcontainer container w-container">
              <div className="service-main-img">
                <img
                  src={service.heroImage ? urlForImage(service.heroImage).url() : (service.image ? urlForImage(service.image).url() : "/images/spec-1.webp")}
                  loading="eager"
                  alt={service.name}
                  className="service-main-image reveal"
                />
              </div>

              <div className="service-main-details reveal">
                <div className="service-details">
                  {service.sections?.map((section: any, i: number) => (
                    <div key={i} className="service-content-section">
                      <h3>{section.heading}</h3>
                      
                      {section.content && (
                        typeof section.content === 'string' 
                          ? <p>{section.content}</p> 
                          : <PortableText value={section.content} />
                      )}

                      {section.list && (
                        <ul className="service-feature-list" role="list">
                          {section.list.map((item: string, j: number) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                      
                      {section.stats && (
                        <div className="service-stats-grid">
                          {section.stats.map((stat: any, k: number) => (
                            <div key={k} className="service-stat">
                              <div className="service-stat-value">{stat.value}</div>
                              <div className="service-stat-label">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.quote && (
                        <blockquote className="service-quote">
                          {section.quote}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>

                <button type="button" data-appointment className="primary-button">
                  <div className="arrow-wrap _01">
                    <img loading="lazy" src={IC_ARROW_DOT} alt="Arrow" />
                  </div>
                  <div className="primary-text">
                    <div>Prendre Rendez-vous</div>
                  </div>
                  <div className="arrow-wrap _02">
                    <img loading="lazy" src={IC_ARROW_DOT} alt="Arrow" />
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* ── Appointment Section ── */}
          <AppointmentForm />
        </div>
      </ScrollReveal>
      <Footer />
    </>
  );
}
