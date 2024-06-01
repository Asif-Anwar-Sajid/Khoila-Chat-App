import React from "react";
import CreateGroups from "./CreateGroups";
import Sidebar from './Sidebar';
import './myStyles.css';
function MainContainer() {
    return <div className="main-container">
        <Sidebar /> 
        <CreateGroups />
        {/* <Welcome /> */}
        {/* <ChatArea /> */}
    </div>;
}

export default MainContainer;