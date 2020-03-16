const eventHub = document.querySelector("#container");
// const contentTarget = document.querySelector(".fonts")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("btnFont--")) {
    const [prefix, chosenFont] = clickEvent.target.id.split("--");

    const fontChosenEvent = new CustomEvent("fontChosen", {
      detail: {
        font: chosenFont
      }
    });

    eventHub.dispatchEvent(fontChosenEvent);
  }
});

export const FontButtons = () => {
  return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `;
};
