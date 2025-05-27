import { Character } from "@src/core/character/character";
import { damageCharacter, damageFormula, damageFormulaPlayer, damagePlayer } from "@src/core/games/damageFormula";
import { Player } from "../player/player";


// Функция игры 2 игроков
export function gamesPlayer(player1: Player, player2: Player) {

    // playerAttk - игрок который атакует
    // playerDeff - игрок который получает атаку
    function xodPlayer(playerAttk: Player, playerDeff: Player) {
        const damageCount = damageFormulaPlayer(playerAttk, playerDeff);
        damagePlayer(playerDeff, damageCount);
        console.log(`Персонаж ${playerAttk.character.name} нанес урон ${damageCount}, персонажа ${playerDeff.character.name} осталось барьера ${playerDeff.characterPlayer.barrier.getValue()}, ХП ${playerDeff.characterPlayer.health.getValue()}`);
    }

    let xod = 0;
    let characterXod = 1; // определяет чей ход наносить урон.  
    while (true) {
        xod++;
        // Кто то проиграл
        if (player1.characterPlayer.health.getValue() == 0 || player2.characterPlayer.health.getValue() == 0) {
            break;
        }

        // Ход 1 игрока
        if (characterXod == 1) {
            xodPlayer(player1, player2);
            characterXod = 2;
            continue;
        }

        // Ход 2 игрока
        xodPlayer(player2, player1);
        characterXod = 1;
    }
    console.log("Конец игры", xod);
    console.log(player1.characterPlayer.health.getValue(), player2.characterPlayer.health.getValue());
}