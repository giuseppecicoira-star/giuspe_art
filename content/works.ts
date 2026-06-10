export type WorkStatus = "published" | "coming_soon" | "hidden" | "locked" | "draft";

export type Work = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  order: number;
  status: WorkStatus;
  releaseHint: string;
  theme: string;
  shortDescription: string;
  longDescription: string;
  environment: string;
  vision: string;
  keywords: string[];
  palette: {
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
  heroImage: string;
  spotifyUrl: string;
  youtubeUrl: string;
  appleMusicUrl: string;
  fragments: {
    id: string;
    title?: string;
    body: string;
    type: "note" | "poetic" | "reflection" | "lyric_excerpt" | "visual";
    visibility: "public" | "newsletter" | "app_only" | "hidden";
  }[];
  visualNotes: {
    id: string;
    title: string;
    description: string;
    mediaType: "image" | "video" | "youtube" | "placeholder";
  }[];
};

export const works: Work[] = [
  {
    id: "work-melissa",
    slug: "melissa",
    title: "Melissa",
    subtitle: "Il fantasma della solitudine ritrovato dal passato.",
    order: 1,
    status: "published",
    releaseHint: "prima porta aperta",
    theme:
      "Il fantasma della solitudine e dell'inadeguatezza ritrovato dal passato.",
    shortDescription:
      "Una memoria fragile torna a bussare: non per spaventare, ma per essere finalmente guardata.",
    longDescription:
      "Melissa abita una soglia notturna. Non è un'apparizione da temere, ma una parte rimasta indietro, una presenza che la pioggia e la nebbia riportano vicino.",
    environment: "Notte, bosco, pioggia leggera, nebbia, presenza fragile.",
    vision:
      "Un bosco di notte, immerso in una pioggia sottile. La nebbia non nasconde tutto: lascia intravedere. Tra gli alberi non è chiaro se ci sia qualcuno, un ricordo, una parte di sé o una presenza mai davvero andata via.",
    keywords: [
      "fantasma",
      "solitudine",
      "inadeguatezza",
      "memoria",
      "ritorno",
      "bosco",
      "notte",
      "nebbia",
      "pioggia",
      "presenza",
    ],
    palette: {
      background: "#07080a",
      foreground: "#f4f0e8",
      accent: "#8fa5b8",
      muted: "#6f7780",
    },
    heroImage: "/opere/melissa.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: "https://music.apple.com/",
    fragments: [
      {
        id: "melissa-frag-1",
        body: "Non tutto ciò che ritorna vuole ferire. A volte vuole solo essere riconosciuto.",
        type: "poetic",
        visibility: "public",
      },
      {
        id: "melissa-frag-2",
        body: "La solitudine non sparisce: cambia stanza, cambia voce, aspetta una notte abbastanza quieta.",
        type: "reflection",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "melissa-visual-1",
        title: "Bosco, non incubo",
        description:
          "L'ambiente deve restare sospeso e intimo. La paura è solo una vibrazione laterale, mai il centro.",
        mediaType: "image",
      },
    ],
  },
  {
    id: "work-miseria",
    slug: "miseria",
    title: "Miseria",
    subtitle: "Identità cercata in un mondo che vive di consenso.",
    order: 2,
    status: "coming_soon",
    releaseHint: "prossima soglia",
    theme:
      "La ricerca della propria identità in un mondo che vive sul consenso terzo.",
    shortDescription:
      "Un corridoio arido, una camminata stretta, poi piccoli segni di vita che rompono la superficie.",
    longDescription:
      "Miseria parte da un luogo secco e claustrofobico. Ogni passo può incrinare il paesaggio. Non è chiaro se il mondo cambi davvero o se cambi lo sguardo di chi lo attraversa.",
    environment:
      "Corridoio desertico, alberi spogli, aridità, progressiva fioritura.",
    vision:
      "Un cammino lungo un corridoio arido. Tutto sembra sterile, stretto, consumato. Ogni passo incrina il paesaggio. Gli alberi secchi iniziano a risvegliarsi. Qualcosa fiorisce.",
    keywords: [
      "identità",
      "consenso",
      "maschere",
      "deserto",
      "corridoio",
      "aridità",
      "rinascita",
      "fioritura",
      "trasformazione",
    ],
    palette: {
      background: "#15100d",
      foreground: "#f5efe4",
      accent: "#b26f41",
      muted: "#6f624f",
    },
    heroImage: "/opere/miseria.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: "https://music.apple.com/",
    fragments: [
      {
        id: "miseria-frag-1",
        body: "Il consenso è un corridoio: se ci resti troppo, inizi a chiamarlo casa.",
        type: "reflection",
        visibility: "public",
      },
      {
        id: "miseria-frag-2",
        body: "A volte la rinascita non arriva come luce. Arriva come una crepa.",
        type: "poetic",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "miseria-visual-1",
        title: "La vita come conseguenza",
        description:
          "Il mondo non esplode in colore. Si riattiva piano, come se ogni passo avesse il diritto di restituire materia.",
        mediaType: "image",
      },
    ],
  },
  {
    id: "work-livida",
    slug: "livida",
    title: "Livida",
    subtitle: "La rinascita come confine inviolabile.",
    order: 3,
    status: "coming_soon",
    releaseHint: "porta in avvicinamento",
    theme:
      "La rinascita dopo gli abusi contro l'ipocrisia delle masse.",
    shortDescription:
      "Una forza silente nasce dove lo sguardo altrui pretendeva di decidere una vita.",
    longDescription:
      "Livida non racconta una vittima ferma dentro il male subito. Racconta una presenza che diventa inviolabile, una lama quieta che non permette più al giudizio esterno di governare la sua forma.",
    environment:
      "Paese realistico, sguardi, specchi, caduta, rinascita, figura enorme e silenziosa.",
    vision:
      "Un paese osserva. Gli sguardi non proteggono: giudicano. Una ragazza cerca un posto nel mondo e finisce nelle mani del male. Ma non scompare. Rinasce. Diventa più grande del paese, più grande delle dita puntate.",
    keywords: [
      "abuso",
      "ipocrisia",
      "giudizio",
      "paese",
      "ragazza",
      "rinascita",
      "gigante",
      "specchio",
      "dignità",
      "inviolabile",
    ],
    palette: {
      background: "#100c11",
      foreground: "#f5eee8",
      accent: "#8b2534",
      muted: "#756670",
    },
    heroImage: "/opere/livida.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: "https://music.apple.com/",
    fragments: [
      {
        id: "livida-frag-1",
        body: "Non le hanno tolto la voce. Hanno solo scoperto troppo tardi che sapeva diventare silenzio affilato.",
        type: "poetic",
        visibility: "public",
      },
      {
        id: "livida-frag-2",
        body: "La rinascita non chiede permesso a chi aveva imparato a indicare.",
        type: "reflection",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "livida-visual-1",
        title: "Non più definita",
        description:
          "Il trattamento visivo deve evitare la reiterazione del trauma. Il centro è la sovranità conquistata.",
        mediaType: "image",
      },
    ],
  },
  {
    id: "work-non-posso-immaginare",
    slug: "non-posso-immaginare",
    title: "Non posso immaginare",
    subtitle: "La distanza che resta anche dentro la vicinanza.",
    order: 4,
    status: "locked",
    releaseHint: "porta lontana",
    theme:
      "La ricerca della profondità e il tentativo di ridurre la distanza interiore in un legame affettivo.",
    shortDescription:
      "Due interiorità si cercano, sapendo che qualcosa dell'altro resterà sempre oltre.",
    longDescription:
      "Non posso immaginare non chiude la distanza. La abita. La vicinanza fisica non basta a possedere l'altro, e proprio questa impossibilità tiene vivo il desiderio di avvicinarsi.",
    environment: "Spazio rarefatto, due interiorità, soglie, distanza, mistero.",
    vision:
      "Due interiorità si cercano. La vicinanza fisica non elimina la distanza. C'è qualcosa dell'altro che resta sempre oltre, non possedibile, non completamente immaginabile.",
    keywords: [
      "distanza",
      "legame",
      "profondità",
      "immaginazione",
      "alterità",
      "affetto",
      "mistero",
      "ricerca",
      "prossimità",
    ],
    palette: {
      background: "#080b13",
      foreground: "#f3efe7",
      accent: "#596b8f",
      muted: "#666d7a",
    },
    heroImage: "/opere/non-posso-immaginare.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: "https://music.apple.com/",
    fragments: [
      {
        id: "non-posso-frag-1",
        body: "Ti avvicino, e proprio lì capisco che non posso raggiungerti del tutto.",
        type: "poetic",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "non-posso-visual-1",
        title: "Oltre la prossimità",
        description:
          "La pagina deve restare sospesa, senza trasformare il brano in una scena romantica.",
        mediaType: "image",
      },
    ],
  },
  {
    id: "work-carezze",
    slug: "carezze",
    title: "Carezze",
    subtitle: "Lasciarsi sollevare senza perdere la propria essenza.",
    order: 5,
    status: "locked",
    releaseHint: "porta lontana",
    theme:
      "Il lasciarsi sollevare, dissolversi leggermente e raggiungere qualcuno come polline portato dal vento.",
    shortDescription:
      "Una collina, il vento, la possibilità di dissolversi senza scomparire.",
    longDescription:
      "Carezze è fiducia nel movimento. Un corpo perde peso, diventa particella, raggiunge qualcuno senza invadere. Si posa. Viene accolto.",
    environment: "Collina verde, vento, dissoluzione, polline, accoglienza.",
    vision:
      "Una collina verde. Il vento arriva senza violenza. Prima sfiora. Poi solleva. Poi trascina. Il corpo perde peso, si dissolve in particelle leggere, come polline.",
    keywords: [
      "carezza",
      "vento",
      "collina",
      "verde",
      "dissoluzione",
      "polline",
      "leggerezza",
      "accoglienza",
      "abbandono",
    ],
    palette: {
      background: "#0d1510",
      foreground: "#f2efe4",
      accent: "#9eaa70",
      muted: "#64745f",
    },
    heroImage: "/opere/carezze.png",
    spotifyUrl: "https://open.spotify.com/",
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: "https://music.apple.com/",
    fragments: [
      {
        id: "carezze-frag-1",
        body: "Non tutto ciò che si dissolve sparisce. Qualcosa, finalmente, arriva.",
        type: "poetic",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "carezze-visual-1",
        title: "Leggerezza non zuccherosa",
        description:
          "La luce deve aprire senza addolcire troppo: fiducia, non evasione.",
        mediaType: "image",
      },
    ],
  },
];

export const futureWorks = [
  "Porta senza nome",
  "Stanza in attesa",
  "Visione non aperta",
];

export function getPublishedWorks() {
  return works.filter((work) => work.status === "published");
}

export function getFirstPublishedWork() {
  return getPublishedWorks().sort((a, b) => a.order - b.order)[0] ?? works[0];
}

export function getLatestPublishedWork() {
  return getPublishedWorks().sort((a, b) => b.order - a.order)[0] ?? works[0];
}

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
