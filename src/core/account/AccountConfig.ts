import { ExampleBonus } from "../libs/exampleBonus";

export interface AccountConfig {
    user: {
        name: string;
    },

    character: AccountConfigCharacter[],

    weapon: AccountConfigWeapon[],

    gain: {
        name: string;
        count: number;
    }[]
}

export interface AccountConfigCharacter {
    level: number;
    name: string;
    bonus: ExampleBonus[];
    gain: string[];
}

export interface AccountConfigWeapon {
    level: number;
    name: string;
    bonus: ExampleBonus[];
    gain: string[];
}