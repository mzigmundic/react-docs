import React, { Component } from "react";
import WarningBanner from "./WarningBanner";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({
            showWarning: !prevState.showWarning,
        }));
    };

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}

export default Page;
