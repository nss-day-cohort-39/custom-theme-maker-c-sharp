import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"


const eventHub = document.querySelector("#container")

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

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