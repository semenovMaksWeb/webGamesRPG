import { EXPERIENCE_MIN } from "@src/core/experience/experience";

export function getInfoExampleComponent(
    image: string | null,
    attribute: any,
    level: number,
    experience: number,
) {
    // Порядок атрибутов на персонажа
    const LIST_ATTRIBUTE = [
        "health", "barrier", "barrier", "damage", "speed",
        "hemorrhage",
        "nearAddDamage",
        "chanceCritDamage", "critDamage",
        "hemorrhageResistAttribute"
    ];

    const infoExampleDiv = document.createElement("div");
    infoExampleDiv.classList.add("infoExample");

    if (image !== null) {

        // экземпляр персонажа инфа и изображение
        const exampleWrapper = document.createElement("div");
        exampleWrapper.classList.add("exampleWrapper");

        // экземпляр персонажа инфа
        const exampleRowWrapper = document.createElement("div");
        exampleRowWrapper.classList.add("exampleRowWrapper");

        // div для уровня
        const levelDiv = document.createElement("div");
        levelDiv.innerHTML = `Уровень: ${level}`;

        // div для опыта
        const experienceDiv = document.createElement("div");
        experienceDiv.innerHTML = `Опыт: ${experience} / ${EXPERIENCE_MIN}`;

        // Заполнение персонажа инфа
        exampleRowWrapper.appendChild(levelDiv);
        exampleRowWrapper.appendChild(experienceDiv);

        // создание блока изображение
        const imageExampleWrapper = document.createElement("div");
        imageExampleWrapper.classList.add("imageExampleWrapper");
        // создание изображения
        const imageExample = document.createElement("img");
        imageExample.setAttribute("src", image);
        imageExampleWrapper.appendChild(imageExample);

        exampleWrapper.appendChild(exampleRowWrapper)
        exampleWrapper.appendChild(imageExampleWrapper)
        infoExampleDiv.appendChild(exampleWrapper);
    }

    const attributeDiv = document.createElement("div");
    attributeDiv.classList.add('attributeList');

    for (const attributeKey of LIST_ATTRIBUTE) {
        const attributeItem = attribute[attributeKey];

        if (!attributeItem) {
            continue;
        }

        const attributeItemDiv = document.createElement("div");
        attributeItemDiv.classList.add('attributeItem');
        attributeItemDiv.innerHTML = `${attributeItem.name}: ${attributeItem.getValue()}`;
        attributeDiv.appendChild(attributeItemDiv);
    }

    infoExampleDiv.appendChild(attributeDiv);

    return infoExampleDiv;
}