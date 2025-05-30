import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class NearKnifeWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1.2,
            damage: 7,
            hemorrhage: 3,
            coinsList: [
                new Coins(coinsList.battle, 50),
                new Coins(coinsList.wooden, 30)
            ]
            // Добавить механику кровотечения
        };

        super(
            "Нож",
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.NEAR,
            configWeapon.damage,
            configWeapon.speed,
            0,
            0,
            configWeapon.hemorrhage
        )
    }
}