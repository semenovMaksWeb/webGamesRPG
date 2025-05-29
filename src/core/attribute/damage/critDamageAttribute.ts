import { Attribute } from "@src/core/attribute/attribute";

// Критический урон
export class CritDamageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, null);
    }
}