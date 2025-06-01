import { coinsList, coinsListInfo } from "@src/core/coins/coinsList";
import { navComponent } from "@src/gui/component/navComponent";
import { indexedDBService } from "../IndexedDB/IndexedDB";
import "@src/gui/style/navCoins.css"


export async function MenuCoinsComponent() {
    // Создание пустого меню
    const nav = navComponent();
    nav.classList.add("navCoins");

    // Проверка наличия всех монет в БД
    let navCoinsItemList = await indexedDBService.getCoins() as any;
    if (navCoinsItemList.length !== Object.keys(coinsList).length) {

        for (const key in coinsList) {
            if (!navCoinsItemList.length) {
                indexedDBService.createCoins(key, 0);
            }

            if (!navCoinsItemList.find((navCoinsItem: any) => navCoinsItem.name == key)) {
                indexedDBService.createCoins(key, 0);
            }
        }
        navCoinsItemList = await indexedDBService.getCoins() as any;
    }

    // Отрисовка монет
    for (const navCoinsItem of navCoinsItemList) {
        const div = document.createElement("div");
        div.classList.add("navCoinsItem");
        div.innerHTML = `${coinsListInfo[navCoinsItem.id].name}: ${navCoinsItem.value}`;
        nav.appendChild(div);
    }
    return nav;
}