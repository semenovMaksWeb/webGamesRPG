import { lookPowerWeapon } from "./content/weapon/look/lookPowerWeapon";
import { lookVampireWeapon } from "./content/weapon/look/lookVampireWeapon copy";
import { gamesPlayer } from "./core/games/games";

import { FellerСharacter } from "@src/content/character/fellerСharacter"
import { Player } from "./core/player/player";
import { CharacterExample } from "./core/example/character/characterExample";
import { ExampleBonus } from "./core/example/character/characterExampleBonus";

const character1 = new FellerСharacter();
const character2 = new FellerСharacter();

const weapon1 = new lookPowerWeapon();
const weapon2 = new lookVampireWeapon();

const bonusList: ExampleBonus[] = [
    {
        name: "armor",
        value: 5,
    },
    {
        name: "damage",
        value: 5,
    }
]
const characterExample1 = new CharacterExample(character1, 5, bonusList);
const characterExample2 = new CharacterExample(character1, 1, []);


const player1 = new Player(character1, weapon1, characterExample1);
const player2 = new Player(character2, weapon2, characterExample2);

gamesPlayer(player1, player2);