//src/controllers/inventoryController.ts

import { Request, Response } from 'express';
import Inventory from '../models/inventoryModel'; 

export const createInventory = async (req: Request, res: Response) => {
  const { name, quantity, price } = req.body;
  try {
    const inventory = await Inventory.create({ name, quantity, price });
    res.status(201).json({ message: 'Inventory created successfully', inventory });
  } catch (error) {
    res.status(500).json({ message: 'Error creating inventory', error });
  }
};

export const getAllInventories = async (req: Request, res: Response) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json(inventories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventories', error });
  }
};

export const getInventoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventory = await Inventory.findByPk(id);
    if (inventory) {
      res.status(200).json(inventory);
    } else {
      res.status(404).json({ message: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory', error });
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  try {
    const inventory = await Inventory.findByPk(id);
    if (inventory) {
      inventory.name = name;
      inventory.quantity = quantity;
      inventory.price = price;
      await inventory.save();
      res.status(200).json({ message: 'Inventory updated successfully', inventory });
    } else {
      res.status(404).json({ message: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating inventory', error });
  }
};

export const deleteInventory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const inventory = await Inventory.findByPk(id);
    if (inventory) {
      await inventory.destroy();
      res.status(200).json({ message: 'Inventory deleted successfully' });
    } else {
      res.status(404).json({ message: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting inventory', error });
  }
};
