import { getSettings } from "@/lib/queries";
import { Footer } from "./Footer";

// Server-only wrapper: fetches social URLs from Sanity and renders the
// presentational Footer. Never import this from a "use client" file — an
// async component inside a client tree re-fetches on every render.
export async function FooterServer() {
  const settings = await getSettings();
  return <Footer youtubeUrl={settings?.youtube} twitterUrl={settings?.twitter} />;
}
