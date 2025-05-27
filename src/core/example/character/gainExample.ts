import { cloneClass } from "@src/core/libs/cloneClass";
import { Gain } from "@src/core/gain/gain";

// Экземлпяр усиления с своей прокачкой
export class GainExample {
    public gain: Gain;
    public level: number; // Уровень усиления

    constructor(gain: Gain, level: number) {
        this.gain = cloneClass(gain);
        this.level = level;
    }
}