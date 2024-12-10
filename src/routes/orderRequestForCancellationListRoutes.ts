import { Request, Response } from 'express';
import { getOrderRequestForCancellationById, updateOrderRequestForCancellation, deleteOrderRequestForCancellation } from '../controllers/orderRequestForCancellationListController';
import OrderRequestForCancellationList from '../models/orderRequestForCancellationList'; // <-- Import the model

const express = require('express');
const router = express.Router();

// new cancellation request
router.post('/', async (req: Request, res: Response) => {
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
});

// Get all cancellation requests
router.get('/', async (req: Request, res: Response) => {
  try {
    const requests = await OrderRequestForCancellationList.findAll();
    res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving order requests for cancellation' });
  }
});

// Get a specific cancellation request by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const result = await getOrderRequestForCancellationById(req, res); 
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an existing cancellation request
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const result = await updateOrderRequestForCancellation(req, res); 
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a cancellation request
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const result = await deleteOrderRequestForCancellation(req, res); 
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
