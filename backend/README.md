# ShoppyGlobe Backend API

## Overview
ShoppyGlobe Backend is a Node.js and Express application that serves as the backend for the ShoppyGlobe e-commerce platform. It provides RESTful APIs for managing products, user authentication, and shopping cart functionalities.

## Features
- **Product Management**: Fetch, create, update, and delete products.
- **User Authentication**: Register new users and authenticate existing users using JWT.
- **Shopping Cart Management**: Add, update, and remove items from the shopping cart.
- **Error Handling**: Comprehensive error handling for all API routes.

## Project Structure
```
backend
    │   .env
    │   .gitignore
    │   api_test_results1.docx
    │   database_screenshot.docx
    │   package.json
    │   README.md
    │   server.js
    │
    ├───controllers
    │       cart.controller.js
    │       product.controller.js
    │       user.controller.js
    │
    ├───middleware
    │       authMiddleware.js
    │
    ├───models
    │       cart.model.js
    │       product.model.js
    │       user.model.js
    │
    └───routes
            cart.route.js
            product.route.js
            user.route.js
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/sonu16/Shoppyglobe-backend.git
   ```
2. Navigate to the project directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

## Running the Application
To start the application, run:
```
npm start
```
This will launch the server on the specified port (default is 3300).

## API Endpoints
### Authentication
- **POST /register**: Register a new user.
- **POST /login**: Authenticate user and return a JWT token.

### Products
- **GET /products**: Fetch a list of products.
- **GET /products/:id**: Fetch details of a single product by its ID.

### Cart
- **POST /cart**: Add a product to the shopping cart.
- **PUT /cart/:id**: Update the quantity of a product in the cart.
- **DELETE /cart/:productId**: Remove a product from the cart.

