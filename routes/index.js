const router = require('express').Router();
const tweet = require('./tweet.routes');
const { tweetlist } = require('../controllers/tweet.controller');

router.use('/tweet', tweet);

router.get('/', tweetlist)

module.exports = router;