const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    photoPath: String

}, {
    timestamps: true
});

const Director = mongoose.model('Director', directorSchema, 'directors');

module.exports = Director;