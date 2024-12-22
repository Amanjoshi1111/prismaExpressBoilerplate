import { Request, Response } from "express";
import { prisma } from "../db";
import { Prisma } from "@prisma/client";

export  async function signupController(req: Request, res: Response){
    try{

        const {username, firstName, lastName, password} = req.body;

        const resp = await prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });

        res.status(200).json({
            msg : "User created successfully"
        })
        return;

    }catch(err){

        if(err instanceof Prisma.PrismaClientKnownRequestError){
            console.log("Error 1: ",  err.message);
            res.status(411).json({
                msg : `User with given '${err.meta?.target}' already exist` 
            })
            return;
        }
        if(err instanceof Error){
            console.log("Error in signup controller: ", err);
            res.status(500).json({
                msg : `Known error : ${err.message}`
            })
        }else {
            res.status(500).json({
                msg : `Unknown error : ${err}`
            })
        }

    }
}

export  async function getAllUsersController(req: Request, res: Response){
    try{
        const resp = await prisma.user.findMany()
        res.status(200).json({
            users : resp
        })

    }catch(err){
        res.status(500).json({
            msg : err
        })
    }
}