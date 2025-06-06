export function getInfoExampleComponent(
    image: string | null,
    attribute: any
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
        const imageExampleWrapper = document.createElement("div");
        const imageExample = document.createElement("img");
        imageExample.setAttribute("src", image);
        imageExampleWrapper.appendChild(imageExample);
        infoExampleDiv.appendChild(imageExampleWrapper);
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