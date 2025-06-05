import { Attribute } from "@src/core/attribute/attribute";

// Атрибут базовый урон
export class DamageAttribute extends Attribute {

    constructor(value: number) {
        const damage = {
            value: value,
            minValue: 1,
            maxValue: null,
            image: null,
            name: "Урон",
            description: "Базовый урон"
        }

        super(
            damage.value,
            damage.minValue,
            damage.maxValue,
            damage.image,
            damage.name,
            damage.description
        );
    }
}