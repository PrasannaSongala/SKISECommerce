//src/routes/inventoryRoutes.ts

import { Router } from 'express';
import * as inventoryController from '../controllers/inventoryController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: API for managing inventory items
 */

/**
 * @swagger
 * /inventory:
 *   post:
 *     summary: Create a new inventory item
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Inventory created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', inventoryController.createInventory);

/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Retrieve all inventory items
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: List of all inventories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventory'
 *       500:
 *         description: Internal server error
 */
router.get('/', inventoryController.getAllInventories);

/**
 * @swagger
 * /inventory/{id}:
 *   get:
 *     summary: Retrieve an inventory item by ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the inventory item to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory item retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       404:
 *         description: Inventory not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', inventoryController.getInventoryById);

/**
 * @swagger
 * /inventory/{id}:
 *   put:
 *     summary: Update an inventory item by ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the inventory item to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Inventory updated successfully
 *       404:
 *         description: Inventory not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', inventoryController.updateInventory);

/**
 * @swagger
 * /inventory/{id}:
 *   delete:
 *     summary: Delete an inventory item by ID
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the inventory item to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory deleted successfully
 *       404:
 *         description: Inventory not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', inventoryController.deleteInventory);

export default router;

