const mongoose = require('mongoose')
const postschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    whenCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postschema)