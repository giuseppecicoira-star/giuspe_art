export const melissaRelease = {
  dateTime: "2026-08-14T19:30:00+02:00",
  label: "14 agosto 2026 alle 19:30",
  videoId: "91tZeJ453zc",
  videoUrl: "https://youtu.be/91tZeJ453zc",
};

export type MelissaTextBlock =
  | {
      kind: "paragraph";
      text: string;
    }
  | {
      kind: "minorHeading";
      text: string;
    }
  | {
      kind: "lines";
      lines: string[];
    }
  | {
      kind: "emphasis";
      text: string;
    };

export type MelissaNote = {
  id: string;
  number: string;
  title: string;
  tone: "forest" | "red" | "fog" | "light" | "asphalt";
  blocks: MelissaTextBlock[];
};

export const melissaTransition = [
  "Hai visto Melissa.",
  "Prima di andare oltre, vorrei chiederti di restare ancora qualche minuto lì.",
  "Non per spiegarti cosa hai appena visto.",
  "Non c’è una lettura giusta da consegnarti e non voglio sostituire la mia alla tua.",
  "Voglio soltanto mostrarti alcuni dettagli.",
  "Quelli che ho lasciato lungo il percorso.",
  "Poi torneremo insieme all’inizio.",
];

export const melissaNotes: MelissaNote[] = [
  {
    id: "prima",
    number: "01",
    title: "Prima",
    tone: "forest",
    blocks: [
      {
        kind: "paragraph",
        text: "Più di vent’anni fa mi imbattei in un sito.",
      },
      {
        kind: "minorHeading",
        text: "melissa1999.it",
      },
      {
        kind: "paragraph",
        text: "Raccontava una storia che oggi è quasi scomparsa dalla memoria del web.",
      },
      {
        kind: "lines",
        lines: ["Una ragazza.", "Una strada.", "Un nome scelto."],
      },
      {
        kind: "paragraph",
        text: "Il fantasma di Melissa.",
      },
      {
        kind: "paragraph",
        text: "Lessi quelle pagine e qualcosa rimase lì.",
      },
      {
        kind: "paragraph",
        text: "Non mi interessava stabilire quanto ci fosse di vero nella leggenda.",
      },
      {
        kind: "paragraph",
        text: "Non mi interessava inseguire il fantasma.",
      },
      {
        kind: "paragraph",
        text: "Mi interessava lei.",
      },
      {
        kind: "paragraph",
        text: "E soprattutto un momento.",
      },
      {
        kind: "paragraph",
        text: "Quello in cui tutto può essere già accaduto dentro, mentre fuori non è ancora successo nulla.",
      },
      {
        kind: "paragraph",
        text: "Pochi secondi.",
      },
      {
        kind: "paragraph",
        text: "Ancora pochi secondi.",
      },
      {
        kind: "paragraph",
        text: "È lì che ho cercato di raggiungerla.",
      },
      {
        kind: "paragraph",
        text: "Non per giudicare ciò che aveva deciso.",
      },
      {
        kind: "paragraph",
        text: "Non per fingere, a posteriori, di poter riscrivere quei secondi.",
      },
      {
        kind: "paragraph",
        text: "Solo per starle accanto.",
      },
      {
        kind: "paragraph",
        text: "Per provare, per un istante, ad entrare in qualcosa che apparteneva soltanto a lei.",
      },
      {
        kind: "paragraph",
        text: "Da lì è nata Melissa.",
      },
    ],
  },
  {
    id: "sulla-rocca",
    number: "02",
    title: "Sulla rocca",
    tone: "red",
    blocks: [
      {
        kind: "paragraph",
        text: "All’inizio Melissa non la vediamo.",
      },
      {
        kind: "paragraph",
        text: "Sulla rocca ci sono io.",
      },
      {
        kind: "paragraph",
        text: "Coperto da una specie di mantello scuro, quasi severo.",
      },
      {
        kind: "paragraph",
        text: "Gli occhiali rossi davanti agli occhi.",
      },
      {
        kind: "paragraph",
        text: "I guanti neri sulle mani.",
      },
      {
        kind: "paragraph",
        text: "E un dito puntato verso il bosco.",
      },
      {
        kind: "paragraph",
        text: "Quell’uomo sono io.",
      },
      {
        kind: "paragraph",
        text: "Ma in quel momento rappresenta anche tutti noi.",
      },
      {
        kind: "paragraph",
        text: "È lo sguardo esterno.",
      },
      {
        kind: "paragraph",
        text: "La voce che osserva da lontano e crede di sapere.",
      },
      {
        kind: "paragraph",
        text: "Gli occhiali sono rossi perché ciò che vediamo degli altri attraversa sempre un filtro.",
      },
      {
        kind: "paragraph",
        text: "Le nostre esperienze.",
      },
      {
        kind: "paragraph",
        text: "Le nostre paure.",
      },
      {
        kind: "paragraph",
        text: "Quello che riteniamo normale.",
      },
      {
        kind: "paragraph",
        text: "Quello che abbiamo già deciso sia giusto o sbagliato.",
      },
      {
        kind: "paragraph",
        text: "Perfino le mani sono nascoste.",
      },
      {
        kind: "paragraph",
        text: "Chi indica non mostra la propria pelle.",
      },
      {
        kind: "paragraph",
        text: "È il giudizio che arriva senza esporsi, come spesso fa la voce di popolo.",
      },
      {
        kind: "paragraph",
        text: "Ma quel dito contiene anche un secondo gesto.",
      },
      {
        kind: "emphasis",
        text: "Guarda lì.",
      },
      {
        kind: "paragraph",
        text: "Oltre me.",
      },
      {
        kind: "paragraph",
        text: "Oltre ciò che credi di sapere.",
      },
      {
        kind: "paragraph",
        text: "C’è una persona dentro quel bosco.",
      },
      {
        kind: "paragraph",
        text: "Prima di definirla, prova almeno a guardare nella sua direzione.",
      },
    ],
  },
  {
    id: "il-bosco",
    number: "03",
    title: "Il bosco",
    tone: "forest",
    blocks: [
      {
        kind: "paragraph",
        text: "Melissa è laggiù.",
      },
      {
        kind: "paragraph",
        text: "Nel suo mondo.",
      },
      {
        kind: "paragraph",
        text: "Non perché sia un fantasma.",
      },
      {
        kind: "paragraph",
        text: "Non perché sia già morta.",
      },
      {
        kind: "paragraph",
        text: "Perché si è persa.",
      },
      {
        kind: "paragraph",
        text: "Il bosco è quel luogo in cui il rumore degli altri non arriva più.",
      },
      {
        kind: "paragraph",
        text: "I sentieri si confondono.",
      },
      {
        kind: "paragraph",
        text: "I riferimenti scompaiono.",
      },
      {
        kind: "paragraph",
        text: "E rimani solo con ciò che hai dentro.",
      },
      {
        kind: "paragraph",
        text: "Melissa cammina vestita di bianco, su un terreno impervio.",
      },
      {
        kind: "paragraph",
        text: "Il bianco non racconta innocenza nel senso più semplice del termine.",
      },
      {
        kind: "paragraph",
        text: "Racconta soprattutto l’assenza di un’etichetta.",
      },
      {
        kind: "paragraph",
        text: "Non porta ancora addosso la storia che gli altri costruiranno intorno a lei.",
      },
      {
        kind: "paragraph",
        text: "È ancora soltanto Melissa.",
      },
    ],
  },
  {
    id: "la-nebbia",
    number: "04",
    title: "La nebbia",
    tone: "fog",
    blocks: [
      {
        kind: "paragraph",
        text: "E poi c’è la nebbia.",
      },
      {
        kind: "paragraph",
        text: "Nel testo è sua amica.",
      },
      {
        kind: "paragraph",
        text: "La accompagna.",
      },
      {
        kind: "paragraph",
        text: "Normalmente la nebbia ci inquieta perché impedisce di vedere.",
      },
      {
        kind: "paragraph",
        text: "Nasconde.",
      },
      {
        kind: "paragraph",
        text: "Confonde.",
      },
      {
        kind: "paragraph",
        text: "Cancella i contorni.",
      },
      {
        kind: "paragraph",
        text: "Per Melissa è proprio questo a renderla preziosa.",
      },
      {
        kind: "paragraph",
        text: "La nebbia sottrae per qualche istante il suo percorso agli occhi degli altri.",
      },
      {
        kind: "paragraph",
        text: "Maschera.",
      },
      {
        kind: "paragraph",
        text: "Offusca.",
      },
      {
        kind: "paragraph",
        text: "Le permette di procedere.",
      },
      {
        kind: "paragraph",
        text: "Fuori dal bosco vogliamo vedere tutto, capire tutto, dare un nome a tutto.",
      },
      {
        kind: "paragraph",
        text: "Dentro la nebbia, finalmente, qualcosa ci sfugge.",
      },
      {
        kind: "emphasis",
        text: "E va bene così.",
      },
    ],
  },
  {
    id: "poi-sulla-rocca-sale-melissa",
    number: "05",
    title: "Poi sulla rocca sale Melissa",
    tone: "red",
    blocks: [
      {
        kind: "paragraph",
        text: "Più avanti accade qualcosa.",
      },
      {
        kind: "paragraph",
        text: "Sulla stessa rocca non ci sono più io.",
      },
      {
        kind: "paragraph",
        text: "C’è lei.",
      },
      {
        kind: "paragraph",
        text: "Per pochi istanti Melissa lascia il bosco e prende esattamente il posto dal quale era stata osservata.",
      },
      {
        kind: "paragraph",
        text: "Guarda la città dall’alto.",
      },
      {
        kind: "paragraph",
        text: "Guarda il mondo dal luogo degli altri.",
      },
      {
        kind: "paragraph",
        text: "Come se, per un attimo, potesse vedere sé stessa attraverso il loro sguardo.",
      },
      {
        kind: "paragraph",
        text: "E il suo volto è sereno.",
      },
      {
        kind: "paragraph",
        text: "Non è felicità.",
      },
      {
        kind: "paragraph",
        text: "Non è salvezza.",
      },
      {
        kind: "paragraph",
        text: "È una quiete diversa.",
      },
      {
        kind: "paragraph",
        text: "Nel racconto, la decisione che stiamo cercando di avvicinare è ormai stata presa.",
      },
      {
        kind: "paragraph",
        text: "Il conflitto sembra essersi fermato.",
      },
      {
        kind: "paragraph",
        text: "È proprio quel momento che Melissa prova a trattenere.",
      },
      {
        kind: "paragraph",
        text: "Non ciò che verrà dopo.",
      },
      {
        kind: "paragraph",
        text: "Quei pochi secondi prima del silenzio.",
      },
    ],
  },
  {
    id: "il-rosso",
    number: "06",
    title: "Il rosso",
    tone: "red",
    blocks: [
      {
        kind: "paragraph",
        text: "Poi Melissa torna nel bosco.",
      },
      {
        kind: "paragraph",
        text: "Tra le radici di un grande albero trova una giacca rossa.",
      },
      {
        kind: "paragraph",
        text: "E la indossa.",
      },
      {
        kind: "paragraph",
        text: "Il rosso era già comparso all’inizio.",
      },
      {
        kind: "paragraph",
        text: "Era davanti ai miei occhi.",
      },
      {
        kind: "paragraph",
        text: "Era il filtro attraverso cui gli altri la guardavano.",
      },
      {
        kind: "paragraph",
        text: "Adesso passa dagli occhi di chi osserva al corpo di chi viene osservato.",
      },
      {
        kind: "emphasis",
        text: "Il nostro filtro è diventato la sua etichetta.",
      },
      {
        kind: "paragraph",
        text: "Quella giacca non dice chi è Melissa.",
      },
      {
        kind: "paragraph",
        text: "Dice chi abbiamo deciso che sia.",
      },
      {
        kind: "paragraph",
        text: "Lei è ancora nel bosco.",
      },
      {
        kind: "paragraph",
        text: "Sta ancora attraversando qualcosa che appartiene soltanto a lei.",
      },
      {
        kind: "paragraph",
        text: "Ma fuori qualcuno ha già osservato.",
      },
      {
        kind: "paragraph",
        text: "Interpretato.",
      },
      {
        kind: "paragraph",
        text: "Classificato.",
      },
      {
        kind: "paragraph",
        text: "Raccontato.",
      },
      {
        kind: "paragraph",
        text: "Sotto quella giacca, però, il vestito è ancora bianco.",
      },
      {
        kind: "paragraph",
        text: "Sotto ciò che abbiamo deciso di vedere, c’è ancora lei.",
      },
    ],
  },
  {
    id: "la-luce",
    number: "07",
    title: "La luce",
    tone: "light",
    blocks: [
      {
        kind: "paragraph",
        text: "Poi arriva la luce.",
      },
      {
        kind: "paragraph",
        text: "Non ho voluto rappresentare il gesto nella sua crudezza.",
      },
      {
        kind: "paragraph",
        text: "Non era quello che cercavo quando scrissi questa canzone.",
      },
      {
        kind: "paragraph",
        text: "E non è quello che cerco oggi.",
      },
      {
        kind: "paragraph",
        text: "La luce cresce.",
      },
      {
        kind: "paragraph",
        text: "Raggiunge Melissa.",
      },
      {
        kind: "paragraph",
        text: "La attraversa.",
      },
      {
        kind: "paragraph",
        text: "Si espande tra gli alberi.",
      },
      {
        kind: "paragraph",
        text: "Poi lascia il bosco.",
      },
      {
        kind: "paragraph",
        text: "Arriva fino alla città.",
      },
      {
        kind: "paragraph",
        text: "E si rompe in migliaia di scintille.",
      },
      {
        kind: "paragraph",
        text: "Perché una decisione può appartenere interamente a una persona.",
      },
      {
        kind: "paragraph",
        text: "Ma ciò che mette in movimento non le appartiene più.",
      },
      {
        kind: "paragraph",
        text: "Un gesto entra nella vita degli altri.",
      },
      {
        kind: "paragraph",
        text: "Lascia tracce.",
      },
      {
        kind: "paragraph",
        text: "Sposta qualcosa.",
      },
      {
        kind: "paragraph",
        text: "Accende domande.",
      },
      {
        kind: "paragraph",
        text: "Rimane anche nella memoria di persone che non hai mai conosciuto.",
      },
      {
        kind: "paragraph",
        text: "Io sono una di quelle persone.",
      },
      {
        kind: "paragraph",
        text: "Lessi quella storia pochi giorni dopo ciò che era accaduto.",
      },
      {
        kind: "paragraph",
        text: "Qualcosa arrivò fino a me.",
      },
      {
        kind: "paragraph",
        text: "Scrissi una canzone.",
      },
      {
        kind: "paragraph",
        text: "Quella canzone rimase con me per più di vent’anni.",
      },
      {
        kind: "paragraph",
        text: "Oggi è diventata queste immagini.",
      },
      {
        kind: "paragraph",
        text: "E adesso sei arrivato tu.",
      },
      {
        kind: "paragraph",
        text: "La luce continua a viaggiare.",
      },
      {
        kind: "paragraph",
        text: "Non è la celebrazione di quel gesto.",
      },
      {
        kind: "paragraph",
        text: "È ciò che quel gesto ha inevitabilmente lasciato negli altri.",
      },
      {
        kind: "paragraph",
        text: "E porta con sé una domanda molto più vicina a noi:",
      },
      {
        kind: "emphasis",
        text: "quante persone abbiamo accanto senza riuscire davvero a vederle?",
      },
    ],
  },
  {
    id: "la-giacca",
    number: "08",
    title: "E alla fine rimane una giacca",
    tone: "asphalt",
    blocks: [
      {
        kind: "paragraph",
        text: "Sull’asfalto bagnato.",
      },
      {
        kind: "paragraph",
        text: "Rossa.",
      },
      {
        kind: "paragraph",
        text: "Abbandonata.",
      },
      {
        kind: "paragraph",
        text: "Impossibile non vederla.",
      },
      {
        kind: "paragraph",
        text: "L’etichetta è rimasta.",
      },
      {
        kind: "paragraph",
        text: "La si può ancora indicare.",
      },
      {
        kind: "paragraph",
        text: "Raccontare.",
      },
      {
        kind: "paragraph",
        text: "Interpretare.",
      },
      {
        kind: "paragraph",
        text: "Giudicare.",
      },
      {
        kind: "paragraph",
        text: "Ma quella giacca non è Melissa.",
      },
      {
        kind: "paragraph",
        text: "Non lo è mai stata.",
      },
      {
        kind: "paragraph",
        text: "Melissa è ormai nelle tracce che quella storia ha lasciato.",
      },
      {
        kind: "paragraph",
        text: "Nelle pagine che lessi tanti anni fa.",
      },
      {
        kind: "paragraph",
        text: "Nella canzone che nacque allora.",
      },
      {
        kind: "paragraph",
        text: "Nel video che hai appena visto.",
      },
      {
        kind: "paragraph",
        text: "E adesso, in una piccola parte, anche nella tua memoria.",
      },
      {
        kind: "paragraph",
        text: "Se sei arrivato fin qui, per alcuni minuti non hai osservato soltanto una leggenda da lontano.",
      },
      {
        kind: "paragraph",
        text: "Sei entrato nel bosco.",
      },
      {
        kind: "paragraph",
        text: "Sei stato sulla rocca.",
      },
      {
        kind: "paragraph",
        text: "Hai guardato attraverso gli occhi di chi giudica.",
      },
      {
        kind: "paragraph",
        text: "Poi sei tornato da lei.",
      },
      {
        kind: "paragraph",
        text: "Ed è questo che cercavo quando ho scritto Melissa.",
      },
      {
        kind: "paragraph",
        text: "Non spiegare.",
      },
      {
        kind: "paragraph",
        text: "Non assolvere.",
      },
      {
        kind: "paragraph",
        text: "Non condannare.",
      },
      {
        kind: "emphasis",
        text: "Restare.",
      },
      {
        kind: "paragraph",
        text: "Ancora pochi secondi.",
      },
    ],
  },
];

export const melissaSecondVision = [
  "Riguarda il video.",
  "Questa volta guarda chi è sulla rocca all’inizio.",
  "Guarda gli occhi.",
  "Guarda le mani.",
  "E quando quel dito indica il bosco, prova a sentire entrambe le cose:",
  "il giudizio di chi punta il dito",
  "e l’invito a guardare oltre quel giudizio.",
  "Poi entra.",
  "Guarda Melissa nel bianco.",
  "Guarda la nebbia che la accompagna.",
  "Guardala quando prende il posto degli altri sulla rocca.",
  "Guarda quando il rosso passa dagli occhi di chi osserva al suo corpo.",
  "Segui la luce quando lascia il bosco.",
  "Segui le scintille fino alla città.",
  "E quando alla fine rimarrà soltanto quella giacca sull’asfalto, ricordati una cosa.",
];

export const melissaSecondVisionEmphasis =
  "Quella è l’etichetta. Non Melissa.";

export const melissaSecondVisionClosing = [
  "Melissa è nella traccia che ha lasciato.",
  "E per la durata di questa storia, adesso, quella traccia passa anche attraverso di te.",
];
