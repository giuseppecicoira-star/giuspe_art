import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteNav } from "@/components/site-nav";
import { siteName, siteOgImage } from "@/content/site";
import { futureWorks, works } from "@/content/works";

export const metadata: Metadata = {
  title: "Opere",
  description:
    "Il percorso delle opere di Giuspe: musica, visioni, ambienti e porte non ancora aperte.",
  alternates: {
    canonical: "/opere",
  },
  openGraph: {
    title: "Opere | Giuspe",
    description:
      "Il percorso delle opere di Giuspe: musica, visioni, ambienti e porte non ancora aperte.",
    url: "/opere",
    siteName,
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opere | Giuspe",
    description:
      "Il percorso delle opere di Giuspe: musica, visioni, ambienti e porte non ancora aperte.",
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
    </main>
  );
}
