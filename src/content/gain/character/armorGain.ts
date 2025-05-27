import { ListAttributeGain } from "@src/core/attribute/ListAttribute";
import { Gain } from "@src/core/gain/gain";
import { typeListGain } from "@src/core/gain/typeListGain";
import { ExampleBonus } from "@src/core/libs/exampleBonus";

// Усиление повышения брони
export class ArmorGain extends Gain {
    constructor() {
        const bonus: ExampleBonus[] = [
            {
                name: ListAttributeGain.armor,
                value: 10,
            }
        ]
        super(
            "Повышения брони",
            bonus,
            [typeListGain.character]
        );
    }
}