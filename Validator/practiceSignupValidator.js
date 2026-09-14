let Joi = require("joi");

let signUpSchema = Joi.object({

    userName: Joi.string().required(),
    password: Joi.string().required(),
    password: Joi.string()
    .min(8)
    .max(64)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
    .required()

})

module.exports = signUpSchema;