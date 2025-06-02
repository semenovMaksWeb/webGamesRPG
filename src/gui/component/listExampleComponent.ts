import { CharacterExample } from "@src/core/example/characterExample";
import { WeaponExample } from "@src/core/example/weaponExample";

export function ListExampleComponent(
    listWeaponExample: WeaponExample[],
    listCharacterExample: CharacterExample[]
) {

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
        weaponItemDom.classList.add("weaponItem");
        weaponItemDom.innerHTML = `${name}-${typeText}-${level}ур.`
        divWeapon.appendChild(weaponItemDom);
    }

    for (const characterItem of listCharacterExample) {
        const name = characterItem.character.name;
        const level = characterItem.experience.level;
        const weaponItemDom = document.createElement("div");
        weaponItemDom.classList.add("characterItem");
        weaponItemDom.innerHTML = `${name}-${level}ур.`
        divCharacter.appendChild(weaponItemDom);
    }

    div.appendChild(divCharacter);
    div.appendChild(divWeapon);
    return div;
}