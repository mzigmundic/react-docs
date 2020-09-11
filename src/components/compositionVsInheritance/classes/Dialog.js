import React from "react";
import FancyBorder from "./FancyBorder";

const Dialog = ({ title, message, children }) => {
    return (
        <FancyBorder color="red">
            <h1 className="dialog-title">{title}</h1>
            <p className="dialog-message">{message}</p>
            {children}
        </FancyBorder>
    );
};

export default Dialog;
