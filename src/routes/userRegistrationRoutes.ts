// src/routes/userRegistrationRoutes.ts
import { Router } from 'express';
import * as userRegistrationController from '../controllers/userRegistrationController';

const router = Router();

router.post('/', userRegistrationController.addUserRegistration);
router.get('/', userRegistrationController.getAllUserRegistrations);
router.get('/:id', userRegistrationController.getUserRegistration);
router.put('/:id', userRegistrationController.editUserRegistration);
router.delete('/:id', userRegistrationController.removeUserRegistration);

export default router;
