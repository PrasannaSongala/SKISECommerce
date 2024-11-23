import express from 'express';
import sequelize from './config/database'; // Ensure sequelize is correctly initialized
import { setupSwagger } from './config/swagger'; // Swagger setup
import brandlistRoutes from './routes/brandlistRoutes'; // Ensure the path is correct
import categoryDimensionRoutes from './routes/categoryDimensionRoutes'; // Check if the path is correct
import categoryTypesRoutes from './routes/categoryTypesRoutes'; 

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Use brandlist routes for managing brand lists
app.use('/api/brandlist', brandlistRoutes);


// Routes for category types and category dimensions
app.use('/api/category-dimensions', categoryDimensionRoutes);
app.use('/api/categorytypes', categoryTypesRoutes);



// Setup Swagger API documentation
setupSwagger(app); // Initialize Swagger

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established.');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Sync models and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
