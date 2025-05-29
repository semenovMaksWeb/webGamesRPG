import { DamageAttribute } from "@src/core/attribute/damage/damageAttribute";
import { WEAPON_LIST_TYPE } from "./weaponListType";
import { SpeedDamageAttribute } from "@src/core/attribute/damage/speedDamageAttribute";
import { CritDamageAttribute } from "@src/core/attribute/damage/critDamageAttribute";
import { chanceCritDamageAttribute } from "@src/core/attribute/damage/chanceCritDamageAttribute";
import { HemorrhageAttribute } from "@src/core/attribute/typeDamage/hemorrhageAttribute";

export class Weapon {
    name: string;
    type: WEAPON_LIST_TYPE;
    damage: DamageAttribute;
    speed: SpeedDamageAttribute;
    critDamage: CritDamageAttribute;
    chanceCritDamage: chanceCritDamageAttribute;
    hemorrhageAttribute: HemorrhageAttribute;

    constructor(
        name: string,
        type: WEAPON_LIST_TYPE,
        damage: number,
        speed: number,
        critDamage: number = 0,
        chanceCritDamage: number = 0,
        hemorrhageAttribute = 0,
    ) {
        this.name = name;
        this.type = type;
        this.damage = new DamageAttribute(damage);
        this.speed = new SpeedDamageAttribute(speed);
        this.chanceCritDamage = new CritDamageAttribute(chanceCritDamage);
        this.critDamage = new CritDamageAttribute(critDamage);
        this.hemorrhageAttribute = new HemorrhageAttribute(hemorrhageAttribute)
    }
}