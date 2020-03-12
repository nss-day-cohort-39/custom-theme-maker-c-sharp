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

eventHub.addEventListener("borderChosen", event => {
    const borderContainer = document.querySelector("#news")
    const border = event.detail.border

    borderContainer.classList = []
    borderContainer.classList.add(border)
})

eventHub.addEventListener("fontChosen", event => {
    const scoreContainer = document.querySelector("#news")
    const font = event.detail.font

    scoreContainer.classList = []
    scoreContainer.classList.add(font)
})

eventHub.addEventListener("colorChosen", event => {
    const favoritesContainer = document.querySelector("#news")
    const color = event.detail.color
    
    favoritesContainer.classList = []
    favoritesContainer.classList.add(color)
})
