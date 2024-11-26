import { Router } from 'express';
import * as inventoryListController from '../controllers/inventoryListController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: InventoryList
 *   description: API for managing inventory list items
 */

// Route to create inventory list item
router.post('/', inventoryListController.createInventoryList);

// Route to get all inventory list items
router.get('/', inventoryListController.getAllInventoryLists);

// Route to get a single inventory list item by ID
router.get('/:id', inventoryListController.getInventoryListById);

// Route to update an inventory list item by ID
router.put('/:id', inventoryListController.updateInventoryList);

// Route to delete an inventory list item by ID
router.delete('/:id', inventoryListController.deleteInventoryList);

export default router;
