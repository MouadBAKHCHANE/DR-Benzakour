export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api/"],
      },
    ],
    sitemap: "https://www.cabinetdrbenzakour.ma/sitemap.xml",
  };
}
