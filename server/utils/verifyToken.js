import jwt from "jsonwebtoken";
import {handleError} from "./error.js";

//this function will verify jwt token

const verifyToken= (req,res,next) => {
    const token = req.cookies.access_token; //getting access token from the cookie.

    //If token is not present for the user
    if(!token){
        return next(handleError(401,"Not Aurthorized!"));
    }

    //if jwt token is present then checking if token is valid or not.
    jwt.verify(token,process.env.SECRETKEY, (error,user) => {
        if(error)
            {
                return next(handleError(403, "Not Authenticated (Token Not Valid)"));
            }
            
                req.user = user;
                
                next(); //continue execution of the route after verification
    })
}

export default verifyToken;