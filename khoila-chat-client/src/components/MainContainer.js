import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import './myStyles.css';
function MainContainer() {
    return <div className="main-container">
        <Sidebar />
        <Outlet />
    </div>;
}

export default MainContainer;