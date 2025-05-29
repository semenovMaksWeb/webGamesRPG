import { Attribute } from "@src/core/attribute/attribute";

// Атрибут броня
export class ArmorAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, 95);
    }
}