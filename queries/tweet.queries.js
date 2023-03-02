const Tweet = require("../database/models/Tweet.model")

exports.createNewTweet = (body) => {
    const newTweet = new Tweet(body)
    return newTweet.save();
}

exports.findAllTweets = () => {
    return Tweet.find({}).populate('author').exec()
}

exports.getCurrentUserTweetsFollowing = (user) => {
    return Tweet.find({ author: { $in: [...user.followings, user._id]}}).populate.exec();
}

exports.findTweetsFromUsername = (authorId) => {
    return Tweet.find({ author: authorId }).populate('author').exec()
}

exports.findTweetAndDelete = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.findTweetById = (tweetId) => {
    return Tweet.findById(tweetId).exec()
}

exports.findTweetAndUpdate = (tweetId, body) => {
    return Tweet.findByIdAndUpdate(tweetId, {$set: body}).exec()
}