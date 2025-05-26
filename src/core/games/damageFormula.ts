import { Character } from "@src/core/character/character";
import { Player } from "../player/player";

// Формула рассчета урона персонажа
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

// Формула рассчета урона игрока
export function damageFormulaPlayer(player1: Player, player2: Player) {
    //Урон: Обычный урон персонажа * Скорость атаки персонажа + Обычный урон оружие * Скорость атаки оружие
    const damageCharacter =
        player1.characterPlayer.damage.getValue() * player1.characterPlayer.speed.getValue() +
        player1.weaponPlayer.damage.getValue() * player1.weaponPlayer.speed.getValue();

    //Урон по игроку: Урон / сопративлении брони
    const damage = damageCharacter - (damageCharacter * player2.characterPlayer.armor.getValue() / 100);
    return damage;
}

// получение урона игроком
export function damagePlayer(character: Player, damage: number) {
    // пока есть барьер урон по здоровью не будет, весь сверхУрон полностью поглащается барьером.
    const barrierValue = character.characterPlayer.barrier.getValue();
    
    if (barrierValue != 0) {
        character.characterPlayer.barrier.setValue(barrierValue - damage);
        return;
    }

    const healthValue = character.characterPlayer.health.getValue();
    character.characterPlayer.health.setValue(healthValue - damage);
}