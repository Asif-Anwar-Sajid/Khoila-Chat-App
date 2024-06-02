import React, { useState } from "react";
import { useSelector } from 'react-redux';
import ConversationItem from './ConversationItem';
import './myStyles.css';

function PastChats() {
    const lightTheme = useSelector((state) => state.theme.themeKey);
    const [conversations, setConversations] = useState([
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
    return <div className={"past-conversations" + (lightTheme ? "" : " dark")}>
        <h1 className="past-chats-header">Chats</h1>
        <div className={"past-conversation-container" + (lightTheme ? "" : " dark")}>
            {conversations.map((conversation) => {
                return <ConversationItem props={conversation} key={conversation.id} />
            })}
        </div>
    </div>

}

export default PastChats;