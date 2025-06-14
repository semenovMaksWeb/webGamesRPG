// Список с описанием действии истории игры
export const ActionGamesListText: any = {
    1: {
        name: "Получил урон по здоровью"
    },
    2: {
        name: "Получил урон по барьеру"
    },
    3: {
        name: "Нанес урона"
    },
    4: {
        name: "Критический урон"
    },
    5: {
        name: "Тип урона"
    },
    6: {
        name: "Эффект кровотечение"
    }
}

// Действия игры для хранения истории игры
export enum ActionGamesList {
    getDamageXp = 1,
    getDamageBarrier = 2,
    causeDamage = 3,
    isCrit = 4,
    typeDamage = 5,
    effectHemorrhage = 6
}