export function FormComponent() {
    const form = document.createElement("form");
    form.classList.add("form");
    form.addEventListener("submit", (event: Event) => { event.preventDefault() });
    return form;
}