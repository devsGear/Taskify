import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDataBase from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";

dotenv.config()

const app = express()
const PORT = 8000

app.use(express.json());
app.use(cookieParser());

connectDataBase()

app.use('/auth', authRouter);
app.use('/', taskRouter)

app.listen(PORT, ()=>console.log(`Server is runing on PORT ${PORT}`))