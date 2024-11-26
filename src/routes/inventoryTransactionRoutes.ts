import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from '../controllers/inventoryTransactionController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: InventoryTransactions
 *   description: Operations related to inventory transactions.
 */

/**
 * @swagger
 * /api/inventory-transactions:
 *   get:
 *     summary: Get all inventory transactions
 *     tags: [InventoryTransactions]
 *     responses:
 *       200:
 *         description: List of all transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The transaction ID
 *                   sellerId:
 *                     type: integer
 *                   inventoryId:
 *                     type: integer
 *                   invoiceId:
 *                     type: string
 *                   purchaseDate:
 *                     type: string
 *                     format: date-time
 *                   quantity:
 *                     type: number
 *                   totalCost:
 *                     type: number
 *                   updatedBy:
 *                     type: string
 */
router.get('/', asyncHandler(getAllTransactions));

/**
 * @swagger
 * /api/inventory-transactions/{id}:
 *   get:
 *     summary: Get a specific inventory transaction by ID
 *     tags: [InventoryTransactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The transaction ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The transaction details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 sellerId:
 *                   type: integer
 *                 inventoryId:
 *                   type: integer
 *                 invoiceId:
 *                   type: string
 *                 purchaseDate:
 *                   type: string
 *                   format: date-time
 *                 quantity:
 *                   type: number
 *                 totalCost:
 *                   type: number
 *                 updatedBy:
 *                   type: string
 *       404:
 *         description: Transaction not found
 */
router.get('/:id', asyncHandler(getTransactionById));

/**
 * @swagger
 * /api/inventory-transactions:
 *   post:
 *     summary: Create a new inventory transaction
 *     tags: [InventoryTransactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sellerId:
 *                 type: integer
 *               inventoryId:
 *                 type: integer
 *               invoiceId:
 *                 type: string
 *               purchaseDate:
 *                 type: string
 *                 format: date-time
 *               quantity:
 *                 type: number
 *               productCost:
 *                 type: number
 *               totalCost:
 *                 type: number
 *               updatedBy:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction successfully created
 *       400:
 *         description: Invalid input data
 */
router.post('/', asyncHandler(createTransaction));

/**
 * @swagger
 * /api/inventory-transactions/{id}:
 *   put:
 *     summary: Update an existing inventory transaction
 *     tags: [InventoryTransactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The transaction ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sellerId:
 *                 type: integer
 *               inventoryId:
 *                 type: integer
 *               invoiceId:
 *                 type: string
 *               purchaseDate:
 *                 type: string
 *                 format: date-time
 *               quantity:
 *                 type: number
 *               productCost:
 *                 type: number
 *               totalCost:
 *                 type: number
 *               updatedBy:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transaction successfully updated
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Transaction not found
 */
router.put('/:id', asyncHandler(updateTransaction));

/**
 * @swagger
 * /api/inventory-transactions/{id}:
 *   delete:
 *     summary: Delete a specific inventory transaction
 *     tags: [InventoryTransactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The transaction ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Transaction successfully deleted
 *       404:
 *         description: Transaction not found
 */
router.delete('/:id', asyncHandler(deleteTransaction));

export default router;
