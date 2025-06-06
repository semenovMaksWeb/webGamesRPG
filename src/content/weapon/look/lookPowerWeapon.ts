import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";
import { AttributeWeaponObject } from "@src/core/attribute/ListAttribute";
import { generatorAttributeWeapon } from "@src/core/attribute/generatorAttribute";

export class LookPowerWeapon extends Weapon {
    constructor() {
        const configAtt: AttributeWeaponObject = {
            damage: 12,
            speed: 1,
            chanceCritDamage: 0,
            critDamage: 0,
            hemorrhage: 0
        }

        const configWeapon = {
            name: "Лук мощности",
            description: "Магический лук позволяющий наносить повышенный урон в сравнение с луком новичка",
            image: "/content/weapon/look-power.png",
            speed: 1,
            damage: 12,
            coinsList: [
                new Coins(coinsList.battle, 45)
            ]
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