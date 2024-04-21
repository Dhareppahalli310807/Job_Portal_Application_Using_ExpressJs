import express from 'express';
import UserController from '../controllers/user.controller.js';
import { userValidation } from '../middlewares/userValidation.middleware.js';

const userRouter = express.Router();
const authController = new UserController()

// Get routes
userRouter.get("/signup", authController.getSignUp);
userRouter.get("/signin", authController.getSignIn);
userRouter.get("/logout", authController.logout);

// Post routes
userRouter.post("/signup", userValidation,authController.postSignUp);
userRouter.post("/signin", userValidation,authController.postSignIn);

export default userRouter;