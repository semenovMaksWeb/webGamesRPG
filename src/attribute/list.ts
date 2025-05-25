import { ArmorAttribute } from "./armorAttribute";
import { BarrierAttribute } from "./barrierAttribute";
import { DamageAttribute } from "./damageAttribute";
import { HealthAttribute } from "./healthAttribute";
import { SpeedDamageAttribute } from "./speedDamageAttribute";

export const listAttribute: any = {
    arror: ArmorAttribute,
    health: HealthAttribute,
    barrier: BarrierAttribute,
    speed: SpeedDamageAttribute,
    damage: DamageAttribute,
}