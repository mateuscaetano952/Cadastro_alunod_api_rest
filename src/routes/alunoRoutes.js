import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';


const router = Router();

router.post('/alunos',loginRequired ,AlunoController.store);
router.get('/alunos',loginRequired ,AlunoController.index);
router.get('/alunos/:id',loginRequired ,AlunoController.show);
router.delete('/alunos/:id',loginRequired ,AlunoController.delete);
router.put('/alunos/:id',loginRequired ,AlunoController.update);

export default router;
