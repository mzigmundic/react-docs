import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingDecision from "./BoilingDecision";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: "", scale: "C" };
    }

    handleCelsiusChange = (temperature) => {
        this.setState({ scale: "C", temperature });
    };

    handleFahrenheitChange = (temperature) => {
        this.setState({ scale: "F", temperature });
    };

    toFahrenheit = (celsius) => {
        return (celsius * 9) / 5 + 32;
    };

    toCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) * 5) / 9;
    };

    tryConvert = (temperature, func) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return "";
        }
        const output = func(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius =
            scale === "F"
                ? this.tryConvert(temperature, this.toCelsius)
                : temperature;
        const fahrenheit =
            scale === "C"
                ? this.tryConvert(temperature, this.toFahrenheit)
                : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="C"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="F"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingDecision celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;
