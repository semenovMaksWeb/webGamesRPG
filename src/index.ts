import { gamesPlayer } from "./core/games/gamesFun";
import { Account } from "./core/account/account";
import config1 from "@src/test/accountAdmin.json"
import config2 from "@src/test/accountAdmin2.json"
import { AccountConfig } from "./core/account/AccountConfig";

const account1 = new Account(config1 as AccountConfig);
const account2 = new Account(config2 as AccountConfig);

const player1 = account1.configConvertToPlayer(0, 0);
const player2 = account2.configConvertToPlayer(0, 0);
gamesPlayer(player1, player2);