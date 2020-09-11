import React from "react";
import WelcomeDialog from "./containment/WelcomeDialog";
import ChatApp from "./multipleHoles/ChatApp";
import WelcomeDialog2 from "./specialization/WelcomeDialog2";
import SignUpDialog from "./classes/SignUpDialog";

const CompositionVsInheritance = () => {
    return (
        <div>
            <WelcomeDialog />
            <ChatApp />
            <WelcomeDialog2 />
            <SignUpDialog />
        </div>
    );
};

export default CompositionVsInheritance;
