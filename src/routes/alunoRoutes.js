import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = Router();

router.post('/alunos', AlunoController.store);
router.get('/alunos', AlunoController.index);
router.get('/alunos/:id', AlunoController.show);
router.delete('/alunos/:id', AlunoController.delete);
router.put('/alunos/:id', AlunoController.update);

export default router;
