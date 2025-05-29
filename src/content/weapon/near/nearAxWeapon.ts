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
        };

        super(
            "Топор",
            WEAPON_LIST_TYPE.NEAR,
            configWeapon.damage,
            configWeapon.speed,
            configWeapon.critDamage,
            configWeapon.chanceCritDamage,
            configWeapon.hemorrhage
        )
    }
}