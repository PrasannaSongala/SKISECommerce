import { Request, Response } from 'express';
import CategoryTypes from '../models/CategoryTypes';

//  all category types
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

//  single category type by ID
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
  try {
    const { type, name, displayRate, primaryDimension, imageUrl } = req.body;
    const newCategoryType = await CategoryTypes.create({ type, name, displayRate, primaryDimension, imageUrl });
    res.status(201).json(newCategoryType);
  } catch (error: unknown) {
    if (error instanceof Error) {
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
    await categoryType.update(req.body);
    res.json(categoryType);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

//  delete (disable) a category type
export const deleteCategoryType = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryType = await CategoryTypes.findByPk(req.params.id);
    if (!categoryType) {
      res.status(404).json({ message: 'Category type not found' });
      return;
    }
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
