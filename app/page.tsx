import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { AppUpdatesNotice } from "@/components/app-updates-notice";
import { JourneyMemory } from "@/components/journey-memory";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import {
  futureWorks,
  getFirstPublishedWork,
  getLatestPublishedWork,
  works,
} from "@/content/works";
import {
  siteCanonicalUrl,
  siteDescription,
  siteName,
  siteOgImage,
  siteTitle,
} from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: siteTitle,
  },
  description: siteDescription,
  alternates: {
    canonical: siteCanonicalUrl,
  },
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
};

export default function Home() {
  const firstWork = getFirstPublishedWork();
  const latestWork = getLatestPublishedWork();
  const visibleWorks = works.slice(0, 5);

  return (
    <main className="experience-shell">
      <section
        className="threshold"
        style={
          {
            "--threshold-image": `url(${latestWork.heroImage})`,
            "--work-accent": latestWork.palette.accent,
            "--work-muted": latestWork.palette.muted,
          } as CSSProperties
        }
      >
        <div className="threshold-shade" />
        <SiteNav />

        <div className="threshold-content">
          <h1>Giuspe</h1>
          <div className="threshold-lines" aria-label="Immagini guida">
            <span>Una finestra.</span>
            <span>Uno specchio.</span>
            <span>Un bosco sotto la pioggia.</span>
            <span>Il vento sopra una collina.</span>
            <span>Una luce che si frammenta.</span>
            <span>Alcune opere.</span>
          </div>
          <p>
            Qui non troverai verità da seguire. Troverai forme in cui
            riconoscere qualcosa che era già presente, ma non aveva ancora una
            stanza.
          </p>
          <JourneyMemory
            firstSlug={firstWork.slug}
            firstTitle={firstWork.title}
            latestSlug={latestWork.slug}
            latestTitle={latestWork.title}
          />
        </div>

        <aside className="threshold-clue" aria-label="Indizio della porta aperta">
          <span>indizio aperto</span>
          <strong>{latestWork.title}</strong>
          <p>{latestWork.shortDescription}</p>
        </aside>
      </section>

      <section className="manifesto-section">
        <div className="section-number">01</div>
        <div>
          <h2>Ogni opera apre una stanza.</h2>
          <p>
            Le canzoni arrivano come luoghi in penombra: non offrono risposte
            immediate, ma accendono dettagli, spostano lo sguardo, lasciano
            emergere qualcosa che forse era già lì.
          </p>
        </div>
      </section>

      <section className="doors-section" id="opere">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <p className="section-label">Percorso delle opere</p>
            <h2>Le porte si aprono una alla volta.</h2>
          </div>
          <a className="text-link" href="/opere">
            Vedi tutto il percorso
          </a>
        </div>

        <div className="door-rail">
          {visibleWorks.map((work) => (
            <a
              className={`door-card door-card-${work.status}`}
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
                <h3>{work.title}</h3>
                <small>{work.subtitle}</small>
              </div>
            </a>
          ))}
          {futureWorks.map((title, index) => (
            <div className="future-door" key={title}>
              <span>{String(index + visibleWorks.length + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <small>Questa porta non è stata ancora aperta.</small>
            </div>
          ))}
        </div>
      </section>

      <section className="fragment-preview">
        <div>
          <span className="section-number">03</span>
          <p className="section-label">Frammenti</p>
          <h2>Appunti lasciati lungo il cammino.</h2>
        </div>
        <div className="fragment-lines">
          <p>
            Un mistero, una ferita, una distanza, una rinascita: non come
            definizioni, ma come tracce lasciate dentro una stanza.
          </p>
          <a className="secondary-button" href="/frammenti">
            Leggi i frammenti
          </a>
        </div>
      </section>

      <section className="continue-section" id="continua">
        <div>
          <span className="section-number">04</span>
          <p className="section-label">Continua il viaggio</p>
          <h2>Alcune stanze si apriranno anche nell&apos;app.</h2>
          <p>
            Alcuni frammenti non passeranno dai social. La PWA di Giuspe
            raccoglier&agrave; uscite, appunti e notifiche in un luogo pi&ugrave;
            vicino al progetto.
          </p>
        </div>
        <AppUpdatesNotice />
      </section>

      <SiteFooter />
    </main>
  );
}
