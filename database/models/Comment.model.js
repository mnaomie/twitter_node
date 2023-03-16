const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    message : {type: String, required: [true, "Le commentaire ne peut être vide"]},
    author : {type: schema.Types.ObjectId, ref: 'user', required: true}
}, {
    timestamp: true
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;