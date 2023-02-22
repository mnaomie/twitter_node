const { createTweet } = require('../controllers/tweet.controller')
const router = require('express').Router();


router.post('/new', createTweet)

module.exports = router;