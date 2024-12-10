// controllers/OrderInvoiceDetailController.ts
import { Request, Response } from 'express';
import OrderInvoiceDetail from '../models/OrderInvoiceDetail';

export class OrderInvoiceDetailController {
  static async getAllOrderInvoiceDetails(req: Request, res: Response): Promise<void> {
    try {
      const orderInvoiceDetails = await OrderInvoiceDetail.findAll();
      res.status(200).json(orderInvoiceDetails);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving order invoice details', error });
    }
  }

  static async getOrderInvoiceDetailById(req: Request, res: Response): Promise<void> {
    try {
      const invoiceId = parseInt(req.params.id);
      const orderInvoiceDetail = await OrderInvoiceDetail.findByPk(invoiceId);
      if (orderInvoiceDetail) {
        res.status(200).json(orderInvoiceDetail);
      } else {
        res.status(404).json({ message: 'Order invoice detail not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving order invoice detail', error });
    }
  }

  static async createOrderInvoiceDetail(req: Request, res: Response): Promise<void> {
    try {
      const { ewayBillNumber, invoiceSent, createdAt, updatedAt, orderId, doNumber } = req.body;
      const newOrderInvoiceDetail = await OrderInvoiceDetail.create({
        ewayBillNumber,
        invoiceSent,
        createdAt,
        updatedAt,
        orderId,
        doNumber,
      });
      res.status(201).json(newOrderInvoiceDetail);
    } catch (error) {
      res.status(500).json({ message: 'Error creating order invoice detail', error });
    }
  }

  static async updateOrderInvoiceDetail(req: Request, res: Response): Promise<void> {
    try {
      const invoiceId = parseInt(req.params.id);
      const { ewayBillNumber, invoiceSent, createdAt, updatedAt, orderId, doNumber } = req.body;
      const orderInvoiceDetail = await OrderInvoiceDetail.findByPk(invoiceId);
      if (orderInvoiceDetail) {
        orderInvoiceDetail.ewayBillNumber = ewayBillNumber;
        orderInvoiceDetail.invoiceSent = invoiceSent;
        orderInvoiceDetail.createdAt = createdAt;
        orderInvoiceDetail.updatedAt = updatedAt;
        orderInvoiceDetail.orderId = orderId;
        orderInvoiceDetail.doNumber = doNumber;
        await orderInvoiceDetail.save();
        res.status(200).json({ message: 'Order invoice detail updated successfully' });
      } else {
        res.status(404).json({ message: 'Order invoice detail not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating order invoice detail', error });
    }
  }

  static async deleteOrderInvoiceDetail(req: Request, res: Response): Promise<void> {
    try {
      const invoiceId = parseInt(req.params.id);
      const orderInvoiceDetail = await OrderInvoiceDetail.findByPk(invoiceId);
      if (orderInvoiceDetail) {
        await orderInvoiceDetail.destroy();
        res.status(200).json({ message: 'Order invoice detail deleted successfully' });
      } else {
        res.status(404).json({ message: 'Order invoice detail not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting order invoice detail', error });
    }
  }
}
