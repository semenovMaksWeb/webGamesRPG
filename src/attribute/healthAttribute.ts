import { Attribute } from "./attribute";

// Атрибут здоровье
export class HealthAttribute extends Attribute {
    constructor(value: number) {
        super(value, 1, null);
    }
}