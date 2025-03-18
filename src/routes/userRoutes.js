import { Router } from 'express';
import userController from '../controllers/UserController';

const router = Router();

router.get('/user', userController.home);
router.get('/user/:id', userController.show);
router.post('/user', userController.store);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

export default router;
