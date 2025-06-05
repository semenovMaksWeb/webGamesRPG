// Усиление персонажей и оружия и тд

import { ExampleBonus } from "@src/core/libs/exampleBonus";
import { typeListGain } from "@src/core/gain/typeListGain";

export class Gain {
    public readonly name: string;
    public exampleBonusList: ExampleBonus[];
    public readonly typeList: typeListGain[];
    public readonly description: string;
    public readonly image: string | null;

    constructor(
        name: string,
        exampleBonusList: ExampleBonus[],
        typeList: typeListGain[],
        description: string,
        image: string | null,
    ) {
        this.name = name;
        this.exampleBonusList = exampleBonusList;
        this.typeList = typeList;
        this.description = description;
        this.image = image;
    }
}