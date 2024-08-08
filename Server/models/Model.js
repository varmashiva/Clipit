const mongoose = require('mongoose');

const model = new mongoose.Schema({
  video: { type: String },
});

const Video = mongoose.model('Video', model);
module.exports = { Video };
