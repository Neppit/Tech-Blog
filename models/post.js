// User.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);