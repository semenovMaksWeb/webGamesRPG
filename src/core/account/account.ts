import { characterList } from "@src/core/character/characterList";
import { Player } from "@src/core/player/player";
import { AccountConfig, AccountConfigCharacter, AccountConfigWeapon } from "@src/core/account/AccountConfig";
import { FellerСharacter } from "@src/content/character/fellerСharacter"
import { CharacterExample } from "@src/core/example/character/characterExample";
import { weaponList } from "@src/core/weapon/weaponList";
import { GainExample } from "@src/core/example/character/gainExample";
import { gainList } from "@src/core/gain/gainList";
import { WeaponExample } from "@src/core/example/character/weaponExample";

import { LookNoviceWeapon } from "@src/content/weapon/look/lookNoviceWeapon";
import { LookPowerWeapon } from "@src/content/weapon/look/lookPowerWeapon";
import { NearAxWeapon } from "@src/content/weapon/near/nearAxWeapon";
import { NearKnifeWeapon } from "@src/content/weapon/near/nearKnifeWeapon";
import { ArmorGain } from "@src/content/gain/character/armorGain";
import { HealthGain } from "@src/content/gain/character/healthGain";
import { DamageWeaponGain } from "@src/content/gain/weapon/damageWeaponGain";
import { LookVampireWeapon } from "@src/content/weapon/look/lookVampireWeapon";

export class Account {
    public config: AccountConfig;

    constructor(config: any) {
        this.config = config;
    }

    private generatorCharacter(activeConfigCharacter: AccountConfigCharacter) {
        console.log("activeConfigCharacter.name", activeConfigCharacter.name);

        switch (activeConfigCharacter.name) {
            case characterList.FellerСharacter:
                return new FellerСharacter();
        }
    }

    private generatorWeapon(activeConfigWeapon: AccountConfigWeapon) {
        console.log("activeConfigWeapon.name", activeConfigWeapon.name);

        switch (activeConfigWeapon.name) {
            case weaponList.LookNoviceWeapon:
                return new LookNoviceWeapon();

            case weaponList.LookPowerWeapon:
                return new LookPowerWeapon();

            case weaponList.LookVampireWeapon:
                return new LookVampireWeapon();


            case weaponList.NearAxWeapon:
                return new NearAxWeapon();

            case weaponList.NearKnifeWeapon:
                return new NearKnifeWeapon();
        }
    }

    private generatorGain(gain: string[]) {
        const gainClass: GainExample[] = [];
        const level = 1;
        for (const gainItem of gain) {
            switch (gainItem) {
                case gainList.armorGain:
                    gainClass.push({ gain: new ArmorGain(), level: level })
                    break;

                case gainList.damageWeaponGain:
                    gainClass.push({ gain: new DamageWeaponGain(), level: level })
                    break;

                case gainList.healthGain:
                    gainClass.push({ gain: new HealthGain(), level: level })
                    break;
            }
        }
        return gainClass;
    }


    configConvertToPlayer(
        indexCharacter: number,
        indexWeapon: number
    ) {
        const character = this.generatorCharacter(this.config.character[indexCharacter]);
        const weapon = this.generatorWeapon(this.config.weapon[indexWeapon]);
        const gainCharacter = this.generatorGain(this.config.character[indexCharacter].gain);
        const gainWeapon = this.generatorGain(this.config.weapon[indexWeapon].gain);
        console.log("character", character);
        console.log("weapon", weapon);

        if (!character || !weapon) {
            throw new Error();
        }

        const characterExample = new CharacterExample(
            character,
            this.config.character[indexCharacter].level,
            this.config.character[indexCharacter].bonus,
            gainCharacter
        );
        const weaponExample = new WeaponExample(
            weapon,
            this.config.weapon[indexWeapon].level,
            this.config.weapon[indexWeapon].bonus,
            gainWeapon
        )
        return new Player(character, weapon, characterExample, weaponExample);

    }
}