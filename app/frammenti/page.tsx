import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { fragments } from "@/content/fragments";
import { works } from "@/content/works";

export const metadata: Metadata = {
  title: "Frammenti | Giuspe",
  description:
    "Appunti, osservazioni e tracce brevi dall'ecosistema narrativo di Giuspe.",
};

export default function FragmentsPage() {
  const workFragments = works.flatMap((work) =>
    work.fragments.map((fragment) => ({
      ...fragment,
      workTitle: work.title,
      workSlug: work.slug,
    })),
  );

  return (
    <main className="experience-shell">
      <section className="inner-hero fragments-hero">
        <SiteNav />
        <div className="inner-hero-copy">
          <p className="section-label">Frammenti</p>
          <h1>Non tutto prende forma nello stesso linguaggio.</h1>
          <p>
            Alcune cose restano appunti. Altre diventano immagini, suoni,
            ambienti. Altre ancora aspettano una stanza in cui essere
            riconosciute.
          </p>
        </div>
      </section>

      <section className="fragments-grid">
        {[...fragments, ...workFragments].map((fragment) => (
          <article className="fragment-card" key={fragment.id}>
            <span>{fragment.type}</span>
            {"workTitle" in fragment ? (
              <a href={`/opere/${fragment.workSlug}`}>{fragment.workTitle}</a>
            ) : fragment.title ? (
              <strong>{fragment.title}</strong>
            ) : null}
            <p>{fragment.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
