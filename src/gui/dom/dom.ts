import { createButton } from "./create/createButton";
import { createForm } from "./create/createForm";
import { createInput } from "./create/createInput";
import { createLogo } from "./create/createLogo";
import { formEventDefault } from "./event/formEventDefault";

export const dom = {
    create: {

        button: createButton,
        input: createInput,
        form: createForm,
        logo: createLogo
    },
    event: {
        form: formEventDefault,
    }
}