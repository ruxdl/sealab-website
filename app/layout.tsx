import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sea'Lab — Junior-Entreprise de SeaTech",
  description:
    "Sea'Lab, la Junior-Entreprise de l'école d'ingénieurs SeaTech à Toulon. Expertise en informatique, mécanique et systèmes embarqués.",
  keywords: [
    "Junior Entreprise",
    "SeaTech",
    "Toulon",
    "ingénierie",
    "informatique",
    "mécanique",
    "électronique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
