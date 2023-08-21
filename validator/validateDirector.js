const Joi = require('joi');

const validateDirector = (director) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        photoPath: Joi.string()
    });
    return schema.validate(director);
};

module.exports = validateDirector;