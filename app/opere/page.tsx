import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { absoluteUrl, siteName, siteOgImage } from "@/content/site";
import { futureWorks, works } from "@/content/works";

const pageTitle = "Opere — Giuspe";
const pageDescription =
  "Alcune opere sono già attraversabili, altre si avvicinano e altre restano forme lontane finché non sarà il momento. La canzone è una soglia.";
const pageUrl = absoluteUrl("/opere");

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

export default function WorksPage() {
  return (
    <main className="experience-shell">
      <section className="inner-hero works-hero">
        <SiteNav />
        <div className="inner-hero-copy">
          <p className="section-label">Percorso delle opere</p>
          <h1>Un luogo che contiene opere.</h1>
          <p>
            Alcune sono già attraversabili. Altre si avvicinano. Altre ancora
            restano forme lontane, quasi illeggibili, finché non sarà il momento.
            La canzone è una soglia, non l&apos;intero luogo.
          </p>
        </div>
      </section>

      <section className="works-path" aria-label="Elenco opere">
        {works.map((work) => (
          <a
            className={`path-work path-work-${work.status}`}
            href={`/opere/${work.slug}`}
            key={work.slug}
            style={
              {
                "--door-image": `url(${work.heroImage})`,
                "--work-accent": work.palette.accent,
              } as CSSProperties
            }
          >
            <span>{String(work.order).padStart(2, "0")}</span>
            <div>
              <p>{work.releaseHint}</p>
              <h2>{work.title}</h2>
              <small>{work.shortDescription}</small>
            </div>
          </a>
        ))}

        {futureWorks.map((title, index) => (
          <article className="path-work path-work-hidden" key={title}>
            <span>{String(index + works.length + 1).padStart(2, "0")}</span>
            <div>
              <p>non ancora</p>
              <h2>{title}</h2>
              <small>Questa porta non è stata ancora aperta.</small>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
