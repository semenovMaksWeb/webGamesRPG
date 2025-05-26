import { Weapon } from "@src/core/weapon/weapon";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";

export class nearKnifeWeapon extends Weapon {
    constructor() {
        const configWeapon = {
            speed: 1.2,
            damage: 7,
            // Добавить механику кровотечения
        };

        super(
            "Нож",
            WEAPON_LIST_TYPE.NEAR,
            configWeapon.damage,
            configWeapon.speed
        )
    }
}