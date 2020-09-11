import React from "react";
import FancyBorder from "./FancyBorder";

const WelcomeDialog = () => {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">Willkomen</h1>
            <p className="dialog-message">Thx for visiting</p>
        </FancyBorder>
    );
};

export default WelcomeDialog;
