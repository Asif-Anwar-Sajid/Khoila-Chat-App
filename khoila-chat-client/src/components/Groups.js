import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux';
import logo from "../assets/chat-bubble.png";
import "./myStyles.css";

function Groups() {
    const lightTheme = useSelector((state) => state.theme.themeKey);

    return <div className="list-container">
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
            <img 
                src={logo}
                style={{height: "2rem", width: "2rem", marginLeft: "10px"}}
                alt = "Logo"
            />
            <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Groups</p>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon /> 
            </IconButton>
            <input placeholder="search" className="search-box"/>
        </div>
        <div className="ug-list">
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test Group</p>

            </div>
        </div>
    </div>
}

export default Groups;