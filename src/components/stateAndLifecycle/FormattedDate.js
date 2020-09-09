import React from "react";

const FormattedDate = ({ date }) => {
    return <h2>It is {date.toLocaleTimeString()}</h2>;
};

export default FormattedDate;
