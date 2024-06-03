import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from 'react-redux';
import logo from "../assets/chat-bubble.png";
import "./myStyles.css";

function Groups() {
    const lightTheme = useSelector((state) => state.theme.themeKey);

    return <AnimatePresence>
        <motion.div
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale:0}}
        transition={{
            ease: "anticipate",
            duration: "0.3",
        }}
        className="list-container">
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
            <img 
                src={logo}
                style={{height: "2rem", width: "2rem", marginLeft: "10px"}}
                alt = "Logo"
            />
            <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Groups</p>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
            <IconButton>
                <SearchIcon /> 
            </IconButton>
            <input placeholder="search" className={"search-box" + (lightTheme ? "" : " dark")} />
        </div>
        <div className="ug-list">
            <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon"}>T</p>
                <p className="con-title">Test Group</p>
            </motion.div>
            <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon"}>T</p>
                <p className="con-title">Test Group</p>
            </motion.div>
            <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon"}>T</p>
                <p className="con-title">Test Group</p>
            </motion.div>
            <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon"}>T</p>
                <p className="con-title">Test Group</p>
            </motion.div>
            <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon"}>T</p>
                <p className="con-title">Test Group</p>
            </motion.div>
        </div>
    </motion.div>
    </AnimatePresence>
}

export default Groups;