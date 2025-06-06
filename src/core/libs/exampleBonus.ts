import { ListAttributeCharacter, ListAttributeGain, ListAttributeWeapon } from "@src/core/attribute/ListAttribute";
import { Character } from "@src/core/character/character";
import { Weapon } from "@src/core/weapon/weapon";
import { GainExample } from "@src/core/example/gainExample";

export interface ExampleBonus {
    name: string;
    value: number;
}

// Бонусы к персонажам
export function ExampleBonusCharacterCall(
    character: Character,
    bonusList: ExampleBonus[],
    gainExampleList: GainExample[]
) {
    // Бонус от прокачки
    for (const bonusItem of bonusList) {
        switch (bonusItem.name) {
            case ListAttributeCharacter.armor:
                character.attribute.armor.setValue(character.attribute.armor.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.barrier:
                character.attribute.barrier.setValue(character.attribute.barrier.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.damage:
                character.attribute.damage.setValue(character.attribute.damage.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.health:
                character.attribute.health.setValue(character.attribute.health.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.speed:
                character.attribute.speed.setValue(character.attribute.speed.getValue() + bonusItem.value);
                break;
        }
    }

    // Бонус от усилении
    for (const gainItem of gainExampleList) {
        for (const gainBonusItem of gainItem.gain.exampleBonusList) {
            switch (gainBonusItem.name) {
                case ListAttributeGain.armor:
                    character.attribute.armor.setValue(character.attribute.armor.getValue() + gainBonusItem.value);
                    break;

                case ListAttributeGain.health:
                    character.attribute.health.setValue(character.attribute.health.getValue() + gainBonusItem.value);
                    break;
            }
        }
    }
}

// Бонусы к оружию
export function ExampleBonusWeaponCall(
    weapon: Weapon,
    bonusList: ExampleBonus[],
    gainExampleList: GainExample[]
) {
    // Бонус от прокачки
    for (const bonusItem of bonusList) {
        switch (bonusItem.name) {
            case ListAttributeWeapon.damage:
                weapon.attribute.damage.setValue(weapon.attribute.damage.getValue() + bonusItem.value);
                break;

            case ListAttributeWeapon.speed:
                weapon.attribute.damage.setValue(weapon.attribute.damage.getValue() + bonusItem.value);
                break;
        }
    }

    // Бонус от усилении
    for (const gainItem of gainExampleList) {
        for (const gainBonusItem of gainItem.gain.exampleBonusList) {
            switch (gainBonusItem.name) {
                case ListAttributeGain.damage:
                    weapon.attribute.damage.setValue(weapon.attribute.damage.getValue() + gainBonusItem.value);
                    break;
            }
        }
    }
}