const mongoose = require('mongoose');
const schema = mongoose.schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: 146,
        minlength: 1,
        required: [true, "Le contenue ne peut-être vide"]
    }
}, {
    timestamps: true
})


const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;