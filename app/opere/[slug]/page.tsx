import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { AmbientSoundControl } from "@/components/ambient-sound";
import { MarkWorkVisited } from "@/components/journey-memory";
import { SiteNav } from "@/components/site-nav";
import { siteName } from "@/content/site";
import { getWorkBySlug, works } from "@/content/works";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Opera non trovata",
    };
  }

  const isPublished = work.status === "published";

  return {
    title: work.title,
    description: work.shortDescription,
    alternates: {
      canonical: `/opere/${work.slug}`,
    },
    openGraph: {
      title: `${work.title} | Giuspe`,
      description: work.shortDescription,
      url: `/opere/${work.slug}`,
      siteName,
      images: [
        {
          url: work.heroImage,
          alt: `${work.title} | Giuspe`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Giuspe`,
      description: work.shortDescription,
      images: [work.heroImage],
    },
    robots: {
      index: isPublished,
      follow: true,
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const previousWork = works.find((item) => item.order === work.order - 1);
  const nextWork = works.find((item) => item.order === work.order + 1);
  const isPublished = work.status === "published";

  return (
    <main
      className={`experience-shell work-page work-page-${work.status}`}
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
      {isPublished ? <MarkWorkVisited slug={work.slug} title={work.title} /> : null}

      <section className="work-hero">
        <div className="work-hero-image" />
        <div className="work-hero-shade" />
        <SiteNav />

        <div className="work-hero-copy">
          <p className="section-label">{work.releaseHint}</p>
          <h1>{work.title}</h1>
          <p>{work.subtitle}</p>
          {!isPublished ? (
            <div className="locked-message">
              <span>Non è ancora il momento.</span>
              <small>
                Questa stanza si lascia intravedere, ma non è del tutto aperta.
              </small>
            </div>
          ) : null}
        </div>
      </section>

      <section className="work-intro">
        <div>
          <span className="section-number">soglia</span>
          <h2>{work.theme}</h2>
        </div>
        <p>{work.longDescription}</p>
      </section>

      <section className="work-vision">
        <div className="vision-panel">
          <p className="section-label">Ambiente</p>
          <h2>{work.environment}</h2>
        </div>
        <div className="vision-text">
          <p className="section-label">Visione</p>
          <p>{work.vision}</p>
        </div>
      </section>

      <AmbientSoundControl
        ambientSound={work.ambientSound}
        ambientVolume={work.ambientVolume}
        loop={work.loop}
      />

      <section className="work-fragments">
        <div>
          <p className="section-label">Frammenti</p>
          <h2>Frammenti lasciati nella stanza.</h2>
        </div>
        <div className="fragment-stack">
          {work.fragments.map((fragment) => (
            <article className="fragment-card" key={fragment.id}>
              <span>{fragment.type}</span>
              <p>{fragment.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-media">
        <div className="media-box">
          <p className="section-label">Visione</p>
          <h2>{isPublished ? "Video / visual" : "Visual non ancora aperto"}</h2>
          <a href={work.youtubeUrl}>{isPublished ? "Apri su YouTube" : "Placeholder YouTube"}</a>
        </div>
        <div className="streaming-box">
          <p className="section-label">Musica</p>
          <div>
            <a href={work.spotifyUrl}>Spotify</a>
            <a href={work.appleMusicUrl}>Apple Music</a>
          </div>
        </div>
      </section>

      <section className="visual-notes">
        <p className="section-label">Visioni future</p>
        <div className="visual-note-grid">
          {work.visualNotes.map((note) => (
            <article className="visual-note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="work-nav" aria-label="Opera precedente e successiva">
        {previousWork ? (
          <a href={`/opere/${previousWork.slug}`}>Prima: {previousWork.title}</a>
        ) : (
          <a href="/opere">Torna al percorso</a>
        )}
        {nextWork ? (
          <a href={`/opere/${nextWork.slug}`}>Poi: {nextWork.title}</a>
        ) : (
          <a href="/#continua">Continua il viaggio</a>
        )}
      </nav>
    </main>
  );
}
