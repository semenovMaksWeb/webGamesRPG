import { dom } from "@src/gui/dom/dom";
import "@src/gui/style/formUserNameForm.css"

export function formUserNameForm() {
    const APP = document.querySelector("#APP") as Element;

    const formUserNameForm = document.createElement("form");
    formUserNameForm.classList.add("form");
    formUserNameForm.classList.add("formUserNameForm");


    const label = document.createElement("label");
    formUserNameForm.classList.add("label");
    label.innerHTML = "Введите имя";
    label.setAttribute("for", "name");

    const input = dom.input("name");

    const button = dom.button("Подвердить имя");

    formUserNameForm.append(label);
    formUserNameForm.append(input);
    formUserNameForm.append(button);

    APP.innerHTML = formUserNameForm.outerHTML;
}