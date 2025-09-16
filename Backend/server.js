import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDataBase from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";

dotenv.config()

const app = express()
const PORT = 8000

connectDataBase()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
}));

app.use('/auth', authRouter);
app.use('/', taskRouter)

app.listen(PORT, ()=>console.log(`Server is runing on PORT ${PORT}`))