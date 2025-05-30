import { Character } from "@src/core/character/character";
import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";

export class FellerСharacter extends Character {
    constructor() {
        const characterConfig = {
            health: 100,
            armor: 0,
            barrier: 0,
            damage: 20,
            speed: 1,
            nearAddDamage: 20,
            coinsList: [
                new Coins(coinsList.wooden, 40),
                new Coins(coinsList.battle, 10),
            ]

        }
        super(
            "Лесоруб",
            characterConfig.coinsList,
            characterConfig.health,
            characterConfig.armor,
            characterConfig.barrier,
            characterConfig.damage,
            characterConfig.speed,
            characterConfig.nearAddDamage
        );
    }
}