import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import { createTask, getAllTasks ,updateTask,deleteTask,markTaskCompleted,markTaskPending} from "../controllers/taskController";

const router = express.Router();

// Protect routes with authentication middleware
router.use(authenticateUser);

// Task Routes
router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.put("/tasks/:taskId", updateTask);
router.delete("/tasks/:taskId", deleteTask);
router.patch("/tasks/:taskId/completed", markTaskCompleted);
router.patch("/tasks/:taskId/pending", markTaskPending);

export default router;
