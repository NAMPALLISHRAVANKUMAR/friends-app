const Users = require('../models/user.model');

async function getByEmail(emailId) {
    try {
        return await Users.getByEmail(emailId);
    } catch (error) {
        throw error;
    }
}

async function register(body) {
    const { id, emailId, password } = body;
    try {
        return await Users.register({ id, emailId, password });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    register,
    getByEmail,
}
