"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_controller_1 = __importDefault(require("../controllers/signup.controller"));
const singupRouter = (0, express_1.Router)();
singupRouter.post("/signup", signup_controller_1.default);
exports.default = singupRouter;
