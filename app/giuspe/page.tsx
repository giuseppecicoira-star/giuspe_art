import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { absoluteUrl, siteName, siteOgImage } from "@/content/site";

const pageTitle = "Giuspe — Giuseppe Cicoira, autore e musicista";
const pageDescription =
  "Giuspe è il modo in cui Giuseppe Cicoira viene riconosciuto nella sua essenza: musica, visioni, parole e porte che si aprono una alla volta.";
const pageUrl = absoluteUrl("/giuspe");

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName,
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteOgImage.url],
  },
};

export default function GiuspePage() {
  return (
    <main className="experience-shell">
      <section className="inner-hero giuspe-hero">
        <SiteNav />
        <div className="inner-hero-copy narrow">
          <p className="section-label">Giuspe</p>
          <h1>Mi chiamano Giuspe.</h1>
          <p>
            Osservo. A volte ciò che vedo fuori trova una eco dentro. Quando
            succede, prima o poi, nasce un&apos;opera: a volte una canzone, a volte
            una visione, a volte una stanza.
          </p>
        </div>
      </section>

      <section className="giuspe-note">
        <figure className="author-portrait">
          <Image
            src="/giuspe-portrait.png"
            alt="Giuspe nello studio"
            width={1448}
            height={1086}
            sizes="(min-width: 920px) 36vw, 100vw"
          />
        </figure>
        <div>
          <p>
            Giuspe non è un personaggio separato da Giuseppe Cicoira. È il modo
            in cui chi lo conosce lo riconosce nella sua essenza: senza maschera
            fittizia, senza ego da mettere in vetrina.
          </p>
          <p>
            Questo luogo raccoglie alcune delle tracce lasciate lungo il
            cammino: musica, visioni, parole, ambienti sonori e porte che si
            aprono una alla volta.
          </p>
          <a className="secondary-button" href="/opere">
            Torna alle opere
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
