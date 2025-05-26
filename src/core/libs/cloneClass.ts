export function cloneClass(_class: any) {

    if (_class === null || typeof _class !== 'object') {
        return _class; // примитивы копируем напрямую
    }

    // Получаем прототип объекта
    const proto = Object.getPrototypeOf(_class);

    // Создаем новый объект с таким же прототипом
    const clone = Object.create(proto);

    // Перебираем все собственные свойства
    const props = Object.getOwnPropertyNames(_class);
    for (const key of props) {
        const value = _class[key];

        // Рекурсивно клонируем вложенные объекты
        clone[key] = cloneClass(value);
    }

    return clone;

}