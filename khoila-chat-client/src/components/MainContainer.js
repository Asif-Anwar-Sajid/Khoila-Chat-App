import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import './myStyles.css';
function MainContainer() {
    return <div className="main-container">
        <Sidebar />
        {/* <PastChats /> */}
        <Outlet />
    </div>;
}

export default MainContainer;