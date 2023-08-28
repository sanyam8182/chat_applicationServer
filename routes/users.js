import { Router } from "express";
import { getUsers, getUser } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.post("/getUsers", getUsers);
usersRouter.post("/getUser", getUser);

export default usersRouter;
