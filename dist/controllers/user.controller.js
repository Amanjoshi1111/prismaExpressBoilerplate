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
exports.signupController = signupController;
exports.getAllUsersController = getAllUsersController;
const db_1 = require("../db");
const client_1 = require("@prisma/client");
function signupController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const { username, firstName, lastName, password } = req.body;
            const resp = yield db_1.prisma.user.create({
                data: {
                    username,
                    password,
                    firstName,
                    lastName
                }
            });
            res.status(200).json({
                msg: "User created successfully"
            });
            return;
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                console.log("Error 1: ", err.message);
                res.status(411).json({
                    msg: `User with given '${(_a = err.meta) === null || _a === void 0 ? void 0 : _a.target}' already exist`
                });
                return;
            }
            if (err instanceof Error) {
                console.log("Error in signup controller: ", err);
                res.status(500).json({
                    msg: `Known error : ${err.message}`
                });
            }
            else {
                res.status(500).json({
                    msg: `Unknown error : ${err}`
                });
            }
        }
    });
}
function getAllUsersController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield db_1.prisma.user.findMany();
            res.status(200).json({
                users: resp
            });
        }
        catch (err) {
            res.status(500).json({
                msg: err
            });
        }
    });
}
