// src/controllers/orderListcontroller.ts

import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator'; // for validating request data
import OrderList from '../models/orderListmodel';

// Validation for creating an order
const validateOrder = [
  body('productCost').isFloat({ min: 0 }).withMessage('Product cost must be a positive number'),
  body('totalCost').isFloat({ min: 0 }).withMessage('Total cost must be a positive number'),
  body('status').isIn(['pending', 'completed', 'canceled']).withMessage('Invalid order status'), // Example statuses
  body('userId').isUUID().withMessage('Invalid user ID'), // Assuming userId is a UUID
  body('locationId').isInt().withMessage('Invalid location ID') // Assuming locationId is an integer
];

// Get all orders
export const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  try {
    const orders = await OrderList.findAll();
    return res.status(200).json(orders);
  } catch (err: unknown) {
    return res.status(500).json({
      message: 'Error retrieving orders',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};

// Get a specific order by ID
export const getOrderById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const order = await OrderList.findByPk(id);
    if (order) {
      return res.status(200).json(order);
    } else {
      return res.status(404).json({ message: 'Order not found' });
    }
  } catch (err: unknown) {
    return res.status(500).json({
      message: 'Error retrieving order',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};

//  new order
export const createOrder = async (req: Request, res: Response): Promise<Response> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newOrder = await OrderList.create(req.body);
    return res.status(201).json(newOrder);
  } catch (err: unknown) {
    return res.status(500).json({
      message: 'Error creating order',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};

// Update an order by ID
export const updateOrder = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const [updated] = await OrderList.update(req.body, { where: { id } });
    if (updated) {
      const updatedOrder = await OrderList.findByPk(id);
      return res.status(200).json(updatedOrder);
    } else {
      return res.status(404).json({ message: 'Order not found' });
    }
  } catch (err: unknown) {
    return res.status(500).json({
      message: 'Error updating order',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};

// Delete an order by ID
export const deleteOrder = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const deleted = await OrderList.destroy({ where: { id } });
    if (deleted) {
      return res.status(200).json({ message: 'Order deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Order not found' });
    }
  } catch (err: unknown) {
    return res.status(500).json({
      message: 'Error deleting order',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};
