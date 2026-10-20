import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "GSN, service de ménage à Lyon",
  description:
    "Génie du Service et du Nettoyage. Nettoyage de locaux et de sols à Lyon et alentours. 254 rue Vendôme, 69003 Lyon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${newsreader.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
