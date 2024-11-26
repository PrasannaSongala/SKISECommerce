import express from 'express';
import sequelize from './config/database'; 
import { setupSwagger } from './config/swagger'; 
import brandlistRoutes from './routes/brandlistRoutes'; 
import categoryDimensionRoutes from './routes/categoryDimensionRoutes'; 
import categoryTypesRoutes from './routes/categoryTypesRoutes'; 
import contactusRoutes from './routes/contactusRoutes';
import locationsRoutes from './routes/locationsRoutes'; 
import productRoutes from './routes/productRoutes'; 
import productDimensionRoutes from './routes/productDimensionRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import inventoryListRoutes from './routes/inventoryListRoutes'; 
import inventoryTransactionRoutes from './routes/inventoryTransactionRoutes';
import sellerRoutes from './routes/sellerRoutes';

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Use brandlist routes for managing brand lists
app.use('/api/brandlist', brandlistRoutes);


// Routes for category types and category dimensions
app.use('/api/category-dimensions', categoryDimensionRoutes);
app.use('/api/categorytypes', categoryTypesRoutes);

// Routes
app.use('/api/contact-us', contactusRoutes);

// Routes
app.use('/api/locations', locationsRoutes); // Register locations routes

// product routes
app.use('/api/products', productRoutes);


// Use product dimension routes
app.use('/productdimensions', productDimensionRoutes);


// Inventory Routes
app.use('/api/inventory', inventoryRoutes);


// Define routes
app.use('/inventorylist', inventoryListRoutes); // Use your inventory list routes

// API Routes
app.use('/api/inventory-transactions', inventoryTransactionRoutes);

// Seller Routes
app.use('/api/sellers', sellerRoutes);



// Setup Swagger API documentation
setupSwagger(app); 

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
