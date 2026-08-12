import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { absoluteUrl, contactEmail, siteName } from "@/content/site";

const pageTitle = "Cookie Policy - Giuspe";
const pageDescription =
  "Informativa cookie del sito giuspe.it, progetto musicale di Giuseppe Cicoira.";
const pageUrl = absoluteUrl("/cookie-policy");

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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="experience-shell legal-page">
      <section className="inner-hero legal-hero">
        <SiteNav />
        <div className="inner-hero-copy narrow">
          <p className="section-label">Informativa</p>
          <h1>Cookie Policy</h1>
          <p>Ultimo aggiornamento: 12 agosto 2026.</p>
        </div>
      </section>

      <section className="legal-content">
        <article>
          <h2>Cosa sono i cookie</h2>
          <p>
            I cookie e tecnologie simili permettono a un sito di ricordare
            alcune informazioni sul dispositivo del visitatore o di misurare il
            modo in cui le pagine vengono usate.
          </p>
        </article>

        <article>
          <h2>Cookie tecnici e preferenze locali</h2>
          <p>
            giuspe.it usa preferenze locali necessarie o utili all&apos;esperienza,
            come la scelta sul consenso cookie, lo stato del percorso artistico
            gia&apos; visitato e l&apos;apertura del video Melissa. Queste informazioni
            restano sul tuo dispositivo.
          </p>
        </article>

        <article>
          <h2>Cookie analytics</h2>
          <p>
            Google Tag Manager viene usato per attivare strumenti di analytics
            solo se accetti il consenso dal banner. Se rifiuti, il sito resta
            navigabile e gli analytics non vengono caricati.
          </p>
        </article>

        <article>
          <h2>Contenuti di terze parti</h2>
          <p>
            Link e player esterni, come YouTube o piattaforme musicali, possono
            applicare proprie tecnologie quando li apri. I player incorporati
            vengono caricati solo dopo una tua interazione.
          </p>
        </article>

        <article>
          <h2>Modificare la scelta</h2>
          <p>
            Puoi cancellare la scelta sui cookie dalle impostazioni del browser
            eliminando i dati del sito giuspe.it. Alla visita successiva il
            banner verra&apos; mostrato di nuovo.
          </p>
          <p>
            Per domande puoi scrivere a{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
