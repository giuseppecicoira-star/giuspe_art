import { musicLinks } from "@/content/site";

export type WorkStatus = "published" | "coming_soon" | "hidden" | "locked" | "draft";

export type AmbientSoundProfile =
  | "rain_forest"
  | "dry_wind"
  | "tense_village"
  | "distant_room"
  | "open_wind";

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
  ambientSound: {
    profile: AmbientSoundProfile;
    label: string;
    description: string;
    layers: string[];
  };
  ambientVolume: number;
  loop: boolean;
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
    subtitle: "Il silenzio prima di una scelta definitiva.",
    order: 1,
    status: "published",
    releaseHint: "prima porta aperta",
    theme:
      "Nel mistero del fantasma Melissa, la fine resta sospesa: una luce minuscola comincia a cercare il mondo.",
    shortDescription:
      "Nel bosco piove piano. Una presenza quasi invisibile trattiene il respiro, poi la luce si spezza e raggiunge la città.",
    longDescription:
      "Melissa rimane sulla soglia di un passaggio. Non giudica, non consola in fretta: ascolta il punto in cui una presenza sembra perdersi e invece cambia consistenza, diventando un segno possibile per chi sa ancora riconoscere.",
    environment:
      "Bosco notturno, nebbia, pioggia leggera, presenza indefinita, luce distante.",
    vision:
      "Tra nebbia e pioggia, la solitudine non chiude la scena. Una luce lontana si frantuma in molte schegge, cade sulla città e lascia, sui volti, una possibilità di vicinanza.",
    keywords: [
      "fantasma melissa",
      "mistero",
      "silenzio",
      "fragilità",
      "compassione",
      "trasformazione",
      "speranza",
      "bosco",
      "nebbia",
      "pioggia",
      "luce",
    ],
    palette: {
      background: "#07080a",
      foreground: "#f4f0e8",
      accent: "#8fa5b8",
      muted: "#6f7780",
    },
    heroImage: "/opere/melissa.png",
    spotifyUrl: musicLinks.spotify,
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: musicLinks.appleMusic,
    ambientSound: {
      profile: "rain_forest",
      label: "Pioggia nel bosco",
      description: "Pioggia leggera, bosco, vento lontano.",
      layers: ["pioggia leggera", "bosco", "vento lontano"],
    },
    ambientVolume: 0.24,
    loop: true,
    fragments: [
      {
        id: "melissa-frag-1",
        body: "Non è una tragedia da guardare da lontano. È un passaggio che chiede compassione.",
        type: "poetic",
        visibility: "public",
      },
      {
        id: "melissa-frag-2",
        body: "La luce non cancella il buio: lo attraversa, si spezza, poi arriva altrove.",
        type: "reflection",
        visibility: "public",
      },
      {
        id: "melissa-frag-3",
        body: "A volte riconoscere il prossimo comincia da una presenza indefinita tra gli alberi.",
        type: "visual",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "melissa-visual-1",
        title: "Nel bosco, prima della luce",
        description:
          "Tra gli alberi non c'è una spiegazione: c'è una presenza trattenuta, una luce che non salva dall'alto ma si rompe e arriva fin dentro la città.",
        mediaType: "image",
      },
      {
        id: "melissa-visual-2",
        title: "La luce diffusa",
        description:
          "La luce esplode, si frammenta e cade sulla città come una possibilità di riconoscimento.",
        mediaType: "video",
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
      "Camminare dentro l'aridità del consenso, finché qualcosa sotto la polvere ricorda il proprio nome.",
    shortDescription:
      "Un corridoio secco stringe il passo. Poi una crepa, un ramo, il sospetto ostinato di una fioritura.",
    longDescription:
      "Miseria attraversa un mondo che premia le maschere e consuma l'identità. Nel suo paesaggio asciutto, ogni passo misura la distanza tra ciò che si mostra e ciò che resiste sotto la superficie.",
    environment:
      "Corridoio desertico, alberi spogli, aridità, progressiva fioritura.",
    vision:
      "Il corridoio sembra non finire. Gli alberi restano spogli, il terreno non promette nulla. Poi una minima frattura rompe la crosta: non è salvezza improvvisa, è vita che torna a pretendere spazio.",
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
    spotifyUrl: musicLinks.spotify,
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: musicLinks.appleMusic,
    ambientSound: {
      profile: "dry_wind",
      label: "Vento secco",
      description: "Ambiente arido, scricchiolii, vento secco.",
      layers: ["vento secco", "ambiente arido", "scricchiolii"],
    },
    ambientVolume: 0.2,
    loop: true,
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
          "Il colore non arriva come incendio. Compare ai margini, quasi controvoglia, e rende visibile la materia che non aveva smesso di aspettare.",
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
      "Una ragazza torna intera dove il giudizio voleva lasciarla spezzata.",
    shortDescription:
      "Dal paese degli sguardi nasce una figura quieta, inviolabile, capace di trasformare la ferita in lama.",
    longDescription:
      "Livida non prolunga il male subito. Lo oltrepassa. La ragazza smette di lasciare che una voce esterna decida la sua forma: raccoglie il dolore, lo chiude in silenzio, e lo trasforma in una forza che smaschera l'ipocrisia.",
    environment:
      "Paese realistico, sguardi, specchi, caduta, rinascita, figura enorme e silenziosa.",
    vision:
      "Il paese guarda, commenta, restringe. Lei cade dentro un buio che non le appartiene, poi torna più alta degli sguardi. Non chiede assoluzione: diventa confine, lama quieta, presenza che nessuno può più piegare.",
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
    spotifyUrl: musicLinks.spotify,
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: musicLinks.appleMusic,
    ambientSound: {
      profile: "tense_village",
      label: "Paese distante",
      description: "Paese lontano, vento, atmosfera tesa.",
      layers: ["paese lontano", "vento", "atmosfera tesa"],
    },
    ambientVolume: 0.18,
    loop: true,
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
        title: "La quiete che taglia",
        description:
          "La ferita resta sul fondo. Davanti c'è una figura che ha smesso di appartenere agli sguardi del paese: la sua quiete non consola, taglia.",
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
      "Anche nella vicinanza resta una parte dell'altro che non si lascia possedere.",
    shortDescription:
      "Due interiorità si cercano, sapendo che qualcosa dell'altro resterà sempre oltre.",
    longDescription:
      "Non posso immaginare abita lo spazio che rimane tra due presenze. Ci si può sfiorare, chiamare, amare, ma una zona dell'altro resta oltre il linguaggio: non ferisce, custodisce il mistero.",
    environment: "Spazio rarefatto, due interiorità, soglie, distanza, mistero.",
    vision:
      "Due interiorità si avvicinano senza annullarsi. Tra loro resta aria, soglia, distanza viva: il punto esatto in cui il desiderio smette di conquistare e impara a restare.",
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
    spotifyUrl: musicLinks.spotify,
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: musicLinks.appleMusic,
    ambientSound: {
      profile: "distant_room",
      label: "Distanza rarefatta",
      description: "Aria ferma, soglia, presenza lontana.",
      layers: ["aria ferma", "soglia", "presenza lontana"],
    },
    ambientVolume: 0.16,
    loop: true,
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
          "Due presenze vicine si sfiorano senza possedersi. Lo spazio tra loro non è vuoto: è il punto in cui il mistero continua a respirare.",
        mediaType: "image",
      },
    ],
  },
  {
    id: "work-carezza",
    slug: "carezza",
    title: "Carezza",
    subtitle: "Diventare vento. Raggiungere qualcun altro.",
    order: 5,
    status: "locked",
    releaseHint: "porta lontana",
    theme:
      "Il vento prende ciò che pesa e lo restituisce altrove in una forma più lieve.",
    shortDescription:
      "Su una collina aperta, il corpo perde peso: non scompare, cambia modo di raggiungere.",
    longDescription:
      "Carezza segue una trasformazione senza rumore. Il vento raccoglie ciò che resta, lo solleva, lo dissolve; poi non c'è più un centro da difendere, solo una presenza capace di arrivare altrove.",
    environment: "Collina verde, spazio aperto, aria, movimento, leggerezza.",
    vision:
      "La collina respira. L'aria non strappa: invita. Ciò che era corpo si lascia attraversare, perde contorno, diventa movimento e continua verso qualcuno che forse non conosce ancora il suo nome.",
    keywords: [
      "carezza",
      "vento",
      "collina",
      "verde",
      "dissoluzione",
      "trasformazione",
      "leggerezza",
      "accoglienza",
      "abbandono",
      "continuità",
    ],
    palette: {
      background: "#0d1510",
      foreground: "#f2efe4",
      accent: "#9eaa70",
      muted: "#64745f",
    },
    heroImage: "/opere/carezza.png",
    spotifyUrl: musicLinks.spotify,
    youtubeUrl: "https://www.youtube.com/",
    appleMusicUrl: musicLinks.appleMusic,
    ambientSound: {
      profile: "open_wind",
      label: "Vento morbido",
      description: "Vento morbido, erba, spazio aperto.",
      layers: ["vento morbido", "erba", "spazio aperto"],
    },
    ambientVolume: 0.22,
    loop: true,
    fragments: [
      {
        id: "carezza-frag-1",
        body: "Non tutto ciò che si dissolve sparisce. Qualcosa, finalmente, arriva.",
        type: "poetic",
        visibility: "public",
      },
      {
        id: "carezza-frag-2",
        body: "Fidarsi del vento significa accettare di non sapere in quale forma si continuerà.",
        type: "reflection",
        visibility: "public",
      },
    ],
    visualNotes: [
      {
        id: "carezza-visual-1",
        title: "Quando il vento ricorda",
        description:
          "Il vento non porta via: cambia la forma. Ciò che si solleva dalla collina continua altrove, lieve e irraggiungibile.",
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
