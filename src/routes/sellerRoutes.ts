import express from 'express'; 
import { createSeller, getAllSellers, getSellerById, disableSeller, updateSeller } from '../controllers/sellerController';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const router = express.Router();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Seller API',
    version: '1.0.0',
    description: 'API documentation for Seller management',
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
    },
  ],
};

// Options for Swagger JSDoc
const options = {
  swaggerDefinition,
  apis: ['./src/routes/sellerRoutes.ts'], // Path to the API docs
};

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJSDoc(options);

// Serve Swagger UI
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define Routes with Swagger Annotations

/**
 * @swagger
 * /api/sellers/create:
 *   post:
 *     summary: Create a new seller
 *     tags: [Seller]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               companyName:
 *                 type: string
 *               gstin:
 *                 type: string
 *               mobileNumber:
 *                 type: string
 *               emailId:
 *                 type: string
 *               line1:
 *                 type: string
 *               line2:
 *                 type: string
 *               pincode:
 *                 type: integer
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               alternateMobile:
 *                 type: string
 *             required:
 *               - name
 *               - companyName
 *               - gstin
 *               - mobileNumber
 *               - emailId
 *               - line1
 *               - pincode
 *               - city
 *               - state
 *     responses:
 *       201:
 *         description: Seller created successfully
 *       400:
 *         description: Mobile number or email already exists
 *       500:
 *         description: Internal server error
 */
router.post('/create', async (req, res) => {
  try {
    await createSeller(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
});

/**
 * @swagger
 * /api/sellers:
 *   get:
 *     summary: Get all active sellers
 *     tags: [Seller]
 *     responses:
 *       200:
 *         description: List of sellers
 *       500:
 *         description: Internal server error
 */
router.get('/', async (req, res) => {
  try {
    await getAllSellers(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
});

/**
 * @swagger
 * /api/sellers/{id}:
 *   get:
 *     summary: Get seller by ID
 *     tags: [Seller]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Seller ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seller details
 *       404:
 *         description: Seller not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', async (req, res) => {
  try {
    await getSellerById(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
});

/**
 * @swagger
 * /api/sellers/disable/{id}:
 *   delete:
 *     summary: Disable a seller by ID
 *     tags: [Seller]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Seller ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Seller disabled successfully
 *       404:
 *         description: Seller not found
 *       500:
 *         description: Internal server error
 */
router.delete('/disable/:id', async (req, res) => {
  try {
    await disableSeller(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
});

export default router;

/**
 * @swagger
 * /api/sellers/update/{id}:
 *   put:
 *     summary: Update seller details by ID
 *     tags: [Seller]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Seller ID
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
 *               companyName:
 *                 type: string
 *               gstin:
 *                 type: string
 *               mobileNumber:
 *                 type: string
 *               emailId:
 *                 type: string
 *               line1:
 *                 type: string
 *               line2:
 *                 type: string
 *               pincode:
 *                 type: integer
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               alternateMobile:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seller updated successfully
 *       404:
 *         description: Seller not found
 *       500:
 *         description: Internal server error
 */
router.put('/update/:id', async (req, res) => {
  try {
    await updateSeller(req, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
});
