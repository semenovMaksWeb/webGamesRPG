export function formEventDefault(form: HTMLFormElement) {
    form.addEventListener("submit", (event: Event) => { event.preventDefault() });
}