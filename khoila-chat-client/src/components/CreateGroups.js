import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux';

import './myStyles.css';
function CreateGroups() {
    const lightTheme = useSelector((state) => state.theme.themeKey);
    return <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
        <input placeholder="Enter group name" className={"search-box" + (lightTheme ? "" : " dark")}></input>
        <IconButton>
            <CheckCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
    </div>
}

export default CreateGroups;