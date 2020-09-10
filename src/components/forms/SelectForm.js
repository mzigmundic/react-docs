import React, { Component } from "react";

class SelectForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "jabuka" };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Najbolji sok: " + this.state.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Odaberi najbolji sok:
                    <select
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value="grejp">Grejp</option>
                        <option value="limun">Limun</option>
                        <option value="jabuka">Jabuka</option>
                        <option value="jagoda">Jagoda</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SelectForm;
