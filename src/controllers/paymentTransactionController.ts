//src/controllers/paymentTransactionController.ts

import { Request, Response } from 'express';
import PaymentTransaction from '../models/paymentTransaction';

export const createPaymentTransaction = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      paymentDate,
      updatedBy,
      paymentMode,
      transactionCredit,
      transactionNumber,
      orderId,
    } = req.body;

    const transactionCreditBoolean = transactionCredit === 1 ? true : false;

    // Create a new payment transaction
    const newTransaction = await PaymentTransaction.create({
      amount,
      paymentDate,
      updatedBy,
      paymentMode,
      transactionCredit: transactionCreditBoolean,
      transactionNumber,
      orderId,
      isDeleted: false,  
      createdAt: new Date(), 
      updatedAt: new Date(), 
    });

    res.status(201).json(newTransaction); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment transaction', error });
  }
};

export const getPaymentTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await PaymentTransaction.findAll({
      where: {
        isDeleted: false,  
      },
    });
    res.status(200).json(transactions); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment transactions', error });
  }
};

export const getPaymentTransactionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Find payment transaction by primary key (ID)
    const transaction = await PaymentTransaction.findByPk(id);

    if (!transaction || transaction.isDeleted) {
      return res.status(404).json({ message: 'Payment transaction not found' });
    }

    res.status(200).json(transaction); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment transaction', error });
  }
};

export const updatePaymentTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transaction = await PaymentTransaction.findByPk(id);

    if (!transaction || transaction.isDeleted) {
      return res.status(404).json({ message: 'Payment transaction not found' });
    }

    const {
      amount,
      paymentDate,
      updatedBy,
      paymentMode,
      transactionCredit,
      transactionNumber,
      orderId,
    } = req.body;

    // Ensure transactionCredit is treated as a boolean
    const transactionCreditBoolean = transactionCredit === 1 ? true : false;

    // Update transaction fields
    transaction.amount = amount ?? transaction.amount;
    transaction.paymentDate = paymentDate ?? transaction.paymentDate;
    transaction.updatedBy = updatedBy ?? transaction.updatedBy;
    transaction.paymentMode = paymentMode ?? transaction.paymentMode;
    transaction.transactionCredit = transactionCreditBoolean ?? transaction.transactionCredit;
    transaction.transactionNumber = transactionNumber ?? transaction.transactionNumber;
    transaction.orderId = orderId ?? transaction.orderId;
    transaction.updatedAt = new Date(); 

    await transaction.save(); 
    res.status(200).json(transaction); 
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment transaction', error });
  }
};

export const deletePaymentTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transaction = await PaymentTransaction.findByPk(id);

    if (!transaction || transaction.isDeleted) {
      return res.status(404).json({ message: 'Payment transaction not found' });
    }

    transaction.isDeleted = true;
    await transaction.save();

    res.status(200).json({ message: 'Payment transaction deleted successfully' }); // Successful deletion response
  } catch (error) {
    res.status(500).json({ message: 'Error deleting payment transaction', error });
  }
};

export const restorePaymentTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transaction = await PaymentTransaction.findByPk(id);

    if (!transaction || !transaction.isDeleted) {
      return res.status(404).json({ message: 'Payment transaction not found or already active' });
    }

    // Restore the soft deleted transaction
    transaction.isDeleted = false;
    await transaction.save();

    res.status(200).json({ message: 'Payment transaction restored successfully' }); 
  } catch (error) {
    res.status(500).json({ message: 'Error restoring payment transaction', error });
  }
};
