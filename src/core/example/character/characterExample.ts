import { Character } from "@src/core/character/character"
import { ExampleBonus, ExampleBonusCall } from "./characterExampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";

// Экземлпяр персонажа с своей прокачкой и вставленными модами
export class CharacterExample {
    public character: Character
    public level: number; // Уровень персонажа

    constructor(character: Character, level: number, bonusList: ExampleBonus[]) {
        this.character = cloneClass(character);
        this.level = level;
        ExampleBonusCall(this.character, bonusList);
    }
}