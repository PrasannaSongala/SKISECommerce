import { Request, Response, NextFunction } from 'express';
import InventoryList from '../models/inventoryList';

// Create a new inventory list item
export const createInventoryList = async (req: Request, res: Response, next: NextFunction) => {
  const { name, brandId, categoryId, locationId } = req.body;

  try {
    const newItem = await InventoryList.create({
      name,
      brandId,
      categoryId,
      locationId,
    });
    res.status(201).json(newItem);
  } catch (error) {
    next(error);  //  error handling middleware
  }
};

// Get all inventory list items
export const getAllInventoryLists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await InventoryList.findAll();
    res.status(200).json(items);
  } catch (error) {
    next(error);  
  }
};

// Get a single inventory list item by ID
export const getInventoryListById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const item = await InventoryList.findByPk(id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Inventory list item not found' });
    }
  } catch (error) {
    next(error);  
  }
};

// Update an inventory list item by ID
export const updateInventoryList = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, brandId, categoryId, locationId } = req.body;

  try {
    const item = await InventoryList.findByPk(id);
    if (item) {
      item.name = name;
      item.brandId = brandId;
      item.categoryId = categoryId;
      item.locationId = locationId;
      await item.save();
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Inventory list item not found' });
    }
  } catch (error) {
    next(error);  
  }
};

// Delete an inventory list item by ID
export const deleteInventoryList = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const item = await InventoryList.findByPk(id);
    if (item) {
      await item.destroy();
      res.status(200).json({ message: 'Inventory list item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Inventory list item not found' });
    }
  } catch (error) {
    next(error);  
  }
};
