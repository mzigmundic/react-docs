import React from "react";

const WarningBanner = (props) => {
    if (!props.warn) {
        return null;
    }

    return (
        <div
            style={{ backgroundColor: "red", padding: "20px", color: "white" }}
        >
            Warning
        </div>
    );
};

export default WarningBanner;
