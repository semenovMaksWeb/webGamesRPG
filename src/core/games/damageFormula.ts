import { Character } from "@src/core/character/character";

// Формула рассчета урона
export function damageFormula(character: Character, character2: Character) {
    //Урон персонажа: Обычный урон * Скорость атаки
    const damageCharacter = character.damage.getValue() * character.speed.getValue();
    //Урон по персонажу: Урон персонажа / сопративлении брони
    const datageInCharacter = damageCharacter - (damageCharacter * character2.armor.getValue() / 100);

    return datageInCharacter;
}

// нанести урон персонажу
export function damageCharacter(character: Character, damage: number) {
    // пока есть барьер урон по здоровью не будет, весь сверхУрон полностью поглащается барьером.
    const barrierValue = character.barrier.getValue();

    if (barrierValue != 0) {
        character.barrier.setValue(barrierValue - damage);
        return;
    }

    const healthValue = character.health.getValue();
    character.health.setValue(healthValue - damage);
}