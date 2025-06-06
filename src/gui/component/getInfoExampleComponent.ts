export function getInfoExampleComponent(image: string | null, attribute: any) {
    const infoExampleDiv = document.createElement("div");
    infoExampleDiv.classList.add("infoExample");

    if (image !== null) {
        const imageExampleWrapper = document.createElement("div");
        const imageExample = document.createElement("img");
        imageExample.setAttribute("src", image);
        imageExampleWrapper.appendChild(imageExample);
        infoExampleDiv.appendChild(imageExampleWrapper);
    }

    return infoExampleDiv;
}