import { getAboutPage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HorizontalScroll } from "./HorizontalScroll";
import type { Metadata } from "next";

const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPage();
  const title = data?.seoTitle || "À Propos - Dr. Benzakour";
  const description =
    data?.seoDescription ||
    "Découvrez le parcours du Dr. Mohammed Amal Benzakour, chirurgien spécialiste à Casablanca.";
  const ogImage = data?.ogImage ? urlForImage(data.ogImage).width(1200).height(630).url() : undefined;

  return {
    title,
    description,
    keywords: data?.seoKeywords,
    alternates: { canonical: "/a-propos" },
    robots: data?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: "/a-propos",
      type: "website",
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function AboutPage() {
  const data = await getAboutPage();

  if (!data) {
    return <div>Page en construction</div>;
  }

  // Fallbacks in case some singletons aren't fully filled out
  const heroImage = data.heroImage ? urlForImage(data.heroImage).url() : "/images/IMG_0025.webp";
  const heroBadge = data.heroBadge || "Chirurgie Viscérale, Digestive & Robotique";
  const heroHeading = data.heroHeading || "DR. MOHAMMED AMAL BENZAKOUR";
  const heroIntro = data.heroIntro || "Bienvenue au sein de mon nouveau cabinet...";
  const heroBlocks = data.heroBlocks || [];

  const historySubtitle = data.historySubtitle || "Notre Histoire";
  const historyHeading = data.historyHeading || "L'excellence technologique au service d'une prise en charge personnalisée";
  const historyItems = data.historyItems || [];

  const detailBlocks = data.detailBlocks || [];
  const purposePanels = data.purposePanels || [];

  return (
    <ScrollReveal>
      <Navbar />
      <main className="about-page">
        {/* Doctor Profile Hero */}
        <section className="doctor-profile">
          <div className="doctor-profile-inner">
            <div className="doctor-profile-wrapper">
              <div className="doctor-profile-img reveal reveal-left">
                <img
                  src={heroImage}
                  alt={heroHeading}
                  loading="eager"
                />
              </div>
              <div className="doctor-profile-left">
                <div className="doctor-profile-top">
                  <div className="doctor-profile-data">
                    <div className="overflow-hidden">
                      <div className="body-small reveal reveal-left">{heroBadge}</div>
                      <h1 className="doctor-profile-heading reveal reveal-left reveal-d1">{heroHeading}</h1>
                    </div>
                    <p className="single-text reveal reveal-left reveal-d2">
                      {heroIntro}
                    </p>
                    
                    {heroBlocks.map((block: any, i: number) => (
                      <div key={i} className="reveal reveal-left reveal-d3">
                        <h3 className="about-subtitle">{block.title}</h3>
                        <p className="single-text">
                          {block.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-wrap">
          {/* About / History Section */}
          <section className="about">
            <div className="container">
              <div className="about-bottom">
                <div className="section-title">
                  <div className="sub-title">
                    <img src={IC_TITLE} alt="" />
                    <div>{historySubtitle}</div>
                  </div>
                  <h2 className="about-section-heading reveal">
                    {historyHeading}
                  </h2>
                </div>
                <div className="about-wrap reveal">
                  {historyItems.map((block: any, i: number) => (
                    <div key={i} className="about-block">
                      {block.icon && (
                        <img
                          src={urlForImage(block.icon).url()}
                          alt={block.label}
                          className="about-icon"
                        />
                      )}
                      <div>{block.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Doctor Details */}
          <section className="doctor-details-section">
            <div className="container">
              <div className="details-wrapper">
                {detailBlocks.map((block: any, i: number) => (
                  <div key={i} className="details-block reveal">
                    <h3 className="details-heading">{block.heading}</h3>
                    <div className="details-content">
                      {block.subheading && <h5>{block.subheading}</h5>}
                      <PortableText value={block.content} />
                      {block.quote && (
                        <blockquote className="parcours-quote">
                          &laquo; {block.quote} &raquo;
                        </blockquote>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Purpose - Horizontal Scroll */}
          {purposePanels.length > 0 && <HorizontalScroll panels={purposePanels} />}
        </div>
      </main>
      <Footer />
    </ScrollReveal>
  );
}
