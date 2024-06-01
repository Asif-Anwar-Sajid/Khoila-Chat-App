import React from "react";
import './myStyles.css';

function MessageSelf() {
    var props2 = {name: "You", message: "This is a Sample Message"}
    return <div className="self-message-container">
        <div className="messageBox">
            <p>{props2.message}</p>
            <p className="text-timeStamp">12:00am</p>
        </div>
    </div>
}

export default MessageSelf;