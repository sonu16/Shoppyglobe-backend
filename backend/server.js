import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";
import cartRoutes from "./routes/cart.route.js";

const app = express();
const PORT = process.env.PORT || 3300;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        // Exit process with failure
        process.exit(1);
    }
};

// Call the function to connect to the database
connectDB();

// Define a simple root route
app.get('/', (req, res) => {
    res.send('Product API is running...');
});

// Use the product routes for API endpoints
productRoutes(app);
userRoutes(app);
cartRoutes(app);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Wildcard route to handle 404 Not Found errors
app.use((req, res) => {
  console.log(`404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Invalid Request' });
});