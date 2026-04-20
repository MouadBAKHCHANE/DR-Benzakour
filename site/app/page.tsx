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
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();
  
  return {
    title: data?.seoTitle || "Dr. Benzakour - Chirurgien Spécialiste à Casablanca",
    description: data?.seoDescription || "Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique & Robotique. Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca",
    keywords: data?.seoKeywords || ["Chirurgien Casablanca", "Chirurgie Digestive", "Chirurgie Robotique", "Oncologie"],
    openGraph: {
      title: data?.seoTitle,
      description: data?.seoDescription,
      type: "website",
      locale: "fr_FR",
    }
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
