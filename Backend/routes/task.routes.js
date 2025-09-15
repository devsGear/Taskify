import express from "express";
import { createTask } from "../controllers/task.controllers.js";
import { protect } from '../middleware/auth.middleware.js';

const taskRouter = express.Router();

taskRouter.post('/tasks', protect, createTask);

export default taskRouter;
