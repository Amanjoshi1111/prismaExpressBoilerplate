"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = createTodo;
exports.getUserTodos = getUserTodos;
const db_1 = require("../db");
const client_1 = require("@prisma/client");
function createTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = Number(req.query.userId);
            const { title, desc } = req.body;
            const resp = yield db_1.prisma.todo.create({
                data: {
                    title,
                    desc,
                    userId
                }
            });
            console.log(resp);
            res.status(200).json({
                msg: 'Todo Created Succesfully'
            });
            return;
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                res.status(411).json({
                    msg: err
                });
                return;
            }
            res.status(500).json({
                msg: err
            });
            return;
        }
    });
}
function getUserTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield db_1.prisma.todo.findMany({
                where: {
                    userId: Number(req.query.userId)
                }
            });
            console.log(resp);
            res.status(200).json({
                todos: resp
            });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                err
            });
            return;
        }
    });
}
