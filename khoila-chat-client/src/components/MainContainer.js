import React from "react";
import Sidebar from './Sidebar';
import UsersGroups from "./UsersGroups.js";
import './myStyles.css';
function MainContainer() {
    return <div className="main-container">
        <Sidebar /> 
        {/* <CreateGroups /> */}
        {/* <Welcome /> */}
        {/* <ChatArea /> */}
        <UsersGroups />
    </div>;
}

export default MainContainer;