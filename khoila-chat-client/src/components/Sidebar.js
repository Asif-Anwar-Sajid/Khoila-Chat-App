import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import SmsIcon from '@mui/icons-material/Sms';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleTheme } from '../features/themeSlice';
import ConversationItem from './ConversationItem';
import './myStyles.css';

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.theme.themeKey);
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

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="sidebar-container">
            <div className={"sb-header" + (lightTheme ? "" : " dark")}>
                <div class="sb-subheader">
                    <IconButton>
                        <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton className = "reverseIcon" onClick={() => { navigate('past-chats'); }}>
                        <SmsIcon className={"reverseIcon" + (lightTheme ? "" : " dark")}/>
                    </IconButton>

                </div>
                <div className="sb-header-half">
                    <IconButton onClick={() => { navigate('users'); }}>
                        <PersonAddAlt1Icon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { navigate('groups'); }}>
                        <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { navigate('create-groups'); }}>
                        <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={handleToggleTheme}>
                        {lightTheme && <DarkModeIcon className={"icon" + (lightTheme ? "" : " dark")} />}
                        {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />}
                    </IconButton>
                </div>
            </div>
            <div className={"sb-search" + (lightTheme ? "" : " dark")}>
                <IconButton>
                    <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
                </IconButton>
                <input placeholder="search" className={"search-box" + (lightTheme ? "" : " dark")} />
            </div>
            <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
                <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
                    {conversations.map((conversation) => {
                        return <ConversationItem props={conversation} key={conversation.id} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
