export type TeasedWork = {
  title: string;
  clue: string;
  state: "in ascolto" | "in preparazione" | "non ancora aperta" | "traccia instabile";
  motif: string;
};

export const teasedWorks: TeasedWork[] = [
  {
    title: "Un giorno come un altro",
    clue: "Una giornata qualsiasi comincia a perdere la sua maschera.",
    state: "in ascolto",
    motif: "tempo",
  },
  {
    title: "Le mani contro il vetro",
    clue: "Il contatto esiste, ma resta separato da una superficie fredda.",
    state: "in preparazione",
    motif: "vetro",
  },
  {
    title: "Antidoto",
    clue: "Un corpo prova a danzare contro il veleno che gli gira intorno.",
    state: "traccia instabile",
    motif: "cura",
  },
  {
    title: "Non perdi mai",
    clue: "C'è una vittoria che consuma, e una resa che forse salva qualcosa.",
    state: "non ancora aperta",
    motif: "sfida",
  },
  {
    title: "Stelle in polvere",
    clue: "La luce cade, si sporca, e continua a brillare da un punto più basso.",
    state: "in ascolto",
    motif: "polvere",
  },
  {
    title: "Sono io il tuo re",
    clue: "Una corona compare dove il potere ha smesso di sembrare innocente.",
    state: "non ancora aperta",
    motif: "corona",
  },
  {
    title: "Bambole",
    clue: "Corpi messi in posa, fili invisibili, occhi che non accettano più il gioco.",
    state: "in preparazione",
    motif: "filo",
  },
  {
    title: "Solite bugie",
    clue: "La menzogna torna con lo stesso passo, ma qualcosa ha imparato a riconoscerla.",
    state: "traccia instabile",
    motif: "eco",
  },
  {
    title: "Microsuoni a rilascio controllato",
    clue: "Piccole particelle sonore si aprono lentamente, come medicine per stanze chiuse.",
    state: "in ascolto",
    motif: "particelle",
  },
];
