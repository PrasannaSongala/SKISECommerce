//src/controllers/userSessionController.ts

import { Request, Response } from 'express';
import { UserSession } from '../models/userSession';
import { User } from '../models/user';
import { UserSessionCreationAttributes } from '../models/userSession'; 

/**
 * Create a new session
 */
export const createSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sid, expires, data, userId } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;  
    }

    const session = await UserSession.create({
        sid,
        expires,
        data,
        userId,
      } as UserSessionCreationAttributes);
      
          res.status(201).json(session);  
  } catch (error) {
    res.status(500).json({ error: 'Failed to create session', details: error });
  }
};

/**
 * Get all sessions
 */
export const getSessions = async (req: Request, res: Response): Promise<void> => {
  try {
    const sessions = await UserSession.findAll({
      include: [{ model: User, as: 'user' }],
    });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve sessions', details: error });
  }
};

/**
 * Get a session by ID
 */
export const getSessionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sid } = req.params;
    const session = await UserSession.findByPk(sid, {
      include: [{ model: User, as: 'user' }],
    });

    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve session', details: error });
  }
};

/**
 * Update a session by ID
 */
export const updateSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sid } = req.params;
    const { expires, data, userId } = req.body;

    const session = await UserSession.findByPk(sid);
    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }

    if (userId) {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
    }

    session.expires = expires || session.expires;
    session.data = data || session.data;
    session.userId = userId || session.userId;
    await session.save();

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update session', details: error });
  }
};

/**
 * Delete a session by ID
 */
export const deleteSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sid } = req.params;

    const session = await UserSession.findByPk(sid);
    if (!session) {
      res.status(404).json({ error: 'Session not found' });
      return;
    }

    await session.destroy();
    res.status(200).json({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete session', details: error });
  }
};
