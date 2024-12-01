import { Router } from 'express';
import { getAvailableGroceries, bookGroceries } from '../controllers/user.controller';

const router: Router = Router();

// Route to get available groceries
router.get('/groceries', getAvailableGroceries);

// Route to book groceries
router.post('/orders', bookGroceries);

export default router;
