import React from "react";
import ChatArea from "./ChatArea";
import Sidebar from './Sidebar';
import './myStyles.css';
function MainContainer() {
    return <div className="main-container">
        <Sidebar />
        <ChatArea />
    </div>;
}

export default MainContainer;