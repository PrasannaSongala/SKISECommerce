import { Request, Response } from 'express';
import { UserDetail } from '../models/userDetail';
import { User } from '../models/user';

// Create a new user detail
export const createUserDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.body;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const newUserDetail = await UserDetail.create(req.body);
    res.status(201).json({ message: 'User detail created successfully', data: newUserDetail });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user detail', error: error instanceof Error ? error.message : error });
  }
};

// Get all user details
export const getAllUserDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const userDetails = await UserDetail.findAll({ include: [{ model: User, as: 'user' }] });
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details', error: error instanceof Error ? error.message : error });
  }
};

// Get user detail by ID
export const getUserDetailById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userDetail = await UserDetail.findByPk(id, { include: [{ model: User, as: 'user' }] });

    if (!userDetail) {
      res.status(404).json({ message: 'User detail not found' });
      return;
    }

    res.status(200).json(userDetail);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user detail', error: error instanceof Error ? error.message : error });
  }
};

// Update user detail
export const updateUserDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const [updatedCount] = await UserDetail.update(req.body, { where: { id } });

    if (updatedCount === 0) {
      res.status(404).json({ message: 'User detail not found' });
      return;
    }

    res.status(200).json({ message: 'User detail updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user detail', error: error instanceof Error ? error.message : error });
  }
};

// Delete user detail
export const deleteUserDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCount = await UserDetail.destroy({ where: { id } });

    if (deletedCount === 0) {
      res.status(404).json({ message: 'User detail not found' });
      return;
    }

    res.status(200).json({ message: 'User detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user detail', error: error instanceof Error ? error.message : error });
  }
};
