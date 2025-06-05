import { Attribute } from "@src/core/attribute/attribute";

// Атрибут повышенные % урона для ближнего оружия
export class NearAddDamageAttribute extends Attribute {

    constructor(value: number) {
        const nearAddDamage = {
            value: value,
            minValue: 0,
            maxValue: 90,
            image: null,
            name: "Бонус к урону ближнему оружию",
            description: "Повышенные % урона для ближнего оружия"
        }

        super(
            nearAddDamage.value,
            nearAddDamage.minValue,
            nearAddDamage.maxValue,
            nearAddDamage.image,
            nearAddDamage.name,
            nearAddDamage.description
        );
    }
}