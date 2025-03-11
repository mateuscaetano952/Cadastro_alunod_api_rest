import { Router } from 'express';
import userController from '../controllers/UserController';

const router = Router();

router.get('/user', userController.index);

export default router;
