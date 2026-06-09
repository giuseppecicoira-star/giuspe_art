const tracks = [
  {
    title: "Melissa",
    description:
      "Il ritorno di una presenza: qualcosa che sembrava perduto continua a respirare nella memoria.",
    meaning:
      "Una stanza abitata da assenze, richiami e presenze che non chiedono permesso per tornare.",
  },
  {
    title: "Miseria",
    description:
      "L'inizio di un nuovo corso, dove la fragilità smette di nascondersi e diventa materia viva.",
    meaning:
      "Il punto più basso come soglia: non una resa, ma il primo gesto verso una forma più vera.",
  },
  {
    title: "Antidoto",
    description:
      "Una danza contro il vento, un corpo che cerca una cura mentre tutto prova a spostarlo.",
    meaning:
      "Il bisogno di salvarsi senza tradire ciò che brucia ancora dentro.",
  },
  {
    title: "Carezza",
    description:
      "Un gesto minimo, quasi invisibile, che attraversa il buio senza pretendere di cancellarlo.",
    meaning:
      "La tenerezza come lingua difficile: una luce breve, ma sufficiente per restare.",
  },
  {
    title: "Un giorno come un altro",
    description:
      "Il quotidiano che si incrina: una giornata normale mentre sotto la pelle cambia tutto.",
    meaning:
      "Quando la realtà finge di non muoversi, ma dentro si apre una frattura.",
  },
  {
    title: "Eden",
    description:
      "Un luogo perduto e cercato, sospeso tra innocenza, desiderio e impossibilità di tornare.",
    meaning:
      "Non un paradiso, ma la domanda che resta quando il paradiso non basta più.",
  },
  {
    title: "Amore risorto",
    description:
      "Una rinascita senza trionfo, fatta di ferite che imparano a non chiamarsi fine.",
    meaning:
      "L'amore che torna cambiato, meno puro forse, ma più consapevole della propria ombra.",
  },
  {
    title: "Dolly",
    description:
      "Una figura sospesa tra immagine e identità, tra artificio, desiderio e verità nascosta.",
    meaning:
      "La maschera come specchio: ciò che sembra costruito può rivelare qualcosa di essenziale.",
  },
];

const videos = [
  {
    title: "Miseria",
    type: "Videoclip",
    text: "Un frammento scuro, lento, costruito intorno al gesto di ricominciare.",
  },
  {
    title: "Antidoto",
    type: "Visual teaser",
    text: "Corpi, vento, resistenza: immagini per una canzone che non resta ferma.",
  },
  {
    title: "Appunti dalle crepe",
    type: "Cortometraggio musicale",
    text: "Un formato breve per entrare nel laboratorio narrativo dei brani.",
  },
];

const notes = [
  "Perché scrivo canzoni sulla verità",
  "Miseria e l'inizio di un nuovo corso",
  "Melissa: il ritorno di una presenza",
  "Antidoto: danzare contro il vento",
  "Canzoni a senso unico: quando la struttura non torna indietro",
];

const socialLinks = ["Spotify", "YouTube", "Instagram", "TikTok", "Facebook"];

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="button-icon" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="link-icon" viewBox="0 0 24 24">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="button-icon" viewBox="0 0 24 24">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m5.25 7.25 6.75 5 6.75-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TrackCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="track-card" id={`brano-${title.toLowerCase().replaceAll(" ", "-")}`}>
      <div className="track-art" aria-hidden="true">
        <span>{title.slice(0, 1)}</span>
      </div>
      <div className="track-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="track-actions" aria-label={`Azioni per ${title}`}>
        <a href="https://open.spotify.com/" className="small-button">
          Ascolta
        </a>
        <a href="#mondo" className="small-button ghost">
          Scopri il significato
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <img
          className="hero-image"
          src="/giuspe-studio.png"
          alt="Studio musicale notturno con chitarra, synth e microfono"
        />
        <div className="hero-shade" />

        <header className="site-header" aria-label="Navigazione principale">
          <a className="brand" href="#home" aria-label="Giuspe">
            <span className="brand-mark">G</span>
            <span>Giuspe</span>
          </a>
          <nav className="nav-links" aria-label="Sezioni del sito">
            <a href="#musica">Musica</a>
            <a href="#mondo">Mondo</a>
            <a href="#video">Video</a>
            <a href="#diario">Diario</a>
            <a href="#bio">Bio</a>
            <a href="#press">Press</a>
          </nav>
        </header>

        <div className="hero-content">
          <h1>Giuspe</h1>
          <p className="hero-subtitle">
            Canzoni per chi cerca la verità dietro le cose.
          </p>
          <p className="hero-copy">
            Ogni brano è una stanza. Ogni parola una crepa. Ogni suono un modo
            per guardare più a fondo.
          </p>
          <p className="hero-claim">
            Musica per attraversare le crepe della realtà.
          </p>
          <div className="hero-actions" aria-label="Azioni principali">
            <a className="primary-button" href="#musica">
              <PlayIcon />
              Ascolta la musica
            </a>
            <a className="secondary-button" href="#mondo">
              Entra nel mondo dei brani
              <ArrowIcon />
            </a>
          </div>
        </div>

        <a className="scroll-cue" href="#musica" aria-label="Vai alla musica">
          <span />
        </a>
      </section>

      <section className="intro-band" aria-label="Concept artistico">
        <div className="section-index">01</div>
        <div>
          <h2>Una casa digitale per un universo narrativo.</h2>
          <p>
            Giuspe non entra come una vetrina di brani, ma come una soglia:
            identità, memoria, perdita e rinascita diventano materia sonora,
            immagini interiori e domande lasciate accese.
          </p>
        </div>
      </section>

      <section className="music-section" id="musica">
        <div className="section-heading">
          <span className="section-index">02</span>
          <div>
            <p className="section-label">Musica</p>
            <h2>Discografia</h2>
          </div>
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <TrackCard
              description={track.description}
              key={track.title}
              title={track.title}
            />
          ))}
        </div>
        <div className="platform-strip" aria-label="Link streaming placeholder">
          <a href="https://open.spotify.com/">Spotify</a>
          <a href="https://www.youtube.com/">YouTube</a>
          <a href="https://music.apple.com/">Apple Music</a>
        </div>
      </section>

      <section className="world-section" id="mondo">
        <div className="world-copy">
          <span className="section-index">03</span>
          <p className="section-label">Mondo dei brani</p>
          <h2>Ogni canzone è un piccolo universo narrativo.</h2>
          <p>
            Dietro ogni canzone vive una domanda. A volte una ferita. A volte
            una rinascita. Qui i brani si aprono, mostrano le immagini, le
            ossessioni e le verità da cui sono nati.
          </p>
        </div>
        <div className="meaning-list">
          {tracks.map((track, index) => (
            <article className="meaning-row" key={track.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{track.title}</h3>
                <p>{track.meaning}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section" id="video">
        <div className="section-heading">
          <span className="section-index">04</span>
          <div>
            <p className="section-label">Video</p>
            <h2>Clip, visual e cortometraggi musicali.</h2>
          </div>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.title}>
              <a
                className="video-frame"
                href="https://www.youtube.com/"
                aria-label={`Apri video placeholder ${video.title}`}
              >
                <PlayIcon />
              </a>
              <p>{video.type}</p>
              <h3>{video.title}</h3>
              <span>{video.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-section" id="diario">
        <div className="journal-intro">
          <span className="section-index">05</span>
          <p className="section-label">Diario / note autore</p>
          <h2>Appunti dalle crepe</h2>
        </div>
        <div className="note-list">
          {notes.map((note, index) => (
            <a className="note-row" href="#" key={note}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{note}</strong>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="bio-section" id="bio">
        <div className="bio-portrait" aria-hidden="true">
          <span>G</span>
        </div>
        <div className="bio-copy">
          <span className="section-index">06</span>
          <p className="section-label">Bio</p>
          <h2>Una scrittura che prova ad aprire varchi.</h2>
          <p>
            Giuspe è il progetto musicale di Giuseppe Cicoira. Scrive canzoni
            da quando aveva quindici anni, cercando nella musica un modo per
            attraversare ciò che spesso resta invisibile: le fratture, le
            domande, le verità scomode, i ritorni inattesi.
          </p>
          <p>
            Le sue canzoni uniscono scrittura cantautorale, atmosfere
            alternative, contaminazioni rock, elettroniche e progressive. Più
            che raccontare storie lineari, provano ad aprire varchi.
          </p>
        </div>
      </section>

      <section className="press-section" id="press">
        <div className="section-heading">
          <span className="section-index">07</span>
          <div>
            <p className="section-label">Press kit</p>
            <h2>Materiali per stampa, booking e collaborazioni.</h2>
          </div>
        </div>
        <div className="press-grid">
          <article className="press-card text-card">
            <h3>Bio breve</h3>
            <p>
              Giuspe è il progetto cantautorale e visionario di Giuseppe
              Cicoira: canzoni intime, alternative, attraversate da memoria,
              identità e rinascita.
            </p>
          </article>
          <article className="press-card text-card">
            <h3>Bio estesa</h3>
            <p>
              Una narrazione musicale fatta di crepe interiori, contaminazioni
              rock, elettroniche e progressive, dove ogni brano cerca una verità
              nascosta dietro le cose.
            </p>
          </article>
          <article className="press-card photo-card">
            <span>Foto ufficiale 01</span>
          </article>
          <article className="press-card photo-card red">
            <span>Foto ufficiale 02</span>
          </article>
        </div>
        <div className="press-actions">
          <a className="primary-button" href="#contatti">
            <MailIcon />
            Contatti
          </a>
          <a className="secondary-button" href="#">
            Download press kit
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="newsletter-section" id="newsletter">
        <div>
          <span className="section-index">08</span>
          <p className="section-label">Area fan</p>
          <h2>Resta dentro il viaggio</h2>
          <p>
            Ricevi anteprime, racconti dietro i brani, nuove uscite, video e
            appunti dal laboratorio creativo.
          </p>
        </div>
        <form className="newsletter-form" action="#" method="get">
          <label htmlFor="email">Email</label>
          <div>
            <input
              id="email"
              name="email"
              placeholder="la-tua-email@esempio.it"
              type="email"
            />
            <button type="submit">Iscriviti</button>
          </div>
        </form>
      </section>

      <footer className="footer" id="contatti">
        <div>
          <a className="footer-brand" href="#home">
            Giuspe
          </a>
          <p>Musica per attraversare le crepe della realtà.</p>
        </div>
        <nav aria-label="Link social">
          {socialLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
          <a href="mailto:booking@giuspe.it">Contatti</a>
        </nav>
      </footer>
    </main>
  );
}
