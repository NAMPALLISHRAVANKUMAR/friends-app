const router = require('express').Router();

const user = require('../contollers/user.controller');

router.post('/login', user.login);
router.post('/register', user.register);

module.exports = router;
