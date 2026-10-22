import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { DepthGauge } from "./components/depth-gauge";
import { JsonLd, organizationLd } from "./components/json-ld";
import { site } from "./data/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sea'Lab — Junior-Entreprise de SeaTech Toulon",
    template: "%s · Sea'Lab",
  },
  description:
    "Sea'Lab, la Junior-Entreprise de SeaTech (Université de Toulon) : ingénierie, digitalisation, environnement et conseil réalisés par les élèves-ingénieurs de six filières. Ingénierie & innovation au service de la mer.",
  keywords: [
    "Junior-Entreprise",
    "SeaTech",
    "Université de Toulon",
    "Toulon",
    "ingénierie marine",
    "mécanique",
    "simulation",
    "prototypage",
    "développement web",
    "bilan carbone",
    "ACV",
    "étude de marché",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Sea'Lab",
    title: "Sea'Lab — Junior-Entreprise de SeaTech Toulon",
    description: site.tagline + ". " + site.motto,
    images: [{ url: "/images/equipe-sealab.jpg", width: 1600, height: 1200, alt: "L'équipe Sea'Lab" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#13213f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <JsonLd data={organizationLd} />
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <DepthGauge />
      </body>
    </html>
  );
}
