import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";

const router = Router();

//Creating user and savingg it into database.
router.post("/signup",signUp);

//Sign In

router.post("/signin",signIn);



export default router;