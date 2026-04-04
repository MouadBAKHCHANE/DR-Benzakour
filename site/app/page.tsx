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
