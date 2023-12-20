console.log("ciao");

/*
Step 1: struttura dei dati
Partendo dai dati forniti crea le strutture dati necessarie sfruttando array e oggetti facendo attenzione agli attributi che caratterizzano ciascuna news.

*/

const news = [
  {
    id: "1",
    title: "Scoperta di una nuova specie di papera di gomma",
    content: "Scoperta di una nuova specie di papera di gomma.",
    tags: "geo,tech",
    author: "Diana Rossi",
    published: "2023-02-11",
  },
  {
    id: "2",
    title: "Esplorando le profondità marine: il mistero degli abissi",
    content: "Esplorando le profondità marine: il mistero degli abissi",
    tags: "viaggi, geo",
    author: "Fabio Mari",
    published: "2023-03-14",
  },
  {
    id: "3",
    title: "Viaggio culinario: alla ricerca dei sapori perduti",
    content:
      "Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.",
    tags: "cucina",
    author: "Marta Bianchi",
    published: "2023-04-20",
  },
  {
    id: "4",
    title: "Arte moderna: oltre i confini convenzionali",
    content:
      "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
    tags: "arte, tech",
    author: "Gabriele Neri",
    published: "2023-05-29",
  },
];

/*
Step 2 - Stampa dei dati in pagina
Prendendo come riferimento il layout di esempio presente nell'HTML stampa in pagina le news del nostro feed utilizzando JavaScript.

*/