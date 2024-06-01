import { IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from "react";
import './myStyles.css';
function CreateGroups() {
    return <div className="createGroups-container">
        <input placeholder="Enter group name" className="search-box"></input>
        <IconButton>
            <CheckCircleIcon />
        </IconButton>
    </div>
}

export default CreateGroups;