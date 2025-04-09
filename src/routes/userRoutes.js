import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/user', userController.home); //listar todos os usuarios.
router.get('/user/:id', userController.show); //listar usuario.

router.post('/user', userController.store);//Criar novo usuario.
router.put('/user',loginRequired, userController.update);//Atulizar dados do usuario.
router.delete('/user', loginRequired, userController.delete);//Deleta usuario.

export default router;
