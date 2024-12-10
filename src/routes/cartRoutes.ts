import express, { Request, Response } from 'express';
import {
  createCartItem,
  getAllCartItems,
  getCartItemById,
  updateCartItem,
  deleteCartItem
} from '../controllers/cartController';

const router = express.Router();


router.post('/api/cart', async (req: Request, res: Response) => {
  await createCartItem(req, res);
});

router.get('/api/cart', async (req: Request, res: Response) => {
  await getAllCartItems(req, res);
});

router.get('/api/cart/:id', async (req: Request, res: Response) => {
  await getCartItemById(req, res);
});

router.put('/api/cart/:id', async (req: Request, res: Response) => {
  await updateCartItem(req, res);
});

router.delete('/api/cart/:id', async (req: Request, res: Response) => {
  await deleteCartItem(req, res);
});
router.get('/test', (req: Request, res: Response) => {
  res.send('Test route is working!');
});

export default router;
