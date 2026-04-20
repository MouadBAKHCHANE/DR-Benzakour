import "./globals.css";
import type { Metadata } from "next";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { AppointmentProvider } from "@/components/ui/AppointmentProvider";
import { MobileApptButton } from "@/components/ui/MobileApptButton";
import { getSettings } from "@/lib/queries";
import { organizationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: {
    default: "Dr. Benzakour - Chirurgien Spécialiste à Casablanca",
    template: "%s | Dr. Benzakour"
  },
  description:
    "Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique & Robotique. Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca",
  metadataBase: new URL("https://www.cabinetdrbenzakour.ma"),
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  verification: {
    google: "Vlc3rDysP6Dvacw7snMAbkSecfZYuNeZ7EqWh5Hixk0",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(settings)),
          }}
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
