//src/controllers/cartController.ts

import { Request, Response } from 'express';
import { Cart } from '../models/cart';
import { ProductList } from '../models/product';
import { User } from '../models/user';

// Create a new cart item
export const createCartItem = async (req: Request, res: Response) => {
  try {
    const { quantity, quantityUnit, productId, userId } = req.body;
    const cartItem = await Cart.create({ quantity, quantityUnit, productId, userId });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating cart item', error });
  }
};

// Get all cart items
export const getAllCartItems = async (req: Request, res: Response) => {
  try {
    const cartItems = await Cart.findAll({
      include: [
        { model: ProductList, as: 'product' },
        { model: User, as: 'user' },
      ],
    });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart items', error });
  }
};

// Get a cart item by ID
export const getCartItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findOne({
      where: { id },
      include: [
        { model: ProductList, as: 'product' },
        { model: User, as: 'user' },
      ],
    });
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart item', error });
  }
};

// Update a cart item by ID
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const [updatedRows] = await Cart.update(updateData, { where: { id }, returning: true });
    if (!updatedRows) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    const updatedCartItem = await Cart.findByPk(id);
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart item', error });
  }
};

// Delete a cart item by ID
export const deleteCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRows = await Cart.destroy({ where: { id } });
    if (!deletedRows) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart item', error });
  }
};
