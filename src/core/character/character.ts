import { Coins } from "@src/core/coins/coins";
import { AttributeCharacter } from "@src/core/attribute/ListAttribute";

export class Character {
    public attribute: AttributeCharacter
    public readonly name: string;
    public readonly coinsList: Coins[];
    public readonly description: string;
    public readonly image: string | null;

    constructor(
        name: string,
        description: string,
        image: string | null,
        coinsList: Coins[],
        attribute: AttributeCharacter,
    ) {
        this.name = name;
        this.coinsList = coinsList;
        this.attribute = attribute;
        this.description = description;
        this.image = image;

    }
}