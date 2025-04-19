import { Router } from 'express';
import FotoController from '../controllers/FotoController';



const router = Router();

router.post('/foto', FotoController.store);


export default router;
