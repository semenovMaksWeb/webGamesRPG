// Экземлпяр противника

import { Enemy } from "@src/core/enemy/enemy";
import { cloneClass } from "@src/core/libs/cloneClass";

export class EnemyExample {
    public enemy: Enemy; // дефолтные характеристики оружия
    public enemyExample: Enemy;

    constructor(enemy: Enemy) {
        this.enemy = enemy;
        this.enemyExample = cloneClass(enemy);
    }
}