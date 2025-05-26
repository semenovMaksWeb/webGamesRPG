import { Character } from "@src/core/character/character";
import { damageCharacter, damageFormula } from "@src/core/games/damageFormula";

export function games(character: Character, character2: Character) {
    let xod = 0;
    let characterXod = 1; // определяет чей ход наносить урон.

    // Бесконечный цикл игры выходит когда у 1 персонажа закончится хп.
    while (true) {
        xod++;
        if (character.health.getValue() == 0 || character2.health.getValue() == 0) {
            break;
        }

        // Подумать как улучшить!
        if (characterXod == 1) {
            const damageCount = damageFormula(character, character2);
            damageCharacter(character2, damageCount);
            console.log(`Персонаж 1 нанес урон ${damageCount}, персонажа 2 осталось барьера ${character2.barrier.getValue()}, ХП ${character2.health.getValue()}`);
            characterXod = 2;
            continue;
        }


        if (characterXod == 2) {
            const damageCount = damageFormula(character2, character);
            damageCharacter(character, damageCount);
            console.log(`Персонаж 2 нанес урон ${damageCount}, персонажа 1 осталось барьера ${character.barrier.getValue()}, ХП ${character.health.getValue()}`);
            characterXod = 1;
            continue;
        }
        // Подумать как улучшить!
        break;
    }
    console.log("Конец игры", xod);
    console.log(character.health.getValue(), character2.health.getValue());

}