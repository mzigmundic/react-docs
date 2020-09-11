import React from "react";
import FancyBorder from "./FancyBorder";

const Dialog = ({ title, message }) => {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">{title}</h1>
            <p className="dialog-message">{message}</p>
        </FancyBorder>
    );
};

export default Dialog;
