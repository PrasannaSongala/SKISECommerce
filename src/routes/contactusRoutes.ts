//src/routes/contactusRoutes.ts

import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getAllContactUsEntries,
  getContactUsById,
  createContactUsEntry,
  updateContactUsEntry,
  deleteContactUsEntry,
} from '../controllers/contactusController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: ContactUs
 *   description: API for managing Contact Us entries
 */

/**
 * @swagger
 * /contact-us:
 *   get:
 *     summary: Get all contact us entries
 *     tags: [ContactUs]
 *     responses:
 *       200:
 *         description: List of all contact us entries
 */
router.get('/', asyncHandler(getAllContactUsEntries));

/**
 * @swagger
 * /contact-us/{id}:
 *   get:
 *     summary: Get a contact us entry by ID
 *     tags: [ContactUs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the contact us entry
 *     responses:
 *       200:
 *         description: A contact us entry
 *       404:
 *         description: Entry not found
 */
router.get('/:id', asyncHandler(getContactUsById));

/**
 * @swagger
 * /contact-us:
 *   post:
 *     summary: Create a new contact us entry
 *     tags: [ContactUs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, message]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', asyncHandler(createContactUsEntry));

/**
 * @swagger
 * /contact-us/{id}:
 *   put:
 *     summary: Update a contact us entry
 *     tags: [ContactUs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the contact us entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *               status:
 *                 type: string
 *               note:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', asyncHandler(updateContactUsEntry));

/**
 * @swagger
 * /contact-us/{id}:
 *   delete:
 *     summary: Delete a contact us entry
 *     tags: [ContactUs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the contact us entry
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete('/:id', asyncHandler(deleteContactUsEntry));

export default router;
