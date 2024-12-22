import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use((req, res, next)=> {
    console.log(`REQUEST PATH : ${req.path}, METHOD : ${req.method}`);
    next();
})

app.use(routes);


export default app;
export const PORT = 3000;

