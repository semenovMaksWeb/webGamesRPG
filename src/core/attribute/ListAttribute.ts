import { HealthAttribute } from "@src/core/attribute/defensive/healthAttribute";
import { ArmorAttribute } from "@src/core/attribute/defensive/armorAttribute";
import { BarrierAttribute } from "@src/core/attribute/defensive/barrierAttribute";
import { DamageAttribute } from "@src/core/attribute/damage/damageAttribute";
import { SpeedDamageAttribute } from "@src/core/attribute/damage/speedDamageAttribute";
import { NearAddDamageAttribute } from "@src/core/attribute/damage/nearAddDamageAttribute";
import { HemorrhageResistAttribute } from "@src/core/attribute/resist/hemorrhageResistAttribute";
import { CritDamageAttribute } from "@src/core/attribute/damage/critDamageAttribute";
import { chanceCritDamageAttribute } from "@src/core/attribute/damage/chanceCritDamageAttribute";
import { HemorrhageAttribute } from "@src/core/attribute/typeDamage/hemorrhageAttribute";

export enum ListAttribute {
    armor = "armor",
    health = "health",
    barrier = "barrier",
    speed = "speed",
    damage = "damage",
    nearAddDamage = "nearAddDamage",
    hemorrhage = "hemorrhage",
    hemorrhageResist = "hemorrhageResist",
    chanceCritDamage = "chanceCritDamage",
    critDamage = "critDamage",
}


export enum ListAttributeCharacter {
    armor = ListAttribute.armor,
    health = ListAttribute.health,
    barrier = ListAttribute.barrier,
    speed = ListAttribute.speed,
    damage = ListAttribute.damage,
    nearAddDamage = ListAttribute.nearAddDamage,
    hemorrhageResist = ListAttribute.hemorrhageResist,

}

export enum ListAttributeWeapon {
    speed = ListAttribute.speed,
    damage = ListAttribute.damage,
    chanceCritDamage = ListAttribute.chanceCritDamage,
    critDamage = ListAttribute.critDamage,
    hemorrhage = ListAttribute.hemorrhage
}
export enum ListAttributeEnemy {
    armor = ListAttribute.armor,
    health = ListAttribute.health,
    barrier = ListAttribute.barrier,
    speed = ListAttribute.speed,
    damage = ListAttribute.damage,
    hemorrhage = ListAttribute.hemorrhage,
    hemorrhageResist = ListAttribute.hemorrhageResist,
}

export enum ListAttributeGain {
    health = ListAttribute.health,
    armor = ListAttribute.armor,
    damage = ListAttribute.damage,
}

export enum ListAttributeDamage {
    hemorrhage = ListAttribute.hemorrhage,
    damage = ListAttribute.damage,
}

export enum ListAttributeResistDamage {
    hemorrhageResist = ListAttribute.hemorrhageResist,
}

export interface AttributeWeapon {
    damage: DamageAttribute;
    speed: SpeedDamageAttribute;
    critDamage: CritDamageAttribute;
    chanceCritDamage: chanceCritDamageAttribute;
    hemorrhage: HemorrhageAttribute;
}

export interface AttributeCharacter {
    health: HealthAttribute;
    armor: ArmorAttribute;
    barrier: BarrierAttribute;
    damage: DamageAttribute;
    speed: SpeedDamageAttribute;
    nearAddDamage: NearAddDamageAttribute;
    hemorrhageResistAttribute: HemorrhageResistAttribute;
}
export interface AttributeEnemy {
    health: HealthAttribute;
    armor: ArmorAttribute;
    barrier: BarrierAttribute;
    damage: DamageAttribute;
    speed: SpeedDamageAttribute;
    hemorrhage: HemorrhageAttribute;
    hemorrhageResistAttribute: HemorrhageResistAttribute;
}

export type AttributeCharacterObject = Record<keyof typeof ListAttributeCharacter, number>
export type AttributeWeaponObject = Record<keyof typeof ListAttributeWeapon, number>
export type AttributeEnemyObject = Record<keyof typeof ListAttributeEnemy, number>