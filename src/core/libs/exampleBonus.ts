import { ListAttribute } from "@src/core/attribute/ListAttribute";
import { Character } from "@src/core/character/character";

export interface ExampleBonus {
    name: string;
    value: number;
}

export function ExampleBonusCall(
    character: Character,
    bonusList: ExampleBonus[]
) {
    for (const bonusItem of bonusList) {
        switch (bonusItem.name) {
            case ListAttribute.armor:
                character.armor.setValue(character.armor.getValue() + bonusItem.value);
                break;

            case ListAttribute.barrier:
                character.barrier.setValue(character.barrier.getValue() + bonusItem.value);
                break;

            case ListAttribute.damage:
                character.damage.setValue(character.damage.getValue() + bonusItem.value);
                break;

            case ListAttribute.health:
                character.health.setValue(character.health.getValue() + bonusItem.value);
                break;

            case ListAttribute.speed:
                character.speed.setValue(character.speed.getValue() + bonusItem.value);
                break;
        }
    }
}