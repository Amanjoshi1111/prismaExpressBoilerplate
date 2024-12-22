import { connectToDb } from "./db";
import app, { PORT } from "./server";

connectToDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log('SERVER LISTENING TO PORT : ', PORT);
        })
    })
    .catch((err)=> {
        console.log("Error : ", err);
    })