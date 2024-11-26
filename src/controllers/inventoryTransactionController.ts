import { Request, Response } from 'express';
import InventoryTransaction from '../models/InventoryTransaction';

// Get all transactions
export const getAllTransactions = async (req: Request, res: Response) => {
    const transactions = await InventoryTransaction.findAll();
    res.status(200).json(transactions);
};

// Get transaction by ID
export const getTransactionById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transaction = await InventoryTransaction.findByPk(id);

    if (!transaction) {
        res.status(404).json({ message: 'Transaction not found' });
        return;
    }

    res.status(200).json(transaction);
};

// Create  new transaction
export const createTransaction = async (req: Request, res: Response) => {
    const transaction = await InventoryTransaction.create(req.body);
    res.status(201).json(transaction);
};

// Update  existing transaction
export const updateTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transaction = await InventoryTransaction.findByPk(id);

    if (!transaction) {
        res.status(404).json({ message: 'Transaction not found' });
        return;
    }

    await transaction.update(req.body);
    res.status(200).json(transaction);
};

// Delete transaction
export const deleteTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transaction = await InventoryTransaction.findByPk(id);

    if (!transaction) {
        res.status(404).json({ message: 'Transaction not found' });
        return;
    }

    await transaction.destroy();
    res.status(204).send();
};
