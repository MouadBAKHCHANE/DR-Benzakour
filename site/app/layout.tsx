import "./globals.css";
import type { Metadata } from "next";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { AppointmentProvider } from "@/components/ui/AppointmentProvider";
import { MobileApptButton } from "@/components/ui/MobileApptButton";

export const metadata: Metadata = {
  title: "Dr. Benzakour - Chirurgien Spécialiste à Casablanca",
  description:
    "Spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique & Robotique. Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
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
