import { Player } from "@src/core/player/player";
import { AccountConfig } from "@src/core/account/AccountConfig";
import { CharacterExample } from "@src/core/example/characterExample";
import { WeaponExample } from "@src/core/example/weaponExample";
import { accountFun } from "@src/core/account/accountFun";


export class Account {
    public config: AccountConfig;

    constructor(config: AccountConfig) {
        this.config = config;
    }



    configConvertToPlayer(
        indexCharacter: number,
        indexWeapon: number
    ) {
        const { generatorCharacter, generatorGain, generatorWeapon } = accountFun();
        const character = generatorCharacter(this.config.character[indexCharacter]);
        const weapon = generatorWeapon(this.config.weapon[indexWeapon]);
        const gainCharacter = generatorGain(this.config.character[indexCharacter].gain);
        const gainWeapon = generatorGain(this.config.weapon[indexWeapon].gain);

        if (!character || !weapon) {
            throw new Error();
        }

        const characterExample = new CharacterExample(
            character,
            this.config.character[indexCharacter].level,
            this.config.character[indexCharacter].bonus,
            gainCharacter,
            this.config.character[indexCharacter].experience,
        );

        const weaponExample = new WeaponExample(
            weapon,
            this.config.weapon[indexWeapon].level,
            this.config.weapon[indexWeapon].bonus,
            gainWeapon,
            this.config.weapon[indexWeapon].experience,
        )
        return new Player(this.config.user.name, character, weapon, characterExample, weaponExample);
    }
}