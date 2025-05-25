import { DamageAttribute } from "@src/attribute/damageAttribute";
import { ArmorAttribute } from "../attribute/armorAttribute";
import { BarrierAttribute } from "../attribute/barrierAttribute";
import { HealthAttribute } from "../attribute/healthAttribute";
import { SpeedDamageAttribute } from "@src/attribute/speedDamageAttribute";

export class Character {
    public health: HealthAttribute;
    public arror: ArmorAttribute;
    public barrier: BarrierAttribute;
    public damage: DamageAttribute;
    public speed: SpeedDamageAttribute;
    public name: string;

    constructor(name: string, listAttribute: any) {
        this.name = name;

        if (!listAttribute.health) {
            throw new Error("Не указан количество здоровья");
        }

        this.health = listAttribute.health;
        this.arror = listAttribute.arror;
        this.barrier = listAttribute.barrier;
        this.damage = listAttribute.damage;
        this.speed = listAttribute.speed;
    }
}