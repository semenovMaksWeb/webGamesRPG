import { Player } from "../player/player";
import { Games } from "./games";


// Функция игры 2 игроков
export function gamesPlayer(player1: Player, player2: Player) {
    const games = new Games([player1, player2]);
    let characterXod = 1;
    while (true) {

        if (characterXod == 1) {
            games.effectRemoveXod(player1);
        }

        if (characterXod == 2) {
            games.effectRemoveXod(player2);
        }

        if (games.checkGamesEnd()) {
            console.log("player1.characterPlayer.health.getValue", player1.characterPlayer.attribute.health.getValue());
            console.log("player2.characterPlayer.health.getValue", player2.characterPlayer.attribute.health.getValue());
            break;
        }

        if (characterXod == 1) {
            xodPlayer(player1, player2);
            characterXod = 2;

        } else if (characterXod == 2) {
            xodPlayer(player2, player1);
            characterXod = 1;
        }
    }

    console.log(JSON.stringify(games.historyList));


    function xodPlayer(playerAttk: Player, playerDeff: Player) {
        const damageCount = games.damageFormulaPlayer(playerAttk, playerDeff);
        games.damagePlayer(playerDeff, damageCount);
    }
}