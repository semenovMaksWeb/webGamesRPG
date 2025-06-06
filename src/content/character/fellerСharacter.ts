import { generatorAttributeCharacter } from "@src/core/attribute/generatorAttribute";
import { AttributeCharacterObject } from "@src/core/attribute/ListAttribute";
import { Character } from "@src/core/character/character";
import { Coins } from "@src/core/coins/coins";
import { coinsList } from "@src/core/coins/coinsList";

export class FellerСharacter extends Character {
    constructor() {
        const configAtt: AttributeCharacterObject = {
            armor: 0,
            barrier: 0,
            damage: 20,
            speed: 1,
            nearAddDamage: 20,
            health: 100,
            hemorrhageResist: 0,
        }

        const characterConfig = {
            name: "Лесоруб",
            coinsList: [
                new Coins(coinsList.wooden, 40),
                new Coins(coinsList.battle, 10),
            ],
            attribute: configAtt,
            description: "Персонаж лесубор любит топоры и другие оружия ближнего боя",
            image: "/content/character/feller.png",
        }

        super(
            characterConfig.name,
            characterConfig.description,
            characterConfig.image,
            characterConfig.coinsList,
            generatorAttributeCharacter(characterConfig.attribute)
        );
    }
}