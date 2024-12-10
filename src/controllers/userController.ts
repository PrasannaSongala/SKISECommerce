import { Request, Response } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../models/user';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

//  get the current timestamp in ISO format
const getCurrentTimestamp = (): string => new Date().toISOString();

// Create a new user
export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { mobileNumber, fullName, roleId, isMobileConfirmed } = req.body;

    
    const newUser = {
      id: uuidv4(),
      mobileNumber,
      fullName,
      roleId,
      isMobileConfirmed: isMobileConfirmed || false, // Default value for isMobileConfirmed
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp(),
      isDeleted: false, // Default value
    };

    await createUser(newUser);
    res.status(201).json({ message: 'User created successfully', userId: newUser.id });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating user',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

// Retrieve all users
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving users',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

// Retrieve a single user by ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving user',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

// Update a user by ID
export const editUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { fullName, roleId, isMobileConfirmed } = req.body;

    const updatedUser = {
      fullName,
      roleId,
      isMobileConfirmed,
      updatedAt: getCurrentTimestamp(),
    };

    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    await updateUser(id, updatedUser);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating user',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

// Delete a user by ID 
export const removeUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { deletedBy } = req.body;
    const deletedAt = getCurrentTimestamp();

    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    await deleteUser(id, deletedBy, deletedAt);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting user',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};
