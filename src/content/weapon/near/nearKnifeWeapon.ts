import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class NearKnifeWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1.2,
            damage: 7,
            hemorrhage: 3,
            // Добавить механику кровотечения
        };

        super(
            "Нож",
            WEAPON_LIST_TYPE.NEAR,
            configWeapon.damage,
            configWeapon.speed,
            0,
            0,
            configWeapon.hemorrhage
        )
    }
}