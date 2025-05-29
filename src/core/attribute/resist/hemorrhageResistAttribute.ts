import { Attribute } from "@src/core/attribute/attribute";

// Сопративление к кровотечению
export class HemorrhageResistAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, 90);
    }
}