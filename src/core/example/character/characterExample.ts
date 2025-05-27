import { Character } from "@src/core/character/character"
import { ExampleBonus, ExampleBonusCharacterCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { GainExample } from "./gainExample";
import { Experience } from "@src/core/experience/experience";

// Экземлпяр персонажа с своей прокачкой и вставленными модами
export class CharacterExample {
    public character: Character;
    public gainExampleList: GainExample[]; // Список усилении
    public experience: Experience; // Класс обработки опыта

    constructor(
        character: Character,
        level: number,
        bonusList: ExampleBonus[],
        gainExampleList: GainExample[],
        experience: number = 0
    ) {
        this.character = cloneClass(character);
        this.gainExampleList = gainExampleList;
        ExampleBonusCharacterCall(this.character, bonusList, gainExampleList);
        this.experience = new Experience(experience, level);
    }
}