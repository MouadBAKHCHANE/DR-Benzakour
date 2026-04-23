import { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { faqPageJsonLd } from "@/lib/jsonld";

const contactTitle = "Contactez le Dr. Benzakour | Cabinet de Chirurgie à Casablanca";
const contactDescription =
  "Prenez rendez-vous avec le Dr. Benzakour à Casablanca. Contactez-nous par téléphone, email ou via notre formulaire pour toute demande de consultation ou d'intervention.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
  },
};

const faqItems = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Contactez-nous par téléphone au 05 22 89 44 19 ou via le formulaire en ligne.",
  },
  {
    q: "Que dois-je apporter lors de ma première visite ?",
    a: "Résultats d’examens récents, dossier médical et pièce d’identité.",
  },
  {
    q: "Proposez-vous des consultations en télémédecine ?",
    a: "Oui, pour les suivis et avis préliminaires. Contactez-nous pour en savoir plus.",
  },
  {
    q: "Quels sont vos jours de consultation ?",
    a: "Le cabinet est ouvert du Lundi au Vendredi, ainsi que le Samedi matin.",
  },
];

export default function Page() {
  // Convert standard FAQ items to the format expected by JSON-LD helper
  const jsonLdFaqs = faqItems.map(item => ({
    question: item.q,
    answer: item.a
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(jsonLdFaqs)),
        }}
      />
      <ContactClient faqItems={faqItems} />
    </>
  );
}
