import { coinsList, coinsListInfo } from "@src/core/coins/coinsList";
import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";
import "@src/gui/style/navCoins.css"

export async function createMenuCoins() {

    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.classList.add("navCoins");

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

    for (const navCoinsItem of navCoinsItemList) {
        const div = document.createElement("div");
        div.classList.add("navCoinsItem");
        div.innerHTML = `${coinsListInfo[navCoinsItem.id].name}: ${navCoinsItem.value}`;
        nav.append(div);
    }

    return nav;
}