import { Character } from "./character/character.js";
import { games } from "./core/games.js";
import { generatorAttribure } from "./core/generatorAttribure.js";

const character1Config = {
    health: 80,
    arror: 20,
    barrier: 60,
    damage: 10,
    speed: 1,
}

const character2Config = {
    health: 100,
    arror: 50,
    barrier: 100,
    damage: 4,
    speed: 0.4,
}

const characterObjectAttribute1 = generatorAttribure(character1Config);
const characterObjectAttribute2 = generatorAttribure(character2Config);
const character1 = new Character("Тестовый персонаж", characterObjectAttribute1);
const character2 = new Character("Тестовый персонаж2", characterObjectAttribute2);
console.log(character1, character2);
games(character1, character2);