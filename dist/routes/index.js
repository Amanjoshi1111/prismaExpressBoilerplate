"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("./user.route"));
const todo_router_1 = __importDefault(require("./todo.router"));
const routes = (0, express_1.Router)();
routes.use("/user", user_route_1.default);
routes.use("/todo", todo_router_1.default);
exports.default = routes;
