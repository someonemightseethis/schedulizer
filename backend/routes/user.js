import express from "express";
import UserController from "../controllers/user.js";

const userRouter = express.Router();

// Register User
userRouter.post("/signup", UserController.SignUp);

// Login user
userRouter.post("/login", UserController.Login);

//getUserdata
userRouter.post("/user", UserController.auth);

export default userRouter;
