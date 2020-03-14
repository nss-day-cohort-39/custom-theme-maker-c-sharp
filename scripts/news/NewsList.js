import { useNews } from "./NewsProvider.js";
import { NewsItem } from "./NewsItem.js";

const eventHub = document.querySelector("#container");

export const NewsList = () => {
  const newsItems = useNews();
  return render(newsItems);
};

const render = newsCollection => {
  return `
        <article id="news" class="container__panel scores">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `;
};

eventHub.addEventListener("colorChosen", event => {
  const newsContainer = document.querySelector("#news");
  const color = event.detail.color;

  newsContainer.classList.remove("red", "purple", "blue", "green");
  newsContainer.classList.add(color);
});

eventHub.addEventListener("borderChosen", event => {
  const newsContainer = document.querySelector("#news");
  const border = event.detail.border;

  newsContainer.classList.remove("onePx", "threePx", "fivePx");
  newsContainer.classList.add(border);
});

eventHub.addEventListener("fontChosen", event => {
  const newsContainer = document.querySelector("#news");
  const font = event.detail.font;

  newsContainer.classList.remove("small", "xsmall", "large", "xlarge");
  newsContainer.classList.add(font);
});

eventHub.addEventListener("toggleChosen", event => {
  const favoritesContainer = document.querySelector("#news");
  if (event.detail.container === "news") {
    if (favoritesContainer.classList.contains("hidden")) {
      favoritesContainer.classList.remove("hidden");
    } else {
      favoritesContainer.classList.add("hidden");
    }
  }
});
