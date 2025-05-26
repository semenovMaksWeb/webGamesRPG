// Игрок сущность игрока у которого происходит бой

import { Character } from "../character/character";
import { CharacterExample } from "../example/character/characterExample";
import { cloneClass } from "../libs/cloneClass";
import { Weapon } from "../weapon/weapon";

export class Player {
    public readonly character: Character;
    public readonly weapon: Weapon;

    public characterPlayer: CharacterExample;
    public weaponPlayer: Weapon;

    constructor(character: Character, weapon: Weapon, characterExample: CharacterExample) {
        this.character = character;
        this.weapon = weapon;
        this.characterPlayer = cloneClass(characterExample.character); // Это нужно как то сделать копией класса
        this.weaponPlayer = cloneClass(weapon); // Это нужно как то сделать копией класса
    }
}