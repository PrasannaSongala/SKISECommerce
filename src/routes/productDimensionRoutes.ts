// src/routes/productDimensionRoutes.ts
import { Router } from 'express';
import {
  createProductDimension,
  getAllProductDimensions,
  getProductDimensionById,
  updateProductDimension,
  deleteProductDimension,
} from '../controllers/productDimensionController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: ProductDimensions
 *   description: API to manage product dimensions
 */

/**
 * @swagger
 * /productdimensions:
 *   post:
 *     summary: Create a new product dimension
 *     tags: [ProductDimensions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               value:
 *                 type: string
 *                 description: Value of the product dimension
 *               productDimensionId:
 *                 type: integer
 *                 description: Product dimension identifier
 *               productId:
 *                 type: integer
 *                 description: Product identifier
 *     responses:
 *       201:
 *         description: Product dimension created successfully
 *       500:
 *         description: Error creating product dimension
 */
router.post('/', createProductDimension);

/**
 * @swagger
 * /productdimensions:
 *   get:
 *     summary: Get all product dimensions
 *     tags: [ProductDimensions]
 *     responses:
 *       200:
 *         description: List of all product dimensions
 *       500:
 *         description: Error fetching product dimensions
 */
router.get('/', getAllProductDimensions);

/**
 * @swagger
 * /productdimensions/{id}:
 *   get:
 *     summary: Get a product dimension by ID
 *     tags: [ProductDimensions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product dimension ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product dimension found
 *       404:
 *         description: Product dimension not found
 *       500:
 *         description: Error fetching product dimension
 */
router.get('/:id', getProductDimensionById);

/**
 * @swagger
 * /productdimensions/{id}:
 *   put:
 *     summary: Update a product dimension by ID
 *     tags: [ProductDimensions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product dimension ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               value:
 *                 type: string
 *                 description: Value of the product dimension
 *               productDimensionId:
 *                 type: integer
 *                 description: Product dimension identifier
 *               productId:
 *                 type: integer
 *                 description: Product identifier
 *     responses:
 *       200:
 *         description: Product dimension updated successfully
 *       404:
 *         description: Product dimension not found
 *       500:
 *         description: Error updating product dimension
 */
router.put('/:id', updateProductDimension);

/**
 * @swagger
 * /productdimensions/{id}:
 *   delete:
 *     summary: Delete a product dimension by ID
 *     tags: [ProductDimensions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product dimension ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product dimension deleted successfully
 *       404:
 *         description: Product dimension not found
 *       500:
 *         description: Error deleting product dimension
 */
router.delete('/:id', deleteProductDimension);

export default router;
