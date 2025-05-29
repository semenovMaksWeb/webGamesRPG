// бафы и дебафы на игроке
export class Effect {
    public readonly name: string;
    private count: number;

    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }

    // Добавить кол-во эффектов
    public addCount(value: number) {
        this.count += value
    }

    // Получить кол-во эффектов
    public removeCount() {
        this.count -= 1;
    }

    // Получить кол-во эффектов
    public getCount() {
        return this.count;
    }
}