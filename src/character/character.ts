import { ArmorAttribute } from "../attribute/armorAttribute";
import { BarrierAttribute } from "../attribute/barrierAttribute";
import { HealthAttribute } from "../attribute/healthAttribute";

export class Character {
    public health: HealthAttribute;
    public arror: ArmorAttribute;
    public barrier: BarrierAttribute;

    constructor(listAttribute: any) {

        if (!listAttribute.health) {
            throw new Error("Не указан количество здоровья");
        }

        this.health = listAttribute.health;
        this.arror = listAttribute.arror;
        this.barrier = listAttribute.barrier;
    }
}