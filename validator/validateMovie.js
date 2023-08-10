const Joi = require('joi');

function validateMovie(movie) {
    const schema = Joi.object( {
        title: Joi.string().min(3).required(),
        year: Joi.number().min(1900).required()
    });

    return schema.validate(movie);
}

module.exports = validateMovie;