import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectToDb = async (): Promise<void> => {
    try {
        const resp = await prisma.$connect();
        console.log("Connected to database : ");
    } catch (err) {
        if (err instanceof Error) {
            console.log("Error connecting database", err.stack);
        } else
            console.log("Unknown error : ", err);
    }
}

export { connectToDb, prisma };