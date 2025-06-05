import { Attribute } from "@src/core/attribute/attribute";

// Атрибут броня
export class ArmorAttribute extends Attribute {

    constructor(value: number) {
        const armor = {
            value: value,
            minValue: 0,
            maxValue: 95,
            image: null,
            name: "Броня",
            description: "Уменьшает получаемый урон"
        }

        super(
            armor.value,
            armor.minValue,
            armor.maxValue,
            armor.image,
            armor.name,
            armor.description
        );
    }
}