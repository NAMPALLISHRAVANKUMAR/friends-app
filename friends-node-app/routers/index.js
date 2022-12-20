const router = require('express').Router();

const user = require('./user.router');
const friend=require('./friends.router')
router.use('/', user);
router.use('/friend',friend)

module.exports = router;
