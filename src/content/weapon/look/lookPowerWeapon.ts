import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class LookPowerWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1,
            damage: 12,
            // требуется механика восстановление барьера при нанесения урона
        };

        super(
            "Лук мощности",
            WEAPON_LIST_TYPE.LOOK,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}