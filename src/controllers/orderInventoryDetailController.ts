import { Request, Response, NextFunction } from 'express';
import OrderInventoryDetail from '../models/orderInventoryDetail';

export const createOrderInventoryDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { inventoryUsed, inventoryWasted, orderId, inventoryId } = req.body;
  const orderInventoryDetail = await OrderInventoryDetail.create({inventoryUsed,inventoryWasted,orderId,inventoryId,});
    res.status(201).json(orderInventoryDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllOrderInventoryDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderInventoryDetails = await OrderInventoryDetail.findAll();
    res.status(200).json(orderInventoryDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getOrderInventoryDetailById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const orderInventoryDetail = await OrderInventoryDetail.findByPk(id);
    if (!orderInventoryDetail) {
      res.status(404).json({ message: 'OrderInventoryDetail not found' });
      return;
    }
    res.status(200).json(orderInventoryDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateOrderInventoryDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { inventoryUsed, inventoryWasted, orderId, inventoryId } = req.body;

    const orderInventoryDetail = await OrderInventoryDetail.findByPk(id);
    if (!orderInventoryDetail) {
      res.status(404).json({ message: 'OrderInventoryDetail not found' });
      return;
    }

    orderInventoryDetail.inventoryUsed = inventoryUsed;
    orderInventoryDetail.inventoryWasted = inventoryWasted;
    orderInventoryDetail.orderId = orderId;
    orderInventoryDetail.inventoryId = inventoryId;

    await orderInventoryDetail.save();
    res.status(200).json(orderInventoryDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteOrderInventoryDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const orderInventoryDetail = await OrderInventoryDetail.findByPk(id);
    if (!orderInventoryDetail) {
      res.status(404).json({ message: 'OrderInventoryDetail not found' });
      return;
    }
    await orderInventoryDetail.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
