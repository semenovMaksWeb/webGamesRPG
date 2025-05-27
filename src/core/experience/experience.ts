// Опыт сущностей в игре
export class Experience {
    private readonly maxLevel: number = 15; // максимальный ур.
    private readonly experienceMin = 1000; // опыта нужно на один ур.

    public experience: number = 0; // Опыт
    public level: number = 1; // Уровень

    constructor(experience: number, level: number) {
        this.experience = experience;
        this.level = level;
    }

    // Добавить опыта
    addExperience(experience: number) {
        if (this.experience + experience <= this.maxLevel * this.experienceMin) {
            experience = this.maxLevel * this.experienceMin
            return;
        }
        this.experience += experience;
        this.level = Math.floor(this.experience / this.experienceMin);
    }
}