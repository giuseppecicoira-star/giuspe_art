import type { CSSProperties } from "react";
import { AppUpdatesNotice } from "@/components/app-updates-notice";
import { AmbientSoundControl } from "@/components/ambient-sound";
import {
  MelissaJourneyTracker,
  MelissaReleaseCopy,
  MelissaRewatchButton,
  MelissaStreamingLink,
  MelissaVideoGate,
} from "@/components/melissa-experience-controls";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import {
  melissaNotes,
  melissaRelease,
  melissaSecondVision,
  melissaSecondVisionClosing,
  melissaSecondVisionEmphasis,
  melissaTransition,
  type MelissaTextBlock,
} from "@/content/melissa-experience";
import { musicLinks } from "@/content/site";
import type { Work } from "@/content/works";

function renderBlock(block: MelissaTextBlock, index: number) {
  switch (block.kind) {
    case "minorHeading":
      return (
        <h4 className="melissa-note-minor-heading" key={index}>
          {block.text}
        </h4>
      );
    case "lines":
      return (
        <p className="melissa-note-lines" key={index}>
          {block.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      );
    case "emphasis":
      return (
        <p className="melissa-note-emphasis" key={index}>
          {block.text}
        </p>
      );
    case "paragraph":
      return <p key={index}>{block.text}</p>;
  }
}

export function MelissaExperience({
  work,
  nextWork,
}: {
  work: Work;
  nextWork?: Work;
}) {
  const streamingLinks = [
    {
      label: "Spotify",
      href: work.spotifyUrl,
      platform: "spotify",
    },
    {
      label: "Apple Music",
      href: work.appleMusicUrl,
      platform: "apple_music",
    },
    {
      label: "YouTube",
      href: work.youtubeUrl,
      platform: "youtube",
    },
    {
      label: "Amazon Music",
      href: musicLinks.amazonMusic,
      platform: "amazon_music",
    },
    {
      label: "TIDAL",
      href: musicLinks.tidal,
      platform: "tidal",
    },
  ];

  return (
    <main
      className="experience-shell melissa-experience"
      style={
        {
          "--work-bg": work.palette.background,
          "--work-fg": work.palette.foreground,
          "--work-accent": work.palette.accent,
          "--work-muted": work.palette.muted,
          "--work-image": `url(${work.heroImage})`,
        } as CSSProperties
      }
    >
      <MelissaJourneyTracker
        completionId="melissa-complete"
        notesEndId="melissa-notes-end"
        notesStartId="melissa-notes"
      />

      <section className="melissa-entry" id="ingresso">
        <div className="melissa-entry-image" />
        <div className="melissa-entry-weather" aria-hidden="true" />
        <SiteNav />
        <div className="melissa-entry-copy">
          <p className="section-label">prima porta · {melissaRelease.label}</p>
          <MelissaReleaseCopy
            releaseDateTime={melissaRelease.dateTime}
            releaseLabel={melissaRelease.label}
          />
          <AmbientSoundControl
            ambientSound={work.ambientSound}
            ambientVolume={work.ambientVolume}
            compact
            loop={work.loop}
            workSlug={work.slug}
          />
        </div>
      </section>

      <section className="melissa-video-section" id="melissa-video">
        <div className="melissa-section-kicker">prima visione</div>
        <div className="melissa-video-copy">
          <p className="section-label">video ufficiale</p>
          <h2>Prima, guardala</h2>
        </div>
        <MelissaVideoGate
          posterImage={work.heroImage}
          title="Melissa - video ufficiale"
          videoId={melissaRelease.videoId}
          videoUrl={melissaRelease.videoUrl}
        />
      </section>

      <section className="melissa-transition">
        <div className="melissa-pause-line" aria-hidden="true" />
        <div>
          <p className="section-label">dopo la prima visione</p>
          <h2>Torniamo nel bosco</h2>
          <div className="melissa-prose">
            {melissaTransition.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="melissa-notes" id="melissa-notes">
        <div className="melissa-notes-heading">
          <p className="section-label">note di Giuspe</p>
          <h2>Dettagli lasciati lungo il percorso.</h2>
        </div>
        <div className="melissa-note-flow">
          {melissaNotes.map((note) => (
            <article
              className="melissa-note-chapter"
              data-tone={note.tone}
              id={`melissa-note-${note.id}`}
              key={note.id}
            >
              <span>{note.number}</span>
              <h3>{note.title}</h3>
              <div className="melissa-prose">
                {note.blocks.map((block, index) => renderBlock(block, index))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="melissa-rewatch" id="melissa-notes-end">
        <div>
          <p className="section-label">seconda visione</p>
          <h2>Adesso torna indietro</h2>
        </div>
        <div className="melissa-prose">
          {melissaSecondVision.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="melissa-note-emphasis">{melissaSecondVisionEmphasis}</p>
          {melissaSecondVisionClosing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <MelissaRewatchButton />
        </div>
      </section>

      <section className="melissa-streaming">
        <div>
          <p className="section-label">dopo l’opera</p>
          <h2>Porta Melissa con te</h2>
        </div>
        <div className="melissa-prose">
          <p>Il bosco resta qui.</p>
          <p>La canzone può continuare a camminare con te.</p>
          <div className="melissa-streaming-links" aria-label="Ascolta Melissa">
            {streamingLinks.map((link) => (
              <MelissaStreamingLink key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </section>

      <section className="melissa-continue" id="melissa-complete">
        <div>
          <p className="section-label">continua il viaggio</p>
          <h2>Il percorso continua</h2>
          <p>
            Melissa è la prima porta. Altre si apriranno. Gli aggiornamenti
            passeranno anche dalla PWA di Giuspe, quando sarà pronta.
          </p>
        </div>
        <AppUpdatesNotice
          className="app-updates-notice melissa-app-updates"
          ctaLabel="PWA in arrivo"
        />
      </section>

      <nav className="work-nav melissa-work-nav" aria-label="Opera successiva">
        <a href="/opere">Torna al percorso</a>
        {nextWork ? (
          <a href={`/opere/${nextWork.slug}`}>Poi: {nextWork.title}</a>
        ) : (
          <a href="/#continua">Continua il viaggio</a>
        )}
      </nav>
      <SiteFooter />
    </main>
  );
}
