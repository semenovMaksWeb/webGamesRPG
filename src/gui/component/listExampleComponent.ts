import { CharacterExample } from "@src/core/example/characterExample";
import { WeaponExample } from "@src/core/example/weaponExample";
import { getInfoExampleComponent } from "@src/gui/component/getInfoExampleComponent";


export function ListExampleComponent(
    listWeaponExample: WeaponExample[],
    listCharacterExample: CharacterExample[]
) {
    function clickItemExample(event: any, example: WeaponExample | CharacterExample) {
        let getExampleInType = null;
        if (example instanceof WeaponExample) {
            getExampleInType = example.weapon;
        } else if (example instanceof CharacterExample) {
            getExampleInType = example.character;
        }

        const infoExample = document.querySelector(".infoExample") as Element;
        infoExample.innerHTML = "";

        const itemExample = document.querySelector(".itemExampleActive") as Element;
        itemExample.classList.remove("itemExampleActive");
        event.target.classList.add("itemExampleActive");

        if (getExampleInType !== null) {
            const getInfoExampleDiv = getInfoExampleComponent(
                getExampleInType.image,
                getExampleInType.attribute,
                example.experience.level,
                example.experience.experience
            );
            infoExample.innerHTML = getInfoExampleDiv.innerHTML;
        }
    }

    const div = document.createElement("div");
    div.classList.add("list");
    div.classList.add("listExample");

    const divWeapon = document.createElement("div");
    divWeapon.classList.add("listWeapon");

    const divCharacter = document.createElement("div");
    divCharacter.classList.add("listCharacter");

    for (const weaponItem of listWeaponExample) {
        const name = weaponItem.weapon.name;
        const typeText = weaponItem.weapon.typeText;
        const level = weaponItem.experience.level;
        const weaponItemDom = document.createElement("div");
        weaponItemDom.classList.add("item");
        weaponItemDom.classList.add("weaponItem");
        weaponItemDom.innerHTML = `${name}-${typeText}`;
        weaponItemDom.addEventListener("click", (event) => clickItemExample(event, weaponItem));
        divWeapon.appendChild(weaponItemDom);
    }

    for (const [characterIndex, characterItem] of listCharacterExample.entries()) {
        const name = characterItem.character.name;
        const level = characterItem.experience.level;
        const characterItemDom = document.createElement("div");
        characterItemDom.classList.add("item");
        characterItemDom.classList.add("characterItem");

        if (characterIndex == 0) {
            characterItemDom.classList.add("itemExampleActive");
        }

        characterItemDom.addEventListener("click", (event) => clickItemExample(event, characterItem));
        characterItemDom.innerHTML = `${name}`
        divCharacter.appendChild(characterItemDom);
    }

    div.appendChild(divCharacter);
    div.appendChild(divWeapon);
    return div;
}