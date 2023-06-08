import { Router } from 'express';
import { infoRouter } from './info';

export const router = Router();

router.get('/', (req, res) => res.redirect('/api/info'));
router.use('/info', infoRouter);
