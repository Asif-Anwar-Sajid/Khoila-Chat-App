const express = require("express");
const { loginController, registerController, fetchAllUsersController } = require("../controllers/userController");
const Router = express.Router();

const { protect } = require('../middleware/authMiddleware');

Router.post("/login", loginController);
Router.post("/register", registerController);
Router.get("/features", protect, fetchAllUsersController);

module.exports = Router;