"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const todoRouter = (0, express_1.Router)();
todoRouter.route("/")
    .get(todo_controller_1.getUserTodos)
    .post(todo_controller_1.createTodo)
    .delete();
exports.default = todoRouter;
