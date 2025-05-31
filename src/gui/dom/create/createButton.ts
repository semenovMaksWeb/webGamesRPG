export function createButton(innerHTML: string) {
    const button = document.createElement("button");
    button.innerHTML = innerHTML;
    button.classList.add("button");
    return button;
}