import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";


export const metadata: Metadata = {
  title: "Ossean - Ocean of Open Source",
  description:
    "Ossean helps developers discover relevant open source projects in seconds. OSS discovery faster, smarter, and personalized to your needs.",
  keywords:
    "ossean, open source discovery, oss projects, find open source projects, github explorer, github trending, github search, open source tools, productivity tools, developer tools, oss search engine, oss recommendation, personalized open source, oss explorer, github projects, github repos, github trending projects, software discovery, open source finder, github discovery, oss discovery tool, open source productivity, time saving tools, built to save time, developer efficiency, ocean of open source, oss directory, explore oss, discover oss, top github projects, free developer tools",
  // icons: {
  //   icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>",
  //   shortcut: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>",
  // },
  openGraph: {
    title: "Ossean - Ocean of Open Source",
    description:
      "Ossean helps developers discover relevant open source projects in seconds. OSS discovery faster, smarter, and personalized to your needs.",
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
  other: {
    "twitter:image": "https://ossean.vercel.app/ogImage.png",
    "twitter:card": "summary_large_image",
    "twitter:url": "https://ossean.vercel.app",
    "twitter:domain": "ossean.vercel.app",
    "twitter:title": "Ossean - Ocean of Open Source",
    "twitter:description":
      "Ossean helps developers discover relevant open source projects in seconds. OSS discovery faster, smarter, and personalized to your needs.",
    "og:url": "https://ossean.vercel.app",
    "og:type": "website",
    "og:title": "Ossean - Ocean of Open Source",
    "og:description":
      "Ossean helps developers discover relevant open source projects in seconds. OSS discovery faster, smarter, and personalized to your needs.",
    "og:image": "https://ossean.vercel.app/ogImage.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
      <Analytics />
    </html>
  );
}
