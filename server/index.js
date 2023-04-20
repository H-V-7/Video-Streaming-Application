import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import cookieParser from "cookie-parser";


//importing routes
import userRoute from "./routes/UserRoute.js";
import videoRoute from "./routes/VideoRoute.js";
import commentRoute from "./routes/CommentRoute.js";
import authRoute from "./routes/authRoute.js";



const app = express(); //initializing express application.
config(); //config will provide us the  variable which are specified in the .env file.

app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);


//error handling middleware

app.use((err,req,res,next) => {
    const status = err.status || 500;
    const message =err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})

//this function will be connecting our express application to the backend.
const dbConnection = async () => {
    await mongoose.connect(process.env.MONGO);
    console.log("Database Connected");
}

app.listen(process.env.PORT,() => {
    dbConnection();
    console.log("Server Running");
})