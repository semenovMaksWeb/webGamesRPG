import { Character } from "./character/character.js";
import { generatorAttribure } from "./core/generatorAttribure.js";

const character1 = {
    health: 80,
    arror: 20,
    barrier: 60
}

const characterObjectAttribute = generatorAttribure(character1);
const character = new Character(characterObjectAttribute);
console.log(character);