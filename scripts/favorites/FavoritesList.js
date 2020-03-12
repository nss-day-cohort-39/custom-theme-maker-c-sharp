import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

const eventHub = document.querySelector("#container")

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article id="favorites" class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}

eventHub.addEventListener("colorChosen", event => {
    const favoritesContainer = document.querySelector("#favorites")
    const color = event.detail.color
    
    favoritesContainer.classList = []
    favoritesContainer.classList.add(color)
})

eventHub.addEventListener("borderChosen", event => {
    const borderContainer = document.querySelector("#favorites")
    const border = event.detail.border

    borderContainer.classList = []
    borderContainer.classList.add(border)
})

eventHub.addEventListener("fontChosen", event => {
    const scoreContainer = document.querySelector("#favorites")
    const font = event.detail.font

    scoreContainer.classList = []
    scoreContainer.classList.add(font)
})

