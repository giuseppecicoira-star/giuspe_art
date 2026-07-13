import type { Metadata } from "next";
import Script from "next/script";
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

const googleTagManagerId = "GTM-K7S4P7DH";

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
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
