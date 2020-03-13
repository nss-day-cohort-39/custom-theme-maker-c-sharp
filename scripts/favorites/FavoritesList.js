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
    
    favoritesContainer.classList.remove('red', 'purple', 'blue', 'green')
    favoritesContainer.classList.add(color)
})

eventHub.addEventListener("borderChosen", event => {
    const favoritesContainer = document.querySelector("#favorites")
    const border = event.detail.border

    favoritesContainer.classList.remove('onePx', 'threePx', 'fivePx')
    favoritesContainer.classList.add(border)
})

eventHub.addEventListener("fontChosen", event => {
    const favoritesContainer = document.querySelector("#favorites")
    const font = event.detail.font

    favoritesContainer.classList.remove('small', 'xsmall', 'large', 'xlarge')
    favoritesContainer.classList.add(font)
})
