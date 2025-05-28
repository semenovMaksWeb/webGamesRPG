import { Attribute } from "./attribute";

// Критический урон
export class CritDamageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, null);
    }
}