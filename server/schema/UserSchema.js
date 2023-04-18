import {Schema,model} from "mongoose";

//User schema to save user details.

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedChannels:{
        type:[String] //subscribed channeles are the users and we will store the user id here who are subscribed to a channel/user. Basically this will 
        //help us show videos of users which they have subscribed.
    }

},{timestamps:true});

export default model("User", UserSchema);
