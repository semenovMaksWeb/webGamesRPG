import { Player } from "../player/player";
import { WEAPON_LIST_TYPE } from "../weapon/weaponListType";

// Учитывание прокачки персонажа умение пользоваться определенным типом оружия
export function damageAddSkillWeapon(player: Player) {
    switch (player.weaponPlayer.type) {
        case WEAPON_LIST_TYPE.NEAR:
            return player.character.nearAddDamage.getValue();

        case WEAPON_LIST_TYPE.LOOK:
            return 0;
    }
}

// Формула рассчета урона игрока
export function damageFormulaPlayer(player1: Player, player2: Player) {
    const damageSkillWeapon = damageAddSkillWeapon(player1);
    // console.log("damageSkillWeapon", damageSkillWeapon);
    // Урон: Обычный урон оружие * Скорость атаки оружие
    const damageWeaponBase = player1.weaponPlayer.damage.getValue() * player1.weaponPlayer.speed.getValue();
    //Урон: Обычный урон персонажа * Скорость атаки персонажа
    const damageCharacterBase = player1.characterPlayer.damage.getValue() * player1.characterPlayer.speed.getValue();
    //Урон: урон оружие + обработка прокачки умения оружием у персонажа
    const damageWeapon = damageWeaponBase + (damageWeaponBase * damageSkillWeapon / 100)
    //Урон: Урон персонажа + урон оружием
    const damageAll = damageCharacterBase + damageWeapon;
    //Урон по игроку: Урон / сопративлении брони
    const damage = damageAll - (damageAll * player2.characterPlayer.armor.getValue() / 100);
    return damage;
}

// получение урона игроком
export function damagePlayer(character: Player, damage: number) {
    // пока есть барьер урон по здоровью не будет, весь сверхУрон полностью поглащается барьером.
    const barrierValue = character.characterPlayer.barrier.getValue();

    if (barrierValue != 0) {
        character.characterPlayer.barrier.setValue(barrierValue - damage);
        return;
    }

    const healthValue = character.characterPlayer.health.getValue();
    character.characterPlayer.health.setValue(healthValue - damage);
}