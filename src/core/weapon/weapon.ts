import { DamageAttribute } from "@src/core/attribute/damageAttribute";
import { WEAPON_LIST_TYPE } from "./weaponListType";
import { SpeedDamageAttribute } from "@src/core/attribute/speedDamageAttribute";

export class Weapon {
    name: string;
    type: WEAPON_LIST_TYPE;
    damage: DamageAttribute;
    speed: SpeedDamageAttribute;

    constructor(name: string, type: WEAPON_LIST_TYPE, damage: number, speed: number) {
        this.name = name;
        this.type = type;
        this.damage = new DamageAttribute(damage);
        this.speed = new SpeedDamageAttribute(speed);
    }
}