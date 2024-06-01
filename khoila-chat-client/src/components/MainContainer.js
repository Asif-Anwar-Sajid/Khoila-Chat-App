import React from "react";
import Sidebar from "./Sidebar";
import Workarea from "./Workarea";
import './myStyles.css';

function MainContainer() {
    return <div className="main-container">
        <Sidebar />
        <Workarea />
    </div>;
}

export default MainContainer;