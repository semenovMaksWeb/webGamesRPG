// Враги

import { Effect } from "../effect/effect";
import { AttributeEnemy } from "@src/core/attribute/ListAttribute";

export class Enemy {
    public name: string;
    public attribute: AttributeEnemy
    public effectList: Effect[] = [];
    public readonly description: string;
    public readonly image: string | null;

    constructor(
        name: string,
        attribute: AttributeEnemy,
        description: string,
        image: string | null,
    ) {
        this.name = name;
        this.attribute = attribute;
        this.description = description;
        this.image = image;

    }
}