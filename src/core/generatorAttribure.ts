import { listAttribute } from "../attribute/list.js";

// Генерация атрибутов на сущности на основе json
export function generatorAttribure(configAttribure: any) {
    const character: any = {};

    for (const attribureKey in configAttribure) {
        const attribureItem = configAttribure[attribureKey];
        if (listAttribute[attribureKey]) {
            character[attribureKey] = new listAttribute[attribureKey](attribureItem);
        }
    }

    return character;
}