import { Character } from "@src/core/character/character"
import { ExampleBonus, ExampleBonusCharacterCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { Gain } from "@src/core/gain/gain";

// Экземлпяр персонажа с своей прокачкой и вставленными модами
export class CharacterExample {
    public character: Character;
    public level: number; // Уровень персонажа
    public gainList: Gain[]; // Список усилении

    constructor(character: Character, level: number, bonusList: ExampleBonus[], gainList: Gain[]) {
        this.character = cloneClass(character);
        this.level = level;
        this.gainList = gainList;
        ExampleBonusCharacterCall(this.character, bonusList, gainList);
    }
}