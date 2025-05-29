import { Attribute } from "@src/core/attribute/attribute";

// Атрибут повышенные % урона для ближнего оружия
export class NearAddDamageAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, 90);
    }
}