//src/routes/userSessionRoutes.ts

import express from 'express';
import {
  createSession,
  getSessions,
  getSessionById,
  updateSession,
  deleteSession
} from '../controllers/userSessionController';

const router = express.Router();

router.post('/sessions', createSession);
router.get('/sessions', getSessions);
router.get('/sessions/:sid', getSessionById);
router.put('/sessions/:sid', updateSession);
router.delete('/sessions/:sid', deleteSession);

export default router;
