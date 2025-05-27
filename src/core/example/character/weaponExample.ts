import { ExampleBonus, ExampleBonusWeaponCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { Weapon } from "@src/core/weapon/weapon";
import { GainExample } from "./gainExample";

// Экземлпяр оружие с своей прокачкой и вставленными модами
export class WeaponExample {
    public weapon: Weapon; // дефолтные характеристики оружия
    public level: number; // Уровень оружие
    public gainExampleList: GainExample[]; // Список усилении

    constructor(weapon: Weapon, level: number, bonusList: ExampleBonus[], gainExampleList: GainExample[]) {
        this.weapon = cloneClass(weapon);
        this.level = level;
        this.gainExampleList = gainExampleList;
        ExampleBonusWeaponCall(this.weapon, bonusList, gainExampleList);
    }
}