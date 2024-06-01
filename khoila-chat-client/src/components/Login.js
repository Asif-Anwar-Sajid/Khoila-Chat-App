import { Button, TextField } from "@mui/material";
import React from "react";
import logo from "../assets/chat-bubble.png";
import "./myStyles.css";

function Login() {
    return <div className="login-container">
        <div className="image-container">
            <img src={logo} alt="Logo" className="welcome-logo" />
            <p>Welcome to <span>Khoila</span></p>
        </div>
        <div className="login-box">
            <p class="login-page-header">Login into your Account.</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button variant="outlined">Login</Button>
        </div>
    </div>
}

export default Login;