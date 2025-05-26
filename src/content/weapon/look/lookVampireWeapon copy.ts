import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class lookVampireWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1,
            damage: 12,
            // требуется механика восстановление здоровья при нанесения урона
        };

        super(
            "Лук вампира",
            WEAPON_LIST_TYPE.LOOK,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}