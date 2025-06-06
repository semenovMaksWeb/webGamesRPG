import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";
import { AttributeWeaponObject } from "@src/core/attribute/ListAttribute";
import { generatorAttributeWeapon } from "@src/core/attribute/generatorAttribute";

export class LookNoviceWeapon extends Weapon {
    constructor() {
        const configAtt: AttributeWeaponObject = {
            damage: 25,
            speed: 0.5,
            chanceCritDamage: 0,
            critDamage: 0,
            hemorrhage: 0
        }

        const configWeapon = {
            name: "Лук новичка",
            description: "Лук новичка базовое оружие начинающегося лучника",
            image: "/content/weapon/look-start.png",
            coinsList: [
                new Coins(coinsList.battle, 25),
                new Coins(coinsList.wooden, 80)
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