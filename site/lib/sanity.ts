import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false, // Bypass Sanity CDN so Vercel can fetch fresh data instantly on webhooks
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
}

/**
 * Optimised URL for a Sanity image: applies the admin's crop, resizes,
 * and serves WebP/AVIF automatically when the browser supports it.
 */
export function sanityImageUrl(source: any, width = 1600) {
  return builder.image(source).width(width).fit("max").auto("format").quality(85).url();
}

/**
 * CSS object-position matching the hotspot (focal point) the admin chose in
 * Sanity, so `object-fit: cover` keeps that point visible instead of the centre.
 * Hotspot coords are relative to the original image, so they are remapped
 * into the cropped area.
 */
export function hotspotPosition(source: any): string | undefined {
  const hotspot = source?.hotspot;
  if (!hotspot) return undefined;
  const crop = source?.crop ?? { left: 0, right: 0, top: 0, bottom: 0 };
  const w = 1 - crop.left - crop.right;
  const h = 1 - crop.top - crop.bottom;
  const clamp = (v: number) => Math.min(100, Math.max(0, v * 100));
  const x = w > 0 ? (hotspot.x - crop.left) / w : hotspot.x;
  const y = h > 0 ? (hotspot.y - crop.top) / h : hotspot.y;
  return `${clamp(x).toFixed(1)}% ${clamp(y).toFixed(1)}%`;
}
