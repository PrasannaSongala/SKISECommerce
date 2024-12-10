//src/routes/locationsRoutes.ts

import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} from '../controllers/locationsController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Locations
 *   description: API for managing locations
 */

/**
 * @swagger
 * /locations:
 *   get:
 *     summary: Get all locations
 *     tags: [Locations]
 *     responses:
 *       200:
 *         description: List of all locations
 *       500:
 *         description: Internal server error
 */
router.get('/', asyncHandler(getAllLocations));

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     summary: Get a location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the location
 *     responses:
 *       200:
 *         description: Location details
 *       404:
 *         description: Location not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', asyncHandler(getLocationById));

/**
 * @swagger
 * /locations:
 *   post:
 *     summary: Create a new location
 *     tags: [Locations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       201:
 *         description: Location created
 *       500:
 *         description: Internal server error
 */
router.post('/', asyncHandler(createLocation));

/**
 * @swagger
 * /locations/{id}:
 *   put:
 *     summary: Update a location
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the location
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       200:
 *         description: Location updated
 *       404:
 *         description: Location not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', asyncHandler(updateLocation));

/**
 * @swagger
 * /locations/{id}:
 *   delete:
 *     summary: Delete a location
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the location
 *     responses:
 *       200:
 *         description: Location deleted
 *       404:
 *         description: Location not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', asyncHandler(deleteLocation));

export default router;
