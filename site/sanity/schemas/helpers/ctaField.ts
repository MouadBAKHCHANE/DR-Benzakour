import { defineField } from "sanity";

export const ctaField = (options?: { prefix?: string; group?: string }) => {
  const prefix = options?.prefix || "cta";
  const group = options?.group;

  return [
    defineField({
      name: `${prefix}Label`,
      title: "Texte du bouton",
      type: "string",
      ...(group ? { group } : {}),
    }),
    defineField({
      name: `${prefix}Url`,
      title: "Lien du bouton",
      type: "string",
      ...(group ? { group } : {}),
    }),
  ];
};
