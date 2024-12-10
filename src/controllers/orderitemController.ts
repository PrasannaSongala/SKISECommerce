import { Request, Response } from 'express';
import OrderItem from '../models/orderitem';

// Create Order Item
export const createOrderItem = async (req: Request, res: Response) => {
  const { quantity, quantityUnit, primaryRate, cgstPercent, igstPercent, sgstPercent, conversionRatio, productId, orderId } = req.body;

  try {
    const newOrderItem = await OrderItem.create({
      quantity,
      quantityUnit,
      primaryRate,
      cgstPercent,
      igstPercent,
      sgstPercent,
      conversionRatio,
      productId,
      orderId,
    });
    res.status(201).json(newOrderItem);
  } catch (error) {
    console.error(error);  
    res.status(500).json({ error: 'Failed to create order item' });
  }
};

// Get all Order Items
export const getAllOrderItems = async (req: Request, res: Response) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const orderItems = await OrderItem.findAll({
      limit: parseInt(limit as string, 10),
      offset: (parseInt(page as string, 10) - 1) * parseInt(limit as string, 10),
    });
    res.status(200).json(orderItems);
  } catch (error) {
    console.error(error);  
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

// Get Order Item by ID
export const getOrderItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to fetch order item' });
  }
};

// Update Order Item by ID
export const updateOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity, quantityUnit, primaryRate, cgstPercent, igstPercent, sgstPercent, conversionRatio, productId, orderId } = req.body;

  try {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      await orderItem.update({
        quantity,
        quantityUnit,
        primaryRate,
        cgstPercent,
        igstPercent,
        sgstPercent,
        conversionRatio,
        productId,
        orderId,
      });
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    console.error(error);  
    res.status(500).json({ error: 'Failed to update order item' });
  }
};

// Delete Order Item by ID
export const deleteOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderItem = await OrderItem.findByPk(id);
    if (orderItem) {
      await orderItem.destroy();
      res.status(200).json({ message: 'Order item deleted successfully' });
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    console.error(error);  
    res.status(500).json({ error: 'Failed to delete order item' });
  }
};
