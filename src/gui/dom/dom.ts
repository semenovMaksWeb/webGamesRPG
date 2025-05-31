import { createButton } from "./create/createButton";
import { createForm } from "./create/createForm";
import { createInput } from "./create/createInput";
import { formEventDefault } from "./create/event/formEventDefault";

export const dom = {
    create: {

        button: createButton,
        input: createInput,
        form: createForm
    },
    event: {
        form: formEventDefault,
    }
}