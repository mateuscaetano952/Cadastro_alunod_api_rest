import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/user',loginRequired,  userController.home);
router.get('/user/:id', userController.show);
router.post('/user', userController.store);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

export default router;
