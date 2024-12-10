import { Request, Response } from 'express';
import OrderDispatchDetail from '../models/orderDispatchDetailModel';

// Create a new OrderDispatchDetail
export const createOrderDispatchDetail = async (req: Request, res: Response) => {
  try {
    const { 
      deliveryAgentName, deliveryAgentMobileNumber, vehicleName, vehicleNumber, 
      ewayBillNumber, invoiceNumber, transportationCost, loadingCost, unloadingCost,
      cgst, sgst, igst, totalCost, interestCost, dispatchStatus, creditDate, 
      invoiceSent, outForDeliveryAt, creditDateDay, orderId, placeOfDispatch, 
      transporter, lrNumber, termsOfDelivery, destination, tcsCost 
    } = req.body;

    // Create the order dispatch detail in the database
    const orderDispatchDetail = await OrderDispatchDetail.create({
      deliveryAgentName, deliveryAgentMobileNumber, vehicleName, vehicleNumber, 
      ewayBillNumber, invoiceNumber, transportationCost, loadingCost, unloadingCost,
      cgst, sgst, igst, totalCost, interestCost, dispatchStatus, creditDate, 
      invoiceSent, outForDeliveryAt, creditDateDay, orderId, placeOfDispatch, 
      transporter, lrNumber, termsOfDelivery, destination, tcsCost
    });
    res.status(201).json(orderDispatchDetail);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Error creating order dispatch detail', error });
  }
};

// Get all OrderDispatchDetails
export const getAllOrderDispatchDetails = async (req: Request, res: Response) => {
  try {
    // Fetch all order dispatch details from the database
    const orderDispatchDetails = await OrderDispatchDetail.findAll();
    res.status(200).json(orderDispatchDetails);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Error fetching order dispatch details', error });
  }
};

// Get an OrderDispatchDetail by ID
export const getOrderDispatchDetailById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderDispatchDetail = await OrderDispatchDetail.findByPk(id);
    if (orderDispatchDetail) {
      res.status(200).json(orderDispatchDetail);
    } else {
      res.status(404).json({ message: 'Order dispatch detail not found' });
    }
  } catch (error) {
    
    console.error(error); 
    res.status(500).json({ message: 'Error fetching order dispatch detail', error });
  }
};

// Update an OrderDispatchDetail by ID
export const updateOrderDispatchDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { 
      deliveryAgentName, deliveryAgentMobileNumber, vehicleName, vehicleNumber, 
      ewayBillNumber, invoiceNumber, transportationCost, loadingCost, unloadingCost,
      cgst, sgst, igst, totalCost, interestCost, dispatchStatus, creditDate, 
      invoiceSent, outForDeliveryAt, creditDateDay, orderId, placeOfDispatch, 
      transporter, lrNumber, termsOfDelivery, destination, tcsCost 
    } = req.body;

    const orderDispatchDetail = await OrderDispatchDetail.findByPk(id);

    if (orderDispatchDetail) {
      // Update the found order dispatch detail
      await orderDispatchDetail.update({
        deliveryAgentName, deliveryAgentMobileNumber, vehicleName, vehicleNumber, 
        ewayBillNumber, invoiceNumber, transportationCost, loadingCost, unloadingCost,
        cgst, sgst, igst, totalCost, interestCost, dispatchStatus, creditDate, 
        invoiceSent, outForDeliveryAt, creditDateDay, orderId, placeOfDispatch, 
        transporter, lrNumber, termsOfDelivery, destination, tcsCost
      });

      
      res.status(200).json(orderDispatchDetail);
    } else {
      // If the order dispatch detail does not exist, return a 404 response
      res.status(404).json({ message: 'Order dispatch detail not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating order dispatch detail', error });
  }
};

// Delete an OrderDispatchDetail by ID
export const deleteOrderDispatchDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderDispatchDetail = await OrderDispatchDetail.findByPk(id);

    if (orderDispatchDetail) {
      await orderDispatchDetail.destroy();
      res.status(200).json({ message: 'Order dispatch detail deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order dispatch detail not found' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Error deleting order dispatch detail', error });
  }
};
