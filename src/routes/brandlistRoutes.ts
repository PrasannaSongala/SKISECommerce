// src/routes/brandlistRoutes.ts
import { Router } from 'express';
import { 
  getAllBrandlists, 
  getBrandlistById, 
  createBrandlist, 
  updateBrandlist, 
  deleteBrandlist 
} from '../controllers/brandlistController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Brandlist
 *   description: Brandlist management
 */

/**
 * @swagger
 * /api/brandlist:
 *   get:
 *     summary: Get all brandlists
 *     tags: [Brandlist]
 *     responses:
 *       200:
 *         description: Successfully fetched all brandlists
 */
router.get('/', getAllBrandlists);

/**
 * @swagger
 * /api/brandlist/{id}:
 *   get:
 *     summary: Get a brandlist by ID
 *     tags: [Brandlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The brandlist ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched the brandlist
 *       404:
 *         description: Brandlist not found
 */
router.get('/:id', getBrandlistById);

/**
 * @swagger
 * /api/brandlist:
 *   post:
 *     summary: Create a new brandlist
 *     tags: [Brandlist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created brandlist
 */
router.post('/', createBrandlist);

/**
 * @swagger
 * /api/brandlist/{id}:
 *   put:
 *     summary: Update a brandlist by ID
 *     tags: [Brandlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The brandlist ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the brandlist
 */
router.put('/:id', updateBrandlist);

/**
 * @swagger
 * /api/brandlist/{id}:
 *   delete:
 *     summary: Delete a brandlist by ID
 *     tags: [Brandlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The brandlist ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the brandlist
 */
router.delete('/:id', deleteBrandlist);

export default router;
