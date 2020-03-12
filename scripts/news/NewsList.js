import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"


const eventHub = document.querySelector("#container")


export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article id="news" class="container__panel scores">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}

eventHub.addEventListener("fontChosen", event => {
    const scoreContainer = document.querySelector("#news")
    const font = event.detail.font

    scoreContainer.classList = []
    scoreContainer.classList.add(font)
})
