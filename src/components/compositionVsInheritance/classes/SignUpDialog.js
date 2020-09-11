import React, { Component } from "react";
import Dialog from "./Dialog";

class SignUpDialog extends Component {
    constructor(props) {
        super(props);
        this.state = { login: "" };
    }

    handleChange = (event) => {
        this.setState({ login: event.target.value });
    };

    handleSignUp = () => {
        alert(`Willkommen aboard, ${this.state.login}!`);
    };

    render() {
        return (
            <Dialog
                title="Jupiter Exploration"
                message="I am the biggest of all"
            >
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up</button>
            </Dialog>
        );
    }
}

export default SignUpDialog;
