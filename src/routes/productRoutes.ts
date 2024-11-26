import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: API to manage products in the catalog
 */

/**
 * @swagger
 * /product/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *                 example: "Product Name"
 *               imageLink:
 *                 type: string
 *                 description: The image link of the product
 *                 example: "http://example.com/product.jpg"
 *               description:
 *                 type: string
 *                 description: A description of the product
 *                 example: "This is a sample product."
 *               primaryRate:
 *                 type: integer
 *                 description: The rate of the product
 *                 example: 1000
 *               cgstPercent:
 *                 type: number
 *                 description: The CGST percentage of the product
 *                 example: 9
 *               igstPercent:
 *                 type: number
 *                 description: The IGST percentage of the product
 *                 example: 9
 *               sgstPercent:
 *                 type: number
 *                 description: The SGST percentage of the product
 *                 example: 9
 *               conversionRatio:
 *                 type: number
 *                 description: Conversion ratio of the product
 *                 example: 1.5
 *               hsnCode:
 *                 type: string
 *                 description: The HSN code of the product
 *                 example: "12345"
 *     responses:
 *       201:
 *         description: Product created successfully
 *       500:
 *         description: Error occurred while creating the product
 */

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The product ID
 *                   name:
 *                     type: string
 *                     description: The name of the product
 *                   imageLink:
 *                     type: string
 *                     description: The image link of the product
 *                   description:
 *                     type: string
 *                     description: The description of the product
 *                   primaryRate:
 *                     type: integer
 *                     description: The rate of the product
 *       500:
 *         description: Error fetching products
 */

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Product found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 imageLink:
 *                   type: string
 *                 description:
 *                   type: string
 *                 primaryRate:
 *                   type: integer
 *       404:
 *         description: Product not found
 *       500:
 *         description: Error fetching product
 */

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID to be updated
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               imageLink:
 *                 type: string
 *               description:
 *                 type: string
 *               primaryRate:
 *                 type: integer
 *               cgstPercent:
 *                 type: number
 *               igstPercent:
 *                 type: number
 *               sgstPercent:
 *                 type: number
 *               conversionRatio:
 *                 type: number
 *               hsnCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Error updating product
 */

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID to be deleted
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Error deleting product
 */

router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
