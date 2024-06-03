const express = require("express");
const UserModel = require('../models/userModel');
const expressAsyncHandler = require("express-async-handler");
const generateToken = require('../Config/generateToken');
const loginController = () => {};
const registerController = expressAsyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    // chcek for all fields
    if(!name || !email || !password) {
        res.send(400);
        throw Error("All necessary input fields have not been filled");
    }

    // pre-existing user
    const userExist = await UserModel.findOne({email});
    if(userExist) {
        throw new Error("User Already Exists!");
    }

    // username already taken
    const userNameExist = await UserModel.findOne({name});
    if(userNameExist) {
        throw new Error("Username Already Taken!");
    }

    // create an entry in the database
    const user = await UserModel.create({name, email, password});
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: "Invalid User Data" });
    }
});

module.exports = {loginController, registerController}