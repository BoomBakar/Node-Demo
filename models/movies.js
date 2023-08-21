const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    yearReleased: {
        type: Number,
        required: true
    },
    director: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Director',
        required: true
    },
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');

module.exports = Movie;