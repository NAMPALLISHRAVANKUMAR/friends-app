const router= require('express').Router();
const friend=require('../contollers/friendsdata.controller')
const authorization=require('../middleware/authorize')

router.get('/getFriends',authorization,friend.getFriends)

module.exports=router