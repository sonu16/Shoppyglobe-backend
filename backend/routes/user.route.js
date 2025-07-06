import express from 'express';
import { register, login } from '../controllers/user.controller.js';

const userRoutes = (app) => {
    // API to register a user
    app.post('/register', register);
    // API for user login
    app.post('/login', login);
}

export default userRoutes;