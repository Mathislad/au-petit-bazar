import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { localBusinessJsonLd } from "@/lib/site-content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
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
    "Pain frais, épicerie, produits du terroir, fromages, tabac, presse, FDJ et terrasse à Saint-Front (Haute-Loire). Ouvert du mardi au dimanche dès 8 h.",
  openGraph: {
    title: "Au petit baz'AR — Le commerce de Saint-Front",
    description:
      "Pain, épicerie, terroir, café et terrasse au cœur du village. Un vrai commerce de proximité, ouvert du mardi au dimanche.",
    type: "website",
    locale: "fr_FR",
    siteName: "Au petit baz'AR",
    url: "https://au-petit-bazar.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Au petit baz'AR — Saint-Front, Haute-Loire",
    description: "Pain, épicerie, terroir, café et terrasse. Le commerce de village de Saint-Front.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://au-petit-bazar.vercel.app",
  },
  keywords: [
    "commerce village saint-front",
    "épicerie haute-loire",
    "pain frais saint-front",
    "produits locaux auvergne",
    "tabac presse fdj saint-front",
    "au petit bazar",
  ],
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
