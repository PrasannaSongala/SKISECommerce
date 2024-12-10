import { Router, Request, Response, NextFunction } from 'express';
import { getAllOrderDispatchItems, getOrderDispatchItemById, createOrderDispatchItem, updateOrderDispatchItem, deleteOrderDispatchItem } from '../controllers/OrderDispatchItemController';

const router: Router = Router();

// Route to get all order dispatch items
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getAllOrderDispatchItems(req, res);
  } catch (error) {
    next(error); 
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await getOrderDispatchItemById(req, res);
  } catch (error) {
    next(error); 
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createOrderDispatchItem(req, res);
  } catch (error) {
    next(error); 
  }
});

//  update an existing order dispatch item by ID
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateOrderDispatchItem(req, res);
  } catch (error) {
    next(error); 
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteOrderDispatchItem(req, res);
  } catch (error) {
    next(error); 
  }
});

export default router;
