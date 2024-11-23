import { Request, Response } from 'express';
import CategoryDimension from '../models/CategoryDimension';

export const getAllCategoryDimensions = async (req: Request, res: Response): Promise<void> => {
  try {
    const dimensions = await CategoryDimension.findAll();
    res.status(200).json(dimensions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category dimensions.' });
  }
};

export const getCategoryDimensionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const dimension = await CategoryDimension.findByPk(id);
    if (!dimension) {
      res.status(404).json({ error: 'Category dimension not found.' });
      return;
    }
    res.status(200).json(dimension);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category dimension.' });
  }
};

export const createCategoryDimension = async (req: Request, res: Response): Promise<void> => {
  try {
    const { dimensionId, categoryId } = req.body;
    const newDimension = await CategoryDimension.create({ dimensionId, categoryId });
    res.status(201).json(newDimension);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category dimension.' });
  }
};

export const updateCategoryDimension = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { dimensionId, categoryId } = req.body;
    const dimension = await CategoryDimension.findByPk(id);
    if (!dimension) {
      res.status(404).json({ error: 'Category dimension not found.' });
      return;
    }
    await dimension.update({ dimensionId, categoryId });
    res.status(200).json(dimension);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category dimension.' });
  }
};

export const deleteCategoryDimension = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const dimension = await CategoryDimension.findByPk(id);
    if (!dimension) {
      res.status(404).json({ error: 'Category dimension not found.' });
      return;
    }
    await dimension.destroy();
    res.status(200).json({ message: 'Category dimension deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category dimension.' });
  }
};
