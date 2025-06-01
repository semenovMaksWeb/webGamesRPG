import { MenuMainComponent } from "@src/gui/component/menuMainComponent";
import { MenuCoinsComponent } from "@src/gui/component/menuCoinsComponent";
import { MainComponent } from "@src/gui/component/mainComponent";

export async function mainPage() {
    const APP = document.querySelector("#APP") as Element;
    APP.innerHTML = "";
    
    APP.appendChild(MenuMainComponent());
    APP.appendChild(await MenuCoinsComponent());
    APP.appendChild(MainComponent());
}