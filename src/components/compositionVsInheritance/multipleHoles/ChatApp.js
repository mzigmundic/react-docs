import React from "react";
import SplitPlane from "./SplitPlane";
import Contacts from "./Contacts";
import Chat from "./Chat";

const ChatApp = () => {
    return <SplitPlane left={<Contacts />} right={<Chat />} />;
};

export default ChatApp;
