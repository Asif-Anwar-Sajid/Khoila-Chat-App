import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import ChatArea from "./components/ChatArea";
import CreateGroups from "./components/CreateGroups";
import Groups from "./components/Groups";
import Login from "./components/Login";
import MainContainer from "./components/MainContainer";
import PastChats from "./components/PastChats";
import Users from "./components/Users";
import Welcome from "./components/Welcome";

function App() {
  return <div className="App">
    {/* <MainContainer /> */}
    {/* <Sidebar /> */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="app" element={<MainContainer />}>
        <Route path="welcome" element={<Welcome />}></Route>
        <Route path="chat" element={<ChatArea props={{name: "Shovon Praner Bondhu", currentStatus: "online"}}/>}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="groups" element={<Groups />}></Route>
        <Route path="create-groups" element={<CreateGroups />}></Route>
        <Route path="past-chats" element={<PastChats />}></Route>
      </Route>
    </Routes>
  </div>;
}

export default App;