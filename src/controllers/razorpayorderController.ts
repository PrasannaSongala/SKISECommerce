// controllers/razorpayorderController.ts
import { Request, Response } from 'express';
import { RazorpayOrder } from '../models/razorpayorder';

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { amount, currency, razorpayOrderId, extraInfo, orderId } = req.body;

    const razorpayOrder = await RazorpayOrder.create({
      amount,
      currency,
      razorpayOrderId,
      extraInfo,
      orderId,
    });

    res.status(201).json({ message: 'Razorpay Order Created', data: razorpayOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Razorpay order', error });
  }
};

export const getRazorpayOrders = async (req: Request, res: Response) => {
  try {
    const orders = await RazorpayOrder.findAll();
    res.status(200).json({ data: orders });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Razorpay orders', error });
  }
};

export const getRazorpayOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await RazorpayOrder.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Razorpay Order not found' });
    }
    res.status(200).json({ data: order });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Razorpay order', error });
  }
};

export const updateRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount, currency, razorpayOrderId, extraInfo, orderId } = req.body;

    const order = await RazorpayOrder.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Razorpay Order not found' });
    }

    await order.update({ amount, currency, razorpayOrderId, extraInfo, orderId });

    res.status(200).json({ message: 'Razorpay Order Updated', data: order });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Razorpay order', error });
  }
};

export const deleteRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await RazorpayOrder.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Razorpay Order not found' });
    }

    await order.destroy();

    res.status(200).json({ message: 'Razorpay Order Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Razorpay order', error });
  }
};
