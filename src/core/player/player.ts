// Игрок сущность игрока у которого происходит бой

import { Character } from "../character/character";
import { cloneClass } from "../libs/cloneClass";
import { Weapon } from "../weapon/weapon";

export class Player {
    public readonly character: Character;
    public readonly weapon: Weapon;

    public characterPlayer: Character;
    public weaponPlayer: Weapon;

    constructor(character: Character, weapon: Weapon) {
        this.character = character;
        this.weapon = weapon;
        this.characterPlayer = cloneClass(character); // Это нужно как то сделать копией класса
        this.weaponPlayer = cloneClass(weapon); // Это нужно как то сделать копией класса
    }
}