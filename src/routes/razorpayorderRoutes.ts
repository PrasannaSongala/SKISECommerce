import { Router, RequestHandler } from 'express';
import {
  createRazorpayOrder,
  getRazorpayOrders,
  getRazorpayOrderById,
  updateRazorpayOrder,
  deleteRazorpayOrder,
} from '../controllers/razorpayorderController';

const router = Router();

router.post('/create', createRazorpayOrder as RequestHandler);
router.get('/', getRazorpayOrders as RequestHandler);
router.get('/:id', getRazorpayOrderById as RequestHandler);
router.put('/:id', updateRazorpayOrder as RequestHandler);
router.delete('/:id', deleteRazorpayOrder as RequestHandler);

export default router;
