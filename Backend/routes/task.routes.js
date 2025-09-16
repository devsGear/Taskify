import express from "express";
import { createTask, findByCategory, patchIsDoneTrue } from "../controllers/task.controllers.js";
import { protect } from '../middleware/auth.middleware.js';

const taskRouter = express.Router();

taskRouter.post('/tasks', protect, createTask);
taskRouter.get('/tasks', protect, findByCategory);
taskRouter.patch('/tasks/:id', protect, patchIsDoneTrue);

export default taskRouter;
