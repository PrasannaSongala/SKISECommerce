import { Request, Response } from 'express';
import OrderRequestForCancellationList from '../models/orderRequestForCancellationList';

// Create a new cancellation request
export const createOrderRequestForCancellation = async (req: Request, res: Response) => {
  try {
    const { reason, active, rejected, orderId } = req.body;

    const orderRequest = await OrderRequestForCancellationList.create({
      reason,
      active,
      rejected,
      orderId,
    });

    res.status(201).json(orderRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order request for cancellation' });
  }
};

// Get all cancellation requests
export const getOrderRequestsForCancellation = async (req: Request, res: Response) => {
  try {
    const requests = await OrderRequestForCancellationList.findAll();
    res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving order requests for cancellation' });
  }
};

// Get a specific cancellation request by ID
export const getOrderRequestForCancellationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const request = await OrderRequestForCancellationList.findByPk(id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving the order request for cancellation' });
  }
};

// Update an existing cancellation request
export const updateOrderRequestForCancellation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { reason, active, rejected, orderId } = req.body;
  try {
    const request = await OrderRequestForCancellationList.findByPk(id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    request.reason = reason || request.reason;
    request.active = active || request.active;
    request.rejected = rejected || request.rejected;
    request.orderId = orderId || request.orderId;

    await request.save();

    res.status(200).json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating order request for cancellation' });
  }
};

// Delete a cancellation request
export const deleteOrderRequestForCancellation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const request = await OrderRequestForCancellationList.findByPk(id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    await request.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting order request for cancellation' });
  }
};
