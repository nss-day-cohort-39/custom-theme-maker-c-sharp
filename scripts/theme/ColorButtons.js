const eventHub = document.querySelector("#container")

eventHub.addEventListener ("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btnTheme--")) {
        const [prefix, chosenColor] = clickEvent.target.id.split("--")
        const backgroundChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })
        eventHub.dispatchEvent(backgroundChosenEvent)
    }
})

export const ColorButtons = () => {
    return `
        <article class="colors">
            <fieldset>
                <legend>Background Colors</legend>

                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
            </fieldset>
        </article>
    `
}