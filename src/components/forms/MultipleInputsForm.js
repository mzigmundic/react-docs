import React, { Component } from "react";

class MultipleInputsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        });
    };

    render() {
        return (
            <form>
                <label>
                    Is Going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Number Of Guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }
}

export default MultipleInputsForm;
