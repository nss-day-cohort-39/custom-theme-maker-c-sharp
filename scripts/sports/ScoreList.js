import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"


const eventHub = document.querySelector("#container")

const render = scoreCollection => {
    return `
        <article id="scores" class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}

eventHub.addEventListener("borderChosen", event => {
    let borderContainer = document.querySelector("#scores")
   
    const border = event.detail.border


    borderContainer.classList = []
    borderContainer.classList.add(border)
})

eventHub.addEventListener("fontChosen", event => {
    const scoreContainer = document.querySelector("#scores")
    const font = event.detail.font

    scoreContainer.classList = []
    scoreContainer.classList.add(font)
})

eventHub.addEventListener("colorChosen", event => {
    const favoritesContainer = document.querySelector("#scores")
    const color = event.detail.color
    
    favoritesContainer.classList = []
    favoritesContainer.classList.add(color)
})

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}
