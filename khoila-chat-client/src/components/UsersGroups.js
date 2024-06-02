import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import React from "react";
import logo from "../assets/chat-bubble.png";
import "./myStyles.css";


function UsersGroups() {
    return <div className="list-container">
        <div className="ug-header">
            <img 
                src={logo}
                style={{height: "2rem", width: "2rem", marginLeft: "10px"}}
                alt = "Logo"
            />
            <p className="ug-title">Online Users</p>
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
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
        </div>
    </div>
}

export default UsersGroups;