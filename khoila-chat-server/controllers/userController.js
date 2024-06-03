const express = require("express");
const UserModel = require('../models/userModel');
const expressAsyncHandler = require("express-async-handler");
const generateToken = require('../Config/generateToken');

// Login
const loginController = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;
    const user = await UserModel.findOne({name});

    if(user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id : user.id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })
    } 
    else {
        res.status(400).json({ message: "Invalid Username or Password" });
    }
});

//Registration
const registerController = expressAsyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    // chcek for all fields
    if(!name || !email || !password) {
        res.status(400).json({ message: "All necessary input fields have not been filled" });
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

const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search 
        ? {
            $or: [
                { name : { $regex: req.query.search, $options: "i" } },
                { email : { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};
    const users = (await UserModel.find(keyword)).find({
        _id : { $ne : req.user._id},
    });
    res.send(users);
})

module.exports = {loginController, registerController, fetchAllUsersController}