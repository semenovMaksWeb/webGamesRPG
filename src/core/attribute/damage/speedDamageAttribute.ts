import { Attribute } from "@src/core/attribute/attribute";

// Атрибут скорость атаки
export class SpeedDamageAttribute extends Attribute {
    constructor(value: number) {
        const speedDamage = {
            value: value,
            minValue: 0.1,
            maxValue: 2,
            image: null,
            name: "Скорость урона",
            description: "Определяет сколько времени нужно для нанесения 1 удара"
        }

        super(
            speedDamage.value,
            speedDamage.minValue,
            speedDamage.maxValue,
            speedDamage.image,
            speedDamage.name,
            speedDamage.description
        );
    }
}