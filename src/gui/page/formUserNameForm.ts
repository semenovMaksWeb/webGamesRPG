import { dom } from "@src/gui/dom/dom";

export function formUserNameForm() {
    const APP = document.querySelector("#APP") as Element;
    
    const formUserNameForm = document.createElement("form");
    formUserNameForm.classList.add("form");
    formUserNameForm.classList.add("formUserNameForm");

    const input = dom.input();  

    const button = dom.button("Подвердить имя")

    formUserNameForm.append(input);
    formUserNameForm.append(button);

    APP.innerHTML = formUserNameForm.outerHTML;
}