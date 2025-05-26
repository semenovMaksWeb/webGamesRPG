import { Character } from "@src/core/character/character";

export class FellerСharacter extends Character {
    constructor() {
        const characterConfig = {
            health: 100,
            armor: 0,
            barrier: 0,
            damage: 20,
            speed: 1,
        }
        super(
            "Лесоруб",
            characterConfig.health,
            characterConfig.armor,
            characterConfig.barrier,
            characterConfig.damage,
            characterConfig.speed
        );
    }
}