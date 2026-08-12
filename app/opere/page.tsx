import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { absoluteUrl, siteName, siteOgImage } from "@/content/site";
import { teasedWorks } from "@/content/teased-works";
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

      <section className="glimpsed-doors" aria-labelledby="glimpsed-doors-title">
        <div className="glimpsed-doors-heading">
          <p className="section-label">Porte intraviste</p>
          <h2 id="glimpsed-doors-title">Una costellazione non ancora ordinata.</h2>
          <p>
            Alcuni titoli esistono già, ma non hanno ancora scelto la loro porta.
            Restano come segni sparsi: nomi, attriti, immagini minime. Arriveranno
            uno alla volta, quando il percorso saprà reggere la loro luce.
          </p>
        </div>

        <div className="glimpsed-grid" aria-label="Brani futuri intravisti">
          {teasedWorks.map((work, index) => (
            <article className="glimpsed-card" key={work.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{work.state}</p>
                <h3>{work.title}</h3>
                <small>{work.clue}</small>
              </div>
              <em>{work.motif}</em>
            </article>
          ))}
        </div>

        <aside className="participation-seed">
          <p className="section-label">Semi futuri</p>
          <h3>Quando ci saranno occhi dentro il percorso, alcune porte potranno rispondere.</h3>
          <p>
            La futura PWA potrà custodire progressi, indizi e scelte: non solo
            aggiornamenti, ma piccoli attraversamenti. Chi segue davvero il viaggio
            potrà riconoscere frammenti, sbloccare stanze e forse orientare quale
            soglia aprire dopo.
          </p>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
