import { Router } from "express";
import {getAllUsersController, signupController} from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/signup", signupController);
userRouter.get("/", getAllUsersController);

export default userRouter;