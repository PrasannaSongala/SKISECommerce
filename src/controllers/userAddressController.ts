// src/controllers/userAddressController.ts
import { Request, Response } from 'express';
import { UserAddress } from '../models/useraddress'; 
import { User } from '../models/user'; 

// Create a new address
export const addAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.body;
    const user = await User.findByPk(userId); // Check if user exists
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const newAddress = {
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const result = await UserAddress.create(newAddress); 
    res.status(201).json({ message: 'Address created successfully', addressId: result.id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating address', error: error instanceof Error ? error.message : error });
  }
};

// Retrieve all addresses for a user
export const getAddresses = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const addresses = await UserAddress.findAll({ where: { userId } });
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving addresses', error: error instanceof Error ? error.message : error });
  }
};

// Retrieve a single address by ID
export const getAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const address = await UserAddress.findByPk(id);
    if (!address) {
      res.status(404).json({ message: 'Address not found' });
      return;
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving address', error: error instanceof Error ? error.message : error });
  }
};

// Update an address
export const editAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedAddress = {
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    const [updatedCount] = await UserAddress.update(updatedAddress, { where: { id } });
    if (updatedCount === 0) {
      res.status(404).json({ message: 'Address not found' });
      return;
    }

    res.status(200).json({ message: 'Address updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating address', error: error instanceof Error ? error.message : error });
  }
};

// Delete an address
export const removeAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCount = await UserAddress.destroy({ where: { id } });
    if (deletedCount === 0) {
      res.status(404).json({ message: 'Address not found' });
      return;
    }
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting address', error: error instanceof Error ? error.message : error });
  }
};
