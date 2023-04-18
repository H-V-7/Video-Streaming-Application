import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
const app = express(); //initializing express application.
config(); //config will provide us the  variable which are specified in the .env file.

//this function will be connecting our express application to the backend.
const dbConnection = async () => {
    await mongoose.connect(process.env.MONGO);
    console.log("Database Connected");
}

app.listen(process.env.PORT,() => {
    dbConnection();
    console.log("Server Running");
})