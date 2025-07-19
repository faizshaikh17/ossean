import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Ossean - Ocean of Open Source | Find Best GitHub Projects Fast",
  description:
    "Discover the best open source projects in seconds. Free OSS discovery platform for developers. Browse GitHub repositories, trending projects, and developer tools.",
  keywords:
    "open source projects, github search, find github projects, github trending, github repositories, open source software, oss discovery, github explorer, free developer tools, github project finder, open source search engine, github trending projects, best github projects, github repo search, open source tools, developer tools, programming tools, software development tools, github alternatives, open source directory, github discovery tool, find open source libraries, github project discovery, open source finder, github trends, popular github projects, top github repos, github stars, github forks, programming resources, developer resources, coding tools, software libraries, github awesome lists, open source contributions, github projects 2025, trending repositories, developer productivity tools, free programming tools, github search tool, repository finder, code search, programming projects, software projects, github trending today, open source recommendations, github project recommendations, ossean, ocean of open source, oss projects, oss tools, oss search, oss finder, oss directory, oss explorer, github browse, repository browser, code discovery, project discovery, software discovery, find projects fast, discover projects in seconds, fast github search, quick project discovery",
  openGraph: {
    title: "Ossean - Ocean of Open Source | Find Best GitHub Projects Fast",
    description:
      "Discover the best open source projects in seconds. Free OSS discovery platform for developers. Browse GitHub repositories, trending projects, and developer tools.",
    url: "https://ossean.in",
    siteName: "Ossean",
    images: [
      {
        url: "https://ossean.in/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Ossean - Find the best open source projects and GitHub repositories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ossean - Find the Best Open Source Projects Fast",
    description: "Discover the best GitHub repositories and trending projects in seconds. Free developer tools and open source discovery platform.",
    images: ["https://ossean.in/ogImage.png"],
    creator: "@ossean",
    site: "@ossean"
  },
  other: {
    "twitter:image": "https://ossean.in/ogImage.png",
    "twitter:card": "summary_large_image",
    "twitter:url": "https://ossean.in",
    "twitter:domain": "ossean.in",
    "twitter:title": "Ossean - Ocean of Open Source | Find Best GitHub Projects Fast",
    "twitter:description":
      "Discover the best open source projects in seconds. Free OSS discovery platform for developers. Browse GitHub repositories, trending projects, and developer tools.",
    "twitter:creator": "@ossean",
    "twitter:site": "@ossean",
    "og:url": "https://ossean.in",
    "og:type": "website",
    "og:title": "Ossean - Ocean of Open Source | Find Best GitHub Projects Fast",
    "og:description":
      "Discover the best open source projects in seconds. Free OSS discovery platform for developers. Browse GitHub repositories, trending projects, and developer tools.",
    "og:image": "https://ossean.in/ogImage.png",
    "og:site_name": "Ossean",
    "og:locale": "en_US",
    // Schema.org structured data
    "application-name": "Ossean",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    // Additional SEO meta tags
    "author": "Ossean",
    "publisher": "Ossean",
    "copyright": "Ossean",
    "language": "English",
    "revisit-after": "1 day",
    "distribution": "global",
    "rating": "general",
    "robots": "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    // Geo targeting
    "geo.region": "IN",
    "geo.country": "India",
    // Mobile optimization
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Ossean",
    // Alternative titles for different contexts
    "og:title:alt": "Open Source Project Discovery | GitHub Browser | Ossean",
    "twitter:title:alt": "GitHub Project Explorer | Open Source Discovery Tool",
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
  // Additional metadata for better SEO
  alternates: {
    canonical: "https://ossean.in",
  },
  // App-specific metadata
  applicationName: "Ossean",
  category: "Technology",
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
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}