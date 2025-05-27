 import { ExampleBonus, ExampleBonusWeaponCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { Weapon } from "@src/core/weapon/weapon";

// Экземлпяр оружие с своей прокачкой и вставленными модами
export class WeaponExample {
    public weapon: Weapon;
    public level: number; // Уровень оружие

    constructor(weapon: Weapon, level: number, bonusList: ExampleBonus[]) {
        this.weapon = cloneClass(weapon);
        this.level = level;
        ExampleBonusWeaponCall(this.weapon, bonusList);
    }
}