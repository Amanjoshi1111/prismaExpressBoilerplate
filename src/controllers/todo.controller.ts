import { Request, Response } from "express";
import { prisma } from "../db";
import { Prisma } from "@prisma/client";

export async function createTodo(req: Request, res: Response) {
    try {
        let userId: number = Number(req.query.userId);
        const { title, desc } = req.body;

        const resp = await prisma.todo.create({
            data: {
                title,
                desc,
                userId
            }
        })

        console.log(resp);

        res.status(200).json({
            msg: 'Todo Created Succesfully'
        })
        return;

    } catch (err) {
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            res.status(411).json({
                msg : err
            })
            return;
        }
        res.status(500).json({
            msg: err
        })
        return;
    }
}

export async function getUserTodos(req: Request, res: Response) {
    try {
        const resp = await prisma.todo.findMany({
            where: {
                userId: Number(req.query.userId)
            }
        });

        console.log(resp);

        res.status(200).json({
            todos: resp
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            err
        })
        return;
    }
}