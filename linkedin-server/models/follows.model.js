const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    following: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

const Follow = mongoose.model('Follow', followSchema);

module.exports = Follow;