import { defineType } from "sanity";

export const blockContent = defineType({
  title: "Contenu riche",
  name: "blockContent",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Citation", value: "blockquote" },
      ],
      lists: [
        { title: "Puce", value: "bullet" },
        { title: "Numéroté", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Gras", value: "strong" },
          { title: "Italique", value: "em" },
          { title: "Souligné", value: "underline" },
        ],
        annotations: [
          {
            title: "Lien",
            name: "link",
            type: "object",
            fields: [
              { title: "URL", name: "href", type: "url" },
              { title: "Ouvrir dans un nouvel onglet", name: "blank", type: "boolean" },
            ],
          },
        ],
      },
    },
    { type: "image", options: { hotspot: true } },
  ],
});
