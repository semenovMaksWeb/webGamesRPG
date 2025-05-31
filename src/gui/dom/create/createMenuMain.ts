import "@src/gui/style/navMain.css"
import { dom } from "@src/gui/dom/dom";

export function createMenuMain() {

    function clickNavMain(key: any) {
        switch (key) {
            case 'games':
                console.log("games");
                break;
        }
    }

    const APP = document.querySelector("#APP") as Element;

    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.classList.add("navMain");

    const navMainItemList = [
        {
            text: "Игра",
            class: "active",
            key: "games",
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

    const logo = dom.create.logo();
    nav.append(logo);

    for (const navMainItem of navMainItemList) {
        const div = document.createElement("div");
        div.classList.add("navMainItem");
        if (navMainItem.class) {
            div.classList.add(navMainItem.class);
            clickNavMain(navMainItem.key);
        }
        div.dataset.key = navMainItem.key;
        div.innerHTML = navMainItem.text;
        nav.append(div);
    }

    APP.append(nav);

    const navDom = document.querySelector(".navMain") as HTMLElement;
    navDom.onclick = (event: any) => {
        if (event.target.classList.contains("navMainItem") && event.target.dataset.key) {
            const navItemActiveDom = document.querySelector(".navMain .active") as HTMLElement;
            navItemActiveDom.classList.remove("active");
            event.target.classList.add("active");
            clickNavMain(event.target.dataset.key);
        }
    }
}