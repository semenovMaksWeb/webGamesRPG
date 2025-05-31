
function IndexedDBService() {
    const dbPromise: Promise<IDBDatabase> = new Promise((resolve, reject) => {
        const openRequest = indexedDB.open("account", 1);
        openRequest.onsuccess = function () {
            resolve(openRequest.result);
        }
        openRequest.onerror = (event: any) => {
            reject(event.target.error);
        };
    });



    async function getUser() {
        const db = await dbPromise;
        if (!db.objectStoreNames.contains('user')) {
            return false;
        }
        const transaction = db.transaction("user", "readonly");
        const userList = transaction.objectStore("user");
        return userList.get(1);
    }

    //  db.createObjectStore("users", { keyPath: "id", autoIncrement: true });

    async function createUser(name: string) {
        const db = await dbPromise;
        if (!db.objectStoreNames.contains('user')) {
            db.createObjectStore('user', { keyPath: 'id' });
            const transaction = db.transaction("user", "readwrite");
            const userList = transaction.objectStore("user");
            const user = { id: 1, name: name };
            userList.add(user);
        }

    }

    return {
        createUser,
        getUser
    }
}


export const indexedDBService = IndexedDBService();