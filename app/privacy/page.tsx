import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { absoluteUrl, contactEmail, siteName } from "@/content/site";

const pageTitle = "Privacy Policy - Giuspe";
const pageDescription =
  "Informativa privacy del sito giuspe.it, progetto musicale di Giuseppe Cicoira.";
const pageUrl = absoluteUrl("/privacy");

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

export default function PrivacyPage() {
  return (
    <main className="experience-shell legal-page">
      <section className="inner-hero legal-hero">
        <SiteNav />
        <div className="inner-hero-copy narrow">
          <p className="section-label">Informativa</p>
          <h1>Privacy Policy</h1>
          <p>Ultimo aggiornamento: 12 agosto 2026.</p>
        </div>
      </section>

      <section className="legal-content">
        <article>
          <h2>Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento dei dati personali raccolti tramite
            questo sito e&apos; Giuseppe Cicoira, autore e musicista del progetto
            Giuspe.
          </p>
          <p>
            Per richieste relative alla privacy puoi scrivere a{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </article>

        <article>
          <h2>Dati raccolti</h2>
          <p>
            Il sito non raccoglie iscrizioni tramite form e non salva indirizzi
            email attraverso form proprietari. Puoi scrivere volontariamente
            all&apos;indirizzo di contatto indicato nel footer.
          </p>
          <p>
            Il sito usa dati tecnici necessari al funzionamento delle pagine e
            alcune preferenze salvate sul dispositivo, come il consenso cookie,
            lo stato del percorso gia&apos; attraversato e l&apos;apertura del video
            Melissa.
          </p>
        </article>

        <article>
          <h2>App e aggiornamenti</h2>
          <p>
            Gli aggiornamenti futuri del progetto Giuspe saranno gestiti tramite
            una PWA dedicata. Quando l&apos;app sara&apos; disponibile, eventuali
            notifiche o contenuti riservati saranno regolati dalla relativa
            informativa e dalle impostazioni scelte dall&apos;utente.
          </p>
        </article>

        <article>
          <h2>Analytics</h2>
          <p>
            Il sito integra Google Tag Manager per misurare in forma aggregata
            l&apos;uso delle pagine. Gli strumenti analytics vengono caricati solo
            dopo il consenso espresso tramite il banner cookie.
          </p>
        </article>

        <article>
          <h2>Contenuti esterni</h2>
          <p>
            Alcune pagine possono contenere link o player di servizi esterni,
            come YouTube e piattaforme musicali. Nel caso del video Melissa, il
            player YouTube viene caricato solo dopo una tua azione esplicita.
          </p>
        </article>

        <article>
          <h2>Diritti</h2>
          <p>
            Puoi chiedere accesso, rettifica, cancellazione, limitazione o
            opposizione al trattamento dei tuoi dati personali scrivendo a{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
