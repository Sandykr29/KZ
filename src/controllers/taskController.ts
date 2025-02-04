import { Request, Response } from 'express';
import Task, { ITask } from '../models/Task';

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const user = req.user;

  try {
    const task: ITask = new Task({ title, description, user: user.id });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const user = req.user;

  try {
    const tasks = await Task.find({ user: user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};