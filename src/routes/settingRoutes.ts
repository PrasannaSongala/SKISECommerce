import { Router } from 'express';
import * as settingController from '../controllers/settingController';

const router = Router();

router.get('/settings', settingController.getAllSettings);
router.get('/settings/:id', settingController.getSettingById);
router.post('/settings', settingController.createSetting);
router.put('/settings/:id', settingController.updateSetting);
router.delete('/settings/:id', settingController.deleteSetting);

export default router;
