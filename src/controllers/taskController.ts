import { Request, Response } from "express";
import Task from "../models/Task";

declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

// Create a new task
export const createTask = async (req: Request, res: Response): Promise<void> => {
    const { title, description } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            user: req.userId, // Attach logged-in user to the task
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Get all tasks with sorting and filtering
export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status, search } = req.query;

        let query: any = { user: req.userId };

        // Filtering by status (completed/pending)
        if (status === "completed") query.completed = true;
        if (status === "pending") query.completed = false;

        // Searching by title or description (case-insensitive)
        if (search && typeof search === "string") {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

        // Sorting by newest first
        const tasks = await Task.find(query).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Update a task's details
export const updateTask = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const { title, description, completed } = req.body;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: taskId, user: req.userId },
            { title, description, completed },
            { new: true }
        );

        if (!task) {
            res.status(404).json({ message: "Task not found" });
            return;
        }

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;

    try {
        const task = await Task.findOneAndDelete({ _id: taskId, user: req.userId });

        if (!task) {
            res.status(404).json({ message: "Task not found" });
            return;
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Mark a task as completed
export const markTaskCompleted = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: taskId, user: req.userId },
            { completed: true },
            { new: true }
        );

        if (!task) {
            res.status(404).json({ message: "Task not found" });
            return;
        }

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Mark a task as pending (not completed)
export const markTaskPending = async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: taskId, user: req.userId },
            { completed: false },
            { new: true }
        );

        if (!task) {
            res.status(404).json({ message: "Task not found" });
            return;
        }

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
