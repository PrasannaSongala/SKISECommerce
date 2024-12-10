import { Request, Response } from 'express';
import OrderDispatchItem from '../models/OrderDispatchItemModel';

export const getAllOrderDispatchItems = async (req: Request, res: Response): Promise<Response> => {
  try {
    const items = await OrderDispatchItem.findAll();
    return res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching order dispatch items:', error);
    return res.status(500).json({ error: 'Failed to fetch items' });
  }
};

export const getOrderDispatchItemById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const item = await OrderDispatchItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    return res.status(200).json(item);
  } catch (error) {
    console.error(`Error fetching order dispatch item with ID ${req.params.id}:`, error);
    return res.status(500).json({ error: 'Failed to fetch item' });
  }
};

export const createOrderDispatchItem = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { quantity, quantityWasted, orderItemId, orderDispatchId } = req.body;
    
    if (!quantity || !orderItemId || !orderDispatchId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newItem = await OrderDispatchItem.create({
      quantity,
      quantityWasted,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderItemId,
      orderDispatchId,
    });
    
    return res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating order dispatch item:', error);
    return res.status(500).json({ error: 'Failed to create item' });
  }
};

export const updateOrderDispatchItem = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { quantity, quantityWasted, orderItemId, orderDispatchId } = req.body;
    
    if (!quantity || !orderItemId || !orderDispatchId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const item = await OrderDispatchItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await item.update({
      quantity,
      quantityWasted,
      updatedAt: new Date(),
      orderItemId,
      orderDispatchId,
    });

    return res.status(200).json(item);
  } catch (error) {
    console.error(`Error updating order dispatch item with ID ${req.params.id}:`, error);
    return res.status(500).json({ error: 'Failed to update item' });
  }
};

export const deleteOrderDispatchItem = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const item = await OrderDispatchItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await item.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(`Error deleting order dispatch item with ID ${req.params.id}:`, error);
    return res.status(500).json({ error: 'Failed to delete item' });
  }
};
