import { Attribute } from "@src/core/attribute/attribute";

// Атрибут здоровье
export class HealthAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, null);
    }
}