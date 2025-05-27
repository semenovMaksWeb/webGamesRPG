import { characterList } from "@src/core/character/characterList";
import { Player } from "@src/core/player/player";
import { AccountConfig, AccountConfiGain, AccountConfigCharacter, AccountConfigWeapon } from "@src/core/account/AccountConfig";
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
        switch (activeConfigCharacter.name) {
            case characterList.FellerСharacter:
                return new FellerСharacter();
        }
    }

    private generatorWeapon(activeConfigWeapon: AccountConfigWeapon) {
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

    private generatorGain(gain: AccountConfiGain[]) {
        const gainClass: GainExample[] = [];
        for (const gainItem of gain) {
            switch (gainItem.name) {
                case gainList.armorGain:
                    gainClass.push(new GainExample(new ArmorGain(), gainItem.level, gainItem.experience));
                    break;

                case gainList.damageWeaponGain:
                    gainClass.push(new GainExample(new DamageWeaponGain(), gainItem.level, gainItem.experience));
                    break;

                case gainList.healthGain:
                    gainClass.push(new GainExample(new HealthGain(), gainItem.level, gainItem.experience));
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
        return new Player(character, weapon, characterExample, weaponExample);
    }
}