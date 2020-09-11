import React from "react";

const SplitPlane = ({ left, right }) => {
    return (
        <div className="split-plane">
            <div className="split-plane-left">{left}</div>
            <div className="split-plane-right">{right}</div>
        </div>
    );
};

export default SplitPlane;
