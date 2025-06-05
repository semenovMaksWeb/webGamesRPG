import { Attribute } from "@src/core/attribute/attribute";

// Атрибут барьер
export class BarrierAttribute extends Attribute {

    constructor(value: number) {
        const barrier = {
            value: value,
            minValue: 0,
            maxValue: null,
            image: null,
            name: "Барьер",
            description: "Дополнительная полоска здоровья"
        }

        super(
            barrier.value,
            barrier.minValue,
            barrier.maxValue,
            barrier.image,
            barrier.name,
            barrier.description
        );
    }
}