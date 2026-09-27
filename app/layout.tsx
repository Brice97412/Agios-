import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agios — Récupère les frais bancaires prélevés à tort",
  description:
    "On repère les frais bancaires que ta banque n'aurait jamais dû te prendre, et on prépare la réclamation à ta place.",
  openGraph: {
    title: "Agios — Récupère les frais bancaires prélevés à tort",
    description:
      "On repère les frais bancaires que ta banque n'aurait jamais dû te prendre, et on prépare la réclamation à ta place.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
