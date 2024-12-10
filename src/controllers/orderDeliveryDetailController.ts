import { Request, Response } from 'express';
import OrderDeliveryDetail from '../models/orderDeliveryDetailModel';

// Create a new OrderDeliveryDetail
export const createOrderDeliveryDetail = async (req: Request, res: Response) => {
  try {
    const { deliveredTo, deliveredBy, mobileNumber, comments, orderDispatchId } = req.body;

    const orderDeliveryDetail = await OrderDeliveryDetail.create({
      deliveredTo,
      deliveredBy,
      mobileNumber,
      comments,
      orderDispatchId,
    });

    res.status(201).json(orderDeliveryDetail);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order delivery detail', error });
  }
};

// Get all OrderDeliveryDetails
export const getAllOrderDeliveryDetails = async (req: Request, res: Response) => {
  try {
    const orderDeliveryDetails = await OrderDeliveryDetail.findAll();
    res.status(200).json(orderDeliveryDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order delivery details', error });
  }
};

// Get an OrderDeliveryDetail by ID
export const getOrderDeliveryDetailById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(id);

    if (orderDeliveryDetail) {
      res.status(200).json(orderDeliveryDetail);
    } else {
      res.status(404).json({ message: 'Order delivery detail not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order delivery detail', error });
  }
};

// Update an OrderDeliveryDetail by ID
export const updateOrderDeliveryDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { deliveredTo, deliveredBy, mobileNumber, comments, orderDispatchId } = req.body;

    const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(id);

    if (orderDeliveryDetail) {
      await orderDeliveryDetail.update({
        deliveredTo,
        deliveredBy,
        mobileNumber,
        comments,
        orderDispatchId,
      });
      res.status(200).json(orderDeliveryDetail);
    } else {
      res.status(404).json({ message: 'Order delivery detail not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating order delivery detail', error });
  }
};

// Delete an OrderDeliveryDetail by ID
export const deleteOrderDeliveryDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(id);

    if (orderDeliveryDetail) {
      await orderDeliveryDetail.destroy();
      res.status(200).json({ message: 'Order delivery detail deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order delivery detail not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order delivery detail', error });
  }
};
