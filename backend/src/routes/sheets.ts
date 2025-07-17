import { Router } from 'express';
import { uploadSheet } from '../controllers/sheetController';

const router = Router();
router.post('/', uploadSheet);
export default router;
