import { dom } from "@src/gui/dom/dom";
import "@src/gui/style/formUserNameForm.css"
import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";

export function formUserNameForm() {
    const APP = document.querySelector("#APP") as Element;

    const formUserNameForm = dom.create.form();
    formUserNameForm.classList.add("formUserNameForm");
    const label = document.createElement("label");
    label.innerHTML = "Введите имя";
    label.setAttribute("for", "name");

    const input = dom.create.input("name");
    const button = dom.create.button("Подвердить имя");

    formUserNameForm.append(label);
    formUserNameForm.append(input);
    formUserNameForm.append(button);
    APP.innerHTML = formUserNameForm.outerHTML;

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