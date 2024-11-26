// src/config/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'SKISECommerce API',
    version: '1.0.0',
    description: 'API Documentation for the SKISECommerce project using Express, TypeScript, and MySQL',
    contact: {
      name: 'Prasanna',
      email: 'songalaprasanna@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000', // Update if your server is running on a different port
      description: 'Local development server',
    },
  ],
  components: {
    schemas: {
      Location: {
        type: 'object',
        required: ['name', 'address', 'city', 'state', 'pincode', 'latitude', 'longitude', 'isDefault'],
        properties: {
          id: {
            type: 'integer',
            description: 'Auto-generated ID',
          },
          name: {
            type: 'string',
            maxLength: 45,
            description: 'Name of the location',
          },
          address: {
            type: 'string',
            maxLength: 150,
            description: 'Address of the location',
          },
          city: {
            type: 'string',
            maxLength: 45,
            description: 'City of the location',
          },
          state: {
            type: 'string',
            maxLength: 45,
            description: 'State of the location',
          },
          pincode: {
            type: 'integer',
            description: 'Pincode of the location',
          },
          latitude: {
            type: 'number',
            format: 'float',
            description: 'Latitude of the location',
          },
          longitude: {
            type: 'number',
            format: 'float',
            description: 'Longitude of the location',
          },
          isDefault: {
            type: 'boolean',
            description: 'Whether the location is the default one',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Timestamp when the location was created',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Timestamp when the location was last updated',
          },
        },
      },
    },
  },
};

// Options for swagger-jsdoc
const options = {
  definition: swaggerDefinition,
  apis: [
    './src/routes/brandlistRoutes.ts', 
    './src/controllers/brandlistController.ts',
    './src/routes/categoryDimensionRoutes.ts',
    './src/controllers/categoryDimensionController.ts',
    './src/routes/categoryTypesRoutes.ts',
    './src/controllers/categoryTypesController.ts',
    './src/routes/contactusRoutes.ts',
    './src/controllers/contactusController.ts',
    './src/routes/locationsRoutes.ts',
    './src/controllers/locationsController.ts',
    './src/routes/productRoutes.ts',
    './src/controllers/productController.ts',
    './src/routes/productDimensionRoutes.ts',
    './src/controllers/productDimensionController.ts',
    './src/routes/inventoryRoutes.ts',
    './src/controllers/inventoryController.ts',
    './src/routes/inventoryListRoutes.ts',
    './src/controllers/inventoryListController.ts',
    './src/routes/inventoryTransactionRoutes.ts',
    './src/controllers/inventoryTransactionController.ts',
    './src/routes/sellerRoutes.ts',
    './src/controllers/sellerController.ts'
  ],
};

const swaggerSpec = swaggerJSDoc(options);

// Swagger UI setup function
const setupSwagger = (app: Express) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export { setupSwagger };
