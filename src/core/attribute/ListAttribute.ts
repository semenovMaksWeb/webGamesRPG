export enum ListAttribute {
    armor = "armor",
    health = "health",
    barrier = "barrier",
    speed = "speed",
    damage = "damage",
    nearAddDamage = "nearAddDamage",
    hemorrhage = "hemorrhage",
}


export enum ListAttributeCharacter {
    armor = ListAttribute.armor,
    health = ListAttribute.health,
    barrier = ListAttribute.barrier,
    speed = ListAttribute.speed,
    damage = ListAttribute.damage,
    nearAddDamage = ListAttribute.nearAddDamage
}

export enum ListAttributeWeapon {
    speed = ListAttribute.speed,
    damage = ListAttribute.damage,
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