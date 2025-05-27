import { cloneClass } from "@src/core/libs/cloneClass";
import { Gain } from "@src/core/gain/gain";
import { Experience } from "@src/core/experience/experience";

// Экземлпяр усиления с своей прокачкой
export class GainExample {
    public gain: Gain;
    public experience: Experience; // Класс обработки опыта

    constructor(gain: Gain, level: number, experience: number = 0) {
        this.gain = cloneClass(gain);
        this.experience = new Experience(experience, level);
    }
}