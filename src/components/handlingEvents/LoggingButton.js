import React from "react";

class LoggingButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { string: "Click Me" };
    }

    handleClick = () => {
        this.setState({ string: "Yes Baby" });
    };

    render() {
        return <button onClick={this.handleClick}>{this.state.string}</button>;
    }
}

export default LoggingButton;
