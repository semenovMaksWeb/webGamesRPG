import { Attribute } from "./attribute";

// Атрибут базовый урон
export class DamageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 1, null);
    }
}