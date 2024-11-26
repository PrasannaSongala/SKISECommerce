// src/controllers/productDimensionController.ts
import { Request, Response } from 'express';
import ProductDimension from '../models/productdimension';

// Create  product dimension
export const createProductDimension = async (req: Request, res: Response) => {
  try {
    const { value, productDimensionId, productId } = req.body;

    const productDimension = await ProductDimension.create({
      value,
      productDimensionId,
      productId,
    });

    res.status(201).json(productDimension);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product dimension', error });
  }
};

// Get all product dimensions
export const getAllProductDimensions = async (req: Request, res: Response) => {
  try {
    const productDimensions = await ProductDimension.findAll();
    res.status(200).json(productDimensions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product dimensions', error });
  }
};

// Get product dimension by ID
export const getProductDimensionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const productDimension = await ProductDimension.findByPk(id);
    if (productDimension) {
      res.status(200).json(productDimension);
    } else {
      res.status(404).json({ message: 'Product dimension not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product dimension', error });
  }
};

// Update product dimension by ID
export const updateProductDimension = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { value, productDimensionId, productId } = req.body;

  try {
    const [updated] = await ProductDimension.update(
      { value, productDimensionId, productId },
      {
        where: { id },
      }
    );

    if (updated) {
      const updatedProductDimension = await ProductDimension.findByPk(id);
      res.status(200).json(updatedProductDimension);
    } else {
      res.status(404).json({ message: 'Product dimension not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating product dimension', error });
  }
};

// Delete product dimension by ID
export const deleteProductDimension = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await ProductDimension.destroy({
      where: { id },
    });

    if (deleted) {
      res.status(200).json({ message: 'Product dimension deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product dimension not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product dimension', error });
  }
};

