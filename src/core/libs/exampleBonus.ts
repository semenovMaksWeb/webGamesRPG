import { ListAttributeCharacter, ListAttributeWeapon } from "@src/core/attribute/ListAttribute";
import { Character } from "@src/core/character/character";
import { Weapon } from "../weapon/weapon";

export interface ExampleBonus {
    name: string;
    value: number;
}

// Бонусы к персонажам
export function ExampleBonusCharacterCall(
    character: Character,
    bonusList: ExampleBonus[]
) {
    for (const bonusItem of bonusList) {
        switch (bonusItem.name) {
            case ListAttributeCharacter.armor:
                character.armor.setValue(character.armor.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.barrier:
                character.barrier.setValue(character.barrier.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.damage:
                character.damage.setValue(character.damage.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.health:
                character.health.setValue(character.health.getValue() + bonusItem.value);
                break;

            case ListAttributeCharacter.speed:
                character.speed.setValue(character.speed.getValue() + bonusItem.value);
                break;
        }
    }
}

// Бонусы к оружию
export function ExampleBonusWeaponCall(
    weapon: Weapon,
    bonusList: ExampleBonus[]
) {
    for (const bonusItem of bonusList) {
        switch (bonusItem.name) {
            case ListAttributeWeapon.damage:
                weapon.damage.setValue(weapon.damage.getValue() + bonusItem.value);
                break;

            case ListAttributeWeapon.speed:
                weapon.damage.setValue(weapon.damage.getValue() + bonusItem.value);
                break;
        }
    }
}