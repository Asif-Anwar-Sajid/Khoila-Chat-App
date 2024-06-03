const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express();
dotenv.config();

console.log('Mongo URI:', process.env.MONGO_URI);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("server is connected to DB");
    } catch(err) {
        console.log("server is not connected to DB", err.message);
    }
};

connectDB();

app.get('/', (req, res) => {
    res.send("API is running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is Running at port ${PORT}...`));