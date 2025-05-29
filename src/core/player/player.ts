// Игрок сущность игрока у которого происходит бой

import { Character } from "../character/character";
import { CharacterExample } from "../example/character/characterExample";
import { WeaponExample } from "../example/character/weaponExample";
import { cloneClass } from "../libs/cloneClass";
import { Weapon } from "../weapon/weapon";

export class Player {
    public readonly name: string;

    public readonly character: Character;
    public readonly weapon: Weapon;

    public characterPlayer: Character;
    public weaponPlayer: Weapon;

    constructor(name: string, character: Character, weapon: Weapon, characterExample: CharacterExample, weaponExample: WeaponExample) {
        this.name = name;
        this.character = character;
        this.weapon = weapon;
        this.characterPlayer = cloneClass(characterExample.character); // Это нужно как то сделать копией класса
        this.weaponPlayer = cloneClass(weaponExample.weapon); // Это нужно как то сделать копией класса
    }
}