const router = require('express').Router();
const tweetRoute = require('./tweet.routes');
const userRoute = require('./user.routes')
const { tweetlist } = require('../controllers/tweet.controller');
const { route } = require('./tweet.routes');
const commentRoute = require('./Comment.routes')
const authRoute = require('./auth.routes');
const { ensureAuthenticated } = require('../config/security.config');

router.use('/tweet', ensureAuthenticated, tweetRoute);
router.use('/user', userRoute)
router.use('/auth', authRoute)
router.use('/comment', ensureAuthenticated, commentRoute)

router.get('/', tweetlist)

module.exports = router;