// struttura dei dati

const news = [
  {
    id: "1",
    title: "Scoperta di una nuova specie di papera di gomma",
    content: "Scoperta di una nuova specie di papera di gomma.",
    tags: ["geo", "tech"],
    author: "Diana Rossi",
    published: "2023-02-11",
    img: "img/rubber-duck.jpg",
    alt: "papera_gigante_di_gomma",
  },
  {
    id: "2",
    title: "Esplorando le profondità marine: il mistero degli abissi",
    content: "Esplorando le profondità marine: il mistero degli abissi",
    tags: ["viaggi", "geo"],
    author: "Fabio Mari",
    published: "2023-03-14",
    img: "img/deep-sea.jpg",
    alt: "fondo_marino",
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
    alt: "tavola_con_alimenti",
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
    alt: "murales_artisti_emergenti",
  },
];
const newsSaved = [];

const tagColors = {
  geo: "green",
  tech: "darkblue",
  viaggi: "orange",
  cucina: "rebeccapurple",
  arte: "rgb(180, 180, 4)",
  politica: "grey",
};
console.log(news);

// creazione in modo dinamico delle cards per le news

const articlesEl = document.querySelector("#cards_teplate");
const tagsEl = document.getElementById("tags");

console.log(tagsEl.value);

articlesEl.innerHTML = "";

for (let i = 0; i < news.length; i++) {
  const article = news[i];
  const cardMarkup = createCardMarkup(article);

  articlesEl.insertAdjacentHTML("beforeend", cardMarkup);
}

function createCardMarkup(article) {
  return `
    <div class="cards" data-article-id="${article.id}">
      <div class="top_card">
        <h2>${article.title}</h2>
        <i class="fa-regular fa-bookmark"></i>
      </div>
      <h4>pubblicato da ${article.author}</h4>
      <p>in data ${article.published}</p>
      <p id="text">${article.content}</p>
      <img src="${article.img}" alt="${article.alt}" />
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
}

// tramite select stampiamo le news scegliendo un tag

tagsEl.addEventListener("change", function () {
  articlesEl.innerHTML = "";

  const selectedTag = tagsEl.value;

  const filteredNews = news.filter(
    (article) => article.tags.includes(selectedTag) || selectedTag === "all"
  );

  if (filteredNews.length === 0) {
    // Se non ci sono notizie mostra il messaggio "No news available"
    const noNewsMessage = document.createElement("h1");
    noNewsMessage.textContent = "No news available";
    noNewsMessage.classList.add("no_news");
    articlesEl.appendChild(noNewsMessage);
  } else {
    // altrimenti mostra le news disponibili
    for (let i = 0; i < filteredNews.length; i++) {
      const article = filteredNews[i];
      const cardMarkup = createCardMarkup(article);

      articlesEl.insertAdjacentHTML("beforeend", cardMarkup);
    }
  }
});

// al click cambiamo Bookmark

document.addEventListener("click", changeBookmark);

function changeBookmark(event) {
  const clickedEl = event.target;

  //  cliccando cambio la classe "fa-bookmark"
  if (clickedEl.classList.contains("fa-bookmark")) {
    clickedEl.classList.toggle("fa-regular");
    clickedEl.classList.toggle("fa-solid");

    const articleId = clickedEl.closest(".cards").dataset.articleId;

    const selectedArticle = news.find((article) => article.id === articleId);

    if (selectedArticle) {
      // Se la classe è "fa-solid" viene inserito newsSaved
      if (clickedEl.classList.contains("fa-solid")) {
        const isAlreadySaved = newsSaved.some(
          (savedArticle) => savedArticle.id === selectedArticle.id
        );

        if (!isAlreadySaved) {
          newsSaved.push(selectedArticle);
          console.log("news salvato:", selectedArticle);
          console.log(newsSaved);
        }
      } else {
        // Se la classe è "fa-regular" rimuove l'articolo da newsSaved
        const indexToRemove = newsSaved.findIndex(
          (savedArticle) => savedArticle.id === selectedArticle.id
        );

        if (indexToRemove !== -1) {
          newsSaved.splice(indexToRemove, 1);
          console.log("news rimosso:", selectedArticle);
          console.log(newsSaved);
        }
      }
    }
  }
}

// Funzione per stampare tutte le news salvate

const showSavedCheckbox = document.getElementById("saved_news");
showSavedCheckbox.addEventListener("change", printSavedNews);

function printSavedNews() {
  // Se la checkbox è spuntata, stampa le news salvate
  if (showSavedCheckbox.checked) {
    articlesEl.innerHTML = "";

    // Itera attraverso le news salvate e crea il markup
    for (let i = 0; i < newsSaved.length; i++) {
      const savedArticle = newsSaved[i];
      const cardMarkup = createCardMarkup(savedArticle);
      articlesEl.insertAdjacentHTML("beforeend", cardMarkup);
    }
  } else {
    // Se la checkbox non è spuntata, ripristina la visualizzazione normale
    articlesEl.innerHTML = "";
    for (let i = 0; i < news.length; i++) {
      const article = news[i];
      const cardMarkup = createCardMarkup(article);
      articlesEl.insertAdjacentHTML("beforeend", cardMarkup);
    }
  }
}
