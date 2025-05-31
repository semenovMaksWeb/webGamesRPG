import { dom } from "@src/gui/dom/dom";
import "@src/gui/style/formUserNameForm.css"
import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";

export function formUserNameForm() {
    const APP = document.querySelector("#APP") as Element;
    const formWrapper = document.createElement("div");
    formWrapper.classList.add("formUserNameFormWrapper");

    const formUserNameForm = dom.create.form();
    formUserNameForm.classList.add("formUserNameForm");

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("fieldset");

    const legend = document.createElement("legend");
    legend.classList.add("legend");
    legend.innerHTML = "Форма ввода имени";

    const label = document.createElement("label");
    label.innerHTML = "Имя";
    label.setAttribute("for", "name");
    label.classList.add("label");

    const input = dom.create.input("name");
    input.setAttribute("placeholder", "Введите имя");
    const button = dom.create.button("Подвердить");
    const logo = dom.create.logo();
    fieldset.append(legend);
    fieldset.append(label);
    fieldset.append(input);
    formUserNameForm.append(logo);
    formUserNameForm.append(fieldset);
    formUserNameForm.append(button);

    formWrapper.append(formUserNameForm);

    APP.innerHTML = formWrapper.outerHTML;

    dom.event.form(document.querySelector(".formUserNameForm") as HTMLFormElement);
    const buttonDom = document.querySelector(".button") as HTMLButtonElement;
    const inputDom = document.querySelector(".input") as HTMLInputElement;
    buttonDom.addEventListener("click", async () => {
        if (!inputDom.value) {
            return;
        }
        await indexedDBService.createUser(inputDom.value);
    })
}