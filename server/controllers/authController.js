import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//importing User schema 

import User from "../schema/UserSchema.js";
import { handleError } from "../utils/error.js";

export const signUp = async (req,res,next) => {
    
    try{
        //this will give us a random string which will be concatinated to our
        //passowrd and then it will be hashed and here the string is 10 words long.

        const salt = await bcrypt.genSalt(10);
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password,salt);
        const user = new User({...req.body, password:hashedPassword});

       //we are awaiting the change to be saved to our database .

        await user.save();
        
        res.status(200).send("User has been created!");

    }catch(error){
        //handleError is coustom error handler which will handle error if any.
        next(handleError(500,"User Exists!"));
    }
}
export const signIn = async(req,res,next) => {
    
    try{
        //finding one user and checking the login credentials.
        
        const user = await User.findOne({
            name:req.body.name
        })
        //if user not present.
        if(!user){
            return next(handleError(404,"User Not Found!"));
        }

        //comparing incoming password with the hashed password.

        const ispasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        console.log(ispasswordCorrect)
        if(!ispasswordCorrect){
            return next(handleError(400, "Incorrect password, please try again"));
        }

        //creating a jwt token whcih will be sent as a response in the form of cookie.

        const token = jwt.sign({id:user._id}, process.env.SECRETKEY);

        //seperating password form other details as it is not good practice to send 
        //password alogn with the user details.

        const {password,...userDetails} = user._doc; //this will seperate the password from other user details.

        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200).json(userDetails);

    }catch(error){
        console.log(error);
    }
}