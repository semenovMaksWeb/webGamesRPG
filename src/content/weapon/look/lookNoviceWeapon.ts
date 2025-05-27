import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class LookNoviceWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 0.5,
            damage: 25
        };

        super(
            "Лук новичка",
            WEAPON_LIST_TYPE.LOOK,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}