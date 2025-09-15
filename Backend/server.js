import express from "express";
import dotenv from "dotenv";

import connectDataBase from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config()

const app = express()
const PORT = 8000

app.use(express.json());

connectDataBase()

app.use('/auth', authRouter);



app.listen(PORT, ()=>console.log(`Server is runing on PORT ${PORT}`))