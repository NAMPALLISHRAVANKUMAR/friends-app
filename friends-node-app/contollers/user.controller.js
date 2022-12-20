const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const {generateAccessToken} = require('../utils/generateAccessToken');
const userService = require('../services/user.service');


async function register(req, res) {
    try {
        const { emailId, password } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);
        const response = await userService.register({ id: v4(), emailId, password: passwordHash });
        res.status(200);
        res.send({ message: 'Created', data: response });
    } catch (e) {
        res.status(400);
        res.send({ message: e.message || 'Failed', data: [] });
    }
}

async function login(req, res) {
    const { emailId, password } = req.body;
    const user = await userService.getByEmail(emailId);
console.log(user);
    if (Array.isArray(user) && user.length) {
        const userObj = user[0];
        const passwordHash = userObj.password;
        if (bcrypt.compareSync(password, passwordHash)) {
            res.status(200).send({
                message: 'Valid user',
                token: generateAccessToken(emailId)
            });
        } else {
            res.status(400).send({
                message: 'Invalid login',
            })
        }
    } else {
        res.status(400).send({
            message: 'Invalid login',
        })
    }
}

module.exports = {
    login,
    register,
}
