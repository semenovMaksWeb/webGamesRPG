import { Attribute } from "./attribute";

// Шанс критического урон
export class chanceCritDamageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, 95);
    }
}