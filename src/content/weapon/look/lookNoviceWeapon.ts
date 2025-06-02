import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";

export class LookNoviceWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 0.5,
            damage: 25,
            coinsList: [
                new Coins(coinsList.battle, 25),
                new Coins(coinsList.wooden, 80)
            ]
        };

        super(
            "Лук новичка",
            "Лук новичка базовое оружие начинающегося лучника",
            "/content/weapon/look-start.png",
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.LOOK,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}