const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
    return jwt.sign(
        { username },
        process.env.TOKEN_SECRET || "pass9515",
        { expiresIn: '1d' });
}

function authAccessToken(token) {
    return jwt.verify(token, process.env.TOKEN_SECRET || "pass9515")
}
module.exports = { generateAccessToken, authAccessToken };
