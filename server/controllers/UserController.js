import { handleError } from "../utils/error.js"
import User from "../schema/UserSchema.js";


export const getUser = async(req,res,next) => {
    
    try{
        const user = await User.findById(req.params.id);
       
        res.status(200).json(user);
    }catch(error){
        next(handleError(500,"User Not Found"));
    }
}


export const updateUser = async (req,res,next) => {
    
    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            console.log(updatedUser);
            res.status(200).json(updatedUser);
        }catch(error){
            next(error);
        }
    }else{
        return next(handleError(403, "You can update your account only!"));
    }
}

export const deleteUser = async (req,res,next) => {
    if(req.params.id === req.user.id){
        try{
            await User.findByIdAndDelete(req.params.id)
            
            res.status(200).json("User Deleted!");
        }catch(error){
            next(error);
        }
    }else{
        return next(handleError(403, "You can update your account only!"));
    }
}

export const subscribeUser = async (req,res,next) => {
    try{
        await User.findById(req.user.id,{
            $push:{
                subscribedChannel:req.params.id
            }
            });
        await User.findByIdAndUpdate(req.user.id,{
            $inc:{
                subscribers:1
            }
        })
        res.status(200).json(`Subscribed to ${req.users.name}`);
       

    }catch(error){
        next(error);
    }
}

export const unSubscribeUser = async (req,res,next) => {
    try{
        await User.findById(req.user.id,{
            $pull:{
                subscribedChannel:req.params.id
            }
            });
        await User.findByIdAndUpdate(req.user.id,{
            $inc:{
                subscribers:-1
            }
        })
        res.status(200).json(`Unsubscribed  ${req.users.name}`);
       

    }catch(error){
        next(error);
    }
}


export const likeVideo = (req,res,next) => {
    
}

export const disLikeVideo = (req,res,next) => {
    
}