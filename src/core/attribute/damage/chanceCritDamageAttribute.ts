import { Attribute } from "@src/core/attribute/attribute";

// Шанс критического урон
export class chanceCritDamageAttribute extends Attribute {
    constructor(value: number) {

        const chanceCritDamage = {
            value: value,
            minValue: 0,
            maxValue: 95,
            image: null,
            name: "Шанс критического урона",
            description: "Шанс критического урона - вероятность нанести критический урон с определенным множителем"
        }

        super(
            chanceCritDamage.value,
            chanceCritDamage.minValue,
            chanceCritDamage.maxValue,
            chanceCritDamage.image,
            chanceCritDamage.name,
            chanceCritDamage.description
        );
    }
}