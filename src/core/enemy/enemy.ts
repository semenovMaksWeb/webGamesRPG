// Враги

import { ArmorAttribute } from "@src/core/attribute/defensive/armorAttribute";
import { BarrierAttribute } from "@src/core/attribute/defensive/barrierAttribute";
import { HealthAttribute } from "@src/core/attribute/defensive/healthAttribute";
import { HemorrhageResistAttribute } from "@src/core/attribute/resist/hemorrhageResistAttribute";
import { DamageAttribute } from "@src/core/attribute/damage/damageAttribute";
import { Effect } from "../effect/effect";
import { HemorrhageAttribute } from "../attribute/typeDamage/hemorrhageAttribute";

export class Enemy {
    public health: HealthAttribute;
    public armor: ArmorAttribute;
    public barrier: BarrierAttribute;
    public hemorrhageAttribute: HemorrhageAttribute;

    public damage: DamageAttribute;
    public effectList: Effect[] = [];
    public hemorrhageResistAttribute: HemorrhageResistAttribute;
    public name: string;

    constructor(
        name: string,
        health: number,
        armor: number,
        barrier: number,
        damage: number,
        hemorrhage: number,
        hemorrhageResistAttribute: number,
    ) {
        this.name = name;
        this.health = new HealthAttribute(health);
        this.armor = new ArmorAttribute(armor);
        this.barrier = new BarrierAttribute(barrier);
        this.damage = new DamageAttribute(damage);
        this.hemorrhageAttribute = new HemorrhageAttribute(hemorrhage);
        this.hemorrhageResistAttribute = new HemorrhageResistAttribute(hemorrhageResistAttribute);

    }
}