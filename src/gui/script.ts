import { indexedDBService } from "@src/gui/IndexedDB/IndexedDB";
import { formUserNameForm } from "@src/gui/page/formUserNameForm";
import "@src/gui/style/main.css"
import { mainPage } from "@src/gui/page/mainPage";

(async () => {
    const getUser = await indexedDBService.getUser();

    if (!getUser) {
        formUserNameForm();
        return;
    }
    mainPage();

})();

