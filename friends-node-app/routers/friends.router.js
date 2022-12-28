const router= require('express').Router();
const friend=require('../contollers/friendsdata.controller')
const authenticate=require('../middleware/authenticate')
router.get('/getFriends',authenticate,friend.getFriends)

module.exports=router
