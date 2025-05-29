import { Attribute } from "@src/core/attribute/attribute";

// Атрибут урон кровотечение
export class HemorrhageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, null);
    }
}