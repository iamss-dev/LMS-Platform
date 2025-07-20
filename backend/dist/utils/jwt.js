import jwt from 'jsonwebtoken';
export const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
};
export const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_SECRET, { expiresIn: '7d' });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
