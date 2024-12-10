import express, { RequestHandler } from 'express';
import {
  createOrderInventoryDetail,
  getAllOrderInventoryDetails,
  getOrderInventoryDetailById,
  updateOrderInventoryDetail,
  deleteOrderInventoryDetail,
} from '../controllers/orderInventoryDetailController';

const router = express.Router();

router.post('/', createOrderInventoryDetail as RequestHandler);
router.get('/', getAllOrderInventoryDetails as RequestHandler);
router.get('/:id', getOrderInventoryDetailById as RequestHandler);
router.put('/:id', updateOrderInventoryDetail as RequestHandler);
router.delete('/:id', deleteOrderInventoryDetail as RequestHandler);

export default router;
