// src/controllers/categoryTypesController.ts

import { Request, Response } from 'express';
import CategoryTypes from '../models/categorytypes';
import { ValidationError } from 'sequelize'; // Importing sequelize validation error for specific error handling
import { Op } from 'sequelize';

// Get all category types
export const getAllCategoryTypes = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryTypes = await CategoryTypes.findAll();
    res.json(categoryTypes);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get single category type by ID
export const getCategoryTypeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryType = await CategoryTypes.findByPk(req.params.id);
    if (!categoryType) {
      res.status(404).json({ message: 'Category type not found' });
      return;
    }
    res.json(categoryType);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Create new category type
export const createCategoryType = async (req: Request, res: Response): Promise<void> => {
  const { type, name, displayRate, primaryDimension, imageUrl } = req.body;

  // Validate required fields
  if (!type || !name || !displayRate) {
    res.status(400).json({ message: 'Type, name, and displayRate are required fields' });
    return;
  }

  //  if category type with same name or type already exists
  try {
    const existingCategoryType = await CategoryTypes.findOne({
      where: {
        [Op.or]: [{ name }, { type }] // Checks if either name or type exists
      }
    });
    
    if (existingCategoryType) {
      res.status(400).json({ message: 'Category type with the same name or type already exists' });
      return;
    }

    // Create new category type
    const newCategoryType = await CategoryTypes.create({ type, name, displayRate, primaryDimension, imageUrl });
    res.status(201).json(newCategoryType);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.errors.map(e => e.message).join(', ') });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Update existing category type
export const updateCategoryType = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryType = await CategoryTypes.findByPk(req.params.id);
    if (!categoryType) {
      res.status(404).json({ message: 'Category type not found' });
      return;
    }

    // Validate required fields 
    const { type, name, displayRate } = req.body;
    if ((type && !name) || (name && !type)) {
      res.status(400).json({ message: 'Both type and name must be provided together.' });
      return;
    }

    // if category type with same name or type already exists
    const existingCategoryType = await CategoryTypes.findOne({
      where: {
        [Op.or]: [{ name: req.body.name }, { type: req.body.type }],
        [Op.not]: [{ id: req.params.id }] 
      }
    });
    
    if (existingCategoryType) {
      res.status(400).json({ message: 'Category type with the same name or type already exists' });
      return;
    }

    // Update category type
    await categoryType.update(req.body);
    res.json(categoryType);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.errors.map(e => e.message).join(', ') });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Delete (disable) a category type
export const deleteCategoryType = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryType = await CategoryTypes.findByPk(req.params.id);
    if (!categoryType) {
      res.status(404).json({ message: 'Category type not found' });
      return;
    }

    // Disable the category type instead of deleting it
    await categoryType.update({ isDisabled: 1 });
    res.json({ message: 'Category type disabled successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
