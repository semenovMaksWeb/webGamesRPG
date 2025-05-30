// Игрок сущность игрока у которого происходит бой

import { Character } from "@src/core/character/character";
import { Effect } from "@src/core/effect/effect";
import { CharacterExample } from "@src/core/example/characterExample";
import { WeaponExample } from "@src/core/example/weaponExample";
import { cloneClass } from "@src/core/libs/cloneClass";
import { Weapon } from "@src/core/weapon/weapon";

export class Player {
    public readonly name: string;

    public readonly character: Character;
    public readonly weapon: Weapon;
    public effectList: Effect[] = [];
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