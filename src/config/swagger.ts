// src/config/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Basic configuration for swagger-jsdoc
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
};

// Options for swagger-jsdoc
const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes/brandlistRoutes.ts', 
         './src/controllers/brandlistController.ts',
        './src/routes/categoryDimensionRoutes.ts',
      './src/controllers/categoryDimensionController.ts',
    './src/routes/categoryTypesRoutes.ts',
  './src/controllers/categoryTypesController.ts'],
         
};

const swaggerSpec = swaggerJSDoc(options);

// Swagger UI setup function
const setupSwagger = (app: Express) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger UI endpoint
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export { setupSwagger };
