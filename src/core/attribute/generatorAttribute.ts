import { AttributeCharacter, AttributeCharacterObject } from "@src/core/attribute/ListAttribute";
import { ArmorAttribute } from "./defensive/armorAttribute";
import { BarrierAttribute } from "./defensive/barrierAttribute";
import { DamageAttribute } from "./damage/damageAttribute";
import { HealthAttribute } from "./defensive/healthAttribute";
import { NearAddDamageAttribute } from "./damage/nearAddDamageAttribute";
import { SpeedDamageAttribute } from "./damage/speedDamageAttribute";
import { HemorrhageResistAttribute } from "./resist/hemorrhageResistAttribute";

export function generatorAttributeCharacter(
    attributeList: AttributeCharacterObject
): AttributeCharacter {
    return {
        armor: new ArmorAttribute(attributeList.armor),
        barrier: new BarrierAttribute(attributeList.barrier),
        damage: new DamageAttribute(attributeList.damage),
        health: new HealthAttribute(attributeList.health),
        nearAddDamage: new NearAddDamageAttribute(attributeList.nearAddDamage),
        speed: new SpeedDamageAttribute(attributeList.speed),
        hemorrhageResistAttribute: new HemorrhageResistAttribute(attributeList.hemorrhageResist),
    }
}