import express from 'express';
import {
  addAddress,
  getAddresses,
  getAddress,
  editAddress,
  removeAddress,
} from '../controllers/userAddressController';

const router = express.Router();

router.post('/', addAddress);
router.get('/:userId', getAddresses);
router.get('/address/:id', getAddress);
router.put('/:id', editAddress);
router.delete('/:id', removeAddress);

export default router;



