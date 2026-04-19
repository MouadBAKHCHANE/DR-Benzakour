import { getAllBlogPosts } from "@/lib/queries";
import { ActualitesPageClient } from "./ActualitesClient";

export const metadata = {
  title: "Actualités - Dr. Benzakour",
  description: "Découvrez les dernières actualités en chirurgie digestive et cancérologique.",
};

export default async function ActualitesPage() {
  const posts = await getAllBlogPosts();

  return <ActualitesPageClient posts={posts} />;
}
