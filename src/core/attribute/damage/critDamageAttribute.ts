import { Attribute } from "@src/core/attribute/attribute";

// Критический урон
export class CritDamageAttribute extends Attribute {
    constructor(value: number) {
        const critDamage = {
            value: value,
            minValue: 0,
            maxValue: 95,
            image: null,
            name: "Критический урона",
            description: "Критический урон - множитель повышающий урон при определенном шансе"
        }

        super(
            critDamage.value,
            critDamage.minValue,
            critDamage.maxValue,
            critDamage.image,
            critDamage.name,
            critDamage.description
        );
    }
}