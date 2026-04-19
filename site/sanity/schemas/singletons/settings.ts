import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const settings = defineType({
  name: "settings",
  title: "Paramètres Généraux",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteName",
      title: "Nom du site",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Email de contact",
      type: "string",
    }),
    defineField({
      name: "phoneFixed",
      title: "Téléphone Fixe",
      type: "string",
    }),
    defineField({
      name: "phoneMobile",
      title: "Téléphone Mobile",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresse Physique",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "consultationHours",
      title: "Heures de consultation",
      type: "string",
    }),
    defineField({
      name: "googleMapsUrl",
      title: "URL Google Maps Embed",
      type: "url",
    }),
    defineField({
      name: "socialLinks",
      title: "Réseaux Sociaux",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Plateforme", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
});
