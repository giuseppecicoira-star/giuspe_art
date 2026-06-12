import type { CSSProperties } from "react";
import { JourneyMemory } from "@/components/journey-memory";
import { SiteNav } from "@/components/site-nav";
import {
  futureWorks,
  getFirstPublishedWork,
  getLatestPublishedWork,
  works,
} from "@/content/works";

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
          <h2>Alcune stanze si apriranno più avanti.</h2>
          <p>
            Alcuni frammenti non passeranno dai social. Se vuoi continuare il
            viaggio, lascia una traccia.
          </p>
        </div>
        <form className="trace-form" action="#" method="get">
          <label htmlFor="name">Nome, se vuoi</label>
          <input id="name" name="name" placeholder="Come vuoi essere chiamato" />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="la-tua-email@esempio.it"
            type="email"
          />
          <label className="consent-line">
            <input name="privacy" type="checkbox" />
            <span>Acconsento a ricevere nuove stanze, frammenti e visioni.</span>
          </label>
          <button type="submit">Lascia una traccia</button>
        </form>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="/">
          Giuspe
        </a>
        <p>Musica per attraversare le crepe della realtà.</p>
        <nav aria-label="Link esterni">
          <a href="https://www.youtube.com/">YouTube</a>
          <a href="https://open.spotify.com/">Spotify</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
          <a href="mailto:booking@giuspe.it">Contatti</a>
          <a href="#">Privacy</a>
        </nav>
      </footer>
    </main>
  );
}
