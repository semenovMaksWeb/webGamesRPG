import { AccountConfigWeapon } from "@src/core/account/AccountConfig";
import { characterList } from "@src/core/character/characterList";
import { weaponList } from "@src/core/weapon/weaponList";

function IndexedDBService() {
    const dbPromise: Promise<IDBDatabase> = new Promise((resolve, reject) => {
        const openRequest = indexedDB.open("account", 1);
        openRequest.onsuccess = function () {
            resolve(openRequest.result);
        }
        // Логика создание сущностей
        openRequest.onupgradeneeded = () => {
            const db = openRequest.result;
            if (!db.objectStoreNames.contains('user')) {
                db.createObjectStore('user', { keyPath: 'id' });
            }

            if (!db.objectStoreNames.contains('weapon')) {
                db.createObjectStore('weapon', { keyPath: 'id', autoIncrement: true });
            }

            if (!db.objectStoreNames.contains('gain')) {
                db.createObjectStore('gain', { keyPath: 'id', autoIncrement: true });
            }

            if (!db.objectStoreNames.contains('coins')) {
                db.createObjectStore('coins', { keyPath: 'id', autoIncrement: true });
            }

            if (!db.objectStoreNames.contains('character')) {
                db.createObjectStore('character', { keyPath: 'id', autoIncrement: true });
            }
        }
        openRequest.onerror = (event: any) => {
            reject(event.target.error);
        };
    });

    // общая логика получение ответа
    function getResult(iDBRequest: IDBRequest<any>) {
        return new Promise((resolve, reject) => {
            iDBRequest.onsuccess = function () {
                resolve(iDBRequest.result);
            };
        })
    }

    // Получить пользователя 
    async function getUser() {
        const db = await dbPromise;
        const transaction = db.transaction("user", "readonly");
        const userList = transaction.objectStore("user");
        const result = userList.get(1);
        return await getResult(result);
    }

    // Получить персонажей
    async function getСharacter() {
        const db = await dbPromise;
        const transaction = db.transaction("character", "readonly");
        const characterList = transaction.objectStore("character");
        const characterResult = characterList.getAll();
        return await getResult(characterResult);
    }

    // Получить оружия
    async function getWeapon() {
        const db = await dbPromise;
        const transaction = db.transaction("weapon", "readonly");
        const weaponList = transaction.objectStore("weapon");
        const weaponResult = weaponList.getAll();
        return await getResult(weaponResult);
    }


    // Сохранить пользователя 
    async function createUser(name: string) {
        const db = await dbPromise;
        if (!await getUser()) {
            const transaction = db.transaction("user", "readwrite");
            const userList = transaction.objectStore("user");
            const user = { id: 1, name: name };
            userList.add(user);
            await createStartUser();
        }

    }
    // Добавить новое оружие
    async function createWeapon(name: string) {
        const db = await dbPromise;
        const transaction = db.transaction("weapon", "readwrite");
        const weapon: AccountConfigWeapon = { name: name, bonus: [], level: 1, gain: [], experience: 0 }
        const weaponList = transaction.objectStore("weapon");
        weaponList.add(weapon);
    }

    // Добавить нового персонажа
    async function createСharacter(name: string) {
        const db = await dbPromise;
        const transaction = db.transaction("character", "readwrite");
        const character: AccountConfigWeapon = { name: name, bonus: [], level: 1, gain: [], experience: 0 }
        const characterList = transaction.objectStore("character");
        characterList.add(character);
    }

    // Старт игры после ввода имя пользователя
    async function createStartUser() {
        await createWeapon(weaponList.NearAxWeapon);
        await createСharacter(characterList.FellerСharacter);
    }

    // Получить монеты
    async function getCoins() {
        const db = await dbPromise;
        const transaction = db.transaction("coins", "readonly");
        const userList = transaction.objectStore("coins");
        const result = userList.getAll();
        return await getResult(result);
    }

    async function createCoins(name: string, value: number) {
        console.log(name);
        const coins = { id: name, name: name, value: value };
        const db = await dbPromise;
        const transaction = db.transaction("coins", "readwrite");
        const coinsList = transaction.objectStore("coins");
        coinsList.add(coins);
    }

    return {
        createUser,
        createCoins,
        getUser,
        getCoins,
        getСharacter,
        getWeapon,
    }
}


export const indexedDBService = IndexedDBService();