import { ListAttributeGain } from "@src/core/attribute/ListAttribute";
import { Gain } from "@src/core/gain/gain";
import { typeListGain } from "@src/core/gain/typeListGain";
import { ExampleBonus } from "@src/core/libs/exampleBonus";

// Усиление повышения здоровья
export class HealthGain extends Gain {
    constructor() {
        const bonus: ExampleBonus[] = [
            {
                name: ListAttributeGain.health,
                value: 10,
            }
        ]
        super(
            "Повышения здоровья",
            bonus,
            [typeListGain.character]
        );
    }
}