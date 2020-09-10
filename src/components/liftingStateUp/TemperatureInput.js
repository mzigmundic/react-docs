import React from "react";

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
    const scaleNames = {
        C: "Celsius",
        F: "Fahrenheit",
    };

    const handleChange = (event) => {
        onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>Enter Temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
};

export default TemperatureInput;
