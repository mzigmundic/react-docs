import React from "react";
import ListItem from "./ListItem";

const NumberList2 = ({ numbers }) => {
    return (
        <ul>
            {numbers.map((number) => (
                <ListItem key={number.toString()} value={number} />
            ))}
        </ul>
    );
};

export default NumberList2;
