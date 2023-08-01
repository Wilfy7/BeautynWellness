import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

const userRouter = Router();

//register user route
userRouter.post("/register", registerUser);

export default userRouter;
