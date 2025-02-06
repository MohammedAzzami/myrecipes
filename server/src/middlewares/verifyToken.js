import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secretKey, (err) => {
            if (err) {
               return res.status(403).json({message: "Token is not valid"});
            }
            next();
        });
    } else {
        res.status(401).json({message: "No token provided"});
    }
};