import type { Metadata } from "next";
import {
  siteDescription,
  siteLongDescription,
  siteName,
  siteOgImage,
  siteTitle,
  siteUrl,
  officialProfileLinks,
} from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteLongDescription,
  authors: [{ name: "Giuseppe Cicoira", url: siteUrl }],
  creator: "Giuseppe Cicoira",
  publisher: siteName,
  category: "music",
  keywords: [
    "Giuspe",
    "Giuseppe Cicoira",
    "musica cantautorale",
    "musica alternative",
    "progetto musicale",
    "canzoni introspettive",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteOgImage.url],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: siteName,
  alternateName: "Giuseppe Cicoira",
  url: siteUrl,
  image: `${siteUrl}${siteOgImage.url}`,
  description: siteDescription,
  genre: ["cantautorale", "alternative", "rock", "elettronica", "progressive"],
  sameAs: officialProfileLinks,
  member: {
    "@type": "Person",
    name: "Giuseppe Cicoira",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
