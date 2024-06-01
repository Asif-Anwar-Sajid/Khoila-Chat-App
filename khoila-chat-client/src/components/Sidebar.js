import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ConversationsItem from './ConversationItem';
import './myStyles.css';

function Sidebar() {
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
    return <div className="sidebar-container">
        <div className="sb-header">
            <div>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <PersonAddAlt1Icon />
                </IconButton>
                <IconButton>
                    <GroupAddIcon />
                </IconButton>
                <IconButton>
                    <AddCircleIcon />
                </IconButton>
                <IconButton>
                    <DarkModeIcon />
                </IconButton>
            </div>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon /> 
            </IconButton>
            <input placeholder="search" className="search-box"/>
        </div>
        <div className="sb-conversations">
            <div className="conversation-container">
                {conversations.map((conversation) => {
                    return <ConversationsItem props={conversation} key={conversation.name}/>
                })}
            </div>
        </div>
    </div>
}

export default Sidebar;