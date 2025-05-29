import { DamageAttribute } from "@src/core/attribute/damage/damageAttribute";
import { ArmorAttribute } from "@src/core/attribute/defensive/armorAttribute";
import { BarrierAttribute } from "@src/core/attribute/defensive/barrierAttribute";
import { HealthAttribute } from "@src/core/attribute/defensive/healthAttribute";
import { SpeedDamageAttribute } from "@src/core/attribute/damage/speedDamageAttribute";
import { NearAddDamageAttribute } from "@src/core/attribute/damage/nearAddDamageAttribute";

export class Character {
    public health: HealthAttribute;
    public armor: ArmorAttribute;
    public barrier: BarrierAttribute;
    public damage: DamageAttribute;
    public speed: SpeedDamageAttribute;
    public nearAddDamage: NearAddDamageAttribute;
    public name: string;

    constructor(
        name: string,
        health: number,
        armor: number,
        barrier: number,
        damage: number,
        speed: number,
        nearAddDamage: number = 0
    ) {
        this.name = name;
        this.health = new HealthAttribute(health);
        this.armor = new ArmorAttribute(armor);
        this.barrier = new BarrierAttribute(barrier);
        this.damage = new DamageAttribute(damage);
        this.speed = new SpeedDamageAttribute(speed);
        this.nearAddDamage = new NearAddDamageAttribute(nearAddDamage);
    }
}