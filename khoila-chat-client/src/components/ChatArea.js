import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";
import React from "react";
import MessageOthers from './MessageOthers.js';
import MessageSelf from './MessageSelf.js';
import './myStyles.css';

function ChatArea({ props }) {
    // const [conversations, setConverations] = useState([
    //     {
    //         id: 1,
    //         name: "Test#1",
    //         lastMessage: "Last Message #1",
    //         timeStamp: "today"
    //     },
    //     {
    //         id: 2,
    //         name: "Test#2",
    //         lastMessage: "Last Message #2",
    //         timeStamp: "today",
    //     },
    //     {
    //         id: 3,
    //         name: "Test#3",
    //         lastMessage: "Last Message #3",
    //         timeStamp: "today",
    //     },
    // ]);
    return <div className="chatArea-container">
        <div className="chatArea-header">
            <p className="con-icon">S</p>
            <div className="header-text">
                <p className="con-title">fd</p>
                <p className="con-timeStamp">online</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
        <div className="messages-container">
            <MessageOthers />
            <MessageSelf />

            <MessageOthers />
            <MessageSelf />

            <MessageOthers />
            <MessageSelf />

            <MessageOthers />
            <MessageSelf />
        </div>
        <div className="text-input-area">
            <input placeholder="Type a Message" className="search-box"></input>
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
}

export default ChatArea;