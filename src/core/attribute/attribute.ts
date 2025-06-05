// Общий класс атрибутов
export class Attribute {
    private value: number = 0; // Значения атрибута числовое значение
    public readonly minValue: number | null; // Минимальное значение атрибута
    public readonly maxValue: number | null; // Максимально значение атрибута
    public readonly image: string | null;
    public readonly name: string | null;
    public readonly description: string;

    constructor(
        value: number,
        minValue: number | null,
        maxValue: number | null,
        image: string | null,
        name: string,
        description: string
    ) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.image = image;
        this.name = name;
        this.description = description;
        this.setValue(value);
    }

    // Сохранить значение атрибута
    setValue(value: number) {
        if (this.minValue !== null && this.minValue > value) {
            this.value = this.minValue;
            return;
        }

        if (this.maxValue !== null && this.maxValue < value) {
            this.value = this.maxValue;
            return;
        }

        this.value = value;
    }

    // Получить значение атрибута
    getValue() {
        return this.value;
    }
}