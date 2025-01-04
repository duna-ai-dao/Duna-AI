import { Router } from 'express';
import dunaRoutes from './dunaRoutes';

const router = Router();

router.use('/api', dunaRoutes);

export default router;
