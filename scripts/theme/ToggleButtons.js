const eventHub = document.querySelector("#container");

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("toggle--")) {
    const [prefix, containerToToggle] = clickEvent.target.id.split("--");
    const targetToggleEvent = new CustomEvent("toggleChosen", {
      detail: {
        container: containerToToggle
      }
    });
    eventHub.dispatchEvent(targetToggleEvent);
  }
});

export const ToggleButtons = () => {
  return `
        <article class="toggles">
            <fieldset>
                <legend>Togglers</legend>

                <button id="toggle--favorites">Favorites</button>
                <button id="toggle--news">News</button>
                <button id="toggle--scores">Scores</button>
            </fieldset>
        </article>
    `;
};
