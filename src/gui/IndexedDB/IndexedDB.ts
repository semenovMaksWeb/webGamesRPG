
function IndexedDBService() {
    const dbPromise: Promise<IDBDatabase> = new Promise((resolve, reject) => {
        const openRequest = indexedDB.open("account", 1);
        openRequest.onsuccess = function () {
            resolve(openRequest.result);
        }
        openRequest.onupgradeneeded = () => {
            const db = openRequest.result;
            if (!db.objectStoreNames.contains('user')) {
                db.createObjectStore('user', { keyPath: 'id' });
            }
        }
        openRequest.onerror = (event: any) => {
            reject(event.target.error);
        };
    });


    function getResult(iDBRequest: IDBRequest<any>) {
        return new Promise((resolve, reject) => {
            iDBRequest.onsuccess = function () {
                console.log(iDBRequest.result);                
                resolve(iDBRequest.result);
            };
        })
    }

    async function getUser() {
        const db = await dbPromise;
        const transaction = db.transaction("user", "readonly");
        const userList = transaction.objectStore("user");
        const result = userList.get(1);
        return await getResult(result);

    }

    //  db.createObjectStore("users", { keyPath: "id", autoIncrement: true });

    async function createUser(name: string) {
        const db = await dbPromise;
        if (!await getUser()) {
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