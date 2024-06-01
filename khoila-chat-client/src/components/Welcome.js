import React from "react";
import logo from "../assets/chat-bubble.png";

function Welcome() {
    return <div className="welcome-container">
        <img src={logo} alt = "Logo" className="welcome-logo"></img>
        <p>"MON KHUILLA KHOILA"</p>
    </div>
}

export default Welcome;