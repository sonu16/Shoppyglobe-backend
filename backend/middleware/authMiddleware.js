import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied.' });
        }
            const user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
            next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid.' });
    }
};