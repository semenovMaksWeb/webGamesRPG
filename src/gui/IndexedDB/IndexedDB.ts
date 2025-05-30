function IndexedDBService() {
    const openRequest = indexedDB.open("account", 1);
    const db = openRequest.result;


    function getUser() {
        const transaction = db.transaction("user", "readonly");
        const userList = transaction.objectStore("user");
        return userList.get(1);
    }

    //  db.createObjectStore("users", { keyPath: "id", autoIncrement: true });

    function createUser(name: string) {
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