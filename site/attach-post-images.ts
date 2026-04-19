import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const postImages: { slug: string; imageUrl: string; alt: string }[] = [
  {
    slug: "quand-consulter-chirurgien-digestif",
    imageUrl: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05.webp",
    alt: "Quand consulter un chirurgien digestif",
  },
  {
    slug: "chirurgie-robotique-revolution",
    imageUrl: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07.webp",
    alt: "Chirurgie robotique révolution",
  },
  {
    slug: "carcinose-peritoneale-chip",
    imageUrl: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06.webp",
    alt: "Carcinose péritonéale CHIP HIPEC",
  },
  {
    slug: "raac-recuperation-amelioree",
    imageUrl: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04.webp",
    alt: "RAAC récupération améliorée après chirurgie",
  },
  {
    slug: "avantages-chirurgie-mini-invasive",
    imageUrl: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03.webp",
    alt: "Avantages chirurgie mini-invasive laparoscopique",
  },
  {
    slug: "bilan-digestif-depistage",
    imageUrl: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02.webp",
    alt: "Bilan digestif dépistage précoce",
  },
];

async function uploadImageFromUrl(imageUrl: string, filename: string) {
  console.log(`  Downloading image: ${filename}...`);
  const response = await fetch(imageUrl);
  if (!response.ok) throw new Error(`Failed to fetch ${imageUrl}: ${response.statusText}`);
  const buffer = await response.buffer();

  console.log(`  Uploading to Sanity...`);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: response.headers.get("content-type") || "image/webp",
  });
  return asset;
}

async function attachPostImages() {
  console.log("Attaching images to blog posts...\n");

  for (const item of postImages) {
    console.log(`Processing: ${item.slug}`);

    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{_id, mainImage}`,
      { slug: item.slug }
    );

    if (!post) {
      console.warn(`  ⚠ Post not found: ${item.slug}`);
      continue;
    }

    if (post.mainImage?.asset) {
      console.log(`  ✓ Already has image, skipping.`);
      continue;
    }

    const filename = `blog-${item.slug}.webp`;
    const asset = await uploadImageFromUrl(item.imageUrl, filename);

    await client.patch(post._id).set({
      mainImage: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: item.alt,
      },
    }).commit();

    console.log(`  ✓ Image uploaded and attached to ${item.slug}\n`);
  }

  console.log("✓ All post images attached!");
}

attachPostImages().catch(console.error);
