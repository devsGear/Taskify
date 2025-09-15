import mongoose from "mongoose";
import User from "./user.model";

const taskSchema = new mongoose.Schema({
    userId: User,
    title: String,
    description: String,
    catogory: String,
    isDone: Boolean,
    createdAt: Date
});

const Task = mongoose.model('Tasks', taskSchema);