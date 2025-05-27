import { ListAttributeGain } from "@src/core/attribute/ListAttribute";
import { Gain } from "@src/core/gain/gain";
import { typeListGain } from "@src/core/gain/typeListGain";
import { ExampleBonus } from "@src/core/libs/exampleBonus";

// Усиление повышения урона оружием
export class DamageWeaponGain extends Gain {
    constructor() {
        const bonus: ExampleBonus[] = [
            {
                name: ListAttributeGain.damage,
                value: 5,
            }
        ]
        super(
            "Повышения базового урона",
            bonus,
            [typeListGain.weapon]
        );
    }
}