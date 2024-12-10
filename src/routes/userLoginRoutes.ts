// src/routes/userLoginRoutes.ts
import express from 'express';
import {
  addUserLogin,
  getUserLogin,
  editUserLogin,
  removeUserLogin,
} from '../controllers/userLoginController';

const router = express.Router();

router.post('/', addUserLogin);
router.get('/:userName', getUserLogin);
router.put('/:userName', editUserLogin);
router.delete('/:userName', removeUserLogin);

export default router;
