import { MenuGamesComponent } from "@src/gui/component/menuGamesComponent";

export function gamesPage() {
    // const APP = document.querySelector("#APP") as Element;
    const main = document.querySelector(".main") as Element;;
    main.innerHTML = "";
    main.appendChild(MenuGamesComponent());
}