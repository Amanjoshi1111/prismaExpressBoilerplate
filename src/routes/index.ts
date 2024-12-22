import { Router } from "express";
import userRouter from "./user.route";
import todoRouter from "./todo.router";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/todo", todoRouter);

export default routes;