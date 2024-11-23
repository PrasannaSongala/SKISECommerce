import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getAllCategoryDimensions,
  getCategoryDimensionById,
  createCategoryDimension,
  updateCategoryDimension,
  deleteCategoryDimension,
} from '../controllers/categoryDimensionController';

const router = Router();

router.get('/', asyncHandler(getAllCategoryDimensions));
router.get('/:id', asyncHandler(getCategoryDimensionById));
router.post('/', asyncHandler(createCategoryDimension));
router.put('/:id', asyncHandler(updateCategoryDimension));
router.delete('/:id', asyncHandler(deleteCategoryDimension));

export default router;

/**
 * @swagger
 * tags:
 *   name: CategoryDimensions
 *   description: API for managing category dimensions
 */

/**
 * @swagger
 * /category-dimensions:
 *   get:
 *     summary: Get all category dimensions
 *     tags: [CategoryDimensions]
 *     responses:
 *       200:
 *         description: A list of category dimensions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   dimensionId:
 *                     type: string
 *                   categoryId:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /category-dimensions/{id}:
 *   get:
 *     summary: Get a category dimension by ID
 *     tags: [CategoryDimensions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category dimension
 *     responses:
 *       200:
 *         description: The category dimension details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 dimensionId:
 *                   type: string
 *                 categoryId:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Category dimension not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /category-dimensions:
 *   post:
 *     summary: Create a new category dimension
 *     tags: [CategoryDimensions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dimensionId:
 *                 type: string
 *                 example: DIM123
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Category dimension created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 dimensionId:
 *                   type: string
 *                 categoryId:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /category-dimensions/{id}:
 *   put:
 *     summary: Update a category dimension
 *     tags: [CategoryDimensions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category dimension
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dimensionId:
 *                 type: string
 *                 example: DIM456
 *               categoryId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Category dimension updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 dimensionId:
 *                   type: string
 *                 categoryId:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Category dimension not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /category-dimensions/{id}:
 *   delete:
 *     summary: Delete a category dimension
 *     tags: [CategoryDimensions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the category dimension
 *     responses:
 *       200:
 *         description: Category dimension deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category dimension deleted successfully.
 *       404:
 *         description: Category dimension not found
 *       500:
 *         description: Server error
 */
