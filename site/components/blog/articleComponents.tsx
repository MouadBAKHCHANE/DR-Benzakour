import type { PortableTextComponents } from "@portabletext/react";
import { sanityImageUrl } from "@/lib/sanity";

/** Turns a YouTube page link into its privacy-friendly embed URL. */
function toEmbedUrl(raw?: string): string | null {
  if (!raw) return null;
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\.|^m\./, "");

  if (host === "youtu.be") {
    const id = url.pathname.slice(1).split("/")[0];
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  }
  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    const v = url.searchParams.get("v");
    if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
    const m = url.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/);
    return m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : null;
  }
  return null;
}

export const articleComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="article-figure">
          <img
            src={sanityImageUrl(value, 1400)}
            alt={value.alt || value.caption || ""}
            loading="lazy"
            className="article-body-img"
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
    videoEmbed: ({ value }) => {
      const embed = toEmbedUrl(value?.url);
      if (!embed) return null;
      return (
        <figure className="article-figure">
          <div className="article-video">
            <iframe
              src={embed}
              title={value.caption || "Vidéo"}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        {...(value?.blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    ),
  },
};
