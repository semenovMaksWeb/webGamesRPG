export function createInput(idAttribute: string) {
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("id", idAttribute);
    input.setAttribute("autocomplete", "off");
    return input;
}