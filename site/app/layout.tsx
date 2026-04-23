import "./globals.css";
import type { Metadata } from "next";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { AppointmentProvider } from "@/components/ui/AppointmentProvider";
import { MobileApptButton } from "@/components/ui/MobileApptButton";
import { getSettings } from "@/lib/queries";
import { physicianJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { urlForImage } from "@/lib/sanity";

const SITE_URL = "https://www.cabinetdrbenzakour.ma";
const DEFAULT_TITLE = "Dr. Benzakour - Chirurgien Spécialiste à Casablanca";
const DEFAULT_DESCRIPTION =
  "Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique & Robotique. Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Dr. Benzakour",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  verification: {
    google: "Vlc3rDysP6Dvacw7snMAbkSecfZYuNeZ7EqWh5Hixk0",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Dr Benzakour",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  const defaultOgImage = settings?.seo?.ogImage
    ? urlForImage(settings.seo.ogImage).width(1200).height(630).url()
    : undefined;

  const jsonLd = [physicianJsonLd(settings), websiteJsonLd()];

  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
        />
        {defaultOgImage && (
          <>
            <meta property="og:image" content={defaultOgImage} />
            <meta name="twitter:image" content={defaultOgImage} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ScrollToTop />
        <MobileApptButton />
        <AppointmentProvider />
      </body>
    </html>
  );
}
