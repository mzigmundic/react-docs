import React from "react";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import SelectForm from "./SelectForm";
import MultipleInputsForm from "./MultipleInputsForm";

const Forms = () => {
    return (
        <div>
            {/* Controlled Components */}
            <InputForm />
            <TextareaForm />
            <SelectForm />
            <MultipleInputsForm />
        </div>
    );
};

export default Forms;
