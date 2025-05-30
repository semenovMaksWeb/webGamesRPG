import { Enemy } from "@src/core/enemy/enemy";
import { Player } from "@src/core/player/player";
import { ListAttributeDamage } from "@src/core/attribute/ListAttribute";
import { Character } from "@src/core/character/character";
import { getRandomInt } from "@src/core/libs/getRandomInt";
import { effectList } from "@src/core/effect/effectList";
import { Effect } from "@src/core/effect/effect";
import { WEAPON_LIST_TYPE } from "@src/core/weapon/weaponListType";
import { Weapon } from "../weapon/weapon";
import { ActionGamesList, ActionGamesListText } from "./actionGamesList";

export class Games {
    playerList: (Player | Enemy)[];
    historyList: any[] = [];

    constructor(playerList: (Player | Enemy)[]) {
        this.playerList = playerList;
    }

    // Проверка конца игры если у всех игроков 0хп.
    checkGamesEnd() {
        return !!this.playerList.find((playerItem) => {
            const example = this.getExample(playerItem, "character") as Character;
            return example.health.getValue() == 0
        });
    }

    // Добавить запись в историю
    addHistory(name: string, actionId: ActionGamesList, value: any) {
        this.historyList.push(
            {
                name: name,
                actionId: actionId,
                action: ActionGamesListText[actionId].name,
                value: value
            }
        )
    }

    // базовый дамаг персонажа
    damageCharacterBase(character: Character) {
        return character.damage.getValue() * character.speed.getValue();
    }

    // базовый дамаг оружия
    damageWeaponBase(weapon?: Weapon) {
        if (weapon == null) {
            return 0;
        }
        return weapon.damage.getValue() * weapon.speed.getValue();
    }
    // Урон с учетом прокачки персонажа на тип оружия
    damageSkillWeapon(damageWeaponBase: number, coefficientSkillWeapon: number) {
        return damageWeaponBase * coefficientSkillWeapon / 100;
    }
    // Урон крита
    damageCrit(damageWeaponBase: number, weapon?: Weapon) {
        if (weapon == null) {
            return 0;
        }
        const chanceCrit = getRandomInt(0, 95);
        const isCrit = chanceCrit <= weapon.chanceCritDamage.getValue() ? 1 : 0;
        return (damageWeaponBase * weapon.critDamage.getValue() / 100 * isCrit);
    }

    // урон от типа урона
    damageType(exampleAttk: Player | Enemy, damageWeaponBase: number, exampleDeff: Player | Enemy) {
        const typeListDamage = this.getTypeListDamage(exampleAttk);
        const typeDamageIndex = getRandomInt(0, typeListDamage.length - 1);
        const typeDamage = typeListDamage[typeDamageIndex];
        return { damage: this.damageAddType(typeDamage, damageWeaponBase, exampleDeff), type: typeDamage.name };
    }

    // уменьшить урон из за брони
    removeDamageArmor(damageAll: number, exampleDeff: Character | Enemy) {
        return damageAll - (damageAll * exampleDeff.armor.getValue() / 100);
    }

    // Уменьшить урон взависимотси от наличия резиста
    removeDamageRisist(damage: number, ExampleDeff: Character | Enemy, typeDamage: ListAttributeDamage) {
        switch (typeDamage) {
            case ListAttributeDamage.hemorrhage:
                return damage - (damage * ExampleDeff.hemorrhageResistAttribute.getValue() / 100);
        }
        return damage;
    }


    // Формула рассчета урона игрока
    damageFormulaPlayer(exampleAttk: Player | Enemy, exampleDeff: Player | Enemy) {

        const characterAttk = this.getExample(exampleAttk, "character") as Character;
        const weaponAttk = this.getExample(exampleAttk, "weapon") as Weapon | undefined;
        const characterDeff = this.getExample(exampleAttk, "character") as Character;
        const coefficientSkillWeapon = this.damageAddSkillWeapon(exampleAttk as Player | undefined);

        const damageWeaponBase = this.damageWeaponBase(weaponAttk);
        const damageCharacterBase = this.damageCharacterBase(characterAttk);
        const damageSkillWeapon = this.damageSkillWeapon(damageWeaponBase, coefficientSkillWeapon);
        const damageCrit = this.damageCrit(damageWeaponBase, weaponAttk);
        const { damage, type } = this.damageType(exampleAttk, damageWeaponBase, exampleDeff);

        const damageWeapon = damageWeaponBase + damageSkillWeapon + damageCrit + damage;
        const damageAll = damageCharacterBase + damageWeapon;

        const damageArmor = this.removeDamageArmor(damageAll, characterAttk);
        const damageRisist = +this.removeDamageRisist(damageArmor, characterDeff, type).toFixed(3);

        this.addHistory(exampleAttk.name, ActionGamesList.causeDamage, damageRisist);
        this.addHistoryTypeDamage(exampleAttk.name, damageCrit !== 0 ? 1 : 0, type);

        return damageRisist;
    }


    // сохранения в истории типов урона 
    addHistoryTypeDamage(name: string, isCrit: number, typeDamage: string) {
        this.addHistory(name, ActionGamesList.isCrit, isCrit);
        this.addHistory(name, ActionGamesList.typeDamage, typeDamage);
    }

    // Из player забрать нужную сущность или вернуть Enemy
    getExample(example: Player | Enemy, type: string) {
        // Это игрок
        if (example instanceof Player) {
            switch (type) {
                case "character":
                    return example.characterPlayer;
                case "weapon":
                    return example.weaponPlayer;
            }
        } else { // Enemy
            return example;
        }
    }

    // Добавить эффект на персонажа
    public addEffect(ExampleDeff: Player | Enemy, name: string, count: number) {
        const effectCheck = ExampleDeff.effectList.find((effect: Effect) => effect.name == name);
        if (effectCheck) {
            effectCheck.addCount(count);
            return;
        }
        ExampleDeff.effectList.push(new Effect(name, count));
    }

    // Урон наносится кровотоком
    damageHemorrhage(
        typeDamage: any,
        damageWeaponBase: number,
        playerDeff: Player | Enemy
    ) {
        const addDamageXp = 50; // Добавляет урон к хп
        const remoreDamageBarrier = 50; // уменьшает урон к барьеру
        const example = this.getExample(playerDeff, "character") as Character;
        const countEffectHemorrhage = getRandomInt(1, 3);
        this.addEffect(playerDeff, effectList.hemorrhage, countEffectHemorrhage);
        this.addHistory(playerDeff.name, ActionGamesList.effectHemorrhage, countEffectHemorrhage);
        // Проверка что есть барьер
        if (example.barrier.getValue() !== 0) {
            return (damageWeaponBase * typeDamage.value / 100) - (damageWeaponBase * remoreDamageBarrier / 100);
        }

        return damageWeaponBase * typeDamage.value / 100 + (damageWeaponBase * addDamageXp / 100)
    }

    // Получить список доступных типов урона 
    getTypeListDamage(exampleAttk: Player | Enemy) {
        let typeListDamage: any = [];
        let hemorrhage = 0;
        const example: Weapon | Enemy = this.getExample(exampleAttk, "weapon") as Weapon | Enemy;

        typeListDamage = [{ name: ListAttributeDamage.damage, value: example.damage.getValue() }];

        if (example.hemorrhageAttribute.getValue() !== 0) {
            typeListDamage.push({ name: ListAttributeDamage.hemorrhage, value: hemorrhage });
        }

        return typeListDamage;
    }

    // определения урона с учетом типа урона
    damageAddType(typeDamage: any, damageWeaponBase: number, playerDeff: Player | Enemy) {
        switch (typeDamage.name) {
            case ListAttributeDamage.hemorrhage:
                return this.damageHemorrhage(typeDamage, damageWeaponBase, playerDeff);
        }
        return 0;
    }

    // Учитывание прокачки персонажа умение пользоваться определенным типом оружия
    damageAddSkillWeapon(player?: Player) {
        if (!player?.weaponPlayer) {
            return 0;
        }

        switch (player.weaponPlayer.type) {
            case WEAPON_LIST_TYPE.NEAR:
                return player.character.nearAddDamage.getValue();

            case WEAPON_LIST_TYPE.LOOK:
                return 0;
        }
    }

    // Каждый ход опустить количество эффектов на 1
    public effectRemoveXod(exampleAttk: Player | Enemy) {
        if (!exampleAttk.effectList.length) {
            return;
        }
        const example: Character = this.getExample(exampleAttk, "character") as Character;
        for (const [effectIndex, effectItem] of exampleAttk.effectList.entries()) {

            switch (effectItem.name) {
                case effectList.hemorrhage:
                    // кровотечение наносит урон сразу по здоровью
                    this.addHistory(exampleAttk.name, ActionGamesList.getDamageXp, effectItem.getCount());
                    example.health.setValue(example.health.getValue() - effectItem.getCount());
                    break;
            }

            effectItem.removeCount();
            if (effectItem.getCount() == 0) {
                exampleAttk.effectList.splice(effectIndex, 1);
            }
        }
    }

    // получение урона игроком
    damagePlayer(playerDeff: Player | Enemy, damage: number) {
        // пока есть барьер урон по здоровью не будет, весь сверхУрон полностью поглащается барьером.
        const example: Character = this.getExample(playerDeff, "character") as Character;
        const barrier = example.barrier.getValue();
        if (barrier != 0) {
            example.barrier.setValue(barrier - damage);
            return;
        }
        example.health.setValue(example.health.getValue() - damage);
    }
}