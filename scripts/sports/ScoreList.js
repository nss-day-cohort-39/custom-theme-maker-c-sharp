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

eventHub.addEventListener("colorChosen", event => {
    const scoreContainer = document.querySelector("#scores")
    const color = event.detail.color
    
    scoreContainer.classList.remove('red', 'purple', 'blue', 'green')
    scoreContainer.classList.add(color)
})

eventHub.addEventListener("borderChosen", event => {
    const scoreContainer = document.querySelector("#scores")
    const border = event.detail.border


    scoreContainer.classList.remove('onePx', 'threePx', 'fivePx')
    scoreContainer.classList.add(border)
})

eventHub.addEventListener("fontChosen", event => {
    const scoreContainer = document.querySelector("#scores")
    const font = event.detail.font

    scoreContainer.classList.remove('small', 'xsmall', 'large', 'xlarge')
    scoreContainer.classList.add(font)
})



export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}
