const { createTweet, deleteTweet, displayTweet, updateTweet } = require('../controllers/tweet.controller')
const router = require('express').Router();


router.post('/new', createTweet)
router.get('/delete/:tweetId', deleteTweet)
router.get('/edit/:tweetId', displayTweet)
router.post('/edit/:tweetId', updateTweet)

module.exports = router;