import { ExampleBonus } from "../libs/exampleBonus";

export interface AccountConfig {
    user: {
        name: string;
    },

    character: AccountConfigCharacter[],

    weapon: AccountConfigWeapon[],

    gain: AccountConfiGain[]
}

export interface AccountConfiGain {
    name: string;
    level: number;
    experience: number;
}

export interface AccountConfigCharacter {
    name: string;
    level: number;
    experience: number;
    bonus: ExampleBonus[];
    gain: AccountConfiGain[];

}

export interface AccountConfigWeapon {
    name: string;
    level: number;
    experience: number;
    bonus: ExampleBonus[];
    gain: AccountConfiGain[];
}