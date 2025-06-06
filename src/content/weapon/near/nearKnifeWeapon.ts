import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";
import { AttributeWeaponObject } from "@src/core/attribute/ListAttribute";
import { generatorAttributeWeapon } from "@src/core/attribute/generatorAttribute";

export class NearKnifeWeapon extends Weapon {
    constructor() {

        const configAtt: AttributeWeaponObject = {
            damage: 7,
            speed: 1.2,
            chanceCritDamage: 0,
            critDamage: 0,
            hemorrhage: 3
        }

        const configWeapon = {
            name: "Нож",
            description: "Описание Ножа",
            image: null,
            coinsList: [
                new Coins(coinsList.battle, 50),
                new Coins(coinsList.wooden, 30)
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