// Монеты

export class Coins {
    public readonly name: string;
    private value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    // Получить информацию об количество монет
    getCoins() {
        return this.value;
    }

    // Проверяет что есть нужно количество монет
    checkCoins(value: number) {
        return this.value - value >= 0;
    }

    // Добавить количество монет
    removeCoins(value: number) {
        this.value = this.value - value;
    }

    // Добавить количество монет
    addCoins(value: number) {
        this.value = this.value + value;
    }
}