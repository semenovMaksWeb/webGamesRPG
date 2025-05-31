import "@src/gui/style/navMain.css"
import { dom } from "@src/gui/dom/dom";

export function createMenuMain() {
    const APP = document.querySelector("#APP") as Element;

    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.classList.add("navMain");

    const navMainItemList = [
        {
            text: "Игра"
        },
        {
            text: "Руководство"
        },
        {
            text: "Новости"
        },
        {
            text: "Тех поддержка"
        }
    ]

    const logo = dom.create.logo();
    nav.append(logo);

    for (const navMainItem of navMainItemList) {
        const div = document.createElement("div");
        div.classList.add("navMainItem");
        div.innerHTML = navMainItem.text;
        nav.append(div);
    }

    APP.innerHTML = nav.outerHTML;
}