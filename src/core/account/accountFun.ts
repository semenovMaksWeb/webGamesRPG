import { FellerСharacter } from "@src/content/character/fellerСharacter"
import { LookNoviceWeapon } from "@src/content/weapon/look/lookNoviceWeapon";
import { weaponList } from "../weapon/weaponList";
import { AccountConfiGain, AccountConfigCharacter, AccountConfigWeapon } from "./AccountConfig";
import { LookPowerWeapon } from "@src/content/weapon/look/lookPowerWeapon";
import { LookVampireWeapon } from "@src/content/weapon/look/lookVampireWeapon";
import { NearAxWeapon } from "@src/content/weapon/near/nearAxWeapon";
import { NearKnifeWeapon } from "@src/content/weapon/near/nearKnifeWeapon";
import { GainExample } from "../example/gainExample";
import { gainList } from "../gain/gainList";
import { ArmorGain } from "@src/content/gain/character/armorGain";
import { DamageWeaponGain } from "@src/content/gain/weapon/damageWeaponGain";
import { HealthGain } from "@src/content/gain/character/healthGain";
import { characterList } from "../character/characterList";

export function accountFun() {
    function generatorCharacter(activeConfigCharacter: AccountConfigCharacter) {
        switch (activeConfigCharacter.name) {
            case characterList.FellerСharacter:
                return new FellerСharacter();
        }
    }

    function generatorWeapon(activeConfigWeapon: AccountConfigWeapon) {
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

    function generatorGain(gain: AccountConfiGain[]) {
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
    
    return {
        generatorCharacter,
        generatorWeapon,
        generatorGain
    }
}