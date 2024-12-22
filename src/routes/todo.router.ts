import { Router } from "express";
import { createTodo, getUserTodos } from "../controllers/todo.controller";

const todoRouter = Router();

todoRouter.route("/")
    .get(getUserTodos)
    .post(createTodo)
    .delete()


export default todoRouter;