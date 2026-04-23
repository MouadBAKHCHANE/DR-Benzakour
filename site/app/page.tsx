import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { OurStory } from "@/components/sections/OurStory";
import { Services } from "@/components/sections/Services";
import { Doctors } from "@/components/sections/Doctors";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { getHomePage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();

  const title =
    data?.seoTitle || "Dr. Benzakour - Chirurgien Spécialiste à Casablanca";
  const description =
    data?.seoDescription ||
    "Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique & Robotique. Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca";
  const ogImage = data?.ogImage ? urlForImage(data.ogImage).width(1200).height(630).url() : undefined;

  return {
    title,
    description,
    keywords:
      data?.seoKeywords || [
        "Chirurgien Casablanca",
        "Chirurgie Digestive",
        "Chirurgie Robotique",
        "Oncologie",
      ],
    alternates: { canonical: "/" },
    robots: data?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: "/",
      type: "website",
      locale: "fr_FR",
      siteName: "Cabinet Dr Benzakour",
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

export default function Home() {
  return (
    <ScrollReveal>
      <Navbar hasHero />
      <main>
        <Hero />
        <OurStory />
        <Services />
        <Doctors />
        <TrustMarquee />
        <LatestPosts />
        <AppointmentForm />
      </main>
      <Footer />
    </ScrollReveal>
  );
}
