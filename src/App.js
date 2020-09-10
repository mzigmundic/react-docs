import React from "react";
import "./App.css";

/*
import ComponentsAndProps from "./components/componentsAndProps/ComponentsAndProps";
import StateAndLifecycle from "./components/stateAndLifecycle/StateAndLifecycle";
import HandlingEvents from "./components/handlingEvents/HandlingEvents";
import ConditionalRendering from "./components/conditionalRendering/ConditionalRendering";
import ListsAndKeys from "./components/listsAndKeys/ListsAndKeys";
import Forms from "./components/forms/Forms";
*/
import LiftingStateUp from "./components/liftingStateUp/LiftingStateUp";
import CompositionVsInheritance from "./components/compositionVsInheritance/CompositionVsInheritance";

const App = () => {
    return (
        <div className="text-center">
            {/*
             <ComponentsAndProps />
             <StateAndLifecycle />
             <HandlingEvents />
             <ConditionalRendering />
             <ListsAndKeys />
             <Forms />
            */}
            <LiftingStateUp />
            <CompositionVsInheritance />
        </div>
    );
};

export default App;
