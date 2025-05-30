import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";
import { formUserNameForm } from "@src/gui/page/formUserNameForm";

console.log(1);


const getUser = indexedDBService.getUser();

if (!getUser) {
    formUserNameForm();
}

