import { Attribute } from "@src/core/attribute/attribute";

// Атрибут скорость атаки
export class SpeedDamageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0.1, 2);
    }
}