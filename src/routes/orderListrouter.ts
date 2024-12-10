// src/routes/orderListrouter.ts

import { Router } from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orderListcontroller';

const router = Router();

// async route handlers
router.get('/', getAllOrders as (req: any, res: any) => Promise<any>);
router.get('/:id', getOrderById as (req: any, res: any) => Promise<any>);
router.post('/', createOrder as (req: any, res: any) => Promise<any>);
router.put('/:id', updateOrder as (req: any, res: any) => Promise<any>);
router.delete('/:id', deleteOrder as (req: any, res: any) => Promise<any>);

export default router;
