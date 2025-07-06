import express from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

// API endpoints to perform CRUD operation on Product 
const productRoutes = (app) => {
    app.get('/products', getAllProducts);
    app.get('/products/:id', getProductById);
    app.post('/product', createProduct);
    app.put('/product/:id', updateProduct);
    app.delete('/product/:id', deleteProduct);
}
export default productRoutes;