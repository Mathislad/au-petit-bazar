import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { localBusinessJsonLd } from "@/lib/site-content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://au-petit-bazar.vercel.app"),
  title: "Au petit baz'AR — Commerce de village · Saint-Front, Haute-Loire",
  description:
    "Épicerie, produits du terroir, pain frais, tabac, presse, FDJ et terrasse au coeur de Saint-Front (Haute-Loire). Ouvert du mardi au dimanche.",
  openGraph: {
    title: "Au petit baz'AR — Saint-Front, Haute-Loire",
    description:
      "Votre commerce de village : épicerie, terroir, pain, tabac, terrasse. Au coeur de Saint-Front.",
    type: "website",
    locale: "fr_FR",
    siteName: "Au petit baz'AR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
