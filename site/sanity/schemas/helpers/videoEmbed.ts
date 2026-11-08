import { defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";

const YOUTUBE_URL = /^https?:\/\/(www\.|m\.)?(youtube\.com\/(watch\?.*v=|shorts\/|embed\/|live\/)|youtu\.be\/)[\w-]+/i;

export const videoEmbed = defineType({
  name: "videoEmbed",
  title: "Vidéo YouTube",
  type: "object",
  icon: PlayIcon,
  description:
    "⚠️ Les vidéos ne sont pas hébergées sur Sanity afin de rester dans les limites du plan gratuit (stockage et bande passante). Publiez d'abord la vidéo sur YouTube (en « Public » ou « Non répertoriée »), puis collez son lien ici.",
  fields: [
    defineField({
      name: "url",
      title: "Lien YouTube",
      type: "url",
      description:
        "⚠️ N'importez jamais de fichier vidéo dans Sanity : cela dépasserait les limites du plan gratuit (stockage et bande passante). Publiez la vidéo sur YouTube (« Public » ou « Non répertoriée ») puis collez son lien ici. Ex. : https://www.youtube.com/watch?v=XXXXXXXXXXX ou https://youtu.be/XXXXXXXXXXX",
      validation: (Rule) =>
        Rule.required()
          .uri({ scheme: ["http", "https"] })
          .custom((value?: string) =>
            !value || YOUTUBE_URL.test(value)
              ? true
              : "Seuls les liens YouTube sont acceptés (youtube.com ou youtu.be)."
          ),
    }),
    defineField({
      name: "caption",
      title: "Légende",
      type: "string",
    }),
  ],
  preview: {
    select: { url: "url", caption: "caption" },
    prepare({ url, caption }) {
      return { title: caption || "Vidéo YouTube", subtitle: url || "", media: PlayIcon };
    },
  },
});
