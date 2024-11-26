import { Request, Response } from 'express';
import Product from '../models/product'; // Import the Product model

// Create  new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      imageLink,
      description,
      primaryRate,
      cgstPercent,
      igstPercent,
      sgstPercent,
      conversionRatio,
      hsnCode,
      categoryId,
      brandId,
      inventoryId,
      locationId
    } = req.body;

    const product = await Product.create({
      name,
      imageLink,
      description,
      primaryRate,
      cgstPercent,
      igstPercent,
      sgstPercent,
      conversionRatio,
      hsnCode,
      categoryId,
      brandId,
      inventoryId,
      locationId
    });

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error creating product', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error });
    }
  }
};

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error });
    }
  }
};

// Get single product by ID
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching product', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error });
    }
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    imageLink,
    description,
    primaryRate,
    cgstPercent,
    igstPercent,
    sgstPercent,
    conversionRatio,
    hsnCode,
    categoryId,
    brandId,
    inventoryId,
    locationId
  } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update({
        name,
        imageLink,
        description,
        primaryRate,
        cgstPercent,
        igstPercent,
        sgstPercent,
        conversionRatio,
        hsnCode,
        categoryId,
        brandId,
        inventoryId,
        locationId
      });
      res.status(200).json({ message: 'Product updated successfully', product });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error updating product', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error });
    }
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update({ isDeleted: 1 });
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error });
    }
  }
};

