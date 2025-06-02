import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";

export class LookPowerWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1,
            damage: 12,
            coinsList: [
                new Coins(coinsList.battle, 45)
            ]
        };

        super(
            "Лук мощности",
            "Магический лук позволяющий наносить повышенный урон в сравнение с луком новичка",
            "/content/weapon/look-power.png",
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.LOOK,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}