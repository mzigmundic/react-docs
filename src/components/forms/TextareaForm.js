import React, { Component } from "react";

class TextareaForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "Please write some text." };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Text was submited: " + this.state.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Text:
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TextareaForm;
