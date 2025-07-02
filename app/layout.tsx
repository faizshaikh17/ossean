import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Ossean",
  description: "Ocean of Open Source",
  openGraph: {
    title: "Ossean",
    description: "Discover and explore the best open source projects.",
    url: "https://ossean.vercel.app",
    siteName: "Ossean",
    images: [
      {
        url: "https://ossean.vercel.app/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Ossean OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ossean",
    description: "Discover and explore the best open source projects.",
    images: ["https://ossean.vercel.app/ogImage.png"],
  },
};


const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
      <Analytics />
    </html>
  );
}
