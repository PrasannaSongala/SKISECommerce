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
import userRoutes from './routes/userRoutes';
import userAddressRoutes from './routes/userAddressRoutes';
import userDetailRoutes from './routes/userDetailRoutes';
import userLoginRoutes from './routes/userLoginRoutes'; 
import userRegistrationRoutes from './routes/userRegistrationRoutes';
import userSessionRoutes from './routes/userSessionRoutes'; 
import orderListRouter from './routes/orderListrouter';
import orderItemRouter from './routes/orderitemRoutes';
import orderDispatchDetailRoutes from './routes/orderDispatchDetailRoutes'; 
import orderDeliveryDetailRoutes from './routes/orderDeliveryDetailRoutes';
import orderDispatchItemRoutes from './routes/OrderDispatchItemRoutes';
import OrderInvoiceDetailRoutes from './routes/OrderInvoiceDetailRoutes';
import orderInventoryDetailRoutes from './routes/orderInventoryDetailRoutes';  
import orderRequestForCancellationListRoutes from './routes/orderRequestForCancellationListRoutes';
import cartRouter from './routes/cartRoutes';  
import paymentTransactionRoutes from './routes/paymentTransactionRoutes';
import razorpayOrderRoutes from './routes/razorpayorderRoutes';
import settingRoutes from './routes/settingRoutes';

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api/brandlist', brandlistRoutes);
app.use('/api/category-dimensions', categoryDimensionRoutes);
app.use('/api/categorytypes', categoryTypesRoutes);
app.use('/api/contact-us', contactusRoutes);
app.use('/api/locations', locationsRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/productdimensions', productDimensionRoutes);  
app.use('/api/inventory', inventoryRoutes);
app.use('/api/inventorylist', inventoryListRoutes); 
app.use('/api/inventory-transactions', inventoryTransactionRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/user', userRoutes);  //http://localhost:5000/api/user/users
app.use('/api/useraddress', userAddressRoutes); //http://localhost:5000/api/useraddress/address
app.use('/api/userdetail', userDetailRoutes);
app.use('/api/userlogin', userLoginRoutes);
app.use('/api/user-registrations', userRegistrationRoutes);
app.use('/api/user-session', userSessionRoutes);
app.use('/api/orders', orderListRouter);
app.use('/api/orderitems', orderItemRouter);  
app.use('/api/orderdispatchdetails', orderDispatchDetailRoutes);  
app.use('/api/orderdeliverydetails', orderDeliveryDetailRoutes);
app.use('/api/orderdispatchitems', orderDispatchItemRoutes);
app.use('/api/orderinvoicedetail', OrderInvoiceDetailRoutes);
app.use('/api/orderinventorydetails', orderInventoryDetailRoutes);
app.use('/api/orderrequestforcancellation', orderRequestForCancellationListRoutes);
app.use(cartRouter);  //  cart routes
app.use('/api/paymenttransactions', paymentTransactionRoutes);
app.use('/api/razorpayorders', razorpayOrderRoutes); 
app.use('/api/settings', settingRoutes);


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
