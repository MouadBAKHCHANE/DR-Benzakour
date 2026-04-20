import { getAllSpecialties, getAllBlogPosts, getAllLegalPages } from "@/lib/queries";

const BASE_URL = "https://www.cabinetdrbenzakour.ma";

export default async function sitemap() {
  const [specialties, blogPosts, legalPages] = await Promise.all([
    getAllSpecialties(),
    getAllBlogPosts(),
    getAllLegalPages(),
  ]);

  return [
    { url: BASE_URL, priority: 1, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/a-propos`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/specialites`, priority: 0.8, changeFrequency: "monthly" as const },
    ...specialties.map((s: any) => ({
      url: `${BASE_URL}/specialites/${s.slug.current}`,
      lastModified: s._updatedAt,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...blogPosts.map((p: any) => ({
      url: `${BASE_URL}/actualites/${p.slug.current}`,
      lastModified: p._updatedAt || p.publishedAt,
      priority: 0.6,
      changeFrequency: "weekly" as const,
    })),
    ...legalPages.map((p: any) => ({
      url: `${BASE_URL}/${p.slug.current}`,
      priority: 0.2,
      changeFrequency: "yearly" as const,
    })),
  ];
}
