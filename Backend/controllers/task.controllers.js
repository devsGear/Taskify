import Task from "../models/task.model.js";

export async function createTask(req, res){
    const {title, description, category} = req.body;

    try {

        if(!title || !description || !category){
            return res.status(400).json({ message: "All fields are required" });
        }

        const newTask = await Task.create({
            userId: req.user._id,
            title: title,
            description: description,
            category: category,
            createdAt: new Date()
        });

        res.status(201);
    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({ message: "Server error" });
    }
}


