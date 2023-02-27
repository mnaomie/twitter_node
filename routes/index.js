const router = require('express').Router();
const tweetRoute = require('./tweet.routes');
const userRoute = require('./user.routes')
const { tweetlist } = require('../controllers/tweet.controller');
const { route } = require('./tweet.routes');

router.use('/tweet', tweetRoute);
router.use('/user', userRoute)

router.get('/', tweetlist)

module.exports = router;