const eventHub = document.querySelector("#container")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith("borderSize--")) {

        const [prefix, chosenBorder] = clickEvent.target.id.split("--")

        const borderChosenEvent = new CustomEvent("borderChosen", {
            detail: {
                border: chosenBorder
            }
        })

        eventHub.dispatchEvent(borderChosenEvent)
    }
})

export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input id="borderSize--onePx" class="radio--selection" type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input id="borderSize--threePx" class="radio--selection" type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input id="borderSize--fivePx" class="radio--selection" type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
