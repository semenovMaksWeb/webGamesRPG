import { Attribute } from "./attribute";

// Атрибут барьер
export class BarrierAttribute extends Attribute {
    constructor(value: number) {
        super(value, 0, null);
    }
}