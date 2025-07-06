import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
        min: 0,
    },
    imageUrl: {
        type: String,
        default: 'no-image.jpg'
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;