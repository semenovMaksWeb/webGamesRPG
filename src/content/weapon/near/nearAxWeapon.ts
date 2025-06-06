import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";
import { AttributeWeaponObject } from "@src/core/attribute/ListAttribute";
import { generatorAttributeWeapon } from "@src/core/attribute/generatorAttribute";

export class NearAxWeapon extends Weapon {
    constructor() {

        const configAtt: AttributeWeaponObject = {
            damage: 14,
            speed: 0.5,
            chanceCritDamage: 10,
            critDamage: 40,
            hemorrhage: 3
        }
        const configWeapon = {
            name: "Топор",
            description: "Описание Топора",
            image: null,
            coinsList: [
                new Coins(coinsList.battle, 10),
                new Coins(coinsList.wooden, 70)
            ]
        };

        super(
            configWeapon.name,
            configWeapon.description,
            configWeapon.image,
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.NEAR,
            generatorAttributeWeapon(configAtt)
        )
    }
}