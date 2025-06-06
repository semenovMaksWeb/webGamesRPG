export const EXPERIENCE_MIN = 1000;// опыта нужно на один ур.

// Опыт сущностей в игре
export class Experience {
    private readonly maxLevel: number = 15; // максимальный ур.

    public experience: number = 0; // Опыт
    public level: number = 1; // Уровень

    constructor(experience: number, level: number) {
        this.experience = experience;
        this.level = level;
    }

    // Добавить опыта
    addExperience(experience: number) {
        if (this.experience + experience <= this.maxLevel * EXPERIENCE_MIN) {
            experience = this.maxLevel * EXPERIENCE_MIN
            return;
        }
        this.experience += experience;
        this.level = Math.floor(this.experience / EXPERIENCE_MIN);
    }
}