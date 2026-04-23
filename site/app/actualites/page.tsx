import { getAllBlogPosts } from "@/lib/queries";
import { ActualitesPageClient } from "./ActualitesClient";
import type { Metadata } from "next";

const title = "Actualités - Dr. Benzakour";
const description =
  "Découvrez les dernières actualités en chirurgie digestive et cancérologique du Dr. Benzakour à Casablanca.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/actualites" },
  openGraph: {
    title,
    description,
    url: "/actualites",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function ActualitesPage() {
  const posts = await getAllBlogPosts();

  return <ActualitesPageClient posts={posts} />;
}
