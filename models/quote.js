const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    status: { type: Boolean, required: true},
});

module.exports = mongoose.model('Quote', quoteSchema);