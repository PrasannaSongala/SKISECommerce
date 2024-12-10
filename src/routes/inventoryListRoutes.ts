import { Router } from 'express';
import * as inventoryListController from '../controllers/inventoryListController';

const router = Router();


router.post('/', inventoryListController.createInventoryList);
router.get('/', inventoryListController.getAllInventoryLists);
router.get('/:id', inventoryListController.getInventoryListById);
router.put('/:id', inventoryListController.updateInventoryList);
router.delete('/:id', inventoryListController.deleteInventoryList);

export default router;
