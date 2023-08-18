const Joi = require('joi');
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

function validateMovie(movie) {
    const schema = Joi.object( {
        title: Joi.string().min(3).required(),
        yearReleased: Joi.number().min(1900).required(),
        director: Joi.string().regex(mongodbIdPattern).required()
    });

    return schema.validate(movie);
}

module.exports = validateMovie;