import { damageFormulaPlayer, damagePlayer } from "@src/core/games/damageFormula";
import { Player } from "../player/player";
import { Games } from "./games";


// Функция игры 2 игроков
export function gamesPlayer(player1: Player, player2: Player) {
    const games = new Games([player1, player2]);
    while (true) {
        if (games.checkGamesEnd()) {
            break;
        }

        if (games.characterXod == 1) {
            xodPlayer(player1, player2);
            games.characterXod = 2;
        }

        if (games.characterXod == 2) {
            xodPlayer(player2, player1);
            games.characterXod = 1;
        }
    }

    console.log(JSON.stringify(games.historyList));


    function xodPlayer(playerAttk: Player, playerDeff: Player) {
        const damageCount = games.damageFormulaPlayer(playerAttk, playerDeff);
        games.damagePlayer(playerDeff, damageCount);
    }
}