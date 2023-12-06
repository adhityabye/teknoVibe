const mongoose = require("mongoose");

const imageModel = mongoose.model('image', {
    data: Buffer,
    contentType: String,
});

module.exports = imageModel;