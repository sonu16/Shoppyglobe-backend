import mongoose from "mongoose";
import Cart from "../models/cart.model.js";

// Add a product to the cart
export const addToCart = async (req, res) => {
    try {
        const cartItems = req.body;
        if (cartItems) {
            const cartItem = new Cart(cartItems);
            await cartItem.save();
            res.status(201).json({ message: "cartItem added successfully!" })
        } else {
            res.status(404).json({ message: "Cart item is empty!" })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error: error.message })
    }
};

// Update the quantity of a product in the cart
export const updateCartItem = async (req, res ) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid cart item ID." });
        }

        if (typeof quantity !== "number" || quantity < 1) {
            return res.status(400).json({ message: "Quantity must be a positive number." });
        }

        const cartItem = await Cart.findByIdAndUpdate(
            id,
            { $set: { quantity } },
            { new: true, runValidators: true }
        );

        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found." });
        }

        res.status(200).json({
            status: "success",
            message: "Cart item updated successfully!",
            data: cartItem
        });
    } catch (error) {
        return res.status(500).json({ message: "Server's internal error" });
    }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const cartItem = await Cart.findOneAndDelete({ productId: productId });
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.status(200).json({ message: 'Cart item removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing cart item', error: error.message });
    }
};

// Get all items in the cart
export const getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find({});
        if (!cartItems) {
            return res.status(404).json({ message: "CartItems don't exist" })
        } else {
            return res.status(200).send(cartItems);
        }
    } catch (err) {
        return res.status(500).json({ message: "Server's internal error" })
    }
};

