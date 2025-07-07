import { Router } from "express";
import { createUser, loginUser, sendOtp, verifyOtp, resetPassword } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/login",loginUser)

userRouter.post("/signup",createUser)

userRouter.post("/send-otp",sendOtp)

userRouter.post("/verify-otp", verifyOtp);

userRouter.post("/reset-password", resetPassword);

export default userRouter;