import React from "react";

const SearchBar = ({
    filterText,
    onFilterTextChange,
    inStockOnly,
    onInStockChange,
}) => {
    const handleFilterTextChange = (event) => {
        onFilterTextChange(event.target.value);
    };

    const handleInStockChange = (event) => {
        onInStockChange(event.target.checked);
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleInStockChange}
                />{" "}
                Only Show products in stock
            </p>
        </form>
    );
};

export default SearchBar;
