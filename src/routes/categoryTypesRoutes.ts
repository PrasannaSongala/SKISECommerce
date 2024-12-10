import { Router } from 'express'; 
import asyncHandler from 'express-async-handler'; 
import { 
  getAllCategoryTypes, 
  getCategoryTypeById, 
  createCategoryType, 
  updateCategoryType, 
  deleteCategoryType, 
} from '../controllers/categoryTypesController'; 

const router = Router(); 

/** 
 * @swagger 
 * tags: 
 *   name: CategoryTypes 
 *   description: API for managing category types 
 */ 

/** 
 * @swagger 
 * /category-types: 
 *   get: 
 *     summary: Get all category types 
 *     tags: [CategoryTypes] 
 *     responses: 
 *       200: 
 *         description: A list of category types 
 *         content: 
 *           application/json: 
 *             schema: 
 *               type: array 
 *               items: 
 *                 type: object 
 *                 properties: 
 *                   id: 
 *                     type: integer 
 *                   type: 
 *                     type: string 
 *                   name: 
 *                     type: string 
 *                   displayRate: 
 *                     type: integer 
 *                   primaryDimension: 
 *                     type: string 
 *                   imageUrl: 
 *                     type: string 
 *                   isDisabled: 
 *                     type: boolean 
 *       500: 
 *         description: Internal server error 
 */ 
router.get('/', asyncHandler(getAllCategoryTypes)); 

/** 
 * @swagger 
 * /category-types/{id}: 
 *   get: 
 *     summary: Get a category type by ID 
 *     tags: [CategoryTypes] 
 *     parameters: 
 *       - name: id 
 *         in: path 
 *         required: true 
 *         description: The ID of the category type 
 *         schema: 
 *           type: integer 
 *     responses: 
 *       200: 
 *         description: The requested category type 
 *         content: 
 *           application/json: 
 *             schema: 
 *               type: object 
 *               properties: 
 *                 id: 
 *                   type: integer 
 *                 type: 
 *                   type: string 
 *                 name: 
 *                   type: string 
 *                 displayRate: 
 *                   type: integer 
 *                 primaryDimension: 
 *                   type: string 
 *                 imageUrl: 
 *                   type: string 
 *                 isDisabled: 
 *                   type: boolean 
 *       404: 
 *         description: Category type not found 
 *       500: 
 *         description: Internal server error 
 */ 
router.get('/:id', asyncHandler(getCategoryTypeById)); 

/** 
 * @swagger 
 * /category-types: 
 *   post: 
 *     summary: Create a new category type 
 *     tags: [CategoryTypes] 
 *     requestBody: 
 *       required: true 
 *       content: 
 *         application/json: 
 *           schema: 
 *             type: object 
 *             required: 
 *               - type 
 *               - name 
 *               - displayRate 
 *               - primaryDimension 
 *               - imageUrl 
 *             properties: 
 *               type: 
 *                 type: string 
 *               name: 
 *                 type: string 
 *               displayRate: 
 *                 type: integer 
 *               primaryDimension: 
 *                 type: string 
 *               imageUrl: 
 *                 type: string 
 *     responses: 
 *       201: 
 *         description: Category type created successfully 
 *         content: 
 *           application/json: 
 *             schema: 
 *               type: object 
 *               properties: 
 *                 id: 
 *                   type: integer 
 *                 type: 
 *                   type: string 
 *                 name: 
 *                   type: string 
 *                 displayRate: 
 *                   type: integer 
 *                 primaryDimension: 
 *                   type: string 
 *                 imageUrl: 
 *                   type: string 
 *                 isDisabled: 
 *                   type: boolean 
 *       500: 
 *         description: Internal server error 
 */ 
router.post('/', asyncHandler(createCategoryType)); 

/** 
 * @swagger 
 * /category-types/{id}: 
 *   put: 
 *     summary: Update an existing category type by ID 
 *     tags: [CategoryTypes] 
 *     parameters: 
 *       - name: id 
 *         in: path 
 *         required: true 
 *         description: The ID of the category type 
 *         schema: 
 *           type: integer 
 *     requestBody: 
 *       required: true 
 *       content: 
 *         application/json: 
 *           schema: 
 *             type: object 
 *             properties: 
 *               type: 
 *                 type: string 
 *               name: 
 *                 type: string 
 *               displayRate: 
 *                 type: integer 
 *               primaryDimension: 
 *                 type: string 
 *               imageUrl: 
 *                 type: string 
 *     responses: 
 *       200: 
 *         description: Category type updated successfully 
 *         content: 
 *           application/json: 
 *             schema: 
 *               type: object 
 *               properties: 
 *                 id: 
 *                   type: integer 
 *                 type: 
 *                   type: string 
 *                 name: 
 *                   type: string 
 *                 displayRate: 
 *                   type: integer 
 *                 primaryDimension: 
 *                   type: string 
 *                 imageUrl: 
 *                   type: string 
 *                 isDisabled: 
 *                   type: boolean 
 *       404: 
 *         description: Category type not found 
 *       500: 
 *         description: Internal server error 
 */ 
router.put('/:id', asyncHandler(updateCategoryType)); 

/** 
 * @swagger 
 * /category-types/{id}: 
 *   delete: 
 *     summary: Soft delete (disable) a category type by ID 
 *     tags: [CategoryTypes] 
 *     parameters: 
 *       - name: id 
 *         in: path 
 *         required: true 
 *         description: The ID of the category type 
 *         schema: 
 *           type: integer 
 *     responses: 
 *       200: 
 *         description: Category type disabled successfully 
 *       404: 
 *         description: Category type not found 
 *       500: 
 *         description: Internal server error 
 */ 
router.delete('/:id', asyncHandler(deleteCategoryType));

export default router;
