import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ConversationsItem from './ConversationItem';
import './myStyles.css';

function Sidebar() {
    const [lightTheme, setLightTheme] = useState(true);
    const [conversations, setConverations] = useState([
        {
            id: 1,
            name: "Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today"
        },
        {
            id: 2,
            name: "Test#2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            id: 3,
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
    ]);
    const navigate = useNavigate();
    return <div className="sidebar-container">
        <div className={"sb-header" + (lightTheme ? "" : " dark")}>
            <div>
                <IconButton>
                    <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
                </IconButton>
            </div>
            <div>
                <IconButton onClick={() => {navigate('users');}}>
                    <PersonAddAlt1Icon className={"icon" + (lightTheme ? "" : " dark")}/>
                </IconButton>
                <IconButton onClick={() => {navigate('groups');}}>
                    <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
                </IconButton>
                <IconButton onClick={() => {navigate('create-groups');}}>
                    <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
                </IconButton>
                <IconButton onClick={()=>setLightTheme((prevValue) => {
                    return !prevValue;
                })}>
                    { lightTheme && <DarkModeIcon className={"icon" + (lightTheme ? "" : " dark")}/> } 
                    { !lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")}/>}
                </IconButton>
            </div>
        </div>
        <div className={"sb-header" + (lightTheme ? "" : " dark")}>
            <IconButton>
                <SearchIcon className={"icon" + (lightTheme ? "" : " dark")}/> 
            </IconButton>
            <input placeholder="search" className={"search-box" + (lightTheme ? "" : " dark")}/>
        </div>
        <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
            <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
                {conversations.map((conversation) => {
                    return <ConversationsItem props={conversation} key={conversation.name} />
                })}
            </div>
        </div>
    </div>
}

export default Sidebar;