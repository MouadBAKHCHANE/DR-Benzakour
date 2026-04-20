export function localBusinessJsonLd(settings: any) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: settings?.siteName || "Cabinet Dr Benzakour",
    description: settings?.siteTagline,
    telephone: settings?.phone,
    email: settings?.email,
    address: settings?.address
      ? {
          "@type": "PostalAddress",
          streetAddress: settings.address.street,
          addressLocality: settings.address.city,
          postalCode: settings.address.postalCode,
          addressCountry: settings.address.country || "MA",
        }
      : undefined,
    url: "https://www.cabinetdrbenzakour.ma",
  };
}

export function organizationJsonLd(settings: any) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: settings?.siteName || "Cabinet Dr Benzakour",
    url: "https://www.cabinetdrbenzakour.ma",
    telephone: settings?.phone,
    email: settings?.email,
  };
}

export function medicalServiceJsonLd(specialty: any) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: specialty?.name,
    description: specialty?.intro,
    url: `https://www.cabinetdrbenzakour.ma/specialites/${specialty?.slug?.current}`,
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
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    description: post?.excerpt,
    datePublished: post?.publishedAt,
    author: post?.author
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : undefined,
    url: `https://www.cabinetdrbenzakour.ma/actualites/${post?.slug?.current}`,
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
    url: "https://www.cabinetdrbenzakour.ma",
  };
}
