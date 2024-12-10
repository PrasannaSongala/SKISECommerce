import { Router, Request, Response, RequestHandler } from 'express';
import {
  createPaymentTransaction,
  getPaymentTransactions,
  updatePaymentTransaction,
  deletePaymentTransaction,
  restorePaymentTransaction
} from '../controllers/paymentTransactionController';

const router = Router();

router.post('/create', createPaymentTransaction as RequestHandler);
router.get('/', getPaymentTransactions as RequestHandler);
router.put('/:id', updatePaymentTransaction as RequestHandler);
router.delete('/:id', deletePaymentTransaction as RequestHandler);
router.put('/restore/:id', restorePaymentTransaction as RequestHandler);

export default router;
