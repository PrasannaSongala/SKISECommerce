import { Request, Response } from 'express';
import InventoryList from '../models/inventoryList';

/**
 * @swagger
 * /inventorylist:
 *   post:
 *     summary: Create a new inventory list item
 *     tags: [InventoryList]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - brandId
 *               - categoryId
 *               - locationId
 *             properties:
 *               name:
 *                 type: string
 *               brandId:
 *                 type: integer
 *               categoryId:
 *                 type: integer
 *               locationId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inventory list item created successfully
 *       500:
 *         description: Internal server error
 */
export const createInventoryList = async (req: Request, res: Response) => {
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
    res.status(500).json({ message: 'Error creating inventory list item', error });
  }
};

/**
 * @swagger
 * /inventorylist:
 *   get:
 *     summary: Retrieve all inventory list items
 *     tags: [InventoryList]
 *     responses:
 *       200:
 *         description: List of all inventory items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/InventoryList'
 *       500:
 *         description: Internal server error
 */
export const getAllInventoryLists = async (req: Request, res: Response) => {
  try {
    const items = await InventoryList.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory list items', error });
  }
};

/**
 * @swagger
 * /inventorylist/{id}:
 *   get:
 *     summary: Retrieve an inventory list item by ID
 *     tags: [InventoryList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the inventory list item to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory list item retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InventoryList'
 *       404:
 *         description: Inventory list item not found
 *       500:
 *         description: Internal server error
 */
export const getInventoryListById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await InventoryList.findByPk(id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Inventory list item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory list item', error });
  }
};

/**
 * @swagger
 * /inventorylist/{id}:
 *   put:
 *     summary: Update an inventory list item by ID
 *     tags: [InventoryList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the inventory list item to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brandId:
 *                 type: integer
 *               categoryId:
 *                 type: integer
 *               locationId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Inventory list item updated successfully
 *       404:
 *         description: Inventory list item not found
 *       500:
 *         description: Internal server error
 */
export const updateInventoryList = async (req: Request, res: Response) => {
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
    res.status(500).json({ message: 'Error updating inventory list item', error });
  }
};

/**
 * @swagger
 * /inventorylist/{id}:
 *   delete:
 *     summary: Delete an inventory list item by ID
 *     tags: [InventoryList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the inventory list item to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inventory list item deleted successfully
 *       404:
 *         description: Inventory list item not found
 *       500:
 *         description: Internal server error
 */
export const deleteInventoryList = async (req: Request, res: Response) => {
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
    res.status(500).json({ message: 'Error deleting inventory list item', error });
  }
};
