import { navComponent } from "./navComponent";
import "@src/gui/style/navGames.css"


export function MenuGamesComponent() {
    const NAV_GAMES_ITEM_LIST = [
        {
            text: "Играть",
            class: "active",
            key: "games",
        },
        {
            text: "Инвентарь",
            class: null,
            key: "inventory",
        },
        {
            text: "Персонажы",
            class: null,
            key: "character",
        },
        {
            text: "Оружия",
            class: null,
            key: "weapon",
        },
        {
            text: "Усиления",
            class: null,
            key: "gain",
        }
    ]

    // Создание пустого меню
    const nav = navComponent();
    nav.classList.add("navGames");

    // Отрисовка элементов
    for (const navGamesItem of NAV_GAMES_ITEM_LIST) {
        const div = document.createElement("div");
        div.classList.add("navGamesItem");
        if (navGamesItem.class) {
            div.classList.add(navGamesItem.class);
        }
        div.dataset.key = navGamesItem.key;
        div.innerHTML = navGamesItem.text;
        div.addEventListener("click", (event: any) => {
            const navItemActiveDom = document.querySelector(".navGames .active") as HTMLElement;
            navItemActiveDom.classList.remove("active");
            event.target.classList.add("active");
            switch (event.target.dataset.key) {
                case 'games':
                    break;
            }
        })
        nav.append(div);
    }
    return nav;
}