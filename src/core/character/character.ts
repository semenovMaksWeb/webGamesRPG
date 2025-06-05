import { Coins } from "@src/core/coins/coins";
import { AttributeCharacter } from "@src/core/attribute/ListAttribute";

export class Character {
    public attribute: AttributeCharacter
    public readonly name: string;
    public readonly coinsList: Coins[]

    constructor(
        name: string,
        coinsList: Coins[],
        attribute: AttributeCharacter
    ) {
        this.name = name;
        this.coinsList = coinsList;
        this.attribute = attribute;

    }
}