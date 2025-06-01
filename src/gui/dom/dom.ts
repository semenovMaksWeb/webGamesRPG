import { createButton } from "./create/createButton";
import { createForm } from "./create/createForm";
import { createInput } from "./create/createInput";
import { createLogo } from "./create/createLogo";
import { createMenuCoins } from "./create/createMenuCoins";
import { createMenuGames } from "./create/createMenuGames";
import { createMenuMain } from "./create/createMenuMain";
import { formEventDefault } from "./event/formEventDefault";

export const dom = {
    create: {

        button: createButton,
        input: createInput,
        form: createForm,
        logo: createLogo,
        menuGames: createMenuGames,
        menuMain: createMenuMain,
        menuCoins: createMenuCoins,
    },
    event: {
        form: formEventDefault,
    }
}