import { ExampleBonus, ExampleBonusWeaponCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { Weapon } from "@src/core/weapon/weapon";
import { Gain } from "@src/core/gain/gain";

// Экземлпяр оружие с своей прокачкой и вставленными модами
export class WeaponExample {
    public weapon: Weapon; // дефолтные характеристики оружия
    public level: number; // Уровень оружие
    public gainList: Gain[]; // Список усилении

    constructor(weapon: Weapon, level: number, bonusList: ExampleBonus[], gainList: Gain[]) {
        this.weapon = cloneClass(weapon);
        this.level = level;
        this.gainList = gainList;
        ExampleBonusWeaponCall(this.weapon, bonusList, gainList);
    }
}