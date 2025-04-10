import { Router } from 'express';
import FotoController from '../controllers/FotoController';

import multer from 'multer'
import multerConfig from '../config/multerConfig'

const upload = multer(multerConfig)

const router = Router();

router.post('/foto', upload.single('foto') , FotoController.store);


export default router;
