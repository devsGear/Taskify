import express from "express";
import dotenv from "dotenv";


import connectDataBase from "./config/db.js";

dotenv.config()

const app = express()

connectDataBase()

app.listen(8000, ()=>console.log("Server is running on 8000"))