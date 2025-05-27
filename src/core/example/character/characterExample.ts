import { Character } from "@src/core/character/character"
import { ExampleBonus, ExampleBonusCharacterCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { GainExample } from "./gainExample";

// Экземлпяр персонажа с своей прокачкой и вставленными модами
export class CharacterExample {
    public character: Character;
    public level: number; // Уровень персонажа
    public gainExampleList: GainExample[]; // Список усилении

    constructor(character: Character, level: number, bonusList: ExampleBonus[], gainExampleList: GainExample[]) {
        this.character = cloneClass(character);
        this.level = level;
        this.gainExampleList = gainExampleList;
        ExampleBonusCharacterCall(this.character, bonusList, gainExampleList);
    }
}