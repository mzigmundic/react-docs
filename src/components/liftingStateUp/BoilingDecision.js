import React from "react";

const BoilingDecision = ({ celsius }) => {
    if (celsius >= 100) {
        return (
            <p
                style={{
                    display: "inline",
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px",
                }}
            >
                The water would boil
            </p>
        );
    }
    return (
        <p
            style={{
                display: "inline",
                backgroundColor: "seagreen",
                color: "white",
                padding: "5px",
            }}
        >
            The water would not boil
        </p>
    );
};

export default BoilingDecision;
