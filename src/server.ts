import express from 'express';
import sequelize from './config/database';
import brandlistRoutes from './routes/brandlistRoutes';
import { setupSwagger } from './config/swagger'; // Import setupSwagger

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Use brandlist routes
app.use('/api/brandlist', brandlistRoutes);


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


app.get("/", (req, res) => {
  res.send("Hello World");
});


// Sync models
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
