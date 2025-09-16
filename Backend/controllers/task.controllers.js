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
            category: category.toLowerCase(),
            createdAt: new Date()
        });

        res.sendStatus(201);
    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

export async function findByCategory(req, res){
    try {
        const category = req.query.category;

        const tasks = await Task.find({ category });

        if (!tasks) {
            return res.status(404).json({ message: "No Task Found" });
        }
    
        const filteredTasks = tasks.map( task => ({
            "id": task._id,
            "title": task.title,
            "category": task.category,
            "isDone": task.isDone,
        }));

        res.status(200).send(filteredTasks);
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

export async function patchIsDoneTrue(req, res){
    try {
        const _id = req.params.id;

        const task = await Task.findById(_id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (task.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to update this task" });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            _id, 
            { isDone: true},
            { new: true}
        );

        return res.sendStatus(200);        
    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({ message: "Server error" });
    }
    
}


