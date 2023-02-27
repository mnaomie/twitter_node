const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastename: {type: String, required: true},
    local: {
        email: {type: String, required: true},
        password: {type: String, required: true}
    }
}, {
    timestamp: true
})

const User = mongoose.model('user', userSchema);

module.exports = User; 