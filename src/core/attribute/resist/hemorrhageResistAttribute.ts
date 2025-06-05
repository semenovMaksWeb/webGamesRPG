import { Attribute } from "@src/core/attribute/attribute";

// Сопративление к кровотечению
export class HemorrhageResistAttribute extends Attribute {

    constructor(value: number) {
        const hemorrhageResist = {
            value: value,
            minValue: 0,
            maxValue: 90,
            image: null,
            name: "Защита от кровотечение",
            description: "Уменьшает урон кровотечением"
        }

        super(
            hemorrhageResist.value,
            hemorrhageResist.minValue,
            hemorrhageResist.maxValue,
            hemorrhageResist.image,
            hemorrhageResist.name,
            hemorrhageResist.description
        );
    }
}