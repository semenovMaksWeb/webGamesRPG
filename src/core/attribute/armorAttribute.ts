import { Attribute } from "./attribute";

// Атрибут броня
export class ArmorAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, 95);
    }
}