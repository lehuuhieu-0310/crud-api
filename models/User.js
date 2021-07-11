
const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: String
})

module.exports = mongoose.model('user', User)