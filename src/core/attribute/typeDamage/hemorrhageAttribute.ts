import { Attribute } from "@src/core/attribute/attribute";

// Атрибут урон кровотечение
export class HemorrhageAttribute extends Attribute {


    constructor(value: number) {
        const hemorrhage = {
            value: value,
            minValue: 0,
            maxValue: null,
            image: null,
            name: "Урон кровотечением",
            description: "Урон кровотечением"
        }

        super(
            hemorrhage.value,
            hemorrhage.minValue,
            hemorrhage.maxValue,
            hemorrhage.image,
            hemorrhage.name,
            hemorrhage.description
        );
    }
}