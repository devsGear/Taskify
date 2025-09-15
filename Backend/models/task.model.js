import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
    }
});

const Task = mongoose.model('Tasks', taskSchema);
export default Task;
