import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

const eventHub = document.querySelector("#container")

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

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}