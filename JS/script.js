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
    tags: ["geo", "tech"],
    author: "Diana Rossi",
    published: "2023-02-11",
    img: "img/rubber-duck.jpg",
  },
  {
    id: "2",
    title: "Esplorando le profondità marine: il mistero degli abissi",
    content: "Esplorando le profondità marine: il mistero degli abissi",
    tags: ["viaggi", "geo"],
    author: "Fabio Mari",
    published: "2023-03-14",
    img: "img/deep-sea.jpg",
  },
  {
    id: "3",
    title: "Viaggio culinario: alla ricerca dei sapori perduti",
    content:
      "Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.",
    tags: ["cucina"],
    author: "Marta Bianchi",
    published: "2023-04-20",
    img: "img/kitchen-food.jpg",
  },
  {
    id: "4",
    title: "Arte moderna: oltre i confini convenzionali",
    content:
      "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
    tags: ["arte", "tech"],
    author: "Gabriele Neri",
    published: "2023-05-29",
    img: "img/modern-art.jpg",
  },
];

const tagColors = {
  geo: "green",
  tech: "darkblue",
  viaggi: "orange",
  cucina: "rebeccapurple",
  arte: "rgb(180, 180, 4)",
  politica: "grey",
};
console.log(news);

/*
Step 2 - Stampa dei dati in pagina
Prendendo come riferimento il layout di esempio presente nell'HTML stampa in pagina le news del nostro feed utilizzando JavaScript.

*/

const articlesEl = document.querySelector(".cards_teplate");
const tagsEl = document.getElementById("tags");

console.log(tagsEl.value);

articlesEl.innerHTML = "";

for (let i = 0; i < news.length; i++) {
  const article = news[i];

  const cardMarkup = `
    <div class="cards">
      <div class="top_card">
        <h2>${article.title}</h2>
        <button id="book_empty" class="bookmark_empty">
          <i class="fa-regular fa-bookmark"></i>
        </button>
        <button id="book_full" class="bookmark_full">
          <i class="fa-solid fa-bookmark bookmark_full"></i>
        </button>
      </div>
      <h4>pubblicato da ${article.author}</h4>
      <p>in data ${article.published}</p>
      <p id="text">
        ${article.content}
      </p>
      <img src="${article.img}" alt="..." />
      <div class="container_tags">
        ${article.tags
          .map(
            (tag) =>
              `<div class="tags" style="background-color: ${tagColors[tag]}">${tag}</div>`
          )
          .join("")} 
      </div>
    </div>
  `;

  articlesEl.insertAdjacentHTML("beforeend", cardMarkup);
}

tagsEl.addEventListener("change", function () {
  articlesEl.innerHTML = "";
  console.log("prova");
  for (let i = 0; i < news.length; i++) {
    const article = news[i];

    if (article.tags.includes(tagsEl.value) || tagsEl.value === "all") {
      const cardMarkup = `
    <div class="cards">
      <div class="top_card">
        <h2>${article.title}</h2>
        <button id="book_empty" class="bookmark_empty">
          <i class="fa-regular fa-bookmark"></i>
        </button>
        <button id="book_full" class="bookmark_full">
          <i class="fa-solid fa-bookmark bookmark_full"></i>
        </button>
      </div>
      <h4>pubblicato da ${article.author}</h4>
      <p>in data ${article.published}</p>
      <p id="text">
        ${article.content}
      </p>
      <img src="${article.img}" alt="..." />
      <div class="container_tags">
        ${article.tags
          .map(
            (tag) =>
              `<div class="tags" style="background-color: ${tagColors[tag]}">${tag}</div>`
          )
          .join("")} 
      </div>
    </div>
  `;
      console.log("prova2");
      articlesEl.insertAdjacentHTML("beforeend", cardMarkup);
    }
  }
});

/* al click passiamo dal bookmark vuoto al pieno. */

document.getElementById("book_empty").addEventListener("click", changeBookmark);

function changeBookmark() {
  document.getElementById("book_empty").className = "bookmark_full";
  document.getElementById("book_full").className = "bookmark_empty";
}
