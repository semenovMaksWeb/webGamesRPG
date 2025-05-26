import { lookPowerWeapon } from "./content/weapon/look/lookPowerWeapon";
import { lookVampireWeapon } from "./content/weapon/look/lookVampireWeapon copy";
import { gamesPlayer } from "./core/games/games";

import { FellerСharacter } from "@src/content/character/fellerСharacter"
import { Player } from "./core/player/player";

const character1 = new FellerСharacter();
const character2 = new FellerСharacter();

const weapon1 = new lookPowerWeapon();
const weapon2 = new lookVampireWeapon();


const player1 = new Player(character1, weapon1);
const player2 = new Player(character2, weapon2);

gamesPlayer(player1, player2);