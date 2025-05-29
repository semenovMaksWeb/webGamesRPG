import { ListAttributeDamage } from "../attribute/ListAttribute";
import { getRandomInt } from "../libs/getRandomInt";
import { Player } from "../player/player";
import { WEAPON_LIST_TYPE } from "../weapon/weaponListType";
import { ActionGamesList, ActionGamesListText } from "./actionGamesList";

// Класс игры
export class Games {
    historyList: any[] = [];
    xod: number = 0;
    characterXod: number = 1;
    playerList: Player[];
    botList: any = [];

    constructor(playerList: Player[]) {
        this.playerList = playerList;
    }

    // Проверка конца игры если у всех игроков 0хп.
    checkGamesEnd() {
        return !this.playerList.find((playerItem) => playerItem.characterPlayer.health.getValue() !== 0);
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


    // Учитывание прокачки персонажа умение пользоваться определенным типом оружия
    damageAddSkillWeapon(player: Player) {
        switch (player.weaponPlayer.type) {
            case WEAPON_LIST_TYPE.NEAR:
                return player.character.nearAddDamage.getValue();

            case WEAPON_LIST_TYPE.LOOK:
                return 0;
        }
    }

    // получение урона игроком
    damagePlayer(character: Player, damage: number) {
        // пока есть барьер урон по здоровью не будет, весь сверхУрон полностью поглащается барьером.
        const barrierValue = character.characterPlayer.barrier.getValue();

        if (barrierValue != 0) {
            character.characterPlayer.barrier.setValue(barrierValue - damage);
            this.addHistory(character.name, ActionGamesList.getDamageBarrier, damage);
            return;
        }

        const healthValue = character.characterPlayer.health.getValue();
        character.characterPlayer.health.setValue(healthValue - damage);
        this.addHistory(character.name, ActionGamesList.getDamageXp, damage);
    }

    // сохранения в истории типов урона 
    addHistoryTypeDamage(name: string, isCrit: number, typeDamage: string) {
        this.addHistory(name, ActionGamesList.isCrit, isCrit);
        this.addHistory(name, ActionGamesList.typeDamage, typeDamage);
    }

    // Получить список доступных типов урона 
    getTypeListDamage(player1: Player) {
        const typeListDamage = [{ name: ListAttributeDamage.damage, value: player1.weaponPlayer.damage.getValue() }];
        const hemorrhage = player1.weaponPlayer.hemorrhageAttribute.getValue();
        if (hemorrhage !== 0) {
            typeListDamage.push({ name: ListAttributeDamage.hemorrhage, value: hemorrhage });
        }

        return typeListDamage;
    }

    // определения урона с учетом типа урона
    damageAddType(typeDamage: any, damageWeaponBase: number, playerDeff: Player) {
        switch (typeDamage.name) {
            case ListAttributeDamage.hemorrhage:
                const addDamageXp = 50; // Добавляет урон к хп
                const remoreDamageBarrier = 50; // уменьшает урон к барьеру
                if (playerDeff.characterPlayer.barrier.getValue() !== 0) {
                    return (damageWeaponBase * typeDamage.value / 100) - (damageWeaponBase * remoreDamageBarrier / 100)
                }
                return damageWeaponBase * typeDamage.value / 100 + (damageWeaponBase * addDamageXp / 100)
        }

        return 0;
    }

    // расчет урона при наличие сопротивления
    damageRisist(damage: number, playerDeff: Player, typeDamage: any) {
        switch (typeDamage.name) {
            case ListAttributeDamage.hemorrhage:
                return damage - (damage * playerDeff.characterPlayer.hemorrhageResistAttribute.getValue() / 100);
        }
        return damage;
    }

    // Формула рассчета урона игрока
    damageFormulaPlayer(player1: Player, player2: Player) {
        const coefficientSkillWeapon = this.damageAddSkillWeapon(player1);
        // Урон: Обычный урон оружие * Скорость атаки оружие
        const damageWeaponBase = player1.weaponPlayer.damage.getValue() * player1.weaponPlayer.speed.getValue();

        //Урон: Обычный урон персонажа * Скорость атаки персонажа
        const damageCharacterBase = player1.characterPlayer.damage.getValue() * player1.characterPlayer.speed.getValue();
        // Урон с учетом прокачки персонажа на тип оружия.
        const damageSkillWeapon = (damageWeaponBase * coefficientSkillWeapon / 100);

        // Определения наличия крита
        const chanceCrit = getRandomInt(0, 95);
        const isCrit = chanceCrit <= player1.weaponPlayer.chanceCritDamage.getValue() ? 1 : 0;


        // Определения типа урона
        const typeListDamage = this.getTypeListDamage(player1);
        const typeDamageIndex = getRandomInt(0, typeListDamage.length - 1);
        const typeDamage = typeListDamage[typeDamageIndex];

        // критический урон
        const damageCritWeapon = (damageWeaponBase * player1.weaponPlayer.critDamage.getValue() / 100 * isCrit);

        const damageType = this.damageAddType(typeDamage, damageWeaponBase, player2);

        //Урон: урон оружие + обработка прокачки умения оружием у персонажа + крит урон + учет типа урона
        const damageWeapon = damageWeaponBase + damageSkillWeapon + damageCritWeapon + damageType;

        //Урон: Урон персонажа + урон оружием
        const damageAll = damageCharacterBase + damageWeapon;

        //Урон по игроку: Урон - сопративлении брони
        const damageArmor = damageAll - (damageAll * player2.characterPlayer.armor.getValue() / 100);
        //Урон по игроку: Урон - сопративлении резистов
        const damageRisist = this.damageRisist(damageArmor, player2, typeDamage);

        // Добавление истории игры
        this.addHistory(player1.name, ActionGamesList.causeDamage, damageRisist);
        this.addHistoryTypeDamage(player1.name, isCrit, typeDamage.name);
        return damageRisist;
    }
}
