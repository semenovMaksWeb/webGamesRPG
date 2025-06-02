import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";
import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/content/weapon/weaponListType";

export class LookVampireWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1,
            damage: 12,
            coinsList: [
                new Coins(coinsList.battle, 45)
            ]
            // требуется механика восстановление здоровья при нанесения урона
        };

        super(
            "Лук вампира",
            "Описание Лука вампира",
            "/content/weapon/look-vampire.png",
            configWeapon.coinsList,
            WEAPON_LIST_TYPE.LOOK,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}