import  mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        default:[]
    },
    //likes and dislikes will both have userId who liked or
    //disliked the video.
    likes:{
        type:[String],
        default:[]
    },
    dislikes:{
        type:[String],
        default:[]
    },
    views:{
        type:Number,
        default:0
    }
    
},{timestamps:true})


export default mongoose.model("Video",VideoSchema);