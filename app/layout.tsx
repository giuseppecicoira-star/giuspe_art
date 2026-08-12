import type { Metadata } from "next";
import Script from "next/script";
import { CookieConsent } from "@/components/cookie-consent";
import {
  siteDescription,
  siteLongDescription,
  siteName,
  siteOgImage,
  siteTitle,
  siteCanonicalUrl,
  siteUrl,
  officialProfileLinks,
} from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteCanonicalUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: "Giuseppe Cicoira", url: siteCanonicalUrl }],
  creator: "Giuseppe Cicoira",
  publisher: siteName,
  category: "music",
  keywords: [
    "Giuspe",
    "Giuseppe Cicoira",
    "autore e musicista italiano",
    "opere musicali",
    "ambienti visivi",
    "frammenti narrativi",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteCanonicalUrl,
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
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: siteName,
  alternateName: "Giuseppe Cicoira",
  url: siteCanonicalUrl,
  mainEntityOfPage: siteCanonicalUrl,
  description: siteLongDescription,
  jobTitle: "Autore e musicista",
  sameAs: officialProfileLinks,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_personalization: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        {children}
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
