import { Attribute } from "@src/core/attribute/attribute";

// Атрибут здоровье
export class HealthAttribute extends Attribute {
        constructor(value: number) {
        const armor = {
            value: value,
            minValue: 0,
            maxValue: null,
            image: null,
            name: "Здоровье",
            description: "Здоровье при значении 0 происходит проигрыш"
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