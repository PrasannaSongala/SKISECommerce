import express from 'express';
import { 
  createOrderDispatchDetail, 
  getAllOrderDispatchDetails, 
  getOrderDispatchDetailById, 
  updateOrderDispatchDetail, 
  deleteOrderDispatchDetail 
} from '../controllers/orderDispatchDetailController';

const router = express.Router();

router.post('/', createOrderDispatchDetail);
router.get('/', getAllOrderDispatchDetails);
router.get('/:id', getOrderDispatchDetailById);
router.put('/:id', updateOrderDispatchDetail);
router.delete('/:id', deleteOrderDispatchDetail);

export default router;
