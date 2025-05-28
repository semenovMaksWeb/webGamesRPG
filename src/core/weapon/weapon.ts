import { DamageAttribute } from "@src/core/attribute/damageAttribute";
import { WEAPON_LIST_TYPE } from "./weaponListType";
import { SpeedDamageAttribute } from "@src/core/attribute/speedDamageAttribute";
import { CritDamageAttribute } from "../attribute/critDamageAttribute";
import { chanceCritDamageAttribute } from "../attribute/chanceCritDamageAttribute";

export class Weapon {
    name: string;
    type: WEAPON_LIST_TYPE;
    damage: DamageAttribute;
    speed: SpeedDamageAttribute;
    critDamage: CritDamageAttribute;
    chanceCritDamage: chanceCritDamageAttribute;

    constructor(
        name: string,
        type: WEAPON_LIST_TYPE,
        damage: number,
        speed: number,
        critDamage: number = 0,
        chanceCritDamage: number = 0
    ) {
        this.name = name;
        this.type = type;
        this.damage = new DamageAttribute(damage);
        this.speed = new SpeedDamageAttribute(speed);
        this.chanceCritDamage = new CritDamageAttribute(chanceCritDamage);
        this.critDamage = new CritDamageAttribute(critDamage);
    }
}