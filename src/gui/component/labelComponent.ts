export function LabelComponent(innerHTML: string, forAttribute: string) {
    const label = document.createElement("label");
    label.innerHTML = innerHTML;
    label.setAttribute("for", forAttribute);
    label.classList.add("label");
    return label;
}