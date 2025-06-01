import "@src/gui/style/navMain.css"
import { navComponent } from "@src/gui/component/navComponent"
import { LogoComponent } from "@src/gui/component/logoComponent";
import { gamesPage } from "@src/gui/page/gamesPage";
import { inventoryPage } from "../page/inventoryPage";

export function MenuMainComponent() {

    const NAV_MAIN_ITEM_LIST = [
        {
            text: "Игра",
            class: "active",
            key: "games",
        },
        {
            text: "Инвентарь",
            class: null,
            key: "inventory",
        },
        {
            text: "Магазин",
            class: null,
            key: "shop",
        },
        {
            text: "Руководство",
            class: null,
            key: "management",
        },
        {
            text: "Новости",
            class: null,
            key: "news",
        },
        {
            text: "Тех поддержка",
            class: null,
            key: "techSupport",
        }
    ]

    // Создание пустого меню
    const nav = navComponent();
    nav.classList.add("navMain");

    // Создание logo
    const logo = LogoComponent();
    nav.appendChild(logo);

    for (const navMainItem of NAV_MAIN_ITEM_LIST) {
        const div = document.createElement("div");
        div.classList.add("navMainItem");

        if (navMainItem.class) {
            div.classList.add(navMainItem.class);
        }

        div.dataset.key = navMainItem.key;
        div.innerHTML = navMainItem.text;

        div.addEventListener("click", async (event: any) => {
            const navItemActiveDom = document.querySelector(".navMain .active") as HTMLElement;
            navItemActiveDom.classList.remove("active");
            event.target.classList.add("active");
            switch (event.target.dataset.key) {
                case "games":
                    gamesPage();
                    break;
                case "inventory":
                    await inventoryPage();
                    break;
            }
        })

        nav.appendChild(div);
    }
    return nav;
}