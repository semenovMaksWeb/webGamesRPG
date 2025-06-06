import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";
import { AttributeWeaponObject } from "@src/core/attribute/ListAttribute";
import { generatorAttributeWeapon } from "@src/core/attribute/generatorAttribute";

export class LookVampireWeapon extends Weapon {
    constructor() {
        const configAtt: AttributeWeaponObject = {
            damage: 1,
            speed: 12,
            chanceCritDamage: 0,
            critDamage: 0,
            hemorrhage: 0
        }

        const configWeapon = {
            name: "Лук вампира",
            description: "Описание Лука вампира",
            image: "/content/weapon/look-vampire.png",

            coinsList: [
                new Coins(coinsList.battle, 45)
            ]
            // требуется механика восстановление здоровья при нанесения урона
        };

        super(
            configWeapon.name,
            configWeapon.description,
            configWeapon.image,
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.LOOK,
            generatorAttributeWeapon(configAtt)
        )
    }
}