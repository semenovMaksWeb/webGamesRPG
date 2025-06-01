import { dom } from "@src/gui/dom/dom";
import "@src/gui/style/formUserNameForm.css"
import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";
import { mainPage } from "@src/gui/page/mainPage";
import { ButtonComponent } from "@src/gui/component/buttonComponent";
import { LogoComponent } from "@src/gui/component/logoComponent";
import { FieldsetComponent } from "../component/fieldsetComponent";
import { InputComponent } from "../component/inputComponent";
import { LabelComponent } from "../component/labelComponent";
import { FormComponent } from "../component/formComponent";

export function formUserNameForm() {
    const APP = document.querySelector("#APP") as Element;
    APP.innerHTML = "";

    const NAME_FIELD = "name";

    // Добавление wrapper для стилей
    const formWrapper = document.createElement("div");
    formWrapper.classList.add("formUserNameFormWrapper");

    // Добавление формы
    const formUserNameForm = FormComponent();
    formUserNameForm.classList.add("formUserNameForm");

    // Добавление оболочки в форме
    const fieldset = FieldsetComponent("Форма ввода имени");

    // Label для input name
    const label = LabelComponent("Имя", NAME_FIELD);

    // input name
    const input = InputComponent(NAME_FIELD);
    input.setAttribute("placeholder", "Введите имя");

    // Создание кнопки
    const button = ButtonComponent("Подвердить");
    button.addEventListener("click", async () => {
        const inputDom = document.querySelector(".input") as HTMLInputElement;
        if (!inputDom.value) {
            return;
        }
        await indexedDBService.createUser(inputDom.value);
        mainPage();
    })
    // Заполнение оболочки формы
    fieldset.appendChild(label);
    fieldset.appendChild(input);
    // создание логотипа
    const logo = LogoComponent();

    // Заполнение формы
    formUserNameForm.appendChild(logo);
    formUserNameForm.appendChild(fieldset);
    formUserNameForm.appendChild(button);
    // вставка формы в оболочку стилей
    formWrapper.appendChild(formUserNameForm);

    APP.appendChild(formWrapper);
}