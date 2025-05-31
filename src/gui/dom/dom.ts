import { createButton } from "./create/createButton";
import { createForm } from "./create/createForm";
import { createInput } from "./create/createInput";
import { createLogo } from "./create/createLogo";
import { createMenuCoins } from "./create/createMenuCoins";
import { createMenuMain } from "./create/createMenuMain";
import { formEventDefault } from "./event/formEventDefault";

export const dom = {
    create: {

        button: createButton,
        input: createInput,
        form: createForm,
        logo: createLogo,
        menuMain: createMenuMain,
        menuCoins: createMenuCoins,
    },
    event: {
        form: formEventDefault,
    }
}