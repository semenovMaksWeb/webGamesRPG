import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class NearAxWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 0.5,
            damage: 14,
            critDamage: 40,
            chanceCritDamage: 10,
            hemorrhage: 3,
            coinsList: [
                new Coins(coinsList.battle, 10),
                new Coins(coinsList.wooden, 70)
            ]
        };

        super(
            "Топор",
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.NEAR,
            configWeapon.damage,
            configWeapon.speed,
            configWeapon.critDamage,
            configWeapon.chanceCritDamage,
            configWeapon.hemorrhage
        )
    }
}