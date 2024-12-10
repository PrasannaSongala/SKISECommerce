// src/controllers/userLoginController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserLogin } from '../models/userLogin';
import { User } from '../models/user';

// Create a new login record
export const addUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName, password, userId } = req.body;

    //  if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newLogin = {
      userName,
      password: hashedPassword,
      salt,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await UserLogin.create(newLogin);
    res.status(201).json({ message: 'User login created successfully', userName: result.userName });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user login', error: error instanceof Error ? error.message : error });
  }
};

// Retrieve login details by username
export const getUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName } = req.params;
    const login = await UserLogin.findByPk(userName, {
      attributes: ['userName', 'createdAt', 'updatedAt', 'userId'], 
    });

    if (!login) {
      res.status(404).json({ message: 'User login not found' });
      return;
    }

    res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user login', error: error instanceof Error ? error.message : error });
  }
};

// Update a login record
export const editUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName } = req.params;
    const { password, userId } = req.body;

    const login = await UserLogin.findByPk(userName);
    if (!login) {
      res.status(404).json({ message: 'User login not found' });
      return;
    }

    const updatedData: Partial<typeof login> = {
      updatedAt: new Date(),
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(password, salt);
      updatedData.salt = salt;
    }

    if (userId) {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ message: 'Associated user not found' });
        return;
      }
      updatedData.userId = userId;
    }

    await UserLogin.update(updatedData, { where: { userName } });
    res.status(200).json({ message: 'User login updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user login', error: error instanceof Error ? error.message : error });
  }
};

// Delete a login record
export const removeUserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName } = req.params;
    const deletedCount = await UserLogin.destroy({ where: { userName } });
    if (deletedCount === 0) {
      res.status(404).json({ message: 'User login not found' });
      return;
    }
    res.status(200).json({ message: 'User login deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user login', error: error instanceof Error ? error.message : error });
  }
};
