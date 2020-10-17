import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const router = Router();
const upload = multer(uploadConfig);

router.get('/orphanages', OrphanagesController.index);
router.get('/orphanage/:id', OrphanagesController.show);
router.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default router;
