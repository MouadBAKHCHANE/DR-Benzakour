import { urlForImage } from "./sanity";

const SITE_URL = "https://www.cabinetdrbenzakour.ma";

const DEFAULT_ADDRESS = {
  street: "Uptown Business Center, 5e étage N°9, Immeuble D, CFC, Bd Moulay Abdellah Chérif",
  city: "Casablanca",
  postalCode: "20220",
  country: "MA",
};

const DEFAULT_GEO = { latitude: 33.5435, longitude: -7.6634 };

const DEFAULT_OPENING_HOURS = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  { days: ["Saturday"], opens: "09:00", closes: "13:00" },
];

const DEFAULT_SPECIALTIES = [
  "Chirurgie Digestive et Viscérale",
  "Chirurgie Coelioscopique et Robotique",
  "Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS)",
];

function buildAddress(settings: any) {
  const a = settings?.address ?? {};
  return {
    "@type": "PostalAddress",
    streetAddress: a.street || DEFAULT_ADDRESS.street,
    addressLocality: a.city || DEFAULT_ADDRESS.city,
    postalCode: a.postalCode || DEFAULT_ADDRESS.postalCode,
    addressCountry: a.country || DEFAULT_ADDRESS.country,
  };
}

function buildGeo(settings: any) {
  const g = settings?.geo;
  const lat = g?.latitude ?? DEFAULT_GEO.latitude;
  const lng = g?.longitude ?? DEFAULT_GEO.longitude;
  return { "@type": "GeoCoordinates", latitude: lat, longitude: lng };
}

function buildOpeningHours(settings: any) {
  const hours: Array<{ days: string[]; opens: string; closes: string }> =
    settings?.openingHoursSpecification?.length
      ? settings.openingHoursSpecification.map((h: any) => ({
          days: h.dayOfWeek || [],
          opens: h.opens,
          closes: h.closes,
        }))
      : DEFAULT_OPENING_HOURS;

  return hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }));
}

export function physicianJsonLd(settings: any) {
  const name =
    settings?.title || settings?.siteName || "Cabinet Dr Benzakour Mohammed Amal";

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name,
    description:
      settings?.siteDescription ||
      settings?.tagline ||
      "Chirurgien Spécialiste en Chirurgie Digestive, Viscérale, Coelioscopique et Robotique à Casablanca.",
    url: SITE_URL,
    image: settings?.seo?.ogImage
      ? urlForImage(settings.seo.ogImage).width(1200).height(630).url()
      : `${SITE_URL}/images/Logo Dr. Benzakour Mohammed Amal horz.webp`,
    telephone: settings?.phone || settings?.phoneFixe,
    email: settings?.email,
    medicalSpecialty: settings?.medicalSpecialties?.length
      ? settings.medicalSpecialties
      : DEFAULT_SPECIALTIES,
    address: buildAddress(settings),
    geo: buildGeo(settings),
    hasMap: settings?.googleMapsUrl,
    openingHoursSpecification: buildOpeningHours(settings),
    sameAs: [
      settings?.instagramUrl,
      settings?.facebook,
      settings?.linkedin,
      settings?.youtube,
      settings?.twitter,
    ].filter(Boolean),
    areaServed: { "@type": "City", name: "Casablanca" },
  };
}

// Back-compat alias — existing imports of organizationJsonLd keep working.
export const organizationJsonLd = physicianJsonLd;

export function localBusinessJsonLd(settings: any) {
  return physicianJsonLd(settings);
}

export function medicalServiceJsonLd(specialty: any) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: specialty?.name,
    description: specialty?.intro || specialty?.subtitle,
    url: `${SITE_URL}/specialites/${specialty?.slug?.current}`,
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs?.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(post: any) {
  const authorName =
    typeof post?.author === "string" ? post.author : post?.author?.name;
  const image = post?.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    description: post?.excerpt,
    image,
    datePublished: post?.publishedAt,
    dateModified: post?._updatedAt || post?.publishedAt,
    author: authorName ? { "@type": "Person", name: authorName } : undefined,
    url: `${SITE_URL}/actualites/${post?.slug?.current}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/actualites/${post?.slug?.current}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Cabinet Dr Benzakour",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Logo Dr. Benzakour Mohammed Amal horz.webp`,
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cabinet Dr Benzakour",
    url: SITE_URL,
  };
}
