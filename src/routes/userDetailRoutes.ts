import express from 'express';
import {
  createUserDetail,
  getAllUserDetails,
  getUserDetailById,
  updateUserDetail,
  deleteUserDetail,
} from '../controllers/userDetailController';

const router = express.Router();

router.post('/', createUserDetail);
router.get('/', getAllUserDetails);
router.get('/:id', getUserDetailById);
router.put('/:id', updateUserDetail);
router.delete('/:id', deleteUserDetail);

export default router;
