import { DamageAttribute } from "@src/core/attribute/damage/damageAttribute";
import { WEAPON_LIST_TYPE, WEAPON_LIST_TYPE_TEXT } from "@src/content/weapon/weaponListType";
import { SpeedDamageAttribute } from "@src/core/attribute/damage/speedDamageAttribute";
import { CritDamageAttribute } from "@src/core/attribute/damage/critDamageAttribute";
import { chanceCritDamageAttribute } from "@src/core/attribute/damage/chanceCritDamageAttribute";
import { HemorrhageAttribute } from "@src/core/attribute/typeDamage/hemorrhageAttribute";
import { Coins } from "@src/core/coins/coins";
import { AttributeWeapon } from "@src/core/attribute/ListAttribute";

export class Weapon {
    name: string;
    type: WEAPON_LIST_TYPE;
    typeText: string;
    description: string;
    image: string | null;
    coinsList: Coins[];
    attribute: AttributeWeapon;

    constructor(
        name: string,
        description: string,
        image: string | null,
        coinsList: Coins[],
        type: WEAPON_LIST_TYPE,
        attribute: AttributeWeapon
    ) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.coinsList = coinsList;
        this.type = type;
        this.typeText = WEAPON_LIST_TYPE_TEXT[this.type];
        this.attribute = attribute;
    }
}