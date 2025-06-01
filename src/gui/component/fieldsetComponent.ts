export function FieldsetComponent(legendInnerHtml: string) {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("fieldset");
    const legend = document.createElement("legend");
    legend.classList.add("legend");
    legend.innerHTML = legendInnerHtml;
    fieldset.append(legend);
    return fieldset;
}