import express from 'express';
import { createTask, getTasks } from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';
// import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);
router.post('/', createTask);
router.get('/', getTasks);

export default router;