import React from "react";
import FilterableProductTable from "./FilterableProductTable";

const ThinkingInReact = () => {
    const products = [
        {
            category: "Guitar",
            price: "$899.99",
            stocked: true,
            name: "Fender Stratocaster",
        },
        {
            category: "Guitar",
            price: "$299.99",
            stocked: true,
            name: "LD Mini Rx",
        },
        {
            category: "Guitar",
            price: "$999.99",
            stocked: false,
            name: "Ibanez Floyded",
        },
        {
            category: "Synth",
            price: "$589.99",
            stocked: true,
            name: "Yamaha Model 200",
        },
        {
            category: "Synth",
            price: "$799.99",
            stocked: false,
            name: "Korg Evergreen",
        },
        {
            category: "Synth",
            price: "$699.99",
            stocked: true,
            name: "Celstion",
        },
    ];

    return <FilterableProductTable products={products} />;
};

export default ThinkingInReact;
