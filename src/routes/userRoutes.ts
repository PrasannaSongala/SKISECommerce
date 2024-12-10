import { Router } from 'express';
import { addUser, getUsers, getUser, editUser, removeUser } from '../controllers/userController';

const router = Router();

// Define the routes for user CRUD operations
router.post('/users', addUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', removeUser);


export default router;
