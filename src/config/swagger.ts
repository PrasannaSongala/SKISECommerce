// src/config/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Basic configuration for swagger-jsdoc
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'SKISECommerce API', // Name of your API
    version: '1.0.0',
    description: 'API Documentation for the Brandlist project using Express, TypeScript, and MySQL',
    contact: {
      name: 'Prasanna',
      email: 'songalaprasanna@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000', // Local server URL (adjust to match your port)
      description: 'Local development server',
    },
  ],
};

// Options for swagger-jsdoc
const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes/brandlistRoutes.ts', './src/controllers/brandlistController.ts'], // Paths to your API route and controller files
};

// Generate the swagger specification
const swaggerSpec = swaggerJSDoc(options);

// Swagger UI setup function
const setupSwagger = (app: Express) => {
  // Serve Swagger UI at /docs
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Swagger JSON route
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export { setupSwagger };
