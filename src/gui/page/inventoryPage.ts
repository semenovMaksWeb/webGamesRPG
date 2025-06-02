import { AccountConfigCharacter, AccountConfigWeapon } from "@src/core/account/AccountConfig";
import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";
import { accountFun } from "@src/core/account/accountFun";
import { CharacterExample } from "@src/core/example/characterExample";
import { Character } from "@src/core/character/character";
import { WeaponExample } from "@src/core/example/weaponExample";
import { Weapon } from "@src/core/weapon/weapon";
import { ListExampleComponent } from "../component/listExampleComponent";

export async function inventoryPage() {
    const main = document.querySelector(".main") as Element;
    main.innerHTML = "";
    // Получить с бд инвентарь
    const weaponAccount = await indexedDBService.getWeapon() as AccountConfigWeapon[];
    const characterAccount = await indexedDBService.getСharacter() as AccountConfigCharacter[];

    const { generatorWeapon, generatorCharacter, generatorGain } = accountFun();

    // преобразовать в подробную информацию оружия
    const weaponAccountExample = [];
    for (const weaponItem of weaponAccount) {
        const weapon = generatorWeapon(weaponItem) as Weapon;
        const gainWeapon = generatorGain(weaponItem.gain);
        const weaponExample = new WeaponExample(
            weapon,
            weaponItem.level,
            weaponItem.bonus,
            gainWeapon,
            weaponItem.experience,
        )

        weaponAccountExample.push(weaponExample);
    }

    // преобразовать в подробную информацию персонажей
    const characterAccountExample = [];
    for (const characterItem of characterAccount) {
        const character = generatorCharacter(characterItem) as Character;
        const gainCharacter = generatorGain(characterItem.gain);
        const characterExample = new CharacterExample(
            character,
            characterItem.level,
            characterItem.bonus,
            gainCharacter,
            characterItem.experience,
        );
        characterAccountExample.push(characterExample);
    }
    const listExampleComponent = ListExampleComponent(weaponAccountExample, characterAccountExample);
    console.log(weaponAccountExample);
    console.log(characterAccountExample);
    console.log(listExampleComponent);
    main.appendChild(listExampleComponent);
}