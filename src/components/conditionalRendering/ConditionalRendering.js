import React from "react";
import LoginControl from "./loginControl/LoginControl";
import Mailbox from "./mailbox/Mailbox";
import Page from "./page/Page";

const ConditionalRendering = () => {
    const messages = ["message 1", "message 2", "message 3", "message 4"];

    return (
        <div>
            <LoginControl />
            <Mailbox unreadMessages={messages} />
            <Page />
        </div>
    );
};

export default ConditionalRendering;
