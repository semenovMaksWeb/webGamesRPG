// Усиление персонажей и оружия и тд

import { ExampleBonus } from "@src/core/libs/exampleBonus";
import { typeListGain } from "@src/core/gain/typeListGain";

export class Gain {
    public readonly name: string;
    public exampleBonusList: ExampleBonus[];
    public readonly typeList: typeListGain[];

    constructor(
        name: string,
        exampleBonusList: ExampleBonus[],
        typeList: typeListGain[]
    ) {
        this.name = name;
        this.exampleBonusList = exampleBonusList;
        this.typeList = typeList;
    }
}