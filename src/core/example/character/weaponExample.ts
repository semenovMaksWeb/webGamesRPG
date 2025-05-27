import { ExampleBonus, ExampleBonusWeaponCall } from "@src/core/libs/exampleBonus";
import { cloneClass } from "@src/core/libs/cloneClass";
import { Weapon } from "@src/core/weapon/weapon";
import { GainExample } from "./gainExample";
import { Experience } from "@src/core/experience/experience";

// Экземлпяр оружие с своей прокачкой и вставленными модами
export class WeaponExample {
    public weapon: Weapon; // дефолтные характеристики оружия
    public experience: Experience; // Класс обработки опыта
    public gainExampleList: GainExample[]; // Список усилении

    constructor(
        weapon: Weapon,
        level: number,
        bonusList: ExampleBonus[],
        gainExampleList: GainExample[],
        experience: number = 0
    ) {
        this.weapon = cloneClass(weapon);
        this.gainExampleList = gainExampleList;
        ExampleBonusWeaponCall(this.weapon, bonusList, gainExampleList);
        this.experience = new Experience(experience, level);
    }
}