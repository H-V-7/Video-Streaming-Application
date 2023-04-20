import { Router } from "express";
import { deleteUser, getUser, likeVideo, subscribeUser, disLikeVideo, unSubscribeUser, updateUser } from "../controllers/UserController.js";
import verifyToken from "../utils/verifyToken.js";


const router = Router();

//Get User Details

router.get("/user/:id",getUser);

//Update User 

router.patch("/:id",verifyToken,updateUser);

//Delete User 

router.delete("/:id",verifyToken,deleteUser);

//subscribe user

router.patch("/subscribe/:id",verifyToken,subscribeUser);

//unsubscribe user

router.patch("/unsubscribe/:id",verifyToken,unSubscribeUser);
 
//like video 

router.patch("/like/:videoId",verifyToken,likeVideo);

//dislike video 

router.patch("/unlike/:videoId",verifyToken,disLikeVideo);


export default router;