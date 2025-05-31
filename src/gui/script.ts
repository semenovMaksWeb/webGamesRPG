import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";
import { formUserNameForm } from "@src/gui/page/formUserNameForm";

(async () => {
    const getUser = await indexedDBService.getUser();

    if (!getUser) {
        formUserNameForm();
    }

})();

