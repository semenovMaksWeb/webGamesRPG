import { DamageAttribute } from "@src/core/attribute/damageAttribute";
import { ArmorAttribute } from "@src/core/attribute/armorAttribute";
import { BarrierAttribute } from "@src/core/attribute/barrierAttribute";
import { HealthAttribute } from "@src/core/attribute/healthAttribute";
import { SpeedDamageAttribute } from "@src/core/attribute/speedDamageAttribute";

export class Character {
    public health: HealthAttribute;
    public armor: ArmorAttribute;
    public barrier: BarrierAttribute;
    public damage: DamageAttribute;
    public speed: SpeedDamageAttribute;
    public name: string;

    constructor(
        name: string,
        health: number,
        armor: number,
        barrier: number,
        damage: number,
        speed: number
    ) {
        this.name = name;

        this.health = new HealthAttribute(health);
        this.armor = new ArmorAttribute(armor);
        this.barrier = new BarrierAttribute(barrier);
        this.damage = new DamageAttribute(damage);
        this.speed = new SpeedDamageAttribute(speed);
    }
}