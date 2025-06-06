import { AttributeCharacter, AttributeCharacterObject, AttributeEnemy, AttributeEnemyObject, AttributeWeapon, AttributeWeaponObject } from "@src/core/attribute/ListAttribute";
import { ArmorAttribute } from "./defensive/armorAttribute";
import { BarrierAttribute } from "./defensive/barrierAttribute";
import { DamageAttribute } from "./damage/damageAttribute";
import { HealthAttribute } from "./defensive/healthAttribute";
import { NearAddDamageAttribute } from "./damage/nearAddDamageAttribute";
import { SpeedDamageAttribute } from "./damage/speedDamageAttribute";
import { HemorrhageResistAttribute } from "./resist/hemorrhageResistAttribute";
import { chanceCritDamageAttribute } from "./damage/chanceCritDamageAttribute";
import { CritDamageAttribute } from "./damage/critDamageAttribute";
import { HemorrhageAttribute } from "./typeDamage/hemorrhageAttribute";

export function generatorAttributeCharacter(
    attributeList: AttributeCharacterObject
): AttributeCharacter {
    return {
        armor: new ArmorAttribute(attributeList.armor),
        barrier: new BarrierAttribute(attributeList.barrier),
        health: new HealthAttribute(attributeList.health),

        damage: new DamageAttribute(attributeList.damage),
        nearAddDamage: new NearAddDamageAttribute(attributeList.nearAddDamage),
        speed: new SpeedDamageAttribute(attributeList.speed),

        hemorrhageResistAttribute: new HemorrhageResistAttribute(attributeList.hemorrhageResist),
    }
}

export function generatorAttributeWeapon(
    attributeList: AttributeWeaponObject
): AttributeWeapon {
    return {
        damage: new DamageAttribute(attributeList.damage),
        speed: new SpeedDamageAttribute(attributeList.speed),

        chanceCritDamage: new chanceCritDamageAttribute(attributeList.chanceCritDamage),
        critDamage: new CritDamageAttribute(attributeList.critDamage),

        hemorrhage: new HemorrhageAttribute(attributeList.hemorrhage)
    }
}

export function generatorAttributeEnemy(
    attributeList: AttributeEnemyObject
): AttributeEnemy {
    return {
        health: new HealthAttribute(attributeList.health),
        armor: new ArmorAttribute(attributeList.armor),
        barrier: new BarrierAttribute(attributeList.barrier),

        damage: new DamageAttribute(attributeList.damage),
        speed: new SpeedDamageAttribute(attributeList.speed),
        hemorrhage: new HemorrhageAttribute(attributeList.hemorrhage),

        hemorrhageResistAttribute: new HemorrhageResistAttribute(attributeList.hemorrhageResist),
    }
}