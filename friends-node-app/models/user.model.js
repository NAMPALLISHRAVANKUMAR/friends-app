const db = require('../db');

async function getByEmail(emailId) {
    const sql = `SELECT * FROM user WHERE email ='${emailId}'`;
    try {
        const [rows] = await db.query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function register({ id, emailId, password }) {
    const sql = `INSERT INTO user(id, email, password) VALUES ('${id}','${emailId}','${password}')`;
    try {
        const [rows, fields] = await db.query(sql);
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    register,
    getByEmail
};
