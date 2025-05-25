import { generatorAttribure } from "@src/core/generatorAttribure";
import { Character } from "./character";

export class FellerСharacter extends Character {
    constructor() {
        const characterConfig = {
            health: 100,
            arror: 0,
            barrier: 0,
            damage: 20,
            speed: 1,
        }
        const characterObjectAttribute = generatorAttribure(characterConfig);
        super("Лесоруб", characterObjectAttribute);
    }
}   