import express from 'express';
import { addToCart, updateCartItem, removeFromCart, getCartItems } from '../controllers/cart.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const cartRoutes = (app) => {
    // API to fetch items in the cart
    app.get('/cart', authMiddleware, getCartItems);
    // API to add item in the cart
    app.post('/cart', authMiddleware, addToCart);
    // API to update cart item quantity
    app.put('/cart/:id', authMiddleware, updateCartItem);
    // API to delete item from the cart
    app.delete('/cart/:productId', authMiddleware, removeFromCart);
}

export default cartRoutes;

