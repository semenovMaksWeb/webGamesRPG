import { dom } from "@src/gui/dom/dom";

export function mainPage() {
    const APP = document.querySelector("#APP") as Element;
    APP.innerHTML = "";
    
    dom.create.menuMain();
    dom.create.menuCoins();
}