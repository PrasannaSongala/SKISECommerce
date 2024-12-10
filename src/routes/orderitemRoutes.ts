//src/routes/orderitemRoutes.ts

import express from 'express';
import {
  createOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
} from '../controllers/orderitemController';  

const router = express.Router();

router.post('/', createOrderItem);

router.get('/', getAllOrderItems);

router.get('/:id', getOrderItemById);

router.put('/:id', updateOrderItem);

router.delete('/:id', deleteOrderItem);

export default router;
